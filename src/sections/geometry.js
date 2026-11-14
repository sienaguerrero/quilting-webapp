export function renderGeometry(container) {
  container.innerHTML = `
    <div class="section-header">
      <p class="eyebrow">Geometry &amp; Math</p>
      <h2>The Mathematics of Quilting</h2>
      <p>Quilt blocks are full of tessellations, symmetries, and rigid transformations.</p>
    </div>

    <div class="content-split">
      <div>
        <h3>Tessellations</h3>
        <p>Quilting relies on tessellations: repeating shapes that tile a plane without gaps or overlaps. The three regular tessellations (equilateral triangles, squares, hexagons) all appear in traditional quilt blocks. The Nine-Patch tiles with squares. Grandmother's Flower Garden tiles with hexagons. Flying Geese uses right triangles.</p>
        <p>Some quilts use semi-regular or even aperiodic tessellations. Penrose tiling quilts use two rhombus shapes in a pattern that never exactly repeats.</p>
      </div>
      <div>
        <h3>The Four Transformations</h3>
        <p>A single quilt block acts as a <strong>fundamental domain</strong>. The full quilt comes from applying rigid transformations, the four kinds of distance-preserving moves in the Euclidean plane:</p>
        <p><strong>Translation:</strong> repeating the block across rows and columns.<br/>
        <strong>Rotation:</strong> turning blocks 90°, 180°, or 270° to create secondary patterns.<br/>
        <strong>Reflection:</strong> flipping blocks to produce mirror-image pairs.<br/>
        <strong>Glide reflection:</strong> shifting then flipping, which makes diagonal movement (visible in zigzag sashing or Streak of Lightning layouts).</p>
      </div>
    </div>

    <div class="content-split content-split--reverse">
      <div>
        <h3>Symmetry in Blocks</h3>
        <p>Different blocks have different symmetry groups:</p>
        <p><strong>D4 (full square symmetry):</strong> Nine-Patch, Ohio Star, Sawtooth Star. Each looks the same after any rotation or reflection of the square.</p>
        <p><strong>C4 (rotation only):</strong> Pinwheel. It turns onto itself but has no mirror line, which gives it chirality: it spins one way.</p>
        <p><strong>D6 (hexagonal):</strong> Grandmother's Flower Garden, with six-fold rotation and six mirror lines.</p>
        <p><strong>D1 (one mirror line):</strong> a single Drunkard's Path unit, which mirrors across its diagonal. Four units together can make C2, C4, D2, or D4 patterns, depending on how they're turned.</p>
      </div>
      <div>
        <h3>Fibonacci Spiral</h3>
        <p>Some quilters use the golden ratio (φ ≈ 1.618) to plan proportions: border widths that grow by φ, blocks sized as golden rectangles, or spiral quilts built from Fibonacci squares.</p>
        <div class="fibonacci-spiral">
          <div class="fib-square fib-square--13"></div>
          <div class="fib-square fib-square--8"></div>
          <div class="fib-square fib-square--5"></div>
          <div class="fib-square fib-square--3"></div>
          <div class="fib-square fib-square--2"></div>
          <div class="fib-square fib-square--1a"></div>
          <div class="fib-square fib-square--1b"></div>
        </div>
        <p class="fibonacci-label">1, 1, 2, 3, 5, 8, 13: the Fibonacci sequence in cloth</p>
      </div>
    </div>

    <div class="content-split">
      <div>
        <h3>Why ⅞″?</h3>
        <p>A plain square gets ¼″ of seam allowance on each side, so you cut it ½″ bigger than it finishes. A half-square triangle also has a seam on its diagonal. That seam sits ¼″ from the bias edge, and measured along the square's side it takes ¼″ × √2 more.</p>
        <p>So the exact extra for a half-square triangle is ½ + √2⁄4, about 0.854″. A quarter-square triangle has two bias edges, and its extra is ½ + √2⁄2, about 1.207″. Neither lands on a ruler line. Quilters round up to ⅞″ and 1¼″ and trim the sliver after sewing.</p>
      </div>
      <div>
        <h3>When a Size Won't Cut</h3>
        <p>A ruler is marked in eighths. An Ohio Star sits on a 3 × 3 grid, so a 10″ star needs 3⅓″ patches, and no line on the ruler gives you that. A finished size that divides by ⅜″ cuts cleanly: 9¾″, 10⅛″, or 10½″. A Churn Dash with split bars sits on a 6 × 6 grid, so it needs a size that divides by ¾″.</p>
        <p>The <a href="#cutlist">cut lists</a> check this for every block and suggest the nearest sizes that land on the lines.</p>
      </div>
    </div>

    <h3>Connections to Mathematical Fields</h3>
    <div class="math-card-grid">
      <div class="math-card">
        <div class="math-card-icon">⬡</div>
        <h3>Group Theory</h3>
        <p>The 17 wallpaper groups classify every pattern that repeats in two directions across a plane. A quilt layout can be built for each one.</p>
      </div>
      <div class="math-card">
        <div class="math-card-icon">◯</div>
        <h3>Topology</h3>
        <p>A quilt top is a surface with an edge, which topologists call a 2-manifold with boundary. Which patch touches which is a question for graph theory.</p>
      </div>
      <div class="math-card">
        <div class="math-card-icon">△</div>
        <h3>Fractal Geometry</h3>
        <p>Self-similar designs where a motif contains smaller copies of itself. Sierpinski triangle quilts, nested Log Cabin variations, and recursive star patterns repeat themselves at a few scales.</p>
      </div>
      <div class="math-card">
        <div class="math-card-icon">◇</div>
        <h3>Combinatorics</h3>
        <p>The Drunkard's Path unit is cut from two templates. Each of the four units in a four-patch can face four ways, which gives 4⁴ = 256 arrangements. Quilters have been working through them since the 1880s.</p>
      </div>
      <div class="math-card">
        <div class="math-card-icon">⌀</div>
        <h3>Aperiodic Tiling</h3>
        <p>Penrose tiling quilts use two shapes in a pattern that never repeats. The pinwheel tiling that John Conway and Charles Radin described in 1994 is aperiodic too, and shares its name with the quilt block.</p>
      </div>
      <div class="math-card">
        <div class="math-card-icon">φ</div>
        <h3>Golden Ratio</h3>
        <p>φ ≈ 1.618. Quilters use it for border widths, block aspect ratios, and Fibonacci spiral motifs.</p>
      </div>
    </div>

    <div class="content-split" style="margin-top: var(--space-xl);">
      <div>
        <h3>Cross-Cultural Geometry</h3>
        <p>The geometry of <span class="tooltip-trigger" data-tooltip="This page's background has a faint Otavalo ikat pattern hidden in it.">Otavalo and Quechua textiles</span> lines up with quilt block geometry. The Chakana (Andean cross) has D4 symmetry. Otavalo diamond chevrons repeat by translation. Step fret patterns use glide reflection.</p>
        <p>American quilting and Andean weaving reached the same symmetries independently, in opposite hemispheres.</p>
      </div>
      <div>
        <h3>Craft Before Theory</h3>
        <p>Evgraf Fedorov classified the 17 wallpaper groups in 1891. Quilts with many of those symmetries are older than that.</p>
      </div>
    </div>
  `;
}
