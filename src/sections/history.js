export function renderHistory(container) {
  container.innerHTML = `
    <div class="section-header">
      <h4>History</h4>
      <h2>A Thread Through Time</h2>
      <p>From ancient Egypt to the Andes, quilting has been a universal human impulse — layering cloth for warmth, beauty, and meaning.</p>
    </div>

    <div class="content-split">
      <div>
        <h3>Ancient Origins</h3>
        <p>Evidence of quilted garments dates to roughly 3400 BCE in ancient Egypt, where a carved ivory figure wears what appears to be a quilted robe. In medieval Europe, quilted garments served as padding beneath armor and as warm bed coverings. Crusaders returning from the Middle East helped spread quilting techniques across Europe.</p>
        <p>In colonial America, quilting became essential for warmth and resourcefulness, as settlers pieced together fabric scraps to make functional bedding.</p>
      </div>
      <div>
        <h3>The Quilting Bee</h3>
        <p>During the 18th and 19th centuries, quilting bees became important social gatherings in American communities. These events were among the few socially acceptable occasions for women to gather, and they became early sites of community organizing.</p>
        <p>The tradition of "courting quilts" held that a young woman's thirteenth quilt was her bridal quilt, and a man could only help tie it if they were engaged.</p>
      </div>
    </div>

    <div class="content-split content-split--reverse">
      <div>
        <h3>From Practical to Artistic</h3>
        <p>Quilting began as a purely utilitarian craft — layering fabric for insulation and extending the life of worn textiles. By the 19th century, increasingly elaborate patterns reflected personal expression. In the 20th century, the art quilt movement emerged, with makers treating fabric as a fine art medium.</p>
        <p>The American Bicentennial in 1976 sparked a major quilting revival that continues today, spanning gallery exhibitions, modern design, and digital pattern-making.</p>
      </div>
      <div>
        <h3>The Quilt Code Debate</h3>
        <p>A popular theory holds that quilt patterns hung on clotheslines encoded messages for enslaved people escaping along the Underground Railroad — Bear's Paw meaning "follow animal trails," North Star meaning "travel north," Log Cabin marking safe houses.</p>
        <p>The theory originates from Jacqueline Tobin and Raymond Dobard's 1999 book <em>Hidden in Plain View</em>, based on oral history from quilter Ozella McDaniel Williams. However, historians note the complete absence of corroborating documentary evidence from the antebellum period. Many pattern names central to the theory didn't exist before the Civil War.</p>
        <p>The responsible view: while the specific code claim lacks evidentiary support, quilting held genuine significance in African American life — identity, community, and cultural memory. The Gee's Bend quilters of Alabama exemplify this rich, documented heritage.</p>
      </div>
    </div>

    <div class="content-split">
      <div>
        <h3>Notable Traditions</h3>
        <p><strong>Amish quilts</strong> are known for bold, solid-color geometric designs reflecting the community's values of simplicity.</p>
        <p><strong>Hawaiian quilts</strong> feature large-scale symmetrical appliqué designs inspired by native plants, developed after missionaries introduced quilting in the 1820s. The designs are considered intellectual property — copying another quilter's pattern without permission is a serious cultural offense.</p>
        <p><strong>African American quilts</strong> carry a tradition of improvisational piecing, bold color use, and asymmetric patterns rooted in West African textile traditions.</p>
      </div>
      <div>
        <h3>Quilts Beyond the Home</h3>
        <p><strong>Civil War stretchers:</strong> Quilts served as improvised stretchers to carry wounded soldiers when proper litters ran short.</p>
        <p><strong>WWI trench quilts:</strong> Wounded soldiers were taught patchwork and embroidery as occupational therapy in hospitals, challenging gender norms of the era.</p>
        <p><strong>Changi Prison quilts:</strong> Women interned in Singapore during WWII secretly embroidered over 300 squares with names and messages as a record of captivity. Three survive in museums in Australia, England, and Japan.</p>
        <p><strong>Chilean arpilleras:</strong> Under Pinochet, women sewed quilted tapestries documenting political disappearances, smuggling them out as evidence.</p>
        <p><strong>The AIDS Memorial Quilt:</strong> Eventually weighing 54 tons and covering 1.3 million square feet, it is the largest community art project in the world. It was nominated for a Nobel Peace Prize in 1989.</p>
      </div>
    </div>

    <div class="content-split content-split--reverse">
      <div>
        <h3>Andean Textile Traditions</h3>
        <p>Ecuador's coastal Valdivia culture (3500–1500 BCE) produced some of South America's earliest cotton textiles — older than most quilting traditions anywhere.</p>
        <p>The <strong>Otavalo weavers</strong> of the northern Ecuadorian highlands have a tradition predating the Inca conquest. They produce ponchos, belts (<em>fajas</em>), and blankets on backstrap and treadle looms using techniques including supplementary weft patterning and <em>ikat</em> — a resist-dyeing method that creates the distinctive feathered-edge patterns.</p>
        <p>Quechua highland communities produce woven belts, shawls (<em>llicllas</em>), and ponchos with symbolic geometric patterns. Japanese <strong>sashiko</strong> stitching similarly originated as farmers' reinforcement of worn indigo workwear — poverty-driven mending that became a recognized art form.</p>
      </div>
      <div>
        <h3>Textiles and Computing</h3>
        <p>The Jacquard loom, invented in 1804 to automate complex weaving patterns using punched cards, directly inspired Charles Babbage's Analytical Engine.</p>
        <p class="tooltip-trigger" data-tooltip="NASA's multi-layer insulation on spacecraft is essentially quilted — alternating reflective film and mesh spacers, stitched together to protect against temperature extremes from -250°F to +250°F."><strong>NASA quilts spacecraft</strong> <span class="easter-egg-nasa">&#x1F680;</span> — the multi-layer insulation blankets on the International Space Station use the same fundamental principle as a quilt: layered materials stitched together for thermal protection.</p>
      </div>
    </div>
  `;
}
