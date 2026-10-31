import { buildBlockPattern, applyPalette, buildFabricPicker } from './block-patterns';
import { CSS_SNIPPETS, snippetDemoHtml } from './block-css-snippets';

const BLOCKS = [
  {
    id: 'log-cabin',
    name: 'Log Cabin',
    cssClass: 'log-cabin',
    era: 'c. 1860s',
    origin: 'American / British Isles',
    tag: 'origin',
    difficulty: 'Beginner',
    summary: 'Strips spiral around a red center square. The real magic is in the settings: Barn Raising, Straight Furrow, Courthouse Steps.',
    history: `The Log Cabin block is among the most iconic patterns in American quiltmaking. Its earliest documented appearances date to the 1860s, with surviving examples from the Civil War era, though some historians trace the technique to older British Isle patchwork — Janet Rae documents Log Cabin quilts from the Isle of Man (called "The Roof Pattern") that may predate 1850.

The block gained enormous popularity during Abraham Lincoln's 1860 presidential campaign, when his "log cabin" origin story became a powerful political symbol. Barbara Brackman traces the earliest known written reference to a "log cabin quilt" to 1863, at the Ohio State Fair.`,
    construction: `Strips of fabric are sewn sequentially around a central square, building outward in a spiral. Traditionally, the center square is red, symbolizing the hearth of the home — though Brackman notes that early instructions (e.g., an 1885 how-to) specified a black velvet center instead. One half of the block uses light fabrics and the other half dark, creating a diagonal division.

Log Cabin quilts were frequently "foundation-pieced" — sewn directly onto a muslin base rather than assembled from free-standing blocks. Many antique Log Cabin quilts were never actually quilted in the traditional sense; they were tied or used as single-layer spreads.`,
    geometry: `A single block has bilateral symmetry along its diagonal axis. When tiled in a Barn Raising configuration, the resulting quilt displays fourfold rotational symmetry (D4). Common settings include Barn Raising (concentric diamonds), Straight Furrow (diagonal stripes), and Courthouse Steps (strips added to opposite sides rather than spiraling).`,
    sources: [
      'Barbara Brackman, <em>Encyclopedia of Pieced Quilt Patterns</em> (AQS, 1993; 3rd ed. 2021). Pattern dating, named settings, foundation-piecing classification.',
      'Janet Rae, <em>The Quilts of the British Isles</em> (Dutton, 1987). Isle of Man "Roof Pattern" examples predating 1850; British foundation-piecing origins.',
      'Metropolitan Museum of Art, "Quilt, Log Cabin pattern, Straight Furrow variation" (accession 1974, Lancaster County, PA, ca. 1875).',
      'International Quilt Study Center & Museum, <em>Design Dynamics of Log Cabin Quilts</em> exhibition catalog (University of Nebraska-Lincoln).',
      'Barbara Brackman, "Log Cabin — How Old Is the Name?" <em>Material Culture</em> blog, March 2010. Earliest 1863 reference; Lincoln campaign connection.',
    ],
  },
  {
    id: 'nine-patch',
    name: 'Nine-Patch',
    cssClass: 'nine-patch',
    era: 'c. 1790s',
    origin: 'Mid-Atlantic America',
    tag: 'origin',
    difficulty: 'Beginner',
    summary: 'The most fundamental pieced block — nine equal squares in a 3×3 grid. The ancestor of Irish Chain, Shoo Fly, Churn Dash, and dozens more.',
    history: `The Nine-Patch is arguably the most fundamental pieced quilt block in the Anglo-American tradition. The Smithsonian holds multiple documented examples from the 1790s, including a Nine-Patch pieced quilt (NMAH 556252, 1790–1810) and the Copp Family quilt (NMAH 556288), donated from a Connecticut family.

Because it requires only small pieces of fabric, the Nine-Patch was ideal for using scraps and became closely associated with frontier resourcefulness. In enslaved communities and among economically marginalized quilters, it was a staple due to its material efficiency.`,
    construction: `Nine equal squares arranged in a three-by-three grid, typically alternating fabrics in a checkerboard pattern. The modern efficient method uses strip piecing — sewing three strips together, cutting them into segments, and rearranging. Eleanor Burns popularized this technique through her "Quilt in a Day" pattern books.

The block generated an enormous family of derivatives: the Double Nine-Patch nests smaller units within the larger grid. Irish Chain, Shoo Fly, and Churn Dash all conform to the same 3×3 underlying structure.`,
    geometry: `The block has the full symmetry of the square (D4) — invariant under 90° rotations and reflections along both axes and both diagonals, provided the coloring is symmetric. It tessellates as a simple square grid. Alternating Nine-Patch blocks with plain squares produces the Single Irish Chain, a secondary design that emerges at the quilt level.`,
    sources: [
      'Smithsonian NMAH, "Nine-patch" Pieced Quilt, 1790–1810 (NMAH 556252). Also: Copp Family "Nine-patch" Pieced Quilt (NMAH 556288).',
      'Barbara Brackman, <em>Encyclopedia of Pieced Quilt Patterns</em> (AQS, 1993; 3rd ed. 2021). Nine-Patch family classification including Irish Chain (earliest 1814), Shoo Fly, Churn Dash.',
      'Patricia Cox Crews & Carolyn Ducey, eds., <em>American Quilts in the Industrial Age, 1760–1870</em> (University of Nebraska Press, 2018).',
      'Roderick Kiracofe, <em>The American Quilt: A History of Cloth and Comfort, 1750–1950</em> (Clarkson Potter, 1993; rev. 2004). Nine-Patch in African American quilting traditions.',
      'Eleanor Burns, <em>Glorified Nine-Patch Quilt</em> (Quilt in a Day). Strip-piecing method popularization.',
    ],
  },
  {
    id: 'flying-geese',
    name: 'Flying Geese',
    cssClass: 'flying-geese',
    era: 'c. 1830s',
    origin: 'America / Britain',
    tag: 'origin',
    difficulty: 'Beginner',
    summary: 'Rectangular units in a 2:1 ratio that always point somewhere — one of the few directional blocks in quilting.',
    history: `Flying Geese is built from rectangular units, each composed of a large triangle flanked by two smaller right triangles. Museum-documented examples include a Smithsonian quilt (object 36888, ca. 1845–1850) and a Metropolitan Museum piece from the 19th century. The pattern's directional quality — always pointing somewhere — made it a favorite for borders and sashing.

The pattern is linked to the Underground Railroad quilt code theory (signaling "a time to travel north"), though Barbara Brackman's <em>Facts and Fabrications</em> (2006) demonstrates that several cited patterns didn't exist in their named forms during the height of the Underground Railroad.`,
    construction: `The standard unit is twice as wide as it is tall (2:1 ratio). Construction traditionally involved cutting individual triangles, requiring careful bias-edge management. Modern quilters use the "no-waste" method that produces four units simultaneously from one large square and four small squares.

Four Flying Geese arranged around a center square produce the Variable Star or Sawtooth Star — making it one of the most generative building blocks in patchwork.`,
    geometry: `The individual unit has bilateral symmetry along its vertical axis. The large triangle is isosceles right, and the two smaller triangles are its complements. It does not tile the plane alone in a single orientation but requires alternating orientations or combination with squares. When arranged in rows, the pattern creates a strong directional vector.`,
    sources: [
      'Smithsonian American Art Museum, "Pieced quilt (Flying Geese)," ca. 1845–1850 (object 36888). Metropolitan Museum of Art, "Quilt, Flying Geese pattern" (accession 13881).',
      'Jinny Beyer, <em>The Quilter\'s Album of Patchwork Patterns</em> (Breckling Press, 2009). 2:1 ratio, Sawtooth Star derivation, historical dating.',
      'Jacqueline L. Tobin & Raymond G. Dobard, <em>Hidden in Plain View</em> (Doubleday, 1999). Underground Railroad theory (primary source).',
      'Barbara Brackman, <em>Facts and Fabrications: Unraveling the History of Quilts and Slavery</em> (C&T Publishing, 2006). Counter-assessment of the quilt code theory.',
      'Smithsonian Center for Folklife & Cultural Heritage, "Underground Railroad Quilt Codes: What We Know, What We Believe, and What Inspires Us."',
    ],
  },
  {
    id: 'pinwheel',
    name: 'Pinwheel',
    cssClass: 'pinwheel',
    era: 'c. 1812',
    origin: 'America / British "whirligig" family',
    tag: 'origin',
    difficulty: 'Beginner',
    summary: 'Four half-square triangles creating rotational motion. Has chirality — it spins clockwise or counterclockwise but can\'t be both.',
    history: `The Pinwheel is among the oldest pieced patterns, with a Smithsonian example (NMAH 556402) made by women of the Adams family during the War of 1812 — pushing documented use back further than the commonly cited 1830s. The block suggests motion: wind, play, the turning of seasons. It became a favorite for children's quilts.

In 1994, mathematicians John Conway and Charles Radin described the "pinwheel tiling," an aperiodic tiling of the plane using right triangles. While geometrically distinct from the quilt block, the naming was a direct nod to the quilting pattern's rotational quality.`,
    construction: `A four-patch block where each quarter is a half-square triangle unit — two right triangles sewn along their hypotenuse. The four units are arranged so same-color triangles all point in the same rotational direction, producing the windmill effect. Precision is critical; even small errors compound across the four units.

Variations include the Double Pinwheel (nested), Flutter Wheel (elongated blades), and Dutchman's Puzzle (four pinwheel units creating secondary rotational patterns).`,
    geometry: `The Pinwheel has C4 rotational symmetry but lacks reflection symmetry — this is what gives it chirality and a sense of direction. When tessellated, blocks of alternating rotation create zigzag lattices, while same-rotation blocks generate diagonal rivers of color. The block's proportions are rooted in the isosceles right triangle.`,
    sources: [
      'Barbara Brackman, <em>Encyclopedia of Pieced Quilt Patterns</em> (AQS, 1993; 3rd ed. 2020). Pinwheel-type blocks in sources dating to the 1830s.',
      'Smithsonian NMAH, "1812–1814 \'Pinwheel\' Quilt" (NMAH 556402). Adams family, War of 1812.',
      'Charles Radin, "The Pinwheel Tilings of the Plane," <em>Annals of Mathematics</em>, vol. 139, no. 3 (May 1994), pp. 661–702.',
      'Barbara Brackman, <em>Clues in the Calico: A Guide to Identifying and Dating Antique Quilts</em> (EPM Publications, 1989).',
    ],
  },
  {
    id: 'ohio-star',
    name: 'Ohio Star',
    cssClass: 'ohio-star',
    era: 'c. 1820s',
    origin: 'Ohio / Upper Midwest',
    tag: 'origin',
    difficulty: 'Intermediate',
    summary: 'Published under a dozen names including "Tippecanoe and Tyler Too." A nine-patch with quarter-square triangle points.',
    history: `The Ohio Star is one of the most recognizable blocks in American patchwork, with examples dating to the 1820s. The pattern has been published under at least a dozen names — Variable Star, Eastern Star, and "Tippecanoe and Tyler Too" (after the 1840 presidential campaign). This profusion reflects the decentralized oral tradition through which patterns were transmitted before printed catalogs.

In Ohio, it became something of a state emblem in quilting circles, appearing in presentation quilts and friendship quilts made to mark weddings or westward departures. Star quilts were used at antislavery fundraising fairs in the 1830s–1850s.`,
    construction: `A nine-patch grid: four corner squares, a center square, and four side units. The side units are quarter-square triangles (two HST units sewn together to form four triangles in a square). These create the four diamond-shaped star points. Construction requires careful grain-line attention, as QST units involve both straight-grain and bias edges.

Variations include the Swamp Angel (secondary star in center), Rolling Star (rotating points), and at larger scales, the Blazing Star and Broken Star.`,
    geometry: `D4 symmetry — the full symmetry group of the square, with four rotations and four reflections. More symmetric than the Pinwheel. When set edge to edge, QST units of adjacent blocks merge to form larger diamond or hourglass shapes, producing secondary patterns.`,
    sources: [
      'Barbara Brackman, <em>Encyclopedia of Pieced Quilt Patterns</em> (AQS, 1993; 3rd ed. 2020). Pattern Category 9: Equal Nine Patch Block.',
      'Carrie A. Hall & Rose G. Kretsinger, <em>The Romance of the Patchwork Quilt in America</em> (Caxton Printers, 1935). First comprehensive pattern index; "Variable Star" and "Ohio Star" entered the canonical lexicon.',
      'Smithsonian NMAH, "1850–1900 \'Ohio Star\' Pieced Quilt" (NMAH 642504).',
      'Robert Shaw, <em>American Quilts: The Democratic Art, 1780–2007</em> (Sterling, 2009). Political campaign quilts context.',
      'International Quilt Museum, University of Nebraska-Lincoln. Ohio Star quilt (accession 2008.003.0002).',
    ],
  },
  {
    id: 'bears-paw',
    name: "Bear's Paw",
    cssClass: 'bears-paw',
    era: 'c. 1820s–1840s',
    origin: 'Appalachian frontier',
    tag: 'origin',
    difficulty: 'Intermediate',
    summary: 'A literal bear track: central pad, stems, and toe clusters with claw-like triangle points. Same geometry, different names by community.',
    history: `The Bear's Paw is directly tied to frontier life — the name and design appear from the 1840s in regions where bear encounters were real. The earliest dated sawtooth ancestor is 1823. The block's imagery is literal: a central pad with surrounding toe impressions.

The same geometry was called "Bear's Paw" in Ohio (due to bear stories), "Duck's Foot in the Mud" on Long Island (due to ducks), and "Hand of Friendship" among Philadelphia Quakers. This phenomenon — identical geometry, divergent names — is one of the most characteristic features of American quilt pattern tradition.`,
    construction: `A compound block typically on a 5×5 or 7×7 grid. Features a large center square (the pad), four rectangular stems, and four corner toe clusters. Each toe cluster consists of a small square flanked by half-square triangle units creating claw-like points. The main challenge is ensuring toe units align with stems for a clear paw shape.

Related patterns: Cat's Paw (smaller scale), Bear's Tracks (simplified), Goose Tracks (elongated).`,
    geometry: `D4 symmetry when all four paw clusters are identical, though quilters sometimes introduce color asymmetry to distinguish toes, reducing to C4. Popular with sashing strips that create a lattice suggesting a trail of paw prints. Without sashing, adjacent blocks merge toe clusters into secondary pinwheel-like formations.`,
    sources: [
      'Barbara Brackman, <em>Encyclopedia of Pieced Quilt Patterns</em> (AQS, 1993; 3rd ed. 2020). Four Bear\'s Paw variations documented.',
      'Womenfolk.com quilt history project. Earliest sawtooth version dated 1823; regional naming documented: "Bear\'s Paw" (Ohio), "Duck\'s Foot in the Mud" (Long Island), "Hand of Friendship" (Philadelphia Quakers).',
      'International Quilt Museum, "Bear\'s Paw" quilt, 1874, by Clara Bontrager, Holmes County, Ohio.',
      'Barbara Smith & Marjorie L. Russell, <em>Bear\'s Paw: New Quilts from an Old Favorite</em> (AQS, 2001).',
      'Carrie A. Hall & Rose G. Kretsinger, <em>The Romance of the Patchwork Quilt in America</em> (Caxton Printers, 1935).',
    ],
  },
  {
    id: 'drunkards-path',
    name: "Drunkard's Path",
    cssClass: 'drunkards-path',
    era: 'c. 1880s',
    origin: 'America / Britain',
    tag: 'origin',
    difficulty: 'Intermediate–Advanced',
    summary: 'One of the few traditional blocks built entirely from curves. Just two templates, but sixteen orientations produce hundreds of distinct layouts.',
    history: `The Drunkard's Path is built from just two pieces: a quarter-circle and its concave complement. First published as "Wanderer's Path in the Wilderness" in Farm and Home magazine in 1888, and cataloged by the Ladies' Art Company as "Drunkard's Patchwork" (No. 243) around 1895–1897.

The block is popularly associated with the Women's Christian Temperance Union, but Barbara Brackman found no documented evidence that the WCTU actually adopted this pattern. The temperance connection appears to be a later interpretive tradition rather than established historical fact.`,
    construction: `Sewing a convex curve to a concave curve requires careful clipping of seam allowances and pinning — making this intermediate to advanced. The curved seam is what gives the block its character. The block also traveled under aliases including Robbing Peter to Pay Paul, Wonder of the World, and Solomon's Puzzle.

Pepper Cory documented 80+ variations achievable from the same two templates.`,
    geometry: `A single unit has no rotational symmetry, but the four-unit block can produce patterns with two-fold or four-fold symmetry depending on orientation. Sixteen distinct orientations are possible within a standard four-patch, yielding hundreds of visually distinct layouts — a problem in combinatorics that quilters and mathematicians have cataloged since the 1970s.`,
    sources: [
      'Barbara Brackman, <em>Encyclopedia of Pieced Quilt Patterns</em> (AQS, 1993; 3rd ed. 2020). 14+ aliases documented.',
      'Barbara Brackman, "Drunkard\'s Path Quilts, T Quilts, and the WCTU" — Quilt Index and Material Culture blog, 2016. No documented WCTU adoption evidence.',
      'Pepper Cory, <em>65 Drunkard\'s Path Quilt Designs</em> (Dover, 1999). Two-template system, 80+ variations, English origins.',
      'World Quilts: The American Story, "Temperance" — International Quilt Study Center & Museum.',
      'Earliest publication: "Wanderer\'s Path in the Wilderness," <em>Farm and Home</em>, 1888. Ladies\' Art Company No. 243, c. 1895–1897.',
    ],
  },
  {
    id: 'sawtooth-star',
    name: 'Sawtooth Star',
    cssClass: 'sawtooth-star',
    era: 'c. 1830s',
    origin: 'Eastern United States',
    tag: 'origin',
    difficulty: 'Beginner–Intermediate',
    summary: 'Eight jagged triangular points radiating from a center square. Built from half-square triangles — the workhorse unit of all patchwork.',
    history: `The Sawtooth Star has been documented from the 1830s–1840s, with a Smithsonian example (NMAH 642532) cataloged as "Evening Star (Sawtooth Star)" using roller-printed cottons from that era. The name "Sawtooth Star" first appeared in Farm and Fireside Magazine in 1884.

The Kansas City Star published weekly quilt patterns from 1928 through 1961, making star variations ubiquitous across the Midwest. Brackman's <em>The Kansas City Star Quilts Sampler</em> documents this pattern-column legacy.`,
    construction: `A center square surrounded by four corner squares and four rectangular side units, each side unit containing two half-square triangles forming the star points. Accessible to beginners while offering design richness through fabric placement. Points read clearly only with strong value contrast between star and background.

Closely related to the Ohio Star (which uses quarter-square triangles for its points), the Variable Star, Evening Star, and LeMoyne Star.`,
    geometry: `D4 dihedral symmetry — four-fold rotational symmetry plus four reflection axes. Tessellates on a square grid. When set side by side, triangular points of adjacent blocks create secondary patterns at intersections.`,
    sources: [
      'Smithsonian NMAH, "1840–1860 \'Evening Star\' Pieced Quilt" (NMAH 642532).',
      'Barbara Brackman, <em>Encyclopedia of Pieced Quilt Patterns</em> (AQS, 1993; 3rd ed. 2020). First named "Sawtooth Star" in Farm and Fireside Magazine, 1884.',
      'International Quilt Museum (catalog no. 1997.007.0281).',
      'Barbara Brackman, <em>The Kansas City Star Quilts Sampler: 60+ Blocks from 1928–1961</em> (C&T Publishing, 2018).',
      'Jinny Beyer, <em>The Quilter\'s Album of Patchwork Patterns</em> (Breckling Press, 2009).',
    ],
  },
  {
    id: 'grandmothers-flower-garden',
    name: "Grandmother's Flower Garden",
    cssClass: 'grandmothers-flower-garden',
    era: 'c. 1770s (hex), 1920s (name)',
    origin: 'Britain → America',
    tag: 'origin',
    difficulty: 'Intermediate',
    summary: 'Hexagonal rosettes via English paper piecing. The most-made pattern of the Depression era. Paper templates inside surviving quilts are accidental time capsules.',
    history: `The most iconic hexagonal patchwork pattern descends from British paper-piecing traditions. Hexagonal patchwork appears in surviving British quilts from as early as the 1770s. The 1718 Silk Patchwork Coverlet (Quilt Museum, York) establishes the paper-piecing technique even earlier. The specific name "Grandmother's Flower Garden" entered American usage during the 1920s–1930s.

It was arguably the single most-made quilt pattern of the Depression era — a 1932 estimate counted 200 being made in Ruston, Louisiana alone. Its popularity stemmed partly from its compatibility with small scraps and requiring no sewing machine.`,
    construction: `Each hexagon is basted over a paper template, and the fabric-wrapped pieces are whipstitched together by hand. This English paper piecing method produces sharp points and precise joins difficult to achieve by machine. Papers are removed after assembly — but surviving quilts sometimes still contain them, including datable letters, newspaper clippings, and catalog pages.

Godey's Lady's Book published the first American hexagon pattern in 1835.`,
    geometry: `The regular hexagon is one of only three regular polygons (along with the square and equilateral triangle) that tile the Euclidean plane without gaps. The resulting tessellation has six-fold rotational symmetry (D6). Rosettes are typically arranged as a central hexagon surrounded by concentric rings.`,
    sources: [
      'Quilters\' Guild of the British Isles, The 1718 Silk Patchwork Coverlet. Also: Susan Briscoe, <em>The 1718 Coverlet</em> (David & Charles, 2014). EPP technique by early 18th century.',
      'Ruth Finley, <em>Old Patchwork Quilts and the Women Who Made Them</em> (J.B. Lippincott, 1929). "The Honeycomb" naming.',
      'Merikay Waldvogel, <em>Soft Covers for Hard Times: Quiltmaking and the Great Depression</em> (Rutledge Hill Press, 1990). Depression-era popularity.',
      'International Quilt Study Center & Museum, Grandmother\'s Flower Garden quilt by Carrie Stelzer, 1931–1934 (catalog no. 1999.6.1).',
      'Victoria and Albert Museum, "An Introduction to Quilting and Patchwork." Paper templates as time capsules. Godey\'s Lady\'s Book first American hexagon pattern, 1835.',
    ],
  },
  {
    id: 'jacobs-ladder',
    name: "Jacob's Ladder",
    cssClass: 'jacobs-ladder',
    era: 'c. 1850s–1880s',
    origin: 'American (westward migration)',
    tag: 'origin',
    difficulty: 'Beginner',
    summary: "A Nine-Patch of alternating Four-Patch checkerboards and identically oriented HSTs that, when tiled, create diagonal chains — the ladder.",
    history: `Jacob's Ladder appears in American quilt pattern publications by the mid-to-late nineteenth century and was well established by the 1880s–1890s. The name references the biblical story of Jacob's dream (Genesis 28:12). It carries numerous regional alternate names: "Stepping Stones," "Trail of the Covered Wagon," "Road to California," "Underground Railroad," "Wagon Tracks," and "The Tail of Benjamin's Kite." The western-migration names likely emerged as settlers carried the pattern along overland routes in the mid-1800s.

The name "Underground Railroad" has drawn the block into the quilt code theory — the claim that enslaved people used specific quilt patterns hung on clotheslines as navigational signals. Barbara Brackman, in her research and in context with her <em>Encyclopedia of Pieced Quilt Patterns</em> (1993), has shown this theory to be unsubstantiated. No primary-source evidence from the antebellum period supports it; the theory traces primarily to the 1999 book <em>Hidden in Plain View</em> by Tobin and Dobard, which relied on a single oral account. The scholarly quilting community generally considers the code theory a modern legend rather than documented history.`,
    construction: `Jacob's Ladder is traditionally pieced using two sub-unit techniques. The five Four-Patch units are efficiently made with strip piecing: two strips of contrasting fabric are sewn together, crosscut into segments, then paired and sewn into checkerboard squares. The four HST units are made by pairing light and dark squares, drawing a diagonal line, sewing on both sides, and cutting apart. After trimming all sub-units to size, the nine cells are arranged in the 3×3 layout and sewn in rows. Pressing seams in alternating directions allows seams to nest for flat intersections.`,
    geometry: `The individual block has D2 (dihedral-2) symmetry — symmetric under 180° rotation but not 90° rotation, due to the uniform HST orientation. When blocks are set side-by-side, the HSTs align across block boundaries to form continuous diagonal chains (the "ladder"), while the Four-Patches create a secondary checkerboard grid. This tiling produces a strong visual diagonal movement from corner to corner across the quilt surface.`,
    sources: [
      'Barbara Brackman, <em>Encyclopedia of Pieced Quilt Patterns</em> (AQS, 1993; 3rd ed. 2021). Pattern classification and regional naming.',
      'Barbara Brackman, <em>Facts and Fabrications: Unraveling the History of Quilts and Slavery</em> (C&T Publishing, 2006). Debunking of the Underground Railroad quilt code theory.',
      'International Quilt Museum, University of Nebraska-Lincoln. Collection and educational resources on American quilt pattern history.',
      'Jacqueline L. Tobin & Raymond G. Dobard, <em>Hidden in Plain View</em> (Doubleday, 1999). Primary source for the quilt code claim; included for balance.',
      'Jinny Beyer, <em>The Quilter\'s Album of Patchwork Patterns</em> (Breckling Press, 2009).',
    ],
  },
  {
    id: 'monkey-wrench',
    name: "Monkey Wrench",
    cssClass: 'monkey-wrench',
    era: 'c. 1830s',
    origin: 'American (multiple regions)',
    tag: 'origin',
    difficulty: 'Beginner–Intermediate',
    summary: "A nine-patch block with half-square triangle corners and split side bars surrounding a center square — closely related to the Churn Dash.",
    history: `The Monkey Wrench belongs to the Churn Dash family of nine-patch blocks, all sharing the same structure: HST corners, rectangular side units, and a center square. The name refers to the adjustable wrench tool, and the block's dark cross shape with triangular extensions loosely evokes its silhouette.

The "Monkey Wrench" name gained attention through the Underground Railroad quilt code theory, which claimed the pattern signaled enslaved people to "gather their tools" before escaping north. Barbara Brackman's research has shown no primary-source evidence supports this claim. The theory derives from the 1999 book <em>Hidden in Plain View</em> by Tobin and Dobard, and is considered by quilt historians to be a modern legend. Note: some sources use "Monkey Wrench" as an alternate name for the Snail's Trail block — these are distinct patterns.`,
    construction: `A nine-patch (3×3) grid. The four corners are half-square triangles with the dark triangle pointing toward the block center. The four side units are rectangles split in half — the inner half matching the center color, the outer half matching the background. The center is a solid square. Strip piecing the side units and batch-sewing HSTs makes this an efficient block to produce in quantity.`,
    geometry: `The block has D4 symmetry (four reflection axes and 90° rotational symmetry). The dark areas form a cross or plus shape that extends to the corners via the HSTs. When tiled without sashing, the background triangles and outer bar halves merge to create secondary patterns — chains, lattices, or pinwheels depending on block orientation.`,
    sources: [
      'Barbara Brackman, <em>Encyclopedia of Pieced Quilt Patterns</em> (AQS, 1993; 3rd ed. 2021). Churn Dash family variants including Monkey Wrench.',
      'Barbara Brackman, <em>Facts and Fabrications: Unraveling the History of Quilts and Slavery</em> (C&T Publishing, 2006). Critique of the quilt code theory.',
      'Ruby Short McKim, <em>One Hundred and One Patchwork Patterns</em> (McKim Studios, 1931). Early pattern publication.',
      'International Quilt Museum, University of Nebraska-Lincoln. Collection and educational resources on American quilt pattern history.',
    ],
  },
  {
    id: 'snails-trail',
    name: "Snail's Trail",
    cssClass: 'snails-trail',
    era: 'c. 1830s–1850s',
    origin: 'American (multiple regions)',
    tag: 'origin',
    difficulty: 'Intermediate',
    summary: "Concentric half-square triangles create a mesmerizing spiral — also known as Indiana Puzzle and Virginia Reel.",
    history: `The Snail's Trail block is documented under numerous names across American quilting traditions. Other names include "Indiana Puzzle," "Virginia Reel," and occasionally "Monkey Wrench" — though this last name more commonly refers to a Churn Dash variant (a nine-patch with HST corners and side bars).

The block's spiral visual effect, created by concentric rotating half-square triangles, has made it a favorite for quilters exploring optical illusion and movement. When multiple blocks are tiled, the spirals interlock to produce striking secondary patterns.`,
    construction: `The block is built from concentric rings of half-square triangles around a central four-patch. Each ring consists of two large triangles that, when combined with the previous ring, create a step in the spiral. The triangles are oriented so that each successive ring rotates 90° from the last, producing the characteristic winding effect.

Construction typically starts from the center out. The center four-patch is made first, then successively larger triangle pairs are added. Accurate cutting and pressing are important — the multiple bias edges created by the HSTs can cause distortion. Modern quilters often use foundation paper piecing (FPP) for precision.`,
    geometry: `The block has C4 rotational symmetry and, like the Pinwheel, exhibits chirality — it can spiral clockwise or counterclockwise but not both. This makes it one of the few traditional quilt blocks with a definite "handedness." When tiled, same-chirality blocks create continuous spiraling rivers of color; alternating-chirality blocks produce complex interlocking patterns.`,
    sources: [
      'Barbara Brackman, <em>Encyclopedia of Pieced Quilt Patterns</em> (AQS, 1993; 3rd ed. 2021). Multiple aliases: Snail\'s Trail, Indiana Puzzle, Virginia Reel.',
      'Jacqueline L. Tobin & Raymond G. Dobard, <em>Hidden in Plain View</em> (Doubleday, 1999).',
      'Jinny Beyer, <em>The Quilter\'s Album of Patchwork Patterns</em> (Breckling Press, 2009).',
      'International Quilt Museum, University of Nebraska-Lincoln. Collection and educational resources on American quilt pattern history.',
    ],
  },
];

