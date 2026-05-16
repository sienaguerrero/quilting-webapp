const GLOSSARY_TERMS = [
  {
    term: 'HST',
    full: 'Half-Square Triangle',
    category: 'piecing',
    definition: 'A square made of two right triangles sewn along the hypotenuse. The most fundamental pieced unit in quilting — used in Pinwheel, Bear\'s Paw, Sawtooth Star, and hundreds of other blocks.',
  },
  {
    term: 'QST',
    full: 'Quarter-Square Triangle',
    category: 'piecing',
    definition: 'A square divided by both diagonals into four triangles. Made by sewing two HSTs together and recutting. Used in Ohio Star, where four triangles meet at the center of each side unit.',
  },
  {
    term: 'EPP',
    full: 'English Paper Piecing',
    category: 'piecing',
    definition: 'A hand-sewing technique where fabric is basted over paper or cardboard templates, then whipstitched together. Produces extremely precise joins, especially for non-square shapes like hexagons. The technique dates to at least the early 18th century.',
  },
  {
    term: 'FPP',
    full: 'Foundation Paper Piecing',
    category: 'piecing',
    definition: 'A technique where fabric is sewn directly onto a paper or fabric foundation in a numbered sequence. Allows precise piecing of complex angles. The paper is removed after assembly. Used historically in Log Cabin construction.',
  },
  {
    term: 'Flying Geese',
    full: null,
    category: 'piecing',
    definition: 'A rectangular unit (2:1 ratio) composed of a large center triangle flanked by two smaller triangles. One of the few directional units in quilting. Four Flying Geese around a center square form a Sawtooth Star.',
  },
  {
    term: 'Strip Piecing',
    full: null,
    category: 'piecing',
    definition: 'A speed technique where long strips of fabric are sewn together, then crosscut into segments that are rearranged into blocks. Commonly used for Nine-Patch, Four-Patch, and Rail Fence patterns.',
  },
  {
    term: 'Chain Piecing',
    full: null,
    category: 'piecing',
    definition: 'A production technique where pairs of fabric pieces are fed through the sewing machine one after another without cutting threads between them. Saves time and thread when making many identical units.',
  },
  {
    term: 'Sashing',
    full: null,
    category: 'anatomy',
    definition: 'Strips of fabric sewn between quilt blocks to separate and frame them. Creates a lattice or grid effect. Can be plain or pieced. Sashing with contrasting cornerstones is a hallmark of many traditional quilts.',
  },
  {
    term: 'Cornerstones',
    full: null,
    category: 'anatomy',
    definition: 'Small squares placed at the intersections of sashing strips. Often in a contrasting fabric, they create a grid pattern across the quilt top.',
  },
  {
    term: 'Setting',
    full: null,
    category: 'anatomy',
    definition: 'The arrangement of blocks in a quilt top. "Straight set" places blocks in a square grid; "on-point" (diagonal set) rotates the grid 45°, requiring setting triangles at the edges. The same block can look entirely different in each arrangement.',
  },
  {
    term: 'Borders',
    full: null,
    category: 'anatomy',
    definition: 'Strips of fabric framing the quilt top. Can be plain, pieced, or appliquéd. Common border treatments include Flying Geese, Sawtooth, and piano-key borders.',
  },
  {
    term: 'Batting',
    full: null,
    category: 'construction',
    definition: 'The middle layer of a quilt sandwich, between the top and backing. Provides warmth and loft. Materials include cotton, wool, polyester, silk, and bamboo. Historical quilts often used cotton or wool; some Depression-era quilts used old blankets or feed sacks.',
  },
  {
    term: 'Binding',
    full: null,
    category: 'construction',
    definition: 'The fabric strip that finishes the raw edges of a completed quilt. Usually cut on the bias (diagonal grain) to curve smoothly around corners. The final step in quilt construction.',
  },
  {
    term: 'Quilting',
    full: null,
    category: 'construction',
    definition: 'The stitching that holds together the three layers of a quilt (top, batting, backing). Can be done by hand or machine. Quilting patterns range from simple straight lines to elaborate feathered designs.',
  },
  {
    term: 'Appliqué',
    full: null,
    category: 'construction',
    definition: 'A technique where fabric shapes are sewn onto a background fabric. Allows curved and organic designs impossible with piecing alone. Can be done by hand (needle-turn) or machine. Baltimore Album quilts are the most celebrated form.',
  },
  {
    term: 'Basting',
    full: null,
    category: 'construction',
    definition: 'Temporary stitching or pinning that holds the quilt layers together during quilting. Can use long running stitches, safety pins, or spray adhesive. Proper basting prevents shifting and puckering.',
  },
  {
    term: 'Backing',
    full: null,
    category: 'construction',
    definition: 'The bottom layer of a quilt sandwich. Traditionally a single fabric, but "pieced backs" using leftover blocks or intentional designs have a long history — some antique quilts are reversible.',
  },
  {
    term: 'Charm Quilt',
    full: null,
    category: 'historical',
    definition: 'A quilt in which every piece is cut from a different fabric — no fabric is repeated. Popular in the late 19th century as a way to showcase large fabric collections. Required careful planning and extensive fabric trading.',
  },
  {
    term: 'Friendship Quilt',
    full: null,
    category: 'historical',
    definition: 'A quilt with blocks made or signed by different people, given as a gift to mark occasions like weddings or farewells. Each maker typically signed their block with ink or embroidery. Common from the 1840s onward.',
  },
  {
    term: 'Album Quilt',
    full: null,
    category: 'historical',
    definition: 'A quilt featuring different block patterns or appliqué designs, often made by multiple contributors. Baltimore Album quilts (1840s–1850s) are the most celebrated examples, with elaborate appliqué of flowers, buildings, and patriotic symbols.',
  },
  {
    term: 'Crazy Quilt',
    full: null,
    category: 'historical',
    definition: 'An asymmetric style using irregularly shaped pieces of luxurious fabrics (silk, velvet, brocade), embellished with elaborate embroidery along seams. Peaked in the 1880s–1890s Victorian era. Despite the name, many were carefully planned compositions.',
  },
  {
    term: 'Medallion Quilt',
    full: null,
    category: 'historical',
    definition: 'A quilt design built outward from a central focal panel, surrounded by concentric borders. One of the oldest quilt formats, predating the block-based approach. Common in 18th and early 19th century quilts.',
  },
  {
    term: 'Wholecloth Quilt',
    full: null,
    category: 'historical',
    definition: 'A quilt whose top is made from a single fabric. The visual design comes entirely from the quilting stitches rather than piecing. Demands masterful quilting technique. White wholecloth quilts were traditional wedding gifts.',
  },
  {
    term: 'Freedom Quilt',
    full: null,
    category: 'historical',
    definition: 'According to tradition, a quilt made for a young man upon reaching age 21 or becoming engaged. The historical evidence for this specific custom is debated, but quilts given as coming-of-age or betrothal gifts are well documented.',
  },
];

