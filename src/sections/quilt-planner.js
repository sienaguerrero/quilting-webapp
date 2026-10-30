import { BLOCK_BUILDERS, FABRIC_PALETTES, applyPalette } from './block-patterns';

// ============================================
// CONSTANTS
// ============================================

const SEAM_ALLOWANCE = 0.25;

const BED_SIZES = {
  crib:    { name: 'Crib',        width: 36,  length: 52  },
  throw:   { name: 'Throw',       width: 50,  length: 65  },
  twin:    { name: 'Twin',        width: 66,  length: 90  },
  full:    { name: 'Full/Double',  width: 80,  length: 90  },
  queen:   { name: 'Queen',       width: 90,  length: 108 },
  king:    { name: 'King',        width: 108, length: 108 },
};

const BLOCK_SIZES = [4, 6, 8, 10, 12, 14, 16];

const FABRIC_WIDTH = 42;
const FAT_QUARTER = { width: 18, length: 22 };

// ============================================
// BLOCK REGISTRY
// ============================================

const BLOCK_REGISTRY = {
  'log-cabin': {
    name: 'Log Cabin',
    gridUnits: 1,
    pieces: { strips: 12 },
    symmetry: 'D2',
    tessellates: true,
    trigConcepts: ['strip piecing'],
    difficulty: 1,
  },
  'nine-patch': {
    name: 'Nine-Patch',
    gridUnits: 3,
    pieces: { squares: 9 },
    symmetry: 'D4',
    tessellates: true,
    trigConcepts: ['square diagonal'],
    difficulty: 1,
  },
  'flying-geese': {
    name: 'Flying Geese',
    gridUnits: 1,
    pieces: { flyingGeese: 4 },
    symmetry: 'D1',
    tessellates: true,
    trigConcepts: ['45-45-90 triangle', 'Pythagorean theorem'],
    difficulty: 2,
  },
  'pinwheel': {
    name: 'Pinwheel',
    gridUnits: 2,
    pieces: { hst: 4 },
    symmetry: 'C4',
    tessellates: true,
    trigConcepts: ['45-45-90 triangle', 'rotation'],
    difficulty: 2,
  },
  'ohio-star': {
    name: 'Ohio Star',
    gridUnits: 3,
    pieces: { squares: 5, qst: 4 },
    symmetry: 'D4',
    tessellates: true,
    trigConcepts: ['quarter-square triangle', '45-45-90'],
    difficulty: 3,
  },
  'bears-paw': {
    name: "Bear's Paw",
    gridUnits: 7,
    pieces: { squares: 20, hst: 16 },
    symmetry: 'D4',
    tessellates: true,
    trigConcepts: ['45-45-90 triangle', 'scale factor'],
    difficulty: 4,
  },
  'drunkards-path': {
    name: "Drunkard's Path",
    gridUnits: 2,
    pieces: { curves: 4 },
    symmetry: 'C4',
    tessellates: true,
    trigConcepts: ['arc length', 'circle geometry', 'pi'],
    difficulty: 4,
  },
  'sawtooth-star': {
    name: 'Sawtooth Star',
    gridUnits: 3,
    pieces: { squares: 5, flyingGeese: 4 },
    symmetry: 'D4',
    tessellates: true,
    trigConcepts: ['45-45-90 triangle', 'flying geese construction'],
    difficulty: 3,
  },
  'grandmothers-flower-garden': {
    name: "Grandmother's Flower Garden",
    gridUnits: null,
    pieces: { hexagons: 7 },
    symmetry: 'D6',
    tessellates: true,
    trigConcepts: ['30-60-90 triangle', 'hexagon geometry', 'tessellation'],
    difficulty: 3,
  },
  'jacobs-ladder': {
    name: "Jacob's Ladder",
    gridUnits: 3,
    pieces: { squares: 10, hst: 8 },
    symmetry: 'D2',
    tessellates: true,
    trigConcepts: ['45-45-90 triangle', 'diagonal paths'],
    difficulty: 2,
  },
  'monkey-wrench': {
    name: 'Monkey Wrench',
    gridUnits: 3,
    pieces: { squares: 1, hst: 4, rectangles: 4 },
    symmetry: 'D4',
    tessellates: true,
    trigConcepts: ['45-45-90 triangle', 'nine-patch grid'],
    difficulty: 2,
  },
  'snails-trail': {
    name: "Snail's Trail",
    gridUnits: 2,
    pieces: { hst: 16 },
    symmetry: 'C4',
    tessellates: true,
    trigConcepts: ['concentric right triangles', 'spiral geometry', 'scale factor'],
    difficulty: 3,
  },
  'chakana': {
    name: 'Chakana (Andean Cross)',
    gridUnits: 5,
    pieces: { squares: 13 },
    symmetry: 'D4',
    tessellates: true,
    trigConcepts: ['step geometry', 'rotational symmetry'],
    difficulty: 2,
  },
  'diamond-chevron': {
    name: 'Diamond Chevron (Otavalo Faja)',
    gridUnits: null,
    pieces: { diamonds: 8 },
    symmetry: 'D2',
    tessellates: true,
    trigConcepts: ['60-degree diamond', 'parallelogram angles'],
    difficulty: 3,
  },
  'step-fret': {
    name: 'Step Fret / Escalera',
    gridUnits: 5,
    pieces: { squares: 5, rectangles: 4 },
    symmetry: 'D2',
    tessellates: true,
    trigConcepts: ['step functions', 'staircase geometry'],
    difficulty: 2,
  },
  'ikat-stripe': {
    name: 'Ikat Stripe',
    gridUnits: null,
    pieces: { strips: 6 },
    symmetry: 'D1',
    tessellates: true,
    trigConcepts: ['repeating patterns', 'frequency'],
    difficulty: 1,
  },
};