const ANDEAN_BLOCKS = [
  {
    id: 'chakana',
    name: 'Chakana (Andean Cross)',
    cssClass: 'chakana',
    era: 'Pre-Columbian',
    origin: 'Andean / Inca',
    tag: 'andean',
    difficulty: 'Intermediate',
    summary: 'The stepped cross found throughout Andean textiles — a cosmological map encoding the three planes of existence, the four cardinal directions, and the principle of yanantin (sacred duality).',
    history: `The Chakana is one of the most enduring symbols in Andean civilization, appearing on stone carvings, ceramics, and textiles from the Chavin culture (c. 900 BCE) through the Tiwanaku and Wari empires to the Inca and present-day Quechua communities. The word comes from Quechua "chakay" (to cross or bridge), reflecting its role as a bridge between worlds.

The cross encodes a complete cosmological model. Its three stepped levels represent the three planes of Andean existence: Ukhu Pacha (the inner/underworld, realm of the dead, seeds, and the serpent Amaru), Kay Pacha (this world, the realm of human life, governed by the puma), and Hanaq Pacha (the upper world, realm of celestial beings, governed by the condor Kuntur). The hole at the center represents Cusco, the "navel of the world" in Inca cosmography.

The Chakana also aligns with the Southern Cross constellation, which was central to Andean agricultural calendars. Its 12 points correspond to the months of the year. The four main arms point to the solstices and equinoxes, making the symbol a functional astronomical tool woven into fabric.`,
    symbolism: `The Chakana embodies yanantin, the Andean principle of sacred duality. Day and night, male and female, earth and sky, life and death: these complementary opposites find expression in the cross's perfect geometric symmetry. Each half mirrors the other, but both are necessary for wholeness.

In the tocapu tradition, a system of checkerboard grids filled with geometric symbols that function as a visual "language," the Chakana holds a special status as a master symbol. When woven into a manta (shoulder cloth), its placement and size communicate the weaver's spiritual authority and community standing. A weaver creating a Chakana textile is performing a ritual act, not merely craft.`,
    construction: `In traditional weaving, the Chakana is produced using a counted-thread technique on a backstrap loom. Each step must be precisely counted against the warp threads, typically one or two threads per step. Master weavers in communities like Chinchero and Pisac learn the Chakana as one of their foundational patterns, with each community maintaining its own proportional variations.

In quilting, the Chakana can be pieced on a fine grid (typically 7x7 or 9x9 underlying squares). Each "step" is one grid unit. The cross decomposes into a central square plus four identical L-shaped arms, making it well-suited to rotary cutting and strip piecing.`,
    geometry: `The Chakana has the full symmetry of the square, the dihedral group D4, meaning it is invariant under 90-degree rotations and reflections along both axes and both diagonals. This D4 symmetry is itself an expression of yanantin, the principle of complementary balance.

The stepped edges are a discrete approximation of a 45-degree diagonal line. On a grid of resolution n, each step is 1 unit wide and 1 unit tall, producing an overall slope of 1. The cross tessellates in a square grid, with the negative space between adjacent Chakanas forming interlocking Greek-cross shapes.`,
    sources: [
      'Mosqoy, "Textile Symbols." Chakana as cosmological bridge, three-world model, weaving as ritual practice.',
      'Threads of Peru, "Quechua Symbols &amp; Patterns." Chinchero and Pisac community variations, counted-thread technique.',
      'Arms of Andes, "Sacred Andean Textiles: Symbols, Stories &amp; Cultural Meaning." Yanantin principle, tocapu tradition, textile identity coding.',
      'Library of Congress, "Weaving Community Narratives: Andean Histories." Tiwanaku and Wari textile precedents, astronomical alignment.',
      'Metropolitan Museum of Art, "Andean Textiles." Pre-Columbian examples, Southern Cross alignment, agricultural calendar correspondence.',
      'Allpamamas, "Sacred Weaving." Ritual significance of weaving practice, community transmission of patterns.',
    ],
  },
  {
    id: 'diamond-chevron',
    name: 'Diamond Chevron (Otavalo Faja)',
    cssClass: 'diamond-chevron',
    era: 'Pre-Columbian',
    origin: 'Otavalo, Ecuador',
    tag: 'andean',
    difficulty: 'Intermediate',
    summary: 'Nested diamonds in the style of Otavalo belt (faja) patterns. Diamonds represent qocha (lakes), a symbol of abundance and harvest readiness in Andean thought.',
    history: `The diamond is among the most universal geometric motifs in Andean textiles, found from southern Peru to highland Ecuador. In the Otavalo region of Ecuador, diamond patterns are central to the faja, a woven belt worn daily by both men and women as a core element of indigenous identity. The Otavalo textile market, held every Saturday in the Plaza de Ponchos, is one of the largest indigenous markets in South America and has been a center of textile trade for centuries.

Otavalo weavers work on both backstrap looms (traditional) and treadle looms (introduced by the Spanish but thoroughly indigenized). The diamond motif in this context represents qocha, or lakes. In Andean symbolic language, a diamond shape signifies a body of water; if something is depicted inside the diamond, it indicates the lake is healthy and ready for harvest. Nested diamonds amplify this meaning, suggesting layered abundance.

The faja itself functions as part of the Andean symbolic coding system. Stripe spacing, color arrangement, and motif selection within a belt communicate the weaver's community of origin, social status, and whether the textile is intended for everyday or ceremonial use.`,
    symbolism: `Diamonds represent qocha (lakes), bodies of water signifying abundance and harvest readiness. A diamond containing smaller motifs indicates a thriving ecosystem. Nested diamonds represent the layered nature of Andean cosmology, worlds within worlds, each containing and supporting the others.

The color palette of an Otavalo faja carries its own layer of meaning: red speaks to earth and life force, green to the rainforest and ancestors, blue to sky and the celestial realm, and yellow/gold to Inti (the sun deity). Traditional dyes came from natural sources: cochineal insects for reds, indigo plants for blues, tree bark and minerals for earth tones.

In the broader tocapu tradition, diamond arrangements function as a visual "language" that could be read by those who understood the system. A wearer's textiles communicated ancestry, hometown, and social role to anyone who could interpret the patterns.`,
    construction: `Otavalo fajas are woven using a supplementary weft technique that creates the diamond pattern as a raised, textured design against a plain-weave ground. Master weavers achieve remarkably fine thread counts, with some fajas containing over 100 warp threads per centimeter.

In quilting, the nested diamond effect can be achieved through foundation piecing, sewing fabric strips at 45-degree angles onto a paper or fabric foundation, or through strip piecing with mirror-image chevron units. The Otavalo tradition of nesting suggests working from the center outward, adding concentric diamond frames.`,
    geometry: `The nested diamond has D2 symmetry, bilateral symmetry across both the vertical and horizontal axes, but not invariant under 90-degree rotation (unless the diamonds are perfect squares turned 45 degrees). The nesting creates a self-similar structure: each diamond frame is a scaled copy of the previous one, producing a pattern that exhibits fractal-like properties at multiple viewing scales.

The chevron angle in Otavalo fajas is typically close to 60 degrees (rather than the 90-degree diamond of a simple square-on-point), creating an elongated hexagonal rhythm. The nesting ratio, the relationship between each concentric diamond's size, follows approximate geometric series.`,
    sources: [
      'Mosqoy, "Textile Symbols." Diamond/qocha symbolism, nested meaning systems, lake-harvest correspondence.',
      'Threads of Peru, "Quechua Symbols &amp; Patterns." Faja construction techniques, thread-count traditions.',
      'Arms of Andes, "Sacred Andean Textiles." Otavalo market history, identity coding in belts, tocapu reading systems.',
      'Kuoda Travel, "What Do the Different Symbols in Peruvian Textiles Mean?" Diamond as lake, content-within-diamond interpretation.',
      'Smart Fashion, "Threads of Memory: The Enduring Language of Andean Textiles." Color symbolism, natural dye traditions.',
      'Queen of the Forest, "Weaving Portals: Geometric Patterns in Indigenous Art." Diamond as cosmological container.',
    ],
  },
  {
    id: 'step-fret',
    name: 'Step Fret (Escalera)',
    cssClass: 'step-fret',
    era: 'Pre-Columbian',
    origin: 'Quechua highlands',
    tag: 'andean',
    difficulty: 'Beginner',
    summary: 'The staircase motif found across Andean weavings, representing agricultural terraces, mountains (Apu), and the path between worlds. Often paired with zigzag serpent (Amaru) motifs.',
    history: `The stepped motif, escalera in Spanish and pata-pata in Quechua, is one of the most pervasive and ancient patterns in Andean textiles, appearing continuously from the Chavin horizon (c. 900 BCE) through Wari, Tiwanaku, Inca, and contemporary Quechua weaving. It represents the agricultural terraces (andenes) that sustained Andean civilizations, and from which the name "Andes" itself derives.

The step fret carries deep cosmological weight. Mountains (called Apu in Quechua) are considered protective spirits. The stepped profile of a terrace or mountain is not just landscape but divine presence. The staircase is fundamentally a transitional symbol: a path between Kay Pacha (this world) and Hanaq Pacha (the upper world), mirroring the physical experience of ascending Andean agricultural terraces from valley floor to sacred peak.

The step motif is frequently paired with zigzag patterns representing water, rivers, or the serpent Amaru, one of the most recurring motifs in Andean art. Amaru is a symbol of the underworld (Ukhu Pacha), and its undulating form represents the flow of water from mountain springs down through terraced fields. Together, the step and zigzag form a complementary pair: mountain and water, solid and flowing, ascending and descending.`,
    symbolism: `Stepped pyramids represent agricultural terraces, reflecting reverence for the earth and farming expertise that sustained Andean civilizations at extreme altitudes. The terraces are themselves a feat of geometric engineering: each level precisely graded for drainage, soil retention, and microclimate management.

The step fret connects to ayni, the Andean concept of reciprocity. The terraces are a gift from and to Pachamama (Mother Earth). Weaving the step pattern honors this relationship. In ceremonial textiles, the direction and count of steps carry specific meaning: ascending steps may reference offerings to the Apu, while descending steps connect to water's journey from peak to valley.

The nature motifs associated with the step fret reflect the Andean spiritual ecology: the condor (Kuntur) governs Hanaq Pacha above, the puma governs Kay Pacha at the terrace level, and the serpent (Amaru) governs Ukhu Pacha below. The step fret is the architectural form that connects all three realms.`,
    construction: `The escalera is one of the first motifs apprentice weavers learn in Quechua communities, achieved through simple counted-thread shifts, typically moving one or two warp threads over with each new row. Its accessibility makes it a foundational teaching pattern, but master weavers produce extraordinarily complex variations by combining multiple step sequences at different scales.

In quilting, the step fret is easily pieced from squares and half-square triangles on a grid. A basic staircase can be strip-pieced by cutting offset segments from strip sets. The meander or fret variation, which adds 90-degree turns to create a Greek-key-like pattern, requires more planning but uses the same basic unit.`,
    geometry: `The step fret exhibits translation symmetry along its diagonal. The same motif repeats at regular intervals, shifted by one grid unit in both x and y. The step angle approximates a line with slope 1 (45 degrees), making it a discrete approximation of a diagonal on a square grid.

The fret variation introduces 90-degree turns, creating a meander pattern with additional glide-reflection symmetry. The step count (number of units per "stair") determines the effective angle: 1-unit steps produce 45 degrees, 2-unit steps produce approximately 26.5 degrees (arctan 1/2), and so on.

When tiled, step frets generate wallpaper-group symmetries. A single staircase has only translational symmetry (group p1), but mirrored pairs produce pmm or cmm symmetry depending on the arrangement.`,
    sources: [
      'Mosqoy, "Textile Symbols." Escalera as path between worlds, Apu mountain symbolism, apprentice learning sequence.',
      'Threads of Peru, "Quechua Symbols &amp; Patterns." Step-fret variations, pata-pata nomenclature, community-specific proportions.',
      'Arms of Andes, "Sacred Andean Textiles." Amaru serpent pairing, three-world cosmology (condor/puma/serpent).',
      'Library of Congress, "Weaving Community Narratives: Andean Histories." Chavin-to-Inca continuity of stepped motifs.',
      'Allpamamas, "Sacred Weaving." Ayni (reciprocity) and Pachamama connection, ceremonial step direction meanings.',
      'Queen of the Forest, "Geometric Patterns in Indigenous Art." Zigzag/Amaru symbolism, water-mountain complementarity.',
    ],
  },
  {
    id: 'ikat-stripe',
    name: 'Ikat Stripe',
    cssClass: 'ikat-stripe',
    era: 'Pre-Columbian',
    origin: 'Otavalo, Ecuador',
    tag: 'andean',
    difficulty: 'N/A (weaving)',
    summary: 'The feathered-edge gradient of resist-dyed Otavalo cloth, where yarn bundles are bound and dyed before weaving. Every color choice carries cosmological meaning.',
    history: `Ikat (from the Malay-Indonesian "mengikat," meaning to tie or bind) is a resist-dye technique practiced independently across Southeast Asia, Japan, Central America, West Africa, and the Andes. In the Otavalo region of highland Ecuador, ikat produces the distinctive feathered-edge textiles, particularly the deep indigo-and-white ponchos and shawls, that are among the most recognizable indigenous textiles in South America.

The Otavalo ikat tradition predates Spanish contact and has survived colonial suppression, industrialization, and globalization. Today, Otavalo weavers are internationally recognized, with their textiles traded across Latin America and exported worldwide. The famous Saturday market in the Plaza de Ponchos remains a center of this living tradition, where ancient techniques meet contemporary design.

Ikat is one of the most technically demanding textile arts. The weaver must visualize the final pattern in reverse, calculating how bound sections will align when wound onto the loom, requiring a spatial intelligence that connects directly to mathematical concepts of transformation, reflection, and registration.`,
    symbolism: `The blurred boundaries of ikat carry their own symbolic weight, representing transitions between states, the liminal spaces central to Andean thought. Where a sharp-edged weave divides the world into binary categories, ikat acknowledges the gradients between them.

Andean color choices carry layered philosophical meaning far beyond aesthetics. Red represents earth, life force, blood, and rulership. Green speaks to rainforests, mountains, ancestors, and rain. Blue embodies sky, water, and the celestial realm. Yellow and gold reference Inti, the supreme solar deity whose energy governs agriculture and life. Purple appears in ceremonial contexts. Black, often the base color, represents earth or night. White connects to purity and the snow-capped peaks of the Apu.

Traditional colors came from natural dyes: cochineal insects (Dactylopius coccus) for reds and crimsons, indigo plants for blues, tree bark for browns, and minerals for earth tones. The shift to synthetic dyes in the 20th century expanded the palette but altered the symbolic register. Some weavers now deliberately use natural dyes as a statement of cultural continuity.

Beyond individual motifs, Andean textiles function as a wearable identity system. A manta draped over the shoulders communicates where the wearer is from, whether they are married, and which cooperative they belong to. Stripe spacing and rhythm signal whether a textile is for everyday use or ceremony. Even yarn spin direction carries meaning. Every detail, down to how the thread twists, is intentional.`,
    construction: `The ikat process begins with the preparation of yarn bundles (hanks). Sections of the hank are tightly wrapped with resist material, traditionally agave fiber and today often rubber strips or plastic, at precisely calculated intervals. The bound hank is then submerged in dye: wrapped sections resist the color while exposed sections absorb it. For multi-color designs, the process is repeated with new sections bound, previous bindings removed, and the hank dipped in a different dye bath.

Once dyed, the bindings are removed and the yarn is wound onto the loom. The weaver must carefully align the dyed sections to produce the intended pattern, a process called "registration" that requires extraordinary precision. Any misalignment creates pattern drift.

Double ikat, where both warp (vertical) and weft (horizontal) threads are resist-dyed and must align during weaving, is among the rarest and most technically demanding textile techniques in the world. Only a handful of traditions practice it, including communities in Bali, Gujarat, and Japan.`,
    geometry: `The characteristic "feathered edge" or blur of ikat can be modeled mathematically as a convolution: the sharp boundary of a stripe pattern is smoothed by a kernel function whose width corresponds to the imprecision of the resist binding and the wicking behavior of the dye.

In signal processing terms, ikat applies a low-pass filter to the spatial frequency of a stripe pattern, removing the high-frequency sharp edges while preserving the low-frequency color transitions. The "feathering width" is controlled by three factors: binding tightness, dye viscosity, and immersion time.

The registration challenge, aligning resist-dyed threads on the loom, is fundamentally a problem of coordinate transformation. The weaver must map a one-dimensional pattern (the sequence of dyed sections along a thread) into a two-dimensional fabric, accounting for thread tension, take-up (the shortening that occurs during weaving), and the geometry of the weave structure itself.`,
    sources: [
      'Arms of Andes, "Sacred Andean Textiles." Color symbolism, natural dye sources, ceremonial vs. everyday textiles.',
      'Smart Fashion, "Threads of Memory: The Enduring Language of Andean Textiles." Textile identity coding, manta placement meanings, yarn spin symbolism.',
      'Mosqoy, "Textile Symbols." Wearable identity system, stripe spacing as social coding, cooperative membership.',
      'Threads of Peru, "Quechua Symbols &amp; Patterns." Natural dye traditions (cochineal, indigo), cultural continuity through material choice.',
      'Library of Congress, "Weaving Community Narratives." Otavalo market history, ikat technique transmission, pre-Columbian origins.',
      'Metropolitan Museum of Art, "Andean Textiles." Technical analysis of resist-dye processes, double ikat examples.',
    ],
  },
];

