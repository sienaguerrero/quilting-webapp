// Block definitions come from src/data/quilt-blocks.json, exported by the
// Python quilt-blocks project. test/quilt-blocks.test.mjs holds this file to its answers.
import { EIGHTH, Fraction, onRuler } from './ruler.js';

const F = (n, d = 1) => new Fraction(n, d);
const ONE = F(1);
const HALF = F(1, 2);

export const SEAM_ALLOWANCE = F(1, 4);
export const plainCut = (finished) => finished.add(SEAM_ALLOWANCE.mul(2));
export const hstCut = (finished) => finished.add(F(7, 8));
export const qstCut = (finished) => finished.add(F(5, 4));
export const flyingGeeseCuts = (width, height) => [qstCut(width), hstCut(height)];

export const PIECES_PER_CUT = { whole: 1, once: 2, twice: 4 };

const piece = (fabric, cut, width, height) => ({ fabric, cut, width, height });

function requireSquare(width, height, name) {
  if (!width.equals(height)) throw new RangeError(`a ${name} must be square, got ${width} x ${height}`);
}

const corners = {
  'top-left': ([x, y]) => [x, y],
  'top-right': ([x, y]) => [ONE.sub(x), y],
  'bottom-left': ([x, y]) => [x, ONE.sub(y)],
  'bottom-right': ([x, y]) => [ONE.sub(x), ONE.sub(y)],
};

const turns = {
  up: ([x, y]) => [x, y],
  down: ([x, y]) => [x, ONE.sub(y)],
  left: ([x, y]) => [y, x],
  right: ([x, y]) => [ONE.sub(y), x],
};

const points = (...pairs) => pairs.map(([x, y]) => [Fraction.from(x), Fraction.from(y)]);

const UNITS = {
  Plain: {
    pieces(unit, width, height) {
      const [short, long] = [plainCut(width), plainCut(height)].sort((a, b) => a.compare(b));
      return [piece(unit.fabric, 'whole', short, long)];
    },
    shapes(unit) {
      return [[unit.fabric, points([0, 0], [1, 0], [1, 1], [0, 1])]];
    },
  },

  HalfSquareTriangle: {
    pieces(unit, width, height) {
      requireSquare(width, height, 'half-square triangle');
      const size = hstCut(width);
      return [piece(unit.cornerFabric, 'once', size, size), piece(unit.otherFabric, 'once', size, size)];
    },
    shapes(unit) {
      const flip = corners[unit.corner];
      return [
        [unit.cornerFabric, points([0, 0], [1, 0], [0, 1]).map(flip)],
        [unit.otherFabric, points([1, 0], [1, 1], [0, 1]).map(flip)],
      ];
    },
  },

  QuarterSquareTriangle: {
    pieces(unit, width, height) {
      requireSquare(width, height, 'quarter-square triangle');
      const size = qstCut(width);
      return [unit.top, unit.right, unit.bottom, unit.left].map((fabric) => piece(fabric, 'twice', size, size));
    },
    shapes(unit) {
      const center = [HALF, HALF];
      return [
        [unit.top, [...points([0, 0], [1, 0]), center]],
        [unit.right, [...points([1, 0], [1, 1]), center]],
        [unit.bottom, [...points([1, 1], [0, 1]), center]],
        [unit.left, [...points([0, 1], [0, 0]), center]],
      ];
    },
  },

  FlyingGeese: {
    pieces(unit, width, height) {
      const [long, short] = ['up', 'down'].includes(unit.points) ? [width, height] : [height, width];
      if (!long.equals(short.mul(2))) {
        throw new RangeError(`flying geese must be twice as long as tall, got ${long} x ${short}`);
      }
      const [gooseSize, skySize] = flyingGeeseCuts(long, short);
      return [
        piece(unit.goose, 'twice', gooseSize, gooseSize),
        piece(unit.sky, 'once', skySize, skySize),
        piece(unit.sky, 'once', skySize, skySize),
      ];
    },
    shapes(unit) {
      const turn = turns[unit.points];
      return [
        [unit.goose, points([0, 1], [1, 1], [HALF, 0]).map(turn)],
        [unit.sky, points([0, 0], [HALF, 0], [0, 1]).map(turn)],
        [unit.sky, points([HALF, 0], [1, 0], [1, 1]).map(turn)],
      ];
    },
  },
};