// ============================================
// TRIG & GEOMETRY CALCULATORS
// ============================================

const TrigCalc = {
  // HST: diagonal = side * sqrt(2). The 7/8" seam constant comes from
  // bias-cut seam allowance: 2 * 0.25 * sqrt(2) ≈ 0.707, rounded to 0.875
  hstCutSize(finished) {
    return finished + 0.875;
  },

  // QST: two diagonal cuts, double the seam loss
  qstCutSize(finished) {
    return finished + 1.25;
  },

  squareCutSize(finished) {
    return finished + 2 * SEAM_ALLOWANCE;
  },

  // No-waste flying geese: 1 large square + 4 small → 4 units
  // Each unit is W x H where W = 2H
  flyingGeeseLargeCut(finishedHeight) {
    return finishedHeight + 1.25;
  },

  flyingGeeseSmallCut(finishedHeight) {
    return finishedHeight / 2 + 0.875;
  },

  // On-point setting triangles
  sideSettingCut(blockSize) {
    return blockSize * Math.SQRT2 + 1.25;
  },

  cornerSettingCut(blockSize) {
    return (blockSize * Math.SQRT2) / 2 + 0.875;
  },

  diagonal(side) {
    return side * Math.SQRT2;
  },

  // Drunkard's Path arc length
  arcLength(radius, angleDegrees) {
    return 2 * Math.PI * radius * (angleDegrees / 360);
  },

  // Hexagon (GFG): regular hexagon decomposes into six 30-60-90 triangles
  // side ratios 1 : sqrt(3) : 2
  hexArea(side) {
    return (3 * Math.sqrt(3) / 2) * side ** 2;
  },

  hexFlatWidth(side) {
    return side * Math.sqrt(3);
  },

  hexPointHeight(side) {
    return 2 * side;
  },
};

// ============================================
// SCALE FACTOR & SIMILARITY
// ============================================

const ScaleFactor = {
  compareScaling(originalFinished, originalCut, k) {
    const naiveScaled = originalCut * k;
    const seamConstant = originalCut - originalFinished;
    const correctScaled = (originalFinished * k) + seamConstant;
    return {
      naive: naiveScaled,
      correct: correctScaled,
      error: Math.abs(naiveScaled - correctScaled),
    };
  },
};

