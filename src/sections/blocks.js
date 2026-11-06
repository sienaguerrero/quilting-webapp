import { buildBlockPattern, applyPalette, buildFabricPicker } from './block-patterns';
import { CSS_SNIPPETS } from './block-css-snippets';

const BLOCKS = [
  {
    id: 'log-cabin',
    name: 'Log Cabin',
    cssClass: 'log-cabin',
    era: 'c. 1860s',
    origin: 'American / British Isles',
    tag: 'origin',
    difficulty: 'Beginner',
    summary: 'Strips spiral around a red center square. Most of the variety comes from the setting: Barn Raising, Straight Furrow, Courthouse Steps.',
    history: `The Log Cabin's earliest documented appearances date to the 1860s, with surviving examples from the Civil War era. Some historians trace the technique to older patchwork from the British Isles: Janet Rae documents Log Cabin quilts from the Isle of Man (called "The Roof Pattern") that may predate 1850.

The block caught on around Abraham Lincoln's 1860 presidential campaign, which made his log cabin upbringing a political symbol. Barbara Brackman traces the earliest known written reference to a "log cabin quilt" to 1863, at the Ohio State Fair.`,
    construction: `Strips of fabric are sewn sequentially around a central square, building outward in a spiral. Traditionally the center square is red, for the hearth of the home, though Brackman notes that early instructions (an 1885 how-to, for one) called for black velvet instead. One half of the block uses light fabrics and the other half dark, which splits it along the diagonal.

Log Cabin quilts were often foundation-pieced, sewn directly onto a muslin base instead of assembled from free-standing blocks. Many antique Log Cabin quilts were never actually quilted in the traditional sense; they were tied or used as single-layer spreads.`,
    geometry: `A single block has bilateral symmetry along its diagonal axis. Set in a Barn Raising layout, the whole quilt has D4 symmetry, with four-fold rotation and mirror lines. Common settings include Barn Raising (concentric diamonds), Straight Furrow (diagonal stripes), and Courthouse Steps (strips added to opposite sides rather than spiraling).`,
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
    summary: 'Nine equal squares in a 3×3 grid. The ancestor of Irish Chain, Shoo Fly, Churn Dash, and dozens more.',
    history: `The Nine-Patch is one of the oldest pieced blocks in the Anglo-American tradition. The Smithsonian holds several examples from the 1790s, including a Nine-Patch pieced quilt (NMAH 556252, 1790–1810) and the Copp Family quilt (NMAH 556288), donated from a Connecticut family.

Because it uses only small pieces, the Nine-Patch was a good way to use up scraps. That made it common wherever fabric was scarce, including among frontier families, enslaved quilters, and poor households.`,
    construction: `Nine equal squares arranged in a three-by-three grid, typically alternating fabrics in a checkerboard pattern. The usual modern method is strip piecing: sew three strips together, cut them into segments, and rearrange them. Eleanor Burns popularized this technique through her "Quilt in a Day" pattern books.

Many blocks grew out of it. The Double Nine-Patch nests smaller nine-patches inside the larger grid, and Irish Chain, Shoo Fly, and Churn Dash share the same 3×3 structure.`,
    geometry: `The block has the full symmetry of the square (D4), as long as the coloring is symmetric: it looks the same after a 90° turn and after reflection across both axes and both diagonals. It tessellates as a simple square grid. Alternating Nine-Patch blocks with plain squares produces the Single Irish Chain, a secondary design that only appears at the quilt level.`,
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
    summary: 'Rectangular units in a 2:1 ratio that always point in one direction.',
    history: `Flying Geese is built from rectangular units, each composed of a large triangle flanked by two smaller right triangles. Museum-documented examples include a Smithsonian quilt (object 36888, ca. 1845–1850) and a Metropolitan Museum piece from the 19th century. Because the units point one way, the pattern is a favorite for borders and sashing.

The pattern is often tied to the Underground Railroad quilt code. Historians have not found evidence for the code (see <a href="#history">History</a>).`,
    construction: `The standard unit is twice as wide as it is tall (2:1 ratio). The traditional way was to cut individual triangles, which meant handling stretchy bias edges. Modern quilters use the "no-waste" method, which makes four units at once from one large square and four small squares.

Four Flying Geese around a center square make a Sawtooth Star or Variable Star.`,
    geometry: `The individual unit has bilateral symmetry along its vertical axis. The large triangle is isosceles right, and the two smaller triangles are its complements. It does not tile the plane alone in a single orientation but requires alternating orientations or combination with squares. Set in rows, the units all point the same way, like arrows.`,
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
    summary: 'Four half-square triangles that seem to turn. It has chirality: it spins clockwise or counterclockwise, never both.',
    history: `The Pinwheel is one of the older pieced patterns. A Smithsonian example (NMAH 556402) was made by women of the Adams family during the War of 1812, earlier than the 1830s date often given. It became a favorite for children's quilts.

In 1994, mathematicians John Conway and Charles Radin described the "pinwheel tiling," an aperiodic tiling of the plane made from right triangles. It is a different shape from the quilt block but shares its name.`,
    construction: `A four-patch block where each quarter is a half-square triangle unit: two right triangles sewn along their hypotenuse. The four units are turned so the same-color triangles all point the same way around, which gives the windmill effect. Small errors add up across the four units, so accurate cutting matters.

Variations include the Double Pinwheel (nested), Flutter Wheel (elongated blades), and Dutchman's Puzzle (four pinwheel units creating secondary rotational patterns).`,
    geometry: `The Pinwheel has C4 rotational symmetry but no mirror lines, which gives it chirality and a sense of direction. Tiled, blocks that alternate direction make zigzag lattices, and blocks that turn the same way make diagonal bands of color. The block is built from isosceles right triangles.`,
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
    history: `Ohio Star quilts date back to the 1820s. The pattern has been published under at least a dozen names, including Variable Star, Eastern Star, and "Tippecanoe and Tyler Too" (after the 1840 presidential campaign). Before printed catalogs, patterns spread by word of mouth, and each community named them its own way.

In Ohio it became a kind of state emblem among quilters. It shows up in presentation and friendship quilts made for weddings and for families heading west. Star quilts were used at antislavery fundraising fairs in the 1830s–1850s.`,
    construction: `A nine-patch grid: four corner squares, a center square, and four side units. The side units are quarter-square triangles (two HST units sewn together to form four triangles in a square). These form the four star points. QST units have both straight-grain and bias edges, so grain line matters.

Variations include the Swamp Angel (secondary star in center), Rolling Star (rotating points), and at larger scales, the Blazing Star and Broken Star.`,
    geometry: `D4 symmetry: the full symmetry group of the square, with four rotations and four reflections, which is more than the Pinwheel has. Set edge to edge, the QST units of neighboring blocks merge into larger diamonds or hourglasses, a secondary pattern.`,
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
    history: `The Bear's Paw name and design appear from the 1840s, in regions where people really did run into bears. The earliest dated sawtooth ancestor is from 1823. The picture is literal: a central pad with toe prints around it.

The same geometry was called "Bear's Paw" in Ohio (due to bear stories), "Duck's Foot in the Mud" on Long Island (due to ducks), and "Hand of Friendship" among Philadelphia Quakers. Same geometry, different local names: this happens over and over in American quilt patterns.`,
    construction: `A compound block typically on a 5×5 or 7×7 grid. Features a large center square (the pad), four rectangular stems, and four corner toe clusters. Each toe cluster consists of a small square flanked by half-square triangle units creating claw-like points. The hard part is lining the toe units up with the stems so the paw reads clearly.

Related patterns: Cat's Paw (smaller scale), Bear's Tracks (simplified), Goose Tracks (elongated).`,
    geometry: `D4 symmetry when all four paw clusters are identical, though quilters sometimes color the toes differently, which reduces it to C4. Often set with sashing, which spaces the blocks out like a trail of paw prints. Without sashing, adjacent blocks merge toe clusters into secondary pinwheel-like formations.`,
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
    summary: 'A curved-seam block cut from just two templates. Turning each of four units four ways gives 256 possible four-patches.',
    history: `The Drunkard's Path is built from just two pieces: a quarter-circle and its concave complement. It was first published as "Wanderer's Path in the Wilderness" in Farm and Home magazine in 1888, and cataloged by the Ladies' Art Company as "Drunkard's Patchwork" (No. 243) around 1895–1897.

The block is popularly associated with the Women's Christian Temperance Union, but Barbara Brackman found no evidence that the WCTU adopted the pattern. The temperance story seems to have been attached to it later.`,
    construction: `Sewing a convex curve to a concave one takes careful pinning and clipping of the seam allowance, so this is an intermediate to advanced block. It also went by Robbing Peter to Pay Paul, Wonder of the World, and Solomon's Puzzle.

Pepper Cory documented 80+ variations achievable from the same two templates.`,
    geometry: `A single unit has no rotational symmetry, though it mirrors across its diagonal. Four units together can have two-fold or four-fold symmetry, depending on how they're turned. Each unit can face four ways, so a four-patch has 4⁴ = 256 arrangements, and a full quilt has far more.`,
    sources: [
      'Barbara Brackman, <em>Encyclopedia of Pieced Quilt Patterns</em> (AQS, 1993; 3rd ed. 2020). 14+ aliases documented.',
      'Barbara Brackman, "Drunkard\'s Path Quilts, T Quilts, and the WCTU," Quilt Index and Material Culture blog, 2016. No documented WCTU adoption evidence.',
      'Pepper Cory, <em>65 Drunkard\'s Path Quilt Designs</em> (Dover, 1999). Two-template system, 80+ variations, English origins.',
      'World Quilts: The American Story, "Temperance," International Quilt Study Center & Museum.',
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
    summary: 'Eight triangular points around a center square, built from half-square triangles.',
    history: `The Sawtooth Star has been documented from the 1830s–1840s, with a Smithsonian example (NMAH 642532) cataloged as "Evening Star (Sawtooth Star)" using roller-printed cottons from that era. The name "Sawtooth Star" first appeared in Farm and Fireside Magazine in 1884.

The Kansas City Star newspaper printed weekly quilt patterns from 1928 through 1961, and star variations spread across the Midwest with it. Brackman's <em>The Kansas City Star Quilts Sampler</em> documents the column.`,
    construction: `A center square surrounded by four corner squares and four rectangular side units, each side unit containing two half-square triangles forming the star points. Easy enough for beginners, with plenty of room to play with fabric placement. The points only show clearly when the star and background contrast strongly in value.

Closely related to the Ohio Star (which uses quarter-square triangles for its points), the Variable Star, Evening Star, and LeMoyne Star.`,
    geometry: `D4 dihedral symmetry: four-fold rotation plus four mirror lines. Tessellates on a square grid. When set side by side, triangular points of adjacent blocks create secondary patterns at intersections.`,
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
    summary: 'Hexagon rosettes sewn by English paper piecing, and one of the most popular patterns of the Depression era. Paper templates left inside surviving quilts are accidental time capsules.',
    history: `This hexagon pattern descends from British paper-piecing traditions. Hexagonal patchwork appears in surviving British quilts from as early as the 1770s. The 1718 Silk Patchwork Coverlet (Quilt Museum, York) establishes the paper-piecing technique even earlier. The specific name "Grandmother's Flower Garden" entered American usage during the 1920s–1930s.

It was one of the most-made quilt patterns of the Depression era. A 1932 estimate counted 200 in progress in Ruston, Louisiana alone. It used small scraps and needed no sewing machine, which helped.`,
    construction: `Each hexagon is basted over a paper template, and the fabric-wrapped pieces are whipstitched together by hand. English paper piecing gives sharp points and precise joins that are hard to get by machine. The papers are removed after assembly, but some surviving quilts still contain them: datable letters, newspaper clippings, and catalog pages.

Godey's Lady's Book published the first American hexagon pattern in 1835.`,
    geometry: `The regular hexagon is one of only three regular polygons (along with the square and equilateral triangle) that tile the Euclidean plane without gaps. The tessellation has D6 symmetry: six-fold rotation plus six mirror lines. Rosettes are typically arranged as a central hexagon surrounded by concentric rings.`,
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
    summary: "A Nine-Patch of alternating Four-Patch checkerboards and identically oriented HSTs that, when tiled, create diagonal chains: the ladder.",
    history: `Jacob's Ladder appears in American quilt pattern publications by the mid-to-late nineteenth century and was well established by the 1880s–1890s. The name references the biblical story of Jacob's dream (Genesis 28:12). It has many regional names: "Stepping Stones," "Trail of the Covered Wagon," "Road to California," "Underground Railroad," "Wagon Tracks," and "The Tail of Benjamin's Kite." The westward names probably came from settlers carrying the pattern along overland routes in the mid-1800s.

The "Underground Railroad" name has pulled the block into the quilt code theory, which has no historical support (see <a href="#history">History</a>).`,
    construction: `Jacob's Ladder is traditionally pieced using two sub-unit techniques. The five Four-Patch units are efficiently made with strip piecing: two strips of contrasting fabric are sewn together, crosscut into segments, then paired and sewn into checkerboard squares. The four HST units are made by pairing light and dark squares, drawing a diagonal line, sewing on both sides, and cutting apart. After trimming all sub-units to size, the nine cells are arranged in the 3×3 layout and sewn in rows. Pressing seams in alternating directions allows seams to nest for flat intersections.`,
    geometry: `The block has one mirror line, along its main diagonal (D1). Because all the HSTs face the same way, it doesn't survive a 90° or 180° turn. When blocks are set side-by-side, the HSTs align across block boundaries to form continuous diagonal chains (the "ladder"), while the Four-Patches create a secondary checkerboard grid.`,
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
    summary: "A nine-patch block with half-square triangle corners and split side bars surrounding a center square, closely related to the Churn Dash.",
    history: `The Monkey Wrench belongs to the Churn Dash family of nine-patch blocks, all sharing the same structure: HST corners, rectangular side units, and a center square. The name refers to the adjustable wrench tool, and the block's dark cross shape with triangular extensions loosely evokes its silhouette.

The quilt code theory claims this block told people escaping slavery to "gather your tools." There's no evidence for that (see <a href="#history">History</a>).`,
    construction: `A nine-patch (3×3) grid. The four corners are half-square triangles with the dark triangle pointing toward the block center. The four side units are rectangles split in half: the inner half matches the center color and the outer half matches the background. The center is a solid square. Strip piecing the side units and batch-sewing HSTs makes this an efficient block to produce in quantity.`,
    geometry: `The block has D4 symmetry (four reflection axes and 90° rotational symmetry). The dark areas form a cross or plus shape that extends to the corners via the HSTs. When tiled without sashing, the background triangles and outer bar halves merge into secondary patterns such as chains and lattices.`,
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
    summary: "Concentric half-square triangles that form a spiral. Also called Indiana Puzzle and Virginia Reel.",
    history: `The Snail's Trail goes by many names in American quilting, including "Indiana Puzzle," "Virginia Reel," and sometimes "Monkey Wrench." That last name more often means a different block, the Churn Dash variant that has its own page here.

The spiral makes it a favorite for quilts built around optical illusions. When blocks are tiled, the spirals interlock into secondary patterns.`,
    construction: `The block is built from concentric rings of half-square triangles around a central four-patch. Each ring consists of two large triangles that, when combined with the previous ring, create a step in the spiral. The triangles are oriented so that each successive ring rotates 90° from the last, which makes the spiral.

Construction typically starts from the center out. The center four-patch is made first, then successively larger triangle pairs are added. Accurate cutting and pressing matter, because the bias edges on the HSTs stretch easily. Modern quilters often use foundation paper piecing (FPP) for precision.`,
    geometry: `The block has C4 rotational symmetry and, like the Pinwheel, chirality: it spirals clockwise or counterclockwise, never both. When tiled, blocks with the same handedness make continuous spirals of color, and blocks that alternate interlock in more complicated ways.`,
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
    summary: 'The stepped cross found throughout Andean textiles. It is read as a map of the three worlds of Andean cosmology, the four directions, and yanantin (sacred duality).',
    history: `The Chakana appears on Andean stone carvings, ceramics, and textiles from the Chavin culture (c. 900 BCE) through the Tiwanaku and Wari empires to the Inca and present-day Quechua communities. The name is often traced to Quechua "chakay" (to cross or bridge), and the cross is described as a bridge between worlds.

In the common modern reading, its three stepped levels stand for the three planes of Andean existence: Ukhu Pacha (the inner/underworld, realm of the dead, seeds, and the serpent Amaru), Kay Pacha (this world, the realm of human life, governed by the puma), and Hanaq Pacha (the upper world, realm of celestial beings, governed by the condor Kuntur). The hole at the center is often said to be Cusco, the "navel of the world" in Inca cosmography.

Some modern accounts also link it to the Southern Cross. They read its 12 outer corners as the months and its four arms as the solstices and equinoxes.`,
    symbolism: `The Chakana is tied to yanantin, the Andean principle of complementary pairs: day and night, male and female, earth and sky. Its mirror symmetry, where each half reflects the other, is read as an image of that balance.

Tocapu are grids of geometric symbols on Inca textiles that may have worked as a visual language, and the Chakana is often described as a master symbol among them. On a manta (shoulder cloth), its placement and size are said to signal the weaver's spiritual authority and standing in the community.`,
    construction: `In traditional weaving, the Chakana is produced using a counted-thread technique on a backstrap loom. Each step must be precisely counted against the warp threads, typically one or two threads per step. Weavers in communities like Chinchero and Pisac learn it early, and each community keeps its own proportions.

In quilting, the Chakana can be pieced on a fine grid (typically 7x7 or 9x9 underlying squares). Each "step" is one grid unit. The cross decomposes into a central square plus four identical L-shaped arms, which suits rotary cutting and strip piecing.`,
    geometry: `The Chakana has the full symmetry of the square, the dihedral group D4, meaning it is invariant under 90-degree rotations and reflections along both axes and both diagonals.

Each step is one unit wide and one unit tall, so the stepped edge approximates a 45-degree line. The cross tessellates in a square grid, with the negative space between adjacent Chakanas forming interlocking Greek-cross shapes.`,
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
    history: `Diamonds are common in Andean textiles from southern Peru to highland Ecuador. In the Otavalo region they are central to the faja, a woven belt worn every day by both men and women. The Saturday market in Otavalo's Plaza de Ponchos is one of the largest indigenous markets in South America and has been a center of textile trade for centuries.

Otavalo weavers use both backstrap looms and treadle looms, which the Spanish introduced.`,
    symbolism: `A diamond stands for qocha, a lake, and with it abundance and a harvest that's ready. A diamond with smaller motifs inside it means the lake is healthy. Nested diamonds are sometimes read as worlds within worlds.`,
    construction: `Otavalo fajas are woven using a supplementary weft technique that creates the diamond pattern as a raised, textured design against a plain-weave ground. The best fajas are very finely woven.

In quilting, you can make nested diamonds by foundation piecing (sewing strips at 45 degrees onto a paper or fabric foundation) or by strip piecing mirror-image chevron units. Work from the center out, adding one diamond frame at a time.`,
    geometry: `The nested diamond has D2 symmetry: it mirrors across both the vertical and horizontal axes but doesn't survive a 90-degree turn, unless the diamonds are squares set on point. Each diamond frame is a scaled copy of the one inside it, so the pattern looks similar at several scales.

The chevron angle in Otavalo fajas is often close to 60 degrees, so the diamonds come out narrower than a square set on point.`,
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
    history: `The stepped motif, escalera in Spanish and pata-pata in Quechua, runs through Andean textiles from the Chavin horizon (c. 900 BCE) through Wari, Tiwanaku, Inca, and present-day Quechua weaving. It stands for the agricultural terraces (andenes) that fed Andean civilizations. One theory traces the name "Andes" to andenes.

Mountains, called Apu in Quechua, are considered protective spirits, so a stepped profile can stand for one. The staircase is also read as a path between Kay Pacha (this world) and Hanaq Pacha (the upper world), the way terraces climb from valley floor to peak.

The step motif often sits next to zigzags for water, rivers, or the serpent Amaru. Amaru belongs to the underworld (Ukhu Pacha), and its wavy body stands for water running from mountain springs down through the terraces. The step and zigzag are usually read as a pair: mountain and water.`,
    symbolism: `The terraces themselves are careful engineering. Each level is graded for drainage, soil retention, and microclimate.

The step fret is also tied to ayni, the Andean idea of reciprocity between people and Pachamama (Mother Earth). In ceremonial textiles, the direction and number of steps can carry meaning. Ascending steps may refer to offerings to the Apu, and descending steps to water running from peak to valley.`,
    construction: `The escalera is one of the first motifs apprentice weavers learn in Quechua communities. Each new row shifts the pattern over by one or two warp threads. Experienced weavers build complex variations by combining step sequences at different scales.

In quilting, the step fret is easily pieced from squares and half-square triangles on a grid. A basic staircase can be strip-pieced by cutting offset segments from strip sets. The meander or fret variation, which adds 90-degree turns to create a Greek-key-like pattern, requires more planning but uses the same basic unit.`,
    geometry: `The step fret has translation symmetry along its diagonal: the motif repeats one grid unit over and one unit up. With one-unit steps, the edge approximates a 45-degree line.

The fret variation adds 90-degree turns, which makes a meander with glide-reflection symmetry. The shape of each step sets the angle: one unit over and one up gives 45 degrees, and two over and one up gives about 26.6 degrees (arctan 1/2).

When tiled, step frets fall into wallpaper groups. A single staircase has only translational symmetry (group p1), but mirrored pairs produce pmm or cmm symmetry depending on the arrangement.`,
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
    summary: 'The feathered edges of resist-dyed Otavalo cloth, where yarn bundles are bound and dyed before weaving.',
    history: `Ikat (from the Malay-Indonesian "mengikat," meaning to tie or bind) is a resist-dye technique practiced independently across Southeast Asia, Japan, Central America, West Africa, and the Andes. In the Otavalo region of highland Ecuador, it gives textiles their feathered edges, especially the deep indigo-and-white ponchos and shawls.

The Otavalo ikat tradition is older than Spanish contact and is still practiced. Otavalo textiles are sold across Latin America and exported worldwide.

The hard part of ikat is planning ahead. The yarn is bound and dyed before weaving, so the maker has to work out where each bound section will land once the yarn is on the loom.`,
    symbolism: `The blurred edges of ikat are sometimes read as transitions between states.

Andean colors carry meaning. Red is earth, life force, blood, and rulership. Green is rainforests, mountains, ancestors, and rain. Blue is sky, water, and the heavens. Yellow and gold are Inti, the sun. Purple shows up in ceremonial cloth. Black, often the base color, is earth or night. White is purity and the snow on the Apu.

Traditional colors came from natural dyes: cochineal insects (Dactylopius coccus) for reds and crimsons, indigo plants for blues, tree bark for browns, and minerals for earth tones. Synthetic dyes arrived in the 20th century and widened the palette. Some weavers now choose natural dyes on purpose, to keep the older practice going.`,
    construction: `The ikat process begins with the preparation of yarn bundles (hanks). Sections of the hank are tightly wrapped with resist material, traditionally agave fiber and today often rubber strips or plastic, at precisely calculated intervals. The bound hank is then submerged in dye: wrapped sections resist the color while exposed sections absorb it. For multi-color designs, the process is repeated with new sections bound, previous bindings removed, and the hank dipped in a different dye bath.

Once dyed, the bindings are removed and the yarn is wound onto the loom. Lining up the dyed sections is called registration, and it has to be precise. Any misalignment makes the pattern drift.

In double ikat, both the warp (vertical) and weft (horizontal) threads are resist-dyed and have to line up during weaving. Only a handful of places practice it, including Bali, Gujarat, and Japan.`,
    geometry: `The feathered edge of ikat can be modeled as a convolution: the sharp boundary of a stripe is smoothed by a kernel whose width depends on how loosely the resist was bound and how far the dye wicked.

In signal processing terms, that's a low-pass filter. It removes the sharp, high-frequency edges and keeps the broad color changes.

Registration is a coordinate transformation. The weaver maps a one-dimensional pattern (the dyed sections along each thread) onto two-dimensional cloth and has to allow for thread tension, take-up (the shortening that happens during weaving), and the weave structure.`,
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
      <p>Twelve classic American blocks and four patterns drawn from Andean textiles.</p>
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
      <p>Andean textiles record cosmology as well as decorate. Andean weavers have put identity and belief into cloth for thousands of years, and Quechua and Aymara weavers still do. Motifs, colors, and where a pattern sits on the cloth all carry meaning, including the weaver's community, status, and relationship to Pachamama (Mother Earth).</p>
      <p style="margin-top: var(--space-sm);">The principle of <strong>yanantin</strong>, sacred duality (day and night, male and female, earth and sky), shows up in these patterns as mirror symmetry. Textiles also identify the wearer. Stripe spacing marks a textile as ceremonial or everyday, a manta can show the wearer's hometown and marital status, and even the direction the yarn is spun can mean something.</p>
      <div style="display: grid; grid-template-columns: auto 1fr 2fr; gap: 4px 16px; font-size: 0.85rem; margin-top: var(--space-md); padding: var(--space-sm) var(--space-md); background: var(--color-card-bg); border: 1px solid var(--color-border); border-radius: 6px;">
        <div style="grid-column: 1 / -1; font-weight: 600; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-text-muted); padding-bottom: 4px; border-bottom: 1px solid var(--color-border); margin-bottom: 2px;">Nature Motifs &amp; Quechua Names</div>
        <span style="font-weight: 600;">Kuntur</span><span>Condor</span><span style="color: var(--color-text-muted);">Hanaq Pacha (upper world), celestial messenger</span>
        <span style="font-weight: 600;">Inti</span><span>Sun</span><span style="color: var(--color-text-muted);">Supreme deity, with power over agriculture and life</span>
        <span style="font-weight: 600;">Apu</span><span>Mountains</span><span style="color: var(--color-text-muted);">Protective spirits of the Andes</span>
        <span style="font-weight: 600;">Amaru</span><span>Serpent</span><span style="color: var(--color-text-muted);">Ukhu Pacha (underworld), rivers and water</span>
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