export function renderBlocks(container) {
  container.innerHTML = `
    <div class="section-header">
      <h4>Quilt Blocks</h4>
      <h2>A Pattern Library</h2>
      <p>Twelve classic American blocks and four Andean-inspired patterns — two traditions that independently arrived at similar geometric structures from opposite hemispheres.</p>
    </div>

    <h3>Classic American Blocks</h3>
    <div id="blocks-picker-mount"></div>
    <div class="card-grid" id="classic-blocks-grid">
      ${BLOCKS.map(b => `
        <a href="#block/${b.id}" class="card card-link" data-block-id="${b.id}">
          <div class="card-pattern quilt-block quilt-block--${b.cssClass}" data-pattern="${b.id}"></div>
          <div class="card-title">${b.name}</div>
          <div class="card-meta">
            <span class="tag tag--${b.tag}">${b.origin}</span>
            ${b.era} · ${b.difficulty}
          </div>
          <p class="card-desc">${b.summary}</p>
        </a>
      `).join('')}
    </div>

    <h3 style="margin-top: var(--space-xl);">Andean / Otavalo-Inspired</h3>
    <div class="andean-intro" style="max-width: 680px; margin-bottom: var(--space-lg); line-height: 1.7; font-size: 0.95rem;">
      <p>Andean textiles are not decorative — they are cosmological records. For over four thousand years, Quechua and Aymara weavers have encoded identity, spirituality, and philosophy into cloth. Every motif carries spiritual weight. Every color references the natural world. Every pattern placement communicates the weaver's community, status, and relationship to Pachamama (Mother Earth).</p>
      <p style="margin-top: var(--space-sm);">The principle of <strong>yanantin</strong> — sacred duality (day/night, male/female, earth/sky) — runs through every tradition here, expressed through geometric symmetry. Textiles function as a wearable identity system: stripe spacing signals ceremony vs. everyday; a manta's drape communicates hometown and marital status; even yarn spin direction carries meaning.</p>
      <div style="display: grid; grid-template-columns: auto 1fr 2fr; gap: 4px 16px; font-size: 0.85rem; margin-top: var(--space-md); padding: var(--space-sm) var(--space-md); background: var(--color-card-bg); border: 1px solid var(--color-border); border-radius: 6px;">
        <div style="grid-column: 1 / -1; font-weight: 600; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-text-muted); padding-bottom: 4px; border-bottom: 1px solid var(--color-border); margin-bottom: 2px;">Nature Motifs &amp; Quechua Names</div>
        <span style="font-weight: 600;">Kuntur</span><span>Condor</span><span style="color: var(--color-text-muted);">Hanaq Pacha (upper world) — celestial messenger</span>
        <span style="font-weight: 600;">Inti</span><span>Sun</span><span style="color: var(--color-text-muted);">Supreme deity — power over agriculture and life</span>
        <span style="font-weight: 600;">Apu</span><span>Mountains</span><span style="color: var(--color-text-muted);">Protective spirits of the Andes</span>
        <span style="font-weight: 600;">Amaru</span><span>Serpent</span><span style="color: var(--color-text-muted);">Ukhu Pacha (underworld) — rivers and water</span>
        <span style="font-weight: 600;">Qocha</span><span>Lake</span><span style="color: var(--color-text-muted);">Abundance and harvest readiness</span>
        <span style="font-weight: 600;">T'ika</span><span>Flower</span><span style="color: var(--color-text-muted);">Beauty, fertility, offerings to Pachamama</span>
        <span style="font-weight: 600;">Ch'aska</span><span>Star</span><span style="color: var(--color-text-muted);">Celestial guidance</span>
        <span style="font-weight: 600;">Mayu</span><span>River</span><span style="color: var(--color-text-muted);">Flow of life and connection</span>
      </div>
    </div>
    <div class="card-grid">
      ${ANDEAN_BLOCKS.map(b => `
        <a href="#block/${b.id}" class="card card-link" data-block-id="${b.id}">
          <div class="card-pattern quilt-block quilt-block--${b.cssClass}" data-pattern="${b.id}"></div>
          <div class="card-title">${b.name}</div>
          <div class="card-meta">
            <span class="tag tag--${b.tag}">${b.origin}</span>
            ${b.era} · ${b.difficulty}
          </div>
          <p class="card-desc">${b.summary}</p>
        </a>
      `).join('')}
    </div>
  `;

  container.querySelectorAll('[data-pattern]').forEach(el => {
    buildBlockPattern(el, el.dataset.pattern);
  });

  const pickerMount = container.querySelector('#blocks-picker-mount');
  buildFabricPicker(pickerMount, (paletteId) => {
    container.querySelectorAll('.quilt-block').forEach(el => {
      applyPalette(el, paletteId);
    });
  });
}

