export const CSS_SNIPPETS = {
  'log-cabin': `.log-cabin {
  --hearth: #c0392b;
  --light: #f5d6a8;
  --dark: #5b3a29;
  background:
    linear-gradient(var(--hearth), var(--hearth))
      center / 18% 18% no-repeat,
    linear-gradient(90deg, var(--light) 50%, var(--dark) 50%)
      center / 30% 30% no-repeat,
    linear-gradient(0deg, var(--light) 50%, var(--dark) 50%)
      center / 42% 42% no-repeat,
    linear-gradient(90deg, var(--light) 50%, var(--dark) 50%)
      center / 54% 54% no-repeat,
    linear-gradient(0deg, var(--light) 50%, var(--dark) 50%)
      center / 66% 66% no-repeat,
    linear-gradient(90deg, var(--light) 50%, var(--dark) 50%)
      center / 78% 78% no-repeat,
    linear-gradient(0deg, var(--light) 50%, var(--dark) 50%)
      center / 90% 90% no-repeat,
    #f0e4d0;
  aspect-ratio: 1;
}`,

  'nine-patch': `.nine-patch {
  background:
    conic-gradient(
      #f5d6a8 25%, #c0392b 25% 50%,
      #f5d6a8 50% 75%, #c0392b 75%
    ) 0 0 / 66.67% 66.67%;
  aspect-ratio: 1;
}`,

  'flying-geese': `.flying-geese {
  --goose: #2c6e8a;
  --sky: #e8dcc8;
  background:
    linear-gradient(to bottom right,
      var(--sky) 50%, var(--goose) 50%)
      0 0 / 50% 25% repeat-y,
    linear-gradient(to bottom left,
      var(--sky) 50%, var(--goose) 50%)
      100% 0 / 50% 25% repeat-y;
  aspect-ratio: 1;
}`,

  'pinwheel': `.pinwheel {
  --c1: #8e44ad;
  --c2: #f0e4d0;
  background:
    linear-gradient(to top right,
      var(--c2) 50%, var(--c1) 50%)
      0 0 / 50% 50% no-repeat,
    linear-gradient(to bottom right,
      var(--c2) 50%, var(--c1) 50%)
      100% 0 / 50% 50% no-repeat,
    linear-gradient(to top left,
      var(--c2) 50%, var(--c1) 50%)
      0 100% / 50% 50% no-repeat,
    linear-gradient(to bottom left,
      var(--c2) 50%, var(--c1) 50%)
      100% 100% / 50% 50% no-repeat;
  aspect-ratio: 1;
}`,

  'ohio-star': `.ohio-star {
  --star: #c0392b;
  --bg: #f5e6c8;
  /* QST unit: two opposite quarter triangles */
  --points-lr: conic-gradient(from 45deg,
      var(--star) 0 90deg, transparent 90deg 180deg,
      var(--star) 180deg 270deg, transparent 270deg);
  --points-tb: conic-gradient(from 315deg,
      var(--star) 0 90deg, transparent 90deg 180deg,
      var(--star) 180deg 270deg, transparent 270deg);
  background:
    /* center square */
    linear-gradient(var(--star), var(--star))
      50% 50% / 33.34% 33.34% no-repeat,
    /* side units */
    var(--points-lr) 50% 0 / 33.34% 33.34% no-repeat,
    var(--points-lr) 50% 100% / 33.34% 33.34% no-repeat,
    var(--points-tb) 0 50% / 33.34% 33.34% no-repeat,
    var(--points-tb) 100% 50% / 33.34% 33.34% no-repeat,
    var(--bg);
  aspect-ratio: 1;
}`,

  'bears-paw': `.bears-paw {
  /* Bear's Paw uses a 7x7 grid — too complex
     for pure gradients. Best approach: CSS Grid
     with clip-path triangles for the toe units. */
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 1fr);
  gap: 1px;
  aspect-ratio: 1;
}

.bears-paw .pad {
  grid-area: 3 / 3 / 6 / 6;
  background: #5b3a29;
}

.bears-paw .toe {
  background: #c0392b;
  clip-path: polygon(0 0, 100% 0, 0 100%);
}`,

  'drunkards-path': `.drunkards-path {
  --c1: #2c6e8a;
  --c2: #f5e6c8;
  background:
    radial-gradient(circle farthest-side at 100% 100%,
      var(--c2) 65%, var(--c1) 65%)
      0 0 / 50% 50% no-repeat,
    radial-gradient(circle farthest-side at 0% 100%,
      var(--c2) 65%, var(--c1) 65%)
      100% 0 / 50% 50% no-repeat,
    radial-gradient(circle farthest-side at 100% 0%,
      var(--c2) 65%, var(--c1) 65%)
      0 100% / 50% 50% no-repeat,
    radial-gradient(circle farthest-side at 0% 0%,
      var(--c2) 65%, var(--c1) 65%)
      100% 100% / 50% 50% no-repeat;
  aspect-ratio: 1;
}`,

  'sawtooth-star': `.sawtooth-star {
  --star: #d4a017;
  --bg: #f5f0e8;
  background:
    /* center block */
    linear-gradient(var(--star), var(--star))
      50% 50% / 50% 50% no-repeat,
    /* flying geese units: background goose,
       star-colored sky triangles are the points */
    conic-gradient(from 135deg at 50% 0,
      transparent 0 90deg, var(--star) 90deg)
      50% 0 / 50% 25% no-repeat,
    conic-gradient(from 315deg at 50% 100%,
      transparent 0 90deg, var(--star) 90deg)
      50% 100% / 50% 25% no-repeat,
    conic-gradient(from 45deg at 0 50%,
      transparent 0 90deg, var(--star) 90deg)
      0 50% / 25% 50% no-repeat,
    conic-gradient(from 225deg at 100% 50%,
      transparent 0 90deg, var(--star) 90deg)
      100% 50% / 25% 50% no-repeat,
    var(--bg);
  aspect-ratio: 1;
}`,

  'grandmothers-flower-garden': `.flower-garden {
  --center: #c0392b;
  --ring: #f5d6a8;
  --bg: #f0e4d0;
  --petal: radial-gradient(closest-side,
      var(--ring) 99%, transparent);
  background: var(--bg);
  position: relative;
  aspect-ratio: 1;
}

/* Center hexagon */
.flower-garden::before {
  content: '';
  position: absolute;
  top: 50%; left: 50%;
  width: 30%; height: 30%;
  transform: translate(-50%, -50%);
  background: var(--center);
  clip-path: polygon(
    50% 0%, 100% 25%, 100% 75%,
    50% 100%, 0% 75%, 0% 25%
  );
}

/* Ring of 6 petals (circles stand in for hexagons) */
.flower-garden::after {
  content: '';
  position: absolute;
  top: 50%; left: 50%;
  width: 65%; height: 65%;
  transform: translate(-50%, -50%);
  background:
    var(--petal) 91.7% 50% / 28% 28% no-repeat,
    var(--petal) 70.8% 13.9% / 28% 28% no-repeat,
    var(--petal) 29.2% 13.9% / 28% 28% no-repeat,
    var(--petal) 8.3% 50% / 28% 28% no-repeat,
    var(--petal) 29.2% 86.1% / 28% 28% no-repeat,
    var(--petal) 70.8% 86.1% / 28% 28% no-repeat;
}`,

  'jacobs-ladder': `.jacobs-ladder {
  --c1: #c0392b;
  --c2: #f5d6a8;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  aspect-ratio: 1;
}

/* Four-Patch cells (corners + center) */
.jl-fp {
  background:
    conic-gradient(
      var(--c2) 25%, var(--c1) 25% 50%,
      var(--c2) 50% 75%, var(--c1) 75%
    ) 0 0 / 50% 50%;
}

/* HST cells (sides) — all same diagonal */
.jl-hst {
  background:
    linear-gradient(to bottom right,
      var(--c1) 50%, var(--c2) 50%);
}`,

  'snails-trail': `.snails-trail {
  --c1: #c0392b;
  --c2: #f5d6a8;
  /* 4 concentric HST rings rotating 90° each.
     Pure CSS handles 2 rings; use JS or SVG
     for full 4-ring spiral fidelity. */
  background:
    linear-gradient(to bottom right,
      var(--c1) 50%, var(--c2) 50%);
  position: relative;
  aspect-ratio: 1;
}

.snails-trail::before {
  content: '';
  position: absolute;
  top: 50%; left: 50%;
  width: 50%; height: 50%;
  transform: translate(-50%, -50%);
  background:
    linear-gradient(to top left,
      var(--c1) 50%, var(--c2) 50%);
}`,
};

const DEMO_MARKUP = {
  'bears-paw': null,
  'jacobs-ladder': Array.from({ length: 9 }, (_, i) =>
    `<div class="${(Math.floor(i / 3) + (i % 3)) % 2 === 0 ? 'jl-fp' : 'jl-hst'}"></div>`
  ).join(''),
};

export function snippetDemoHtml(blockId) {
  const css = CSS_SNIPPETS[blockId];
  const inner = DEMO_MARKUP[blockId];
  if (!css || inner === null) return '';
  const root = css.match(/^\.([\w-]+)/m)[1];
  const scoped = css.replace(/^\./gm, '.css-demo .');
  return `<div class="css-demo"><style>${scoped}</style><div class="${root}">${inner || ''}</div></div>`;
}
