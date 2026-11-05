import './cutters.css';
import { PIECES, FAMILY_ORDER, pieceById, shapeSvg, mm, BLOCK_MM } from './geometry';
import { BLOCKS, DEFAULT_BLOCK } from './blocks';

const files = require.context('./files', true, /\.(stl|scad|md|sh)$/);
const fileUrl = (rel) => files(`./${rel}`);
const stlUrl = (id, part) => fileUrl(`stl-${BLOCK_MM}mm/${id}-${part}.stl`);

const TESSELLATING_PREVIEW = 6;
const HERO_PIECES = ['clamshell', 'hexagon', 'peel-lens', 'goose-half', 'dresden-blade', 'path-pie', 'lemoyne-diamond', 'snowball'];

function renderHero() {
  const art = document.getElementById('hero-art');
  art.innerHTML = HERO_PIECES.map((id, i) => {
    const p = pieceById[id];
    return `<span class="floater floater--${i}" style="--piece: ${p.family.color}">${shapeSvg(p, { scale: 1.6 })}</span>`;
  }).join('');
}

function renderFamilies() {
  const mount = document.getElementById('families');
  mount.innerHTML = FAMILY_ORDER.map((family) => {
    const cards = PIECES.filter((p) => p.family.name === family).map(pieceCard).join('');
    return `
      <div class="family">
        <h3>${family}</h3>
        <div class="piece-grid">${cards}</div>
      </div>`;
  }).join('');
}

function pieceCard(p) {
  return `
    <article class="piece-card" id="piece-${p.id}" data-id="${p.id}" style="--piece: ${p.family.color}">
      <span class="piece-badge" hidden></span>
      <div class="piece-stage">${shapeSvg(p)}</div>
      <h4>${p.label}</h4>
      <p class="piece-meta"><code>${p.id}</code> · ${mm(p.size.w)} × ${mm(p.size.h)} mm</p>
      <div class="piece-downloads">
        <a class="dl" href="${stlUrl(p.id, 'cutter')}" download>Cutter</a>
        <a class="dl dl--pusher" href="${stlUrl(p.id, 'pusher')}" download>Pusher</a>
      </div>
    </article>`;
}

function renderChips() {
  const mount = document.getElementById('block-chips');
  mount.innerHTML = BLOCKS.map((b) => `
    <button type="button" class="chip" data-block="${b.slug}" aria-pressed="false">${b.name}</button>
  `).join('');
  mount.addEventListener('click', (e) => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    selectBlock(chip.dataset.block);
    history.replaceState(null, '', `#${chip.dataset.block}`);
  });
}

function selectBlock(slug) {
  const block = BLOCKS.find((b) => b.slug === slug) || BLOCKS.find((b) => b.slug === DEFAULT_BLOCK);

  document.querySelectorAll('.chip').forEach((c) => {
    c.setAttribute('aria-pressed', String(c.dataset.block === block.slug));
  });

  const counts = new Map(block.pieces);
  document.querySelectorAll('.piece-card').forEach((card) => {
    const used = counts.has(card.dataset.id);
    const count = counts.get(card.dataset.id);
    card.classList.toggle('is-used', used);
    const badge = card.querySelector('.piece-badge');
    badge.hidden = !used;
    badge.textContent = count ? `×${count}` : '×∞';
  });

  renderTray(block);
}

function renderTray(block) {
  const total = block.pieces.reduce((sum, [, n]) => sum + (n || 0), 0);
  const shapes = block.pieces.length;
  const summary = block.pieces.some(([, n]) => n === null)
    ? `${shapes} ${shapes === 1 ? 'shape' : 'shapes'}`
    : `${total} pieces from ${shapes} ${shapes === 1 ? 'shape' : 'shapes'}`;

  const groups = block.pieces.map(([id, n]) => {
    const p = pieceById[id];
    const copies = n || TESSELLATING_PREVIEW;
    const minis = Array.from({ length: copies }, (_, i) =>
      `<span class="mini" style="--i: ${i}">${shapeSvg(p, { scale: 1, pad: 1.5 })}</span>`).join('');
    return `
      <a class="tray-group" href="#piece-${id}" style="--piece: ${p.family.color}">
        <span class="tray-minis">${minis}</span>
        <span class="tray-label"><strong>${n ? `×${n}` : '×∞'}</strong> ${p.label}</span>
      </a>`;
  }).join('');

  document.getElementById('tray').innerHTML = `
    <div class="tray-head">
      <h3>${block.name}${block.grid ? ` <span class="tray-grid">${block.grid}</span>` : ''}</h3>
      <p>${summary}</p>
    </div>
    <div class="tray-groups">${groups}</div>
    ${block.note ? `<p class="tray-note">${block.note}</p>` : ''}`;
}

function init() {
  document.getElementById('scad-link').href = fileUrl('quilt_block_cutters.scad');
  renderHero();
  renderFamilies();
  renderChips();
  selectBlock(location.hash.slice(1));
}

document.addEventListener('DOMContentLoaded', init);
