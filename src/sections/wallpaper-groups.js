const WALLPAPER_GROUPS = [
  {
    name: 'p1',
    orbifold: 'o (○)',
    desc: 'Translation only. The simplest group: one motif repeated by shifting.',
    quilt: 'A one-block repeat with no rotation or reflection.',
    css: 'wp-p1',
  },
  {
    name: 'p2',
    orbifold: '2222',
    desc: '180° rotations at four distinct points. No reflections.',
    quilt: 'Blocks rotated 180° in alternating positions, like a basic Pinwheel layout.',
    css: 'wp-p2',
  },
  {
    name: 'pm',
    orbifold: '** (∗∗)',
    desc: 'Parallel mirror lines in one direction. Bilateral symmetry repeated.',
    quilt: 'Vertical stripe quilts, such as Rail Fence set in columns.',
    css: 'wp-pm',
  },
  {
    name: 'pg',
    orbifold: '×× (××)',
    desc: 'Parallel glide reflections. Translation + flip along one axis.',
    quilt: 'Streak of Lightning or zigzag sashing layouts.',
    css: 'wp-pg',
  },
  {
    name: 'cm',
    orbifold: '*× (∗×)',
    desc: 'Mirror lines plus glide reflections between them. Staggered rows.',
    quilt: 'Brick-set layouts where every other row is offset half a block.',
    css: 'wp-cm',
  },
  {
    name: 'pmm',
    orbifold: '*2222',
    desc: 'Two perpendicular mirror lines plus 180° rotations.',
    quilt: 'Straight-set Courthouse Steps, with light strips on two opposite sides and dark on the other two.',
    css: 'wp-pmm',
  },
  {
    name: 'pmg',
    orbifold: '22* (22∗)',
    desc: 'Mirror lines in one direction, glide reflections perpendicular.',
    quilt: 'Rows that alternate with their mirror image, like Flying Geese with every other row flipped.',
    css: 'wp-pmg',
  },
  {
    name: 'pgg',
    orbifold: '22× (22×)',
    desc: 'Glide reflections in two perpendicular directions plus 180° rotations.',
    quilt: 'Some complex Log Cabin settings where blocks alternate in two directions.',
    css: 'wp-pgg',
  },
  {
    name: 'cmm',
    orbifold: '2*22',
    desc: 'Two perpendicular mirror lines, 180° rotations, and glide reflections.',
    quilt: 'Barn Raising Log Cabin, the concentric diamond setting.',
    css: 'wp-cmm',
  },
  {
    name: 'p4',
    orbifold: '442',
    desc: '90° and 180° rotations. No reflections.',
    quilt: 'Pinwheel quilts: C4 rotation with no mirror lines.',
    css: 'wp-p4',
  },
  {
    name: 'p4m',
    orbifold: '*442',
    desc: '90° rotations plus mirror lines at 0° and 45°. Full square symmetry.',
    quilt: 'Ohio Star or Sawtooth Star grids, with D4 symmetry at every block.',
    css: 'wp-p4m',
  },
  {
    name: 'p4g',
    orbifold: '4*2',
    desc: '90° rotations plus mirror lines, but rotations are off the mirror lines.',
    quilt: 'Some complex star quilts with secondary pinwheel formations.',
    css: 'wp-p4g',
  },
  {
    name: 'p3',
    orbifold: '333',
    desc: '120° rotations at three points. No reflections. Triangular symmetry.',
    quilt: 'Tumbling Blocks, the hexagonal cube illusion, with three-fold rotation.',
    css: 'wp-p3',
  },
  {
    name: 'p3m1',
    orbifold: '*333',
    desc: '120° rotations plus mirror lines through the rotation centers.',
    quilt: 'Kaleidoscope blocks set in a triangular grid with reflections.',
    css: 'wp-p3m1',
  },
  {
    name: 'p31m',
    orbifold: '3*3',
    desc: '120° rotations plus mirror lines, but mirrors don\'t pass through all rotation centers.',
    quilt: 'Some hexagonal star arrangements with partial mirror symmetry.',
    css: 'wp-p31m',
  },
  {
    name: 'p6',
    orbifold: '632',
    desc: '60°, 120°, and 180° rotations. No reflections. Full rotational hexagonal symmetry.',
    quilt: 'Grandmother\'s Flower Garden rosettes colored to turn one way, with no mirror lines.',
    css: 'wp-p6',
  },
  {
    name: 'p6m',
    orbifold: '*632',
    desc: '60° rotations plus mirror lines. The most symmetric wallpaper group.',
    quilt: 'Grandmother\'s Flower Garden with full hexagonal symmetry, the "field of flowers" setting.',
    css: 'wp-p6m',
  },
];

export function renderWallpaperGroups(container) {
  container.innerHTML = `
    <div class="section-header">
      <p class="eyebrow">Symmetry</p>
      <h2>The 17 Wallpaper Groups</h2>
      <p>There are exactly 17 ways a pattern can repeat across a flat plane. A quilt layout can show every one of them.</p>
    </div>

    <div class="wallpaper-intro">
      <p>In 1891, Russian crystallographer Evgraf Fedorov proved that exactly 17 distinct symmetry groups exist for patterns that repeat in two dimensions. Every pattern that repeats in two directions on a flat surface belongs to one of them.</p>
      <p>Some show up all over traditional quilts, worked out by eye rather than from theory. Others are rare. Each group below has a CSS illustration and a quilt example.</p>
    </div>

    <div class="wallpaper-grid">
      ${WALLPAPER_GROUPS.map(g => `
        <div class="wallpaper-card">
          <div class="wallpaper-pattern ${g.css}"></div>
          <div class="wallpaper-info">
            <div class="wallpaper-name">${g.name}</div>
            <div class="wallpaper-orbifold">${g.orbifold}</div>
            <p class="wallpaper-desc">${g.desc}</p>
            <p class="wallpaper-quilt-example">Quilt: ${g.quilt}</p>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}
