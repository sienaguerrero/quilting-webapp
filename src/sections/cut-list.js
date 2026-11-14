import data from '../data/quilt-blocks.json';
import { cutList, defaultColors, nearestRulerSizes, plainCut, renderSvg } from '../lib/quilt-blocks.js';
import { parseInches, roundUpToRuler, ruler } from '../lib/ruler.js';

const CUT_NOTES = {
  whole: '',
  once: 'cut once on the diagonal',
  twice: 'cut twice on the diagonal',
};

const plural = (count, word) => (count === 1 ? word : `${word}s`);
const dimensions = (w, h) => (w.equals(h) ? ruler(w) : `${ruler(w)} × ${ruler(h)}`);

function describe(line) {
  const shape = line.width.equals(line.height) ? 'square' : 'rectangle';
  let text = `${dimensions(line.width, line.height)} ${plural(line.count, shape)}`;
  if (line.cut !== 'whole') {
    text += `, ${CUT_NOTES[line.cut]} for ${line.needed} ${plural(line.needed, 'triangle')}`;
    if (line.spare) text += ` (${line.spare} spare)`;
  }
  return text;
}

function fabricGroups(block, lines) {
  return block.fabrics.map((fabric) => [fabric, lines.filter((line) => line.fabric === fabric)]);
}

function renderResult(slug, size) {
  const block = data.blocks[slug];
  const lines = cutList(block, size);
  const colors = defaultColors(block.fabrics);
  const offGrid = lines.some((line) => !line.onRuler);
  const [below, above] = offGrid ? nearestRulerSizes(block, size) : [];

  return `
    <figure class="cutlist-figure">
      ${renderSvg(block, size)}
      <figcaption>${block.name}, ${ruler(size)} finished, ${ruler(plainCut(size))} unfinished</figcaption>
    </figure>

    <div class="cutlist-lines">
      ${offGrid ? `
        <div class="cutlist-warning" role="status">
          <p>Some cuts fall between the ⅛″ lines on a ruler. A ${block.grid} × ${block.grid} grid at ${ruler(size)} makes cells of ${ruler(size.div(block.grid))}.</p>
          <p>Sizes nearby that cut cleanly:
            ${[below, above].filter(Boolean).map((s) => `<button type="button" class="cutlist-size" data-size="${s}">${ruler(s)}</button>`).join(' ')}
          </p>
        </div>` : ''}
      ${fabricGroups(block, lines).map(([fabric, group]) => `
        <section class="cutlist-fabric">
          <h3><span class="cutlist-swatch" style="background:${colors[fabric]}"></span>${fabric}</h3>
          <ul>
            ${group.map((line) => `
              <li>
                <span class="cutlist-count">${line.count}</span>
                <span>${describe(line)}${line.onRuler ? '' : `<span class="cutlist-flag">Off the ⅛″ grid. Next line up: ${dimensions(roundUpToRuler(line.width), roundUpToRuler(line.height))}</span>`}</span>
              </li>`).join('')}
          </ul>
        </section>`).join('')}
    </div>
  `;
}

export function renderCutList(container) {
  const slugs = Object.keys(data.blocks);
  const state = { slug: 'ohio-star', sizeText: '12' };

  container.innerHTML = `
    <div class="section-header">
      <p class="eyebrow">Cut Lists</p>
      <h2>From Block to Cutting Mat</h2>
      <p>Pick a block and a finished size. Every cut includes its ¼″ seam allowances, and the math stays in exact fractions so nothing rounds behind your back.</p>
    </div>

    <form class="cutlist-controls" novalidate>
      <div class="planner-field">
        <label for="cl-block">Block</label>
        <select id="cl-block">
          ${slugs.map((slug) => `<option value="${slug}"${slug === state.slug ? ' selected' : ''}>${data.blocks[slug].name}</option>`).join('')}
        </select>
      </div>
      <div class="planner-field">
        <label for="cl-size">Finished size (inches)</label>
        <input id="cl-size" type="text" inputmode="decimal" value="${state.sizeText}" aria-describedby="cl-size-help" autocomplete="off" />
        <p id="cl-size-help" class="cutlist-help">12, 10.5, or 10 1/2</p>
      </div>
    </form>

    <div id="cl-result" class="cutlist-result" aria-live="polite"></div>
  `;

  const result = container.querySelector('#cl-result');
  const sizeInput = container.querySelector('#cl-size');

  function update() {
    let size;
    try {
      size = parseInches(state.sizeText);
    } catch {
      size = null;
    }
    if (!size || size.compare(0) <= 0 || size.compare(120) > 0) {
      sizeInput.setAttribute('aria-invalid', 'true');
      result.innerHTML = '<p class="cutlist-help">Enter a finished size between 0 and 120 inches, like 12 or 10 1/2.</p>';
      return;
    }
    sizeInput.removeAttribute('aria-invalid');
    result.innerHTML = renderResult(state.slug, size);
  }

  container.querySelector('#cl-block').addEventListener('change', (e) => {
    state.slug = e.target.value;
    update();
  });
  sizeInput.addEventListener('input', (e) => {
    state.sizeText = e.target.value;
    update();
  });
  container.querySelector('form').addEventListener('submit', (e) => e.preventDefault());
  result.addEventListener('click', (e) => {
    const button = e.target.closest('.cutlist-size');
    if (!button) return;
    sizeInput.value = button.dataset.size.includes('/') ? toMixed(button.dataset.size) : button.dataset.size;
    state.sizeText = sizeInput.value;
    update();
  });

  update();
}

function toMixed(text) {
  const [n, d] = text.split('/').map(Number);
  const whole = Math.floor(n / d);
  return whole ? `${whole} ${n % d}/${d}` : text;
}
