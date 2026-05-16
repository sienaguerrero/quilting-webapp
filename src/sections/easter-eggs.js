export function initEasterEggs() {
  initNasaTooltip();
  initGoldenRatioConsole();
}

function initNasaTooltip() {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('easter-egg-nasa')) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'scale(1.5)';
      setTimeout(() => {
        e.target.style.transform = 'scale(1)';
      }, 300);
    }
  });
}

function initGoldenRatioConsole() {
  const phi = 1.618033988749895;
  const style = 'color: #A1B861; font-size: 14px; font-family: monospace;';
  const styleBold = 'color: #A1B861; font-size: 16px; font-weight: bold; font-family: monospace;';

  console.log('%c╔══════════════════════════════════════╗', style);
  console.log('%c║  φ = 1.618033988749895...            ║', styleBold);
  console.log('%c║                                      ║', style);
  console.log('%c║  The golden ratio is woven into      ║', style);
  console.log('%c║  this page: layout proportions,      ║', style);
  console.log('%c║  spacing scale, line-height,         ║', style);
  console.log('%c║  and the accent color #A1B861        ║', style);
  console.log('%c║  (161, 184, 97 → 1.61, 8, .97)      ║', style);
  console.log('%c║                                      ║', style);
  console.log('%c║  The geometry page background has     ║', style);
  console.log('%c║  a hidden Otavalo ikat pattern.      ║', style);
  console.log('%c╚══════════════════════════════════════╝', style);
}
