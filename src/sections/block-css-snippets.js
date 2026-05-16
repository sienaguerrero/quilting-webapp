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
      #c0392b 25%, #f5d6a8 25% 50%,
      #c0392b 50% 75%, #f5d6a8 75%
    ) 0 0 / 33.33% 33.33%;
  aspect-ratio: 1;
}`,

  'flying-geese': `.flying-geese {
  --goose: #2c6e8a;
  --sky: #e8dcc8;
  background: var(--sky);
  position: relative;
}

.flying-geese::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(to bottom right,
      var(--goose) 50%, transparent 50%)
      0 0 / 50% 25% no-repeat,
    linear-gradient(to bottom left,
      var(--goose) 50%, transparent 50%)
      50% 0 / 50% 25% no-repeat,
    linear-gradient(to bottom right,
      var(--goose) 50%, transparent 50%)
      0 25% / 50% 25% no-repeat,
    linear-gradient(to bottom left,
      var(--goose) 50%, transparent 50%)
      50% 25% / 50% 25% no-repeat,
    linear-gradient(to bottom right,
      var(--goose) 50%, transparent 50%)
      0 50% / 50% 25% no-repeat,
    linear-gradient(to bottom left,
      var(--goose) 50%, transparent 50%)
      50% 50% / 50% 25% no-repeat,
    linear-gradient(to bottom right,
      var(--goose) 50%, transparent 50%)
      0 75% / 50% 25% no-repeat,
    linear-gradient(to bottom left,
      var(--goose) 50%, transparent 50%)
      50% 75% / 50% 25% no-repeat;
}`,

  'pinwheel': `.pinwheel {
  --c1: #8e44ad;
  --c2: #f0e4d0;
  background:
    linear-gradient(to bottom right,
      var(--c1) 50%, var(--c2) 50%)
      0 0 / 50% 50% no-repeat,
    linear-gradient(to bottom left,
      var(--c2) 50%, var(--c1) 50%)
      50% 0 / 50% 50% no-repeat,
    linear-gradient(to top right,
      var(--c2) 50%, var(--c1) 50%)
      0 50% / 50% 50% no-repeat,
    linear-gradient(to top left,
      var(--c1) 50%, var(--c2) 50%)
      50% 50% / 50% 50% no-repeat;
  aspect-ratio: 1;
}`,

  'ohio-star': `.ohio-star {
  --star: #c0392b;
  --bg: #f5e6c8;
  background:
    /* center square */
    linear-gradient(var(--star), var(--star))
      33.33% 33.33% / 33.34% 33.34% no-repeat,
    /* corner triangles */
    linear-gradient(to bottom right,
      var(--star) 50%, transparent 50%)
      0 0 / 33.33% 33.33% no-repeat,
    linear-gradient(to bottom left,
      var(--star) 50%, transparent 50%)
      66.67% 0 / 33.33% 33.33% no-repeat,
    linear-gradient(to top right,
      var(--star) 50%, transparent 50%)
      0 66.67% / 33.33% 33.33% no-repeat,
    linear-gradient(to top left,
      var(--star) 50%, transparent 50%)
      66.67% 66.67% / 33.33% 33.33% no-repeat,
    /* QST side points */
    linear-gradient(to bottom left,
      transparent 50%, var(--star) 50%)
      0 33.33% / 33.33% 33.34% no-repeat,
    linear-gradient(to bottom right,
      transparent 50%, var(--star) 50%)
      66.67% 33.33% / 33.33% 33.34% no-repeat,
    linear-gradient(to top left,
      transparent 50%, var(--star) 50%)
      33.33% 0 / 33.34% 33.33% no-repeat,
    linear-gradient(to top right,
      transparent 50%, var(--star) 50%)
      33.33% 66.67% / 33.34% 33.33% no-repeat,
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
  background: var(--c2);
  position: relative;
}

.drunkards-path::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at   0%   0%,
      var(--c1) 50%, transparent 50%)
      0 0 / 50% 50% no-repeat,
    radial-gradient(circle at 100%   0%,
      var(--c1) 50%, transparent 50%)
      50% 0 / 50% 50% no-repeat,
    radial-gradient(circle at   0% 100%,
      var(--c1) 50%, transparent 50%)
      0 50% / 50% 50% no-repeat,
    radial-gradient(circle at 100% 100%,
      var(--c1) 50%, transparent 50%)
      50% 50% / 50% 50% no-repeat;
}`,

  'sawtooth-star': `.sawtooth-star {
  --star: #d4a017;
  --bg: #f5f0e8;
  background:
    /* center block */
    linear-gradient(var(--star), var(--star))
      25% 25% / 50% 50% no-repeat,
    /* corner triangles (the points) */
    linear-gradient(to bottom right,
      var(--star) 50%, transparent 50%)
      0 0 / 25% 25% no-repeat,
    linear-gradient(to bottom left,
      var(--star) 50%, transparent 50%)
      75% 0 / 25% 25% no-repeat,
    linear-gradient(to top right,
      var(--star) 50%, transparent 50%)
      0 75% / 25% 25% no-repeat,
    linear-gradient(to top left,
      var(--star) 50%, transparent 50%)
      75% 75% / 25% 25% no-repeat,
    /* side wedges */
    linear-gradient(to right,
      transparent 50%, var(--star) 50%)
      0 25% / 25% 50% no-repeat,
    linear-gradient(to left,
      transparent 50%, var(--star) 50%)
      75% 25% / 25% 50% no-repeat,
    linear-gradient(to bottom,
      transparent 50%, var(--star) 50%)
      25% 0 / 50% 25% no-repeat,
    linear-gradient(to top,
      transparent 50%, var(--star) 50%)
      25% 75% / 50% 25% no-repeat,
    var(--bg);
  aspect-ratio: 1;
}`,

  'grandmothers-flower-garden': `.flower-garden {
  --center: #c0392b;
  --ring: #f5d6a8;
  --bg: #f0e4d0;
  background: var(--bg);
  position: relative;
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

/* Ring of 6 hexagons via radial-gradient */
.flower-garden::after {
  content: '';
  position: absolute;
  top: 50%; left: 50%;
  width: 65%; height: 65%;
  transform: translate(-50%, -50%);
  background:
    radial-gradient(circle,
      var(--ring) 22%, transparent 22%)
      50% 18% / 28% 28% no-repeat,
    radial-gradient(circle,
      var(--ring) 22%, transparent 22%)
      78% 34% / 28% 28% no-repeat,
    radial-gradient(circle,
      var(--ring) 22%, transparent 22%)
      78% 66% / 28% 28% no-repeat,
    radial-gradient(circle,
      var(--ring) 22%, transparent 22%)
      50% 82% / 28% 28% no-repeat,
    radial-gradient(circle,
      var(--ring) 22%, transparent 22%)
      22% 66% / 28% 28% no-repeat,
    radial-gradient(circle,
      var(--ring) 22%, transparent 22%)
      22% 34% / 28% 28% no-repeat;
}`,

  'jacobs-ladder': `.jacobs-ladder {
  --c1: #c0392b;
  --c2: #f5d6a8;
  --bg: #f0e4d0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  aspect-ratio: 1;
}

/* Four-Patch cells (corners + center) */
.jl-fp {
  background:
    conic-gradient(
      var(--c1) 25%, var(--c2) 25% 50%,
      var(--c1) 50% 75%, var(--c2) 75%
    ) 0 0 / 50% 50%;
}

/* HST cells (sides) — all same diagonal */
.jl-hst {
  background:
    linear-gradient(to bottom right,
      var(--c1) 50%, var(--bg) 50%);
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