// ============================================
// YARDAGE & MATERIALS
// ============================================

const YardageCalc = {
  squaresFromFabric(squareSize, fabricWidth, fabricLength) {
    return Math.floor(fabricWidth / squareSize) * Math.floor(fabricLength / squareSize);
  },

  squaresFromFatQuarter(squareSize) {
    return this.squaresFromFabric(squareSize, FAT_QUARTER.width, FAT_QUARTER.length);
  },

  bindingLength(quiltWidth, quiltLength) {
    return 2 * (quiltWidth + quiltLength) + 10;
  },

  bindingStrips(quiltWidth, quiltLength, stripWidth = 2.5) {
    const total = this.bindingLength(quiltWidth, quiltLength);
    const strips = Math.ceil(total / FABRIC_WIDTH);
    return {
      totalLength: total,
      stripsNeeded: strips,
      yardage: (strips * stripWidth) / 36,
    };
  },

  backingSize(quiltWidth, quiltLength, margin = 4) {
    const w = quiltWidth + 2 * margin;
    const l = quiltLength + 2 * margin;
    const panels = Math.ceil(w / FABRIC_WIDTH);
    return { width: w, length: l, panels, yardage: (l * panels) / 36 };
  },
};

// ============================================
// COLOR BALANCE (60-30-10 RULE)
// ============================================

const ColorBalance = {
  distribute(totalBlocks, ratios = [60, 30, 10]) {
    const sum = ratios.reduce((a, b) => a + b, 0);
    return ratios.map(r => Math.round(totalBlocks * r / sum));
  },

  actualPercentages(counts) {
    const total = counts.reduce((a, b) => a + b, 0);
    return counts.map(c => total ? +(c / total * 100).toFixed(1) : 0);
  },
};

// ============================================
// SYMMETRY GROUPS
// ============================================

const Symmetry = {
  types: {
    D1: { name: 'D₁', desc: '1 reflection axis', order: 2 },
    D2: { name: 'D₂', desc: '2 reflection axes, 180° rotation', order: 4 },
    D4: { name: 'D₄', desc: '4 reflection axes, 90° rotation', order: 8 },
    D6: { name: 'D₆', desc: '6 reflection axes, 60° rotation', order: 12 },
    C4: { name: 'C₄', desc: '4-fold rotation, no reflection', order: 4 },
  },

  blocksForType(typeKey) {
    return Object.entries(BLOCK_REGISTRY)
      .filter(([, b]) => b.symmetry === typeKey)
      .map(([, b]) => b.name);
  },
};

// ============================================
// TESSELLATION RULES
// ============================================

const Tessellation = {
  interiorAngle(sides) {
    return (sides - 2) * 180 / sides;
  },

  polygons: [
    { sides: 3, name: 'Triangle',  angle: 60,  tiles: true,  atVertex: 6 },
    { sides: 4, name: 'Square',    angle: 90,  tiles: true,  atVertex: 4 },
    { sides: 5, name: 'Pentagon',  angle: 108, tiles: false, atVertex: null },
    { sides: 6, name: 'Hexagon',   angle: 120, tiles: true,  atVertex: 3 },
    { sides: 8, name: 'Octagon',   angle: 135, tiles: false, atVertex: null },
  ],
};

// ============================================
// COORDINATE GEOMETRY (ON-POINT LAYOUTS)
// ============================================

const CoordinateGeometry = {
  onPointDimensions(blockSize, cols, rows) {
    const d = blockSize * Math.SQRT2;
    return {
      width: d * cols / 2 + d / 2,
      height: d * rows / 2 + d / 2,
      blockDiagonal: d,
    };
  },

  settingTriangles(cols, rows) {
    return {
      sides: 2 * (cols + rows - 2),
      corners: 4,
    };
  },
};

// ============================================
// PERIMETER vs AREA
// ============================================

