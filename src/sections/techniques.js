export function renderTechniques(container) {
  const techniques = [
    {
      name: 'Piecing',
      desc: 'The basic technique: sewing cut pieces of fabric together along seam lines. Pieces are usually geometric shapes, joined with a quarter-inch seam allowance.',
    },
    {
      name: 'Appliqué',
      desc: "Sewing smaller fabric shapes onto a larger background. Good for curved, organic shapes that are hard to piece. Can be done by hand (needle-turn) or machine.",
    },
    {
      name: 'Paper Piecing (Foundation)',
      desc: 'Sewing fabric onto a printed paper foundation in a numbered sequence. Gives very precise, sharp points, even in complex geometric designs.',
    },
    {
      name: 'English Paper Piecing',
      desc: "Fabric is wrapped and basted around cardstock templates, then whipstitched together by hand. Works well for hexagons and other awkward shapes, and it's easy to carry around.",
    },
    {
      name: 'Free-Motion Quilting',
      desc: 'Moving fabric freely under a darning foot with the feed dogs lowered, so you can stitch in any direction. Used for texture, fill, and decorative motifs.',
    },
    {
      name: 'Wholecloth Quilting',
      desc: 'A British tradition from Northumberland and Durham with no patchwork at all. A single piece of fabric is covered in dense quilted patterns, so the stitching is the whole design.',
    },
    {
      name: 'Sashiko',
      desc: 'Japanese reinforcement stitching that started with farming communities mending worn indigo workwear. Its geometric running-stitch patterns became a decorative art with hundreds of traditional designs.',
    },
    {
      name: 'Ikat (Resist-Dyeing)',
      desc: 'A resist-dyeing technique practiced from Southeast Asia to the Andes, including by Otavalo weavers. Yarn bundles are bound and dyed before weaving. The binding never blocks dye perfectly, which gives ikat its soft, feathered edges.',
    },
  ];

  container.innerHTML = `
    <div class="section-header">
      <p class="eyebrow">Techniques</p>
      <h2>How Quilts Are Made</h2>
      <p>Piecing, appliqué, quilting stitches, and dyeing, from hand-sewn hexagons to resist-dyed yarn.</p>
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
