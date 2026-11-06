import './styles/main.css';
import './styles/quilt-patterns.css';
import './styles/geometry.css';
import './styles/wallpaper.css';
import './styles/quilt-planner.css';

import { renderHistory } from './sections/history';
import { renderTechniques } from './sections/techniques';
import { renderBlocks, renderBlockDetail } from './sections/blocks';
import { renderGeometry } from './sections/geometry';
import { renderWallpaperGroups } from './sections/wallpaper-groups';
import { initEasterEggs } from './sections/easter-eggs';
import { renderQuiltPlanner } from './sections/quilt-planner';
import { renderGlossary } from './sections/glossary';

function initApp() {
  renderHistory(document.getElementById('history'));
  renderTechniques(document.getElementById('techniques'));
  renderBlocks(document.getElementById('blocks'));
  renderGeometry(document.getElementById('geometry'));
  renderWallpaperGroups(document.getElementById('wallpaper'));
  renderQuiltPlanner(document.getElementById('planner'));
  renderGlossary(document.getElementById('glossary'));
  initEasterEggs();
  initRouter();
  buildHeroGrid();
}

function initRouter() {
  window.addEventListener('hashchange', handleRoute);
  handleRoute();
}

function handleRoute() {
  const requested = window.location.hash.slice(1) || 'home';
  const sections = document.querySelectorAll('.section');
  const links = document.querySelectorAll('.nav-link');

  if (requested.startsWith('block/')) {
    const blockId = requested.split('/')[1];
    sections.forEach(s => s.classList.remove('active'));
    document.getElementById('block-detail').classList.add('active');
    renderBlockDetail(document.getElementById('block-detail'), blockId);
    links.forEach(l => {
      l.classList.toggle('active', l.dataset.section === 'blocks');
    });
    window.scrollTo(0, 0);
    return;
  }

  const known = Array.from(links).some(l => l.dataset.section === requested);
  const hash = known ? requested : 'home';

  sections.forEach(s => {
    s.classList.toggle('active', s.id === hash);
  });
  links.forEach(l => {
    l.classList.toggle('active', l.dataset.section === hash);
  });
  window.scrollTo(0, 0);
}

function buildHeroGrid() {
  const grid = document.getElementById('hero-quilt-grid');
  if (!grid) return;

  const patterns = [
    'log-cabin', 'nine-patch', 'pinwheel', 'ohio-star',
    'flying-geese', 'sawtooth-star', 'chakana', 'diamond-chevron',
    'grandmothers-flower-garden', 'bears-paw', 'drunkards-path',
    'step-fret', 'log-cabin', 'ikat-stripe', 'nine-patch', 'pinwheel',
  ];

  patterns.forEach(p => {
    const cell = document.createElement('div');
    cell.className = `hero-cell quilt-block quilt-block--${p}`;
    grid.appendChild(cell);
  });
}

document.addEventListener('DOMContentLoaded', initApp);