const PerimeterVsArea = {
  compare(width, length, k) {
    return {
      originalPerimeter: 2 * (width + length),
      originalArea: width * length,
      scaledPerimeter: 2 * (width + length) * k,
      scaledArea: width * length * k ** 2,
      perimeterRatio: k,
      areaRatio: k ** 2,
    };
  },
};

// ============================================
// LAYOUT ENGINE
// ============================================

const LayoutEngine = {
  gridDimensions(bedSize, blockSize, sashingWidth = 0, borderWidth = 0) {
    const innerW = bedSize.width - 2 * borderWidth;
    const innerL = bedSize.length - 2 * borderWidth;
    const step = blockSize + sashingWidth;
    const cols = Math.floor((innerW + sashingWidth) / step);
    const rows = Math.floor((innerL + sashingWidth) / step);
    return {
      cols,
      rows,
      totalBlocks: cols * rows,
      actualWidth: cols * blockSize + (cols - 1) * sashingWidth + 2 * borderWidth,
      actualLength: rows * blockSize + (rows - 1) * sashingWidth + 2 * borderWidth,
    };
  },

  estimateMaterials(bedSizeId, blockSize, sashingWidth = 0, borderWidth = 0) {
    const bed = BED_SIZES[bedSizeId];
    if (!bed) return null;
    const grid = this.gridDimensions(bed, blockSize, sashingWidth, borderWidth);
    return {
      bedSize: bed,
      blockSize,
      grid,
      binding: YardageCalc.bindingStrips(grid.actualWidth, grid.actualLength),
      backing: YardageCalc.backingSize(grid.actualWidth, grid.actualLength),
    };
  },

  createPlan(cols, rows) {
    return Array.from({ length: rows }, () => new Array(cols).fill(null));
  },

  placeBlock(plan, row, col, blockId, paletteId = 'traditional', rotation = 0) {
    if (row >= 0 && row < plan.length && col >= 0 && col < plan[0].length) {
      plan[row][col] = { blockId, paletteId, rotation };
    }
    return plan;
  },
};

// ============================================
// RENDER
// ============================================

function frac(n) {
  const wholes = Math.floor(n);
  const rem = n - wholes;
  const eighths = Math.round(rem * 8);
  const fracs = { 0: '', 1: '⅛', 2: '¼', 3: '⅜', 4: '½', 5: '⅝', 6: '¾', 7: '⅞', 8: '' };
  if (eighths === 0) return `${wholes}`;
  if (eighths === 8) return `${wholes + 1}`;
  return wholes ? `${wholes}${fracs[eighths]}` : fracs[eighths];
}