const unitOf = (placement) => UNITS[placement.unit.type];

export function blockPieces(block, finished) {
  const cell = Fraction.from(finished).div(block.grid);
  return block.placements.flatMap((p) => unitOf(p).pieces(p.unit, cell.mul(p.cols), cell.mul(p.rows)));
}

export function cutList(block, finished) {
  const tally = new Map();
  for (const p of blockPieces(block, finished)) {
    const key = `${p.fabric}|${p.cut}|${p.width}|${p.height}`;
    const line = tally.get(key) ?? { ...p, needed: 0 };
    line.needed += 1;
    tally.set(key, line);
  }
  return [...tally.values()]
    .map((line) => {
      const perCut = PIECES_PER_CUT[line.cut];
      const count = Math.ceil(line.needed / perCut);
      return {
        ...line,
        count,
        spare: count * perCut - line.needed,
        onRuler: onRuler(line.width) && onRuler(line.height),
      };
    })
    .sort((a, b) => block.fabrics.indexOf(a.fabric) - block.fabrics.indexOf(b.fabric));
}

export function nearestRulerSizes(block, finished, reach = 64) {
  const target = Fraction.from(finished);
  const clean = (size) => size.compare(0) > 0 && cutList(block, size).every((line) => line.onRuler);
  const eighths = target.div(EIGHTH).floor();
  let below = null;
  let above = null;
  for (let k = 0; k < reach && !below; k += 1) {
    const size = F(eighths - k, 8);
    if (size.compare(target) < 0 && clean(size)) below = size;
  }
  for (let k = 1; k < reach && !above; k += 1) {
    const size = F(eighths + k, 8);
    if (clean(size)) above = size;
  }
  return [below, above];
}

export function blockShapes(block) {
  return block.placements.flatMap((p) =>
    unitOf(p).shapes(p.unit).map(([fabric, shape]) => ({
      fabric,
      points: shape.map(([x, y]) => [x.mul(p.cols).add(p.col), y.mul(p.rows).add(p.row)]),
    })),
  );
}

const NEUTRALS = { background: '#f3ead7', light: '#f3ead7' };
const PALETTE = ['#1f3b73', '#b8412c', '#d9a43b', '#3f7d5a', '#6b4c8a'];

export function defaultColors(fabrics) {
  let next = 0;
  return Object.fromEntries(
    fabrics.map((fabric) => [fabric, NEUTRALS[fabric] ?? PALETTE[next++ % PALETTE.length]]),
  );
}

const escapeXml = (text) =>
  String(text).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[c]);

const num = (f) => (f.d === 1 ? `${f.n}` : `${+(f.n / f.d).toPrecision(6)}`);

export function renderSvg(block, finished, colors = {}) {
  const fills = { ...defaultColors(block.fabrics), ...colors };
  const size = `${num(Fraction.from(finished))}in`;
  const polygons = blockShapes(block).map(({ fabric, points: pts }) => {
    const coords = pts.map(([x, y]) => `${num(x)},${num(y)}`).join(' ');
    return `    <polygon data-fabric="${escapeXml(fabric)}" fill="${escapeXml(fills[fabric])}" points="${coords}" vector-effect="non-scaling-stroke"/>`;
  });
  return [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${block.grid} ${block.grid}" role="img">`,
    `  <title>${escapeXml(block.name)}</title>`,
    '  <g stroke="#2b2b2b" stroke-width="1" stroke-linejoin="round">',
    ...polygons,
    '  </g>',
    '</svg>',
  ].join('\n');
}
