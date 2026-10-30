export function renderTechniques(container) {
  const techniques = [
    {
      name: 'Piecing',
      desc: 'The foundational technique — sewing cut fabric pieces together along seam lines. Pieces are typically cut in geometric shapes and joined with a quarter-inch seam allowance.',
    },
    {
      name: 'Appliqué',
      desc: 'Sewing smaller fabric shapes onto a larger background. Allows curved, organic shapes that piecing cannot achieve. Can be done by hand (needle-turn) or machine.',
    },
    {
      name: 'Paper Piecing (Foundation)',
      desc: 'Sewing fabric onto a printed paper foundation following a numbered sequence. Produces extremely precise, sharp points and complex geometric designs.',
    },
    {
      name: 'English Paper Piecing',
      desc: 'Fabric is wrapped and basted around cardstock templates, then whipstitched together by hand. Ideal for hexagons and other tricky shapes. Highly portable.',
    },
    {
      name: 'Free-Motion Quilting',
      desc: 'Moving fabric freely under a darning foot with feed dogs lowered, allowing stitching in any direction. Used for texture, fill, and decorative motifs.',
    },
    {
      name: 'Wholecloth Quilting',
      desc: 'A British tradition from Northumberland and Durham — no patchwork at all. A single piece of fabric is elaborately quilted with dense patterns. The stitching skill itself is the entire art form.',
    },
    {
      name: 'Sashiko',
      desc: 'Japanese reinforcement stitching that originated with farming communities mending worn indigo workwear. Geometric running-stitch patterns became a recognized decorative art with hundreds of traditional designs.',
    },
    {
      name: 'Ikat (Resist-Dyeing)',
      desc: 'An Otavalo weaving technique where yarn bundles are bound and dyed before weaving, creating feathered-edge patterns. The imprecision of the resist creates the distinctive soft, blurred effect.',
    },
  ];

  container.innerHTML = `
    <div class="section-header">
      <p class="eyebrow">Techniques</p>
      <h2>How Quilts Are Made</h2>
      <p>From hand-stitched hexagons to Andean resist-dyeing, the methods behind the cloth.</p>
    </div>
    <div class="card-grid">
      ${techniques.map(t => `
        <div class="card">
          <div class="card-title">${t.name}</div>
          <p class="card-desc">${t.desc}</p>
        </div>
      `).join('')}
    </div>
  `;
}