export function renderQuiltPlanner(container) {
  let state = {
    bedSize: 'queen',
    blockSize: 12,
    sashingWidth: 0,
    borderWidth: 2,
    selectedBlock: null,
    palette: 'traditional',
    plan: null,
  };

  function update(changes) {
    Object.assign(state, changes);
    render();
  }

  function render() {
    const est = LayoutEngine.estimateMaterials(
      state.bedSize, state.blockSize, state.sashingWidth, state.borderWidth
    );

    if (!state.plan && est) {
      state.plan = LayoutEngine.createPlan(est.grid.cols, est.grid.rows);
    }

    const bed = BED_SIZES[state.bedSize];
    const bs = state.blockSize;

    container.innerHTML = `
      <div class="section-header">
        <h2>Quilt Planner</h2>
        <p class="section-intro">Design your quilt and explore the mathematics behind every cut, seam, and layout decision.</p>
      </div>

      <div class="planner-layout">

        <!-- ---- Setup Panel ---- -->
        <div class="planner-panel planner-setup">
          <h3>Quilt Setup</h3>

          <div class="planner-field">
            <label for="pl-bed">Bed Size</label>
            <select id="pl-bed">
              ${Object.entries(BED_SIZES).map(([id, s]) =>
                `<option value="${id}"${id === state.bedSize ? ' selected' : ''}>${s.name} (${s.width}″ × ${s.length}″)</option>`
              ).join('')}
            </select>
          </div>

          <div class="planner-field">
            <label for="pl-block">Block Size</label>
            <select id="pl-block">
              ${BLOCK_SIZES.map(s =>
                `<option value="${s}"${s === state.blockSize ? ' selected' : ''}>${s}″</option>`
              ).join('')}
            </select>
          </div>

          <div class="planner-field">
            <label for="pl-sash">Sashing</label>
            <select id="pl-sash">
              ${[0, 1, 1.5, 2, 3].map(s =>
                `<option value="${s}"${s === state.sashingWidth ? ' selected' : ''}>${s === 0 ? 'None' : s + '″'}</option>`
              ).join('')}
            </select>
          </div>

          <div class="planner-field">
            <label for="pl-border">Border</label>
            <select id="pl-border">
              ${[0, 1, 2, 3, 4, 6].map(s =>
                `<option value="${s}"${s === state.borderWidth ? ' selected' : ''}>${s === 0 ? 'None' : s + '″'}</option>`
              ).join('')}
            </select>
          </div>

          <div class="planner-field">
            <label for="pl-palette">Fabric Palette</label>
            <select id="pl-palette">
              ${Object.entries(FABRIC_PALETTES).map(([id, p]) =>
                `<option value="${id}"${id === state.palette ? ' selected' : ''}>${p.name}</option>`
              ).join('')}
            </select>
          </div>

          ${est ? `
          <div class="planner-summary">
            <h4>Layout</h4>
            <dl class="summary-dl">
              <dt>Grid</dt><dd>${est.grid.cols} × ${est.grid.rows}</dd>
              <dt>Blocks</dt><dd>${est.grid.totalBlocks}</dd>
              <dt>Finished</dt><dd>${est.grid.actualWidth}″ × ${est.grid.actualLength}″</dd>
            </dl>
          </div>
          <div class="planner-summary">
            <h4>Materials</h4>
            <dl class="summary-dl">
              <dt>Binding</dt><dd>${est.binding.yardage.toFixed(2)} yd (${est.binding.stripsNeeded} strips)</dd>
              <dt>Backing</dt><dd>${est.backing.yardage.toFixed(2)} yd (${est.backing.panels} panel${est.backing.panels > 1 ? 's' : ''})</dd>
            </dl>
          </div>` : ''}
        </div>

        <!-- ---- Block Palette ---- -->
        <div class="planner-panel planner-blocks">
          <h3>Block Palette</h3>
          <div class="block-palette-grid">
            ${Object.entries(BLOCK_REGISTRY).map(([id, b]) => `
              <button class="palette-block${state.selectedBlock === id ? ' selected' : ''}" data-block="${id}">
                <div class="palette-preview quilt-block quilt-block--${id}"></div>
                <span class="palette-name">${b.name}</span>
                <span class="palette-meta">${(Symmetry.types[b.symmetry] || {}).name || b.symmetry} · Lvl ${b.difficulty}</span>
              </button>
            `).join('')}
          </div>
        </div>

        <!-- ---- Quilt Grid Preview ---- -->
        ${est ? `
        <div class="planner-panel planner-grid-preview">
          <h3>Layout Preview</h3>
          <div class="quilt-grid-wrap">
            <div class="quilt-grid" style="
              display:grid;
              grid-template-columns:repeat(${est.grid.cols},1fr);
              grid-template-rows:repeat(${est.grid.rows},1fr);
              gap:${state.sashingWidth ? '2px' : '0'};
              aspect-ratio:${est.grid.actualWidth}/${est.grid.actualLength};
              ${state.sashingWidth ? 'background:var(--color-border);padding:2px;' : ''}
            ">
              ${state.plan ? state.plan.flat().map((cell, i) => {
                const blockId = cell ? cell.blockId : (state.selectedBlock || '');
                return `<div class="grid-cell quilt-block quilt-block--${blockId}" data-idx="${i}"></div>`;
              }).join('') : ''}
            </div>
          </div>
          <p class="grid-hint">${state.selectedBlock ? 'Click cells to place blocks' : 'Select a block from the palette above'}</p>
        </div>` : ''}

        <!-- ---- MATH & GEOMETRY ---- -->
        <div class="planner-panel planner-math">
          <h3>Math &amp; Geometry</h3>

          <!-- Cut Size Calculators -->
          <div class="calc-section">
            <h4>Trig: Cut Size Calculators</h4>
            <p class="calc-intro">Every quilting cut formula traces back to the Pythagorean theorem. The diagonal of a square with side <em>s</em> is <em>s</em> × √2. Seam allowances add a fixed constant.</p>
            <div class="calc-grid">

              <div class="calc-card">
                <div class="calc-label">Half-Square Triangle</div>
                <div class="calc-formula">cut = finished + ⅞″</div>
                <div class="calc-result">${bs}″ block → cut <strong>${frac(TrigCalc.hstCutSize(bs))}″</strong></div>
                <div class="calc-note">Bias seam loss ≈ 2 × ¼″ × √2 ≈ 0.707″, rounded to ⅞″</div>
              </div>

              <div class="calc-card">
                <div class="calc-label">Quarter-Square Triangle</div>
                <div class="calc-formula">cut = finished + 1¼″</div>
                <div class="calc-result">${bs}″ block → cut <strong>${frac(TrigCalc.qstCutSize(bs))}″</strong></div>
              </div>

              <div class="calc-card">
                <div class="calc-label">Flying Geese (no-waste)</div>
                <div class="calc-formula">lg = height + 1¼″, sm = (height ÷ 2) + ⅞″</div>
                <div class="calc-result">${bs}″ height → lg <strong>${frac(TrigCalc.flyingGeeseLargeCut(bs))}″</strong>, sm <strong>${frac(TrigCalc.flyingGeeseSmallCut(bs))}″</strong></div>
              </div>

              <div class="calc-card">
                <div class="calc-label">Setting Triangles (on-point)</div>
                <div class="calc-formula">side = block × √2 + 1¼″ &nbsp;|&nbsp; corner = (block × √2 ÷ 2) + ⅞″</div>
                <div class="calc-result">${bs}″ block → side <strong>${TrigCalc.sideSettingCut(bs).toFixed(2)}″</strong>, corner <strong>${TrigCalc.cornerSettingCut(bs).toFixed(2)}″</strong></div>
              </div>

              <div class="calc-card">
                <div class="calc-label">Drunkard’s Path Arc</div>
                <div class="calc-formula">arc = 2πr × (θ / 360°)</div>
                <div class="calc-result">${bs}″ block, 90° curve, r=${(bs / 2).toFixed(1)}″ → arc <strong>${TrigCalc.arcLength(bs / 2, 90).toFixed(2)}″</strong></div>
              </div>

              <div class="calc-card">
                <div class="calc-label">Hexagon (30-60-90)</div>
                <div class="calc-formula">width = side × √3 &nbsp;|&nbsp; height = 2 × side &nbsp;|&nbsp; area = (3√3/2) × side²</div>
                <div class="calc-result">1″ side → width <strong>${TrigCalc.hexFlatWidth(1).toFixed(3)}″</strong>, area <strong>${TrigCalc.hexArea(1).toFixed(3)} sq in</strong></div>
              </div>
            </div>
          </div>

          <!-- Fabric Yield -->
          <div class="calc-section">
            <h4>Fabric Yield (Rectangle Packing)</h4>
            <p class="calc-intro">How many squares fit in a fat quarter (18″ × 22″)? Integer division with grain-line constraints — no rotation.</p>
            <div class="yield-table">
              <div class="yield-header"><span>Cut Size</span><span>Per Fat Quarter</span><span>Per Yard (${FABRIC_WIDTH}″)</span></div>
              ${[2, 3, 4, 5, 6, 8, 10, 12].map(s => `
                <div class="yield-row">
                  <span>${s}″</span>
                  <span>${YardageCalc.squaresFromFatQuarter(s)}</span>
                  <span>${YardageCalc.squaresFromFabric(s, FABRIC_WIDTH, 36)}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Color Balance -->
          <div class="calc-section">
            <h4>Color Balance (60-30-10 Rule)</h4>
            ${est ? (() => {
              const dist = ColorBalance.distribute(est.grid.totalBlocks);
              return `<p class="calc-intro">For ${est.grid.totalBlocks} blocks: <strong>${dist[0]}</strong> dominant, <strong>${dist[1]}</strong> secondary, <strong>${dist[2]}</strong> accent.</p>`;
            })() : ''}
          </div>

          <!-- Scale Factor (expanded) -->
          <details class="calc-section expandable" open>
            <summary><h4>Scale Factor &amp; Similarity</h4></summary>
            <div class="calc-card scale-article">
              <p>When you resize a quilt block, you create a <em>similar</em> figure: all angles are preserved, all linear dimensions scale by factor <em>k</em>, and all areas scale by <em>k</em>². But there’s a catch quilters learn the hard way: <strong>seam allowances are fixed at ¼″ and do not scale.</strong></p>

              <div class="scale-demo">
                <h5>The Seam Allowance Trap</h5>
                ${[6, 8, 10, 12, 16].map(s => {
                  const k = s / 12;
                  const comp = ScaleFactor.compareScaling(12, TrigCalc.hstCutSize(12), k);
                  return `
                  <div class="scale-row">
                    <span class="scale-size">${s}″ (k=${k.toFixed(2)})</span>
                    <span class="scale-naive">Naive: ${comp.naive.toFixed(3)}″</span>
                    <span class="scale-correct">Correct: ${comp.correct.toFixed(3)}″</span>
                    <span class="scale-err${comp.error > 0.1 ? ' significant' : ''}">Error: ${comp.error.toFixed(3)}″</span>
                  </div>`;
                }).join('')}
              </div>

              <div class="scale-demo">
                <h5>Area Scaling: Why Miniatures Use So Little Fabric</h5>
                <p>Halve the block size and you use <strong>one quarter</strong> the fabric — not half.</p>
                ${[0.5, 0.75, 1, 1.25, 1.5, 2].map(k => {
                  const pct = (k ** 2 * 100).toFixed(0);
                  return `
                  <div class="scale-row">
                    <span class="scale-size">k = ${k}</span>
                    <span>${Math.round(bed.width * k)}″ × ${Math.round(bed.length * k)}″</span>
                    <span><strong>${pct}%</strong> fabric</span>
                  </div>`;
                }).join('')}
              </div>
            </div>
          </details>

          <!-- Symmetry Groups -->
          <details class="calc-section expandable">
            <summary><h4>Symmetry Groups</h4></summary>
            <div class="calc-card">
              <p class="calc-intro">Each quilt block belongs to a symmetry group describing its rotational and reflective symmetries.</p>
              <div class="sym-table">
                ${Object.entries(Symmetry.types).map(([key, sym]) => `
                  <div class="sym-row">
                    <span class="sym-name">${sym.name}</span>
                    <span class="sym-desc">${sym.desc}</span>
                    <span class="sym-blocks">${Symmetry.blocksForType(key).join(', ') || '—'}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </details>

          <!-- Tessellation -->
          <details class="calc-section expandable">
            <summary><h4>Tessellation Rules</h4></summary>
            <div class="calc-card">
              <p>A regular polygon tiles the plane when its interior angle divides 360° evenly. Interior angle = (n−2) × 180° / n.</p>
              <div class="tess-table">
                ${Tessellation.polygons.map(p => `
                  <div class="tess-row${p.tiles ? ' tess-yes' : ' tess-no'}">
                    <span>${p.name} (${p.sides})</span>
                    <span>${p.angle}°</span>
                    <span>${p.tiles ? '✓ ' + p.atVertex + ' at vertex' : '✗ does not tile'}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </details>

          <!-- Perimeter vs Area -->
          <details class="calc-section expandable">
            <summary><h4>Perimeter vs. Area</h4></summary>
            <div class="calc-card">
              <p>Binding = perimeter (scales × <em>k</em>). Backing = area (scales × <em>k</em>²). Double the quilt size: double the binding, <strong>quadruple</strong> the backing.</p>
              ${(() => {
                const c = PerimeterVsArea.compare(bed.width, bed.length, 2);
                return `
                <div class="pva-demo">
                  <div class="pva-row"><span>${bed.width}″ × ${bed.length}″</span><span>Perimeter: ${c.originalPerimeter}″</span><span>Area: ${(c.originalArea / 144).toFixed(1)} sq ft</span></div>
                  <div class="pva-row"><span>${bed.width * 2}″ × ${bed.length * 2}″</span><span>Perimeter: ${c.scaledPerimeter}″ (2×)</span><span>Area: ${(c.scaledArea / 144).toFixed(1)} sq ft (4×)</span></div>
                </div>`;
              })()}
            </div>
          </details>

          <!-- Coordinate Geometry -->
          <details class="calc-section expandable">
            <summary><h4>Coordinate Geometry (On-Point)</h4></summary>
            <div class="calc-card">
              <p>On-point layouts rotate blocks 45°. Effective row height = block diagonal = side × √2.</p>
              ${(() => {
                const d = CoordinateGeometry.onPointDimensions(bs, 5, 5);
                const t = CoordinateGeometry.settingTriangles(5, 5);
                return `
                <div class="coord-demo">
                  <p>5 × 5 on-point with ${bs}″ blocks:</p>
                  <dl class="summary-dl">
                    <dt>Quilt size</dt><dd>${d.width.toFixed(1)}″ × ${d.height.toFixed(1)}″</dd>
                    <dt>Block diagonal</dt><dd>${d.blockDiagonal.toFixed(2)}″</dd>
                    <dt>Setting triangles</dt><dd>${t.sides} side + ${t.corners} corner</dd>
                  </dl>
                </div>`;
              })()}
            </div>
          </details>

        </div>
      </div>
    `;

    // Render block previews in the palette
    container.querySelectorAll('.palette-preview').forEach(el => {
      const id = el.closest('[data-block]').dataset.block;
      if (BLOCK_BUILDERS[id]) BLOCK_BUILDERS[id](el);
      if (state.palette !== 'traditional') applyPalette(el, state.palette);
    });

    // Render grid cells
    if (state.selectedBlock) {
      container.querySelectorAll('.grid-cell').forEach(el => {
        const idx = +el.dataset.idx;
        const row = state.plan[Math.floor(idx / est.grid.cols)];
        const cell = row ? row[idx % est.grid.cols] : null;
        const blockId = cell ? cell.blockId : null;
        if (blockId && BLOCK_BUILDERS[blockId]) {
          BLOCK_BUILDERS[blockId](el);
          applyPalette(el, cell.paletteId || state.palette);
        }
      });
    }

    // Event listeners
    const on = (id, evt, fn) => {
      const el = container.querySelector(id);
      if (el) el.addEventListener(evt, fn);
    };

    on('#pl-bed', 'change', e => update({ bedSize: e.target.value, plan: null }));
    on('#pl-block', 'change', e => update({ blockSize: +e.target.value, plan: null }));
    on('#pl-sash', 'change', e => update({ sashingWidth: +e.target.value, plan: null }));
    on('#pl-border', 'change', e => update({ borderWidth: +e.target.value, plan: null }));
    on('#pl-palette', 'change', e => update({ palette: e.target.value }));

    container.querySelectorAll('.palette-block').forEach(btn => {
      btn.addEventListener('click', () => update({ selectedBlock: btn.dataset.block }));
    });

    container.querySelectorAll('.grid-cell').forEach(el => {
      el.addEventListener('click', () => {
        if (!state.selectedBlock || !state.plan) return;
        const idx = +el.dataset.idx;
        const r = Math.floor(idx / est.grid.cols);
        const c = idx % est.grid.cols;
        LayoutEngine.placeBlock(state.plan, r, c, state.selectedBlock, state.palette);
        render();
      });
    });
  }

  render();
}
