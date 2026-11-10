// Mirrors the catalog in files/quilt_block_cutters.scad. Change both together.
// Every size here needs a files/stl-<size>mm folder made by export.sh.
export const SIZES = [60, 75, 100];
export const DEFAULT_SIZE = 75;

const logRounds = 2;
const pathRadiusRatio = 2 / 3;
const dresdenBlades = 20;
const arcSteps = 48;

const O = [0, 0];
const rad = (deg) => (deg * Math.PI) / 180;
const cos = (deg) => Math.cos(rad(deg));
const sin = (deg) => Math.sin(rad(deg));

const arc = ([cx, cy], r, a0, a1) =>
  Array.from({ length: arcSteps }, (_, i) => {
    const a = a0 + ((a1 - a0) * i) / arcSteps;
    return [cx + r * cos(a), cy + r * sin(a)];
  });
const rect = (w, h) => [[0, 0], [w, 0], [w, h], [0, h]];
const rtri = (leg) => [[0, 0], [leg, 0], [0, leg]];
const iso = (base) => [[0, 0], [base, 0], [base / 2, base / 2]];
const rhombus = (s, a) => [[0, 0], [s, 0], [s + s * cos(a), s * sin(a)], [s * cos(a), s * sin(a)]];
const ngon = (n, s) => {
  const R = s / (2 * sin(180 / n));
  return Array.from({ length: n }, (_, i) => [R * cos(90 + (360 * i) / n), R * sin(90 + (360 * i) / n)]);
};
const clipped = (s, c) => [[c, 0], [s - c, 0], [s, c], [s, s - c], [s - c, s], [c, s], [0, s - c], [0, c]];
const pie = (r) => [O, ...arc(O, r, 0, 90), [0, r]];
const bite = (c, r) =>
  r < c
    ? [[c, 0], [c, c], [0, c], ...arc(O, r, 90, 0), [r, 0]]
    : [[c, c], ...arc(O, c, 90, 0), [c, 0]];
const lens = (c) => [...arc([c, 0], c, 180, 90), ...arc([0, c], c, 0, -90)];
const clamshell = (r) => [...arc(O, r, 0, 180), ...arc([-r, -r], r, 90, 0), ...arc([r, -r], r, 180, 90)];
const dresden = (n, rOut, rIn) => {
  const h = 180 / n;
  const rs = rOut / (cos(h) + sin(h));
  return [
    [rIn * cos(-h), rIn * sin(-h)],
    [rs * cos(-h), rs * sin(-h)],
    [rOut, 0],
    [rs * cos(h), rs * sin(h)],
    [rIn * cos(h), rIn * sin(h)],
  ];
};
const circle = (r) => arc(O, r, 0, 360);

const FAMILIES = [
  { name: 'Squares and bars', color: '#d9774b' },
  { name: 'Triangles', color: '#4a72b0' },
  { name: 'Log cabin', color: '#e2a93b' },
  { name: 'Curves', color: '#a35c7a' },
  { name: 'Hexagons and diamonds', color: '#5f9c8a' },
  { name: 'LeMoyne star', color: '#e58f7e' },
  { name: 'Dresden plate', color: '#8aa04f' },
];

const piece = (id, label, family, points) => ({ id, label, family, points });

export function piecesFor(block) {
  const half = block / 2;
  const third = block / 3;
  const quarter = block / 4;
  const hexSide = block / 4;
  const logW = block / (2 + 2 * logRounds);
  const logCenter = 2 * logW;
  const starD = block / (2 + Math.SQRT2);
  const pathR = half * pathRadiusRatio;
  const shellR = block / 4;
  const dresdenHub = block / 6;

  return [
    piece('square-half', 'Square, ½ block', 0, rect(half, half)),
    piece('square-third', 'Square, ⅓ block', 0, rect(third, third)),
    piece('square-quarter', 'Square, ¼ block', 0, rect(quarter, quarter)),
    piece('bar-third', 'Bar, ⅓ block', 0, rect(third, third / 2)),
    piece('rail-third', 'Rail', 0, rect(block, third)),
    piece('snowball', 'Snowball', 0, clipped(block, third)),

    piece('hst-half', 'Half-square triangle, ½', 1, rtri(half)),
    piece('hst-third', 'Half-square triangle, ⅓', 1, rtri(third)),
    piece('hst-quarter', 'Half-square triangle, ¼', 1, rtri(quarter)),
    piece('qst-third', 'Quarter-square triangle, ⅓', 1, iso(third)),
    piece('goose-full', 'Flying goose, full block', 1, iso(block)),
    piece('goose-half', 'Flying goose, ½ block', 1, iso(half)),

    ...Array.from({ length: 2 * logRounds + 1 }, (_, k) =>
      piece(`log${k}`, `Log ${k}`, 2, rect(logCenter + k * logW, logW))),

    piece('path-pie', "Drunkard's path pie", 3, pie(pathR)),
    piece('path-bite', "Drunkard's path bite", 3, bite(half, pathR)),
    piece('peel-lens', 'Orange peel lens', 3, lens(half)),
    piece('peel-corner', 'Orange peel corner', 3, bite(half, half)),
    piece('clamshell', 'Clamshell', 3, clamshell(shellR)),

    piece('hexagon', 'Hexagon', 4, ngon(6, hexSide)),
    piece('diamond-60', '60° diamond', 4, rhombus(hexSide, 60)),
    piece('triangle-60', 'Equilateral triangle', 4, ngon(3, hexSide)),

    piece('lemoyne-diamond', 'LeMoyne diamond', 5, rhombus(starD, 45)),
    piece('lemoyne-square', 'LeMoyne square', 5, rect(starD, starD)),
    piece('lemoyne-triangle', 'LeMoyne triangle', 5, rtri(starD)),

    piece('dresden-blade', 'Dresden blade', 6, dresden(dresdenBlades, half, dresdenHub)),
    piece('dresden-center', 'Dresden center', 6, circle(dresdenHub)),
  ].map((p) => ({ ...p, family: FAMILIES[p.family], size: sizeOf(p.points) }));
}

export const FAMILY_ORDER = FAMILIES.map((f) => f.name);

function sizeOf(points) {
  const xs = points.map((p) => p[0]);
  const ys = points.map((p) => p[1]);
  return {
    minX: Math.min(...xs),
    maxX: Math.max(...xs),
    minY: Math.min(...ys),
    maxY: Math.max(...ys),
    w: Math.max(...xs) - Math.min(...xs),
    h: Math.max(...ys) - Math.min(...ys),
  };
}

export function shapeSvg(p, { scale = 2, pad = 2.5, className = '' } = {}) {
  const { minX, maxY, w, h } = p.size;
  const vw = w + 2 * pad;
  const vh = h + 2 * pad;
  const d = `M${p.points
    .map(([x, y]) => `${(x - minX + pad).toFixed(2)} ${(maxY - y + pad).toFixed(2)}`)
    .join(' L')} Z`;
  return `<svg class="shape ${className}" viewBox="0 0 ${vw.toFixed(2)} ${vh.toFixed(2)}" width="${(vw * scale).toFixed(1)}" height="${(vh * scale).toFixed(1)}" aria-hidden="true" focusable="false"><path d="${d}"/></svg>`;
}

export const mm = (n) => (Math.round(n * 10) / 10).toString();