const CATEGORIES = {
  piecing: { name: 'Piecing Techniques', order: 0 },
  anatomy: { name: 'Block & Quilt Anatomy', order: 1 },
  construction: { name: 'Quilt Construction', order: 2 },
  historical: { name: 'Historical Terms', order: 3 },
};

export function renderGlossary(container) {
  const grouped = {};
  GLOSSARY_TERMS.forEach(t => {
    if (!grouped[t.category]) grouped[t.category] = [];
    grouped[t.category].push(t);
  });

  const sortedCategories = Object.entries(CATEGORIES)
    .sort(([, a], [, b]) => a.order - b.order);

  container.innerHTML = `
    <div class="section-header">
      <h4>Reference</h4>
      <h2>Glossary</h2>
      <p>Key terms, techniques, and acronyms from the world of quilting — from piecing basics to historical quilt types.</p>
    </div>

    ${sortedCategories.map(([catId, cat]) => `
      <div class="glossary-category">
        <h3>${cat.name}</h3>
        <dl class="glossary-list">
          ${(grouped[catId] || []).map(t => `
            <div class="glossary-entry">
              <dt>
                <span class="glossary-term">${t.term}</span>
                ${t.full ? `<span class="glossary-full">${t.full}</span>` : ''}
              </dt>
              <dd>${t.definition}</dd>
            </div>
          `).join('')}
        </dl>
      </div>
    `).join('')}
  `;
}