export function renderBlockDetail(container, blockId) {
  const block = BLOCKS.find(b => b.id === blockId) || ANDEAN_BLOCKS.find(b => b.id === blockId);
  if (!block) {
    container.innerHTML = `
      <a href="#blocks" class="btn-back">← Back to Blocks</a>
      <h2>Block not found</h2>
    `;
    return;
  }

  container.innerHTML = `
    <a href="#blocks" class="btn-back">← Back to Blocks</a>

    <div class="block-detail-header">
      <div>
        <div class="block-detail-pattern quilt-block quilt-block--${block.cssClass}" data-pattern="${block.id}"></div>
        <div id="detail-picker-mount"></div>
      </div>
      <div>
        <h4>${block.origin} · ${block.era}</h4>
        <h2>${block.name}</h2>
        <p>${block.summary}</p>
        <div class="card-meta">
          <span class="tag tag--${block.tag}">${block.origin}</span>
          Difficulty: ${block.difficulty}
        </div>
      </div>
    </div>

    <div class="block-detail-body">
      <h3>History &amp; Cultural Significance</h3>
      ${block.history.split('\n\n').map(p => `<p>${p}</p>`).join('')}

      ${block.symbolism ? `
        <h3>Symbolism &amp; Meaning</h3>
        ${block.symbolism.split('\n\n').map(p => `<p>${p}</p>`).join('')}
      ` : ''}

      <h3>Construction</h3>
      ${block.construction.split('\n\n').map(p => `<p>${p}</p>`).join('')}

      <h3>Geometry &amp; Symmetry</h3>
      ${block.geometry.split('\n\n').map(p => `<p>${p}</p>`).join('')}

      ${CSS_SNIPPETS[block.id] ? `
        <h3>CSS Code</h3>
        <div class="css-snippet">
          ${snippetDemoHtml(block.id)}
          <pre><code>${CSS_SNIPPETS[block.id].replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
        </div>
      ` : ''}

      <div class="sources-list">
        <h3>Sources</h3>
        <ol>
          ${block.sources.map(s => `<li>${s}</li>`).join('')}
        </ol>
      </div>
    </div>
  `;

  const patternEl = container.querySelector('[data-pattern]');
  buildBlockPattern(patternEl, block.id);

  const pickerMount = container.querySelector('#detail-picker-mount');
  buildFabricPicker(pickerMount, (paletteId) => {
    applyPalette(patternEl, paletteId);
  });
}
