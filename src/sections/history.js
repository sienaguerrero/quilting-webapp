export function renderHistory(container) {
  container.innerHTML = `
    <div class="section-header">
      <p class="eyebrow">History</p>
      <h2>Where Quilting Comes From</h2>
      <p>Layered, stitched cloth goes back at least to ancient Egypt. It started as a way to stay warm, and later became a way to remember people and to protest.</p>
    </div>

    <div class="content-split">
      <div>
        <h3>Ancient Origins</h3>
        <p>Evidence of quilted garments dates to roughly 3400 BCE in ancient Egypt, where a carved ivory figure wears what appears to be a quilted robe. In medieval Europe, quilted garments served as padding beneath armor and as warm bed coverings. Crusaders returning from the Middle East helped spread quilting techniques across Europe.</p>
        <p>In colonial America, settlers pieced fabric scraps together into bedding.</p>
      </div>
      <div>
        <h3>The Quilting Bee</h3>
        <p>During the 18th and 19th centuries, quilting bees became important social gatherings in American communities. They were among the few socially acceptable occasions for women to gather, and they became early sites of community organizing.</p>
        <p>The tradition of "courting quilts" held that a young woman's thirteenth quilt was her bridal quilt, and a man could only help tie it if they were engaged.</p>
      </div>
    </div>

    <div class="content-split content-split--reverse">
      <div>
        <h3>From Practical to Artistic</h3>
        <p>Quilting began as a practical craft. Layered fabric kept people warm and stretched the life of worn cloth. By the 19th century, patterns had grown more elaborate and more personal. In the 20th century, the art quilt movement treated fabric as a fine art medium.</p>
        <p>The American Bicentennial in 1976 set off a quilting revival that is still going.</p>
      </div>
      <div>
        <h3>The Quilt Code Debate</h3>
        <p>A popular theory holds that quilts hung on clotheslines carried messages for enslaved people escaping along the Underground Railroad. Monkey Wrench meant "gather your tools," Bear's Paw meant "follow animal trails," Flying Geese and North Star pointed north, and Log Cabin marked safe houses.</p>
        <p>The theory comes from Jacqueline Tobin and Raymond Dobard's 1999 book <em>Hidden in Plain View</em>, which rests on the oral history of one quilter, Ozella McDaniel Williams. Historians have found no documents from before the Civil War that support it, and several of the pattern names it depends on hadn't been coined yet. Barbara Brackman lays out the evidence in <em>Facts and Fabrications</em> (2006).</p>
        <p>The code is unsupported, but quilting has a well documented place in African American history. The Gee's Bend quilters of Alabama are one example.</p>
      </div>
    </div>

    <div class="content-split">
      <div>
        <h3>Notable Traditions</h3>
        <p><strong>Amish quilts</strong> use bold geometric designs in solid colors. Plain fabric fits the community's emphasis on simplicity.</p>
        <p><strong>Hawaiian quilts</strong> feature large symmetrical appliqué designs based on native plants. The style developed after missionaries brought quilting to Hawaii in the 1820s. Designs belong to the quilter who made them, and copying one without permission is a serious offense.</p>
        <p><strong>African American quilts</strong> often use improvised piecing, bold color, and asymmetric layouts. Some scholars trace these choices to West African textiles.</p>
      </div>
      <div>
        <h3>Quilts Beyond the Home</h3>
        <p><strong>Civil War stretchers:</strong> Quilts served as improvised stretchers to carry wounded soldiers when proper litters ran short.</p>
        <p><strong>WWI trench quilts:</strong> Hospitals taught wounded soldiers patchwork and embroidery as occupational therapy.</p>
        <p><strong>Changi Prison quilts:</strong> Women interned in Singapore during WWII secretly embroidered over 300 squares with names and messages as a record of captivity. Three survive in museums in Australia, England, and Japan.</p>
        <p><strong>Chilean arpilleras:</strong> Under Pinochet, women sewed appliquéd scenes of political disappearances and smuggled them out of the country as evidence.</p>
        <p><strong>The AIDS Memorial Quilt:</strong> It weighs 54 tons, covers 1.3 million square feet, and is often called the largest community art project in the world. It was nominated for a Nobel Peace Prize in 1989.</p>
      </div>
    </div>

    <div class="content-split content-split--reverse">
      <div>
        <h3>Andean Textile Traditions</h3>
        <p>Ecuador's coastal Valdivia culture (3500–1500 BCE) produced some of South America's earliest cotton textiles.</p>
        <p>The weaving tradition of the <strong>Otavalo</strong> in the northern Ecuadorian highlands is older than the Inca conquest. Otavalo weavers make ponchos, belts (<em>fajas</em>), and blankets on backstrap and treadle looms. Their techniques include supplementary weft patterning and <em>ikat</em>, a resist-dyeing method that gives the cloth its feathered edges.</p>
        <p>Quechua highland communities weave belts, shawls (<em>llicllas</em>), and ponchos with symbolic geometric patterns.</p>
      </div>
      <div>
        <h3>Textiles and Computing</h3>
        <p>The Jacquard loom (1804) used punched cards to control complex weaving patterns. Charles Babbage borrowed the punched cards for his Analytical Engine.</p>
        <p class="tooltip-trigger" data-tooltip="NASA's multi-layer insulation is built like a quilt: layers of reflective film and mesh spacers, stitched together, protect against temperatures from -250°F to +250°F."><strong>NASA quilts spacecraft</strong> <span class="easter-egg-nasa">&#x1F680;</span>. The insulation blankets on the International Space Station are layers of material stitched together, the same way a quilt is.</p>
      </div>
    </div>
  `;
}
