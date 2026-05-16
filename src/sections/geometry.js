export function renderGeometry(container) {
  container.innerHTML = `
    <div class="section-header">
      <h4>Geometry &amp; Math</h4>
      <h2>The Mathematics of Quilting</h2>
      <p>Quilters independently discovered principles that mathematicians wouldn't formalize for centuries — tessellations, symmetry groups, and transformations hiding in plain cloth.</p>
    </div>

    <div class="content-split">
      <div>
        <h3>Tessellations</h3>
        <p>Quilting relies on tessellations — repeating shapes that tile a plane without gaps or overlaps. The three regular tessellations (equilateral triangles, squares, hexagons) all appear in traditional quilt blocks. The Nine-Patch tiles with squares. Grandmother's Flower Garden tiles with hexagons. Flying Geese uses right triangles.</p>
        <p>More complex quilts achieve semi-regular and even aperiodic tessellations — Penrose tiling quilts use two rhombus shapes to create patterns that never exactly repeat.</p>
      </div>
      <div>
        <h3>The Four Transformations</h3>
        <p>A single quilt block acts as a <strong>fundamental domain</strong>. The full quilt emerges by applying rigid transformations — the only four distance-preserving transformations of the Euclidean plane:</p>
        <p><strong>Translation:</strong> repeating the block across rows and columns.<br/>
        <strong>Rotation:</strong> turning blocks 90°, 180°, or 270° to create secondary patterns.<br/>
        <strong>Reflection:</strong> flipping blocks to produce mirror-image pairs.<br/>
        <strong>Glide reflection:</strong> shifting then flipping, producing diagonal movement (visible in zigzag sashing or Streak of Lightning layouts).</p>
      </div>
    </div>

    <div class="content-split content-split--reverse">
      <div>
        <h3>Symmetry in Blocks</h3>
        <p>Different blocks exhibit different symmetry groups:</p>
        <p><strong>D4 (full square symmetry):</strong> Nine-Patch, Ohio Star, Sawtooth Star — invariant under all rotations and reflections of the square.</p>
        <p><strong>C4 (rotation only):</strong> Pinwheel — rotational symmetry without reflection. This is what gives it chirality and a sense of spin direction.</p>
        <p><strong>D6 (hexagonal):</strong> Grandmother's Flower Garden — six-fold rotational symmetry with six reflection axes.</p>
        <p><strong>No symmetry:</strong> Individual Drunkard's Path units — but four units together can produce C2, C4, or D2 patterns depending on arrangement.</p>
      </div>
      <div>
        <h3>Fibonacci Spiral</h3>
        <p>The golden ratio (φ ≈ 1.618) connects directly to quilt proportions. Border widths in golden ratio sequence, block sizing with golden rectangles, and spiral quilts based on Fibonacci-proportioned squares all produce layouts that feel "right" without the viewer knowing why.</p>
        <div class="fibonacci-spiral">
          <div class="fib-square fib-square--13"></div>
          <div class="fib-square fib-square--8"></div>
          <div class="fib-square fib-square--5"></div>
          <div class="fib-square fib-square--3"></div>
          <div class="fib-square fib-square--2"></div>
          <div class="fib-square fib-square--1a"></div>
          <div class="fib-square fib-square--1b"></div>
        </div>
        <p class="fibonacci-label">1, 1, 2, 3, 5, 8, 13 — the Fibonacci sequence in cloth</p>
      </div>
    </div>

    <h3>Connections to Mathematical Fields</h3>
    <div class="math-card-grid">
      <div class="math-card">
        <div class="math-card-icon">⬡</div>
        <h3>Group Theory</h3>
        <p>The 17 wallpaper groups classify all possible repeating planar patterns. Quilt layouts can represent each one — quilters discovered all 17 independently.</p>
      </div>
      <div class="math-card">
        <div class="math-card-icon">◯</div>
        <h3>Topology</h3>
        <p>How block connectivity creates continuous surfaces. A quilt top is topologically a 2-manifold — the study of which patches connect to which is pure topology.</p>
      </div>
      <div class="math-card">
        <div class="math-card-icon">△</div>
        <h3>Fractal Geometry</h3>
        <p>Self-similar designs where a motif contains smaller copies of itself. Sierpinski triangle quilts, nested Log Cabin variations, and recursive star patterns all exhibit fractal properties.</p>
      </div>
      <div class="math-card">
        <div class="math-card-icon">◇</div>
        <h3>Combinatorics</h3>
        <p>The Drunkard's Path: two templates, sixteen orientations per four-patch, hundreds of distinct layouts. A problem in combinatorics that quilters have explored for centuries.</p>
      </div>
      <div class="math-card">
        <div class="math-card-icon">⌀</div>
        <h3>Aperiodic Tiling</h3>
        <p>Penrose tiling quilts use two shapes to create patterns that never repeat. Conway and Radin's 1994 "pinwheel tiling" — named after the quilt block — is aperiodic.</p>
      </div>
      <div class="math-card">
        <div class="math-card-icon">φ</div>
        <h3>Golden Ratio</h3>
        <p>φ ≈ 1.618 governs proportions that feel naturally balanced. In quilting: border-width progressions, block aspect ratios, and the Fibonacci spiral as a quilting motif.</p>
      </div>
    </div>

    <div class="content-split" style="margin-top: var(--space-xl);">
      <div>
        <h3>Cross-Cultural Geometry</h3>
        <p>The geometric pattern language in <span class="tooltip-trigger" data-tooltip="This page's background carries a hidden Otavalo ikat pattern at very low opacity — a nod to the textile tradition that inspired these observations.">Otavalo and Quechua textiles</span> maps beautifully to quilt block geometry. The Chakana (Andean cross) exhibits D4 symmetry. Otavalo diamond chevrons are translation-symmetric. Step fret patterns embody glide reflection.</p>
        <p>Two traditions — American quilting and Andean weaving — arrived at the same mathematical structures independently, from opposite hemispheres. The geometry is universal; only the materials and methods differ.</p>
      </div>
      <div>
        <h3>Why It Matters</h3>
        <p>Quilters were doing group theory before Évariste Galois was born. They were tiling planes before Roger Penrose. They were exploring combinatorics before the field had a name.</p>
        <p>This isn't retrospective math imposed on a craft — it's evidence that mathematical intuition is deeply human. The hands that piece fabric know things about symmetry and space that the mind discovers later through abstraction.</p>
      </div>
    </div>
  `;
}
