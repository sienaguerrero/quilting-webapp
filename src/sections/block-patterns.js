const FABRIC_PALETTES = {
  traditional: { name: 'Traditional', c1: '#c0392b', c2: '#f5d6a8', c3: '#5b3a29', c4: '#e8c98a', bg: '#f0e4d0' },
  amish:       { name: 'Amish',       c1: '#1a1a6b', c2: '#2d8b4e', c3: '#8b1a1a', c4: '#d4a017', bg: '#1a1a2e' },
  modern:      { name: 'Modern',      c1: '#ff6b6b', c2: '#ffd93d', c3: '#6bcb77', c4: '#4d96ff', bg: '#f8f9fa' },
  ocean:       { name: 'Ocean',       c1: '#2c6e8a', c2: '#a8d4e6', c3: '#1a4a5e', c4: '#5ba3c9', bg: '#e8f4f8' },
  autumn:      { name: 'Autumn',      c1: '#b7410e', c2: '#d4a017', c3: '#5b3a29', c4: '#c97b2a', bg: '#f5e6c8' },
  berry:       { name: 'Berry',       c1: '#8e44ad', c2: '#f0e4d0', c3: '#c0392b', c4: '#e8a0bf', bg: '#faf0f5' },
};

function cell(cls) {
  const d = document.createElement('div');
  d.className = `qc ${cls}`;
  return d;
}

function makeGrid(parent, cols, rows, cellFn) {
  parent.style.display = 'grid';
  parent.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  parent.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
  parent.style.gap = '0px';
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      parent.appendChild(cellFn(r, c));
    }
  }
}

const BLOCK_BUILDERS = {
  'log-cabin'(el) {
    el.innerHTML = '';
    const wrap = document.createElement('div');
    wrap.className = 'lc-wrap';
    const layers = [
      { cls: 'qc-c1', size: '16%' },
      { cls: 'qc-c3', size: '28%' },
      { cls: 'qc-c2', size: '40%' },
      { cls: 'qc-c3', size: '52%' },
      { cls: 'qc-c2', size: '64%' },
      { cls: 'qc-c3', size: '76%' },
      { cls: 'qc-c2', size: '88%' },
      { cls: 'qc-bg', size: '100%' },
    ];
    layers.reverse().forEach((l, i) => {
      const d = document.createElement('div');
      d.className = `lc-layer ${l.cls}`;
      d.style.width = l.size;
      d.style.height = l.size;
      if (i < layers.length - 1) {
        const half = i % 2 === 0 ? 'lc-split-v' : 'lc-split-h';
        d.classList.add(half);
      }
      wrap.appendChild(d);
    });
    el.appendChild(wrap);
  },

  'nine-patch'(el) {
    el.innerHTML = '';
    makeGrid(el, 3, 3, (r, c) => {
      const dark = (r + c) % 2 === 0;
      return cell(dark ? 'qc-c1' : 'qc-c2');
    });
    el.style.gap = '2px';
    el.style.padding = '2px';
  },

  'flying-geese'(el) {
    el.innerHTML = '';
    el.style.display = 'flex';
    el.style.flexDirection = 'column';
    for (let i = 0; i < 4; i++) {
      const row = document.createElement('div');
      row.className = 'fg-row';
      const goose = document.createElement('div');
      goose.className = 'fg-goose qc-c1';
      const skyL = document.createElement('div');
      skyL.className = 'fg-sky qc-bg';
      const skyR = document.createElement('div');
      skyR.className = 'fg-sky qc-bg';
      row.appendChild(skyL);
      row.appendChild(goose);
      row.appendChild(skyR);
      el.appendChild(row);
    }
  },

  'pinwheel'(el) {
    el.innerHTML = '';
    makeGrid(el, 2, 2, (r, c) => {
      const d = document.createElement('div');
      d.className = 'pw-cell';
      const t1 = document.createElement('div');
      const t2 = document.createElement('div');
      const spin = r * 2 + c;
      const dirs = ['tr', 'br', 'tl', 'bl'];
      t1.className = `pw-tri pw-tri-${dirs[spin]} qc-c1`;
      t2.className = `pw-tri pw-tri-${dirs[3 - spin]} qc-c2`;
      d.appendChild(t1);
      d.appendChild(t2);
      return d;
    });
  },

  'ohio-star'(el) {
    el.innerHTML = '';
    makeGrid(el, 3, 3, (r, c) => {
      if (r === 1 && c === 1) return cell('qc-c1');
      if ((r === 0 || r === 2) && (c === 0 || c === 2)) return cell('qc-bg');
      const d = document.createElement('div');
      d.className = 'os-cell';
      const isVert = (c === 1);
      const star = isVert ? ['left', 'right'] : ['top', 'bottom'];
      const bg   = isVert ? ['top', 'bottom'] : ['left', 'right'];
      d.innerHTML = star.map(dir => `<div class="os-qst os-qst-${dir} qc-c1"></div>`)
        .concat(bg.map(dir => `<div class="os-qst os-qst-${dir} qc-bg"></div>`))
        .join('');
      return d;
    });
  },

  'bears-paw'(el) {
    el.innerHTML = '';
    makeGrid(el, 7, 7, (r, c) => {
      if (r === 3 || c === 3) return cell('qc-c3');
      const top = r < 3;
      const left = c < 3;
      const lr = top ? r : r - 4;
      const lc = left ? c : c - 4;
      const padR = top ? 2 : 0;
      const padC = left ? 2 : 0;
      if (lr === padR || lc === padC) return cell('qc-c3');
      const d = document.createElement('div');
      d.className = 'pw-cell';
      const dark = (lr + lc) % 2 === 0;
      const useBackslash = (top === left);
      let d1, d2;
      if (useBackslash) {
        d1 = dark ? 'tl' : 'br';
        d2 = dark ? 'br' : 'tl';
      } else {
        d1 = dark ? 'tr' : 'bl';
        d2 = dark ? 'bl' : 'tr';
      }
      d.innerHTML = `<div class="pw-tri pw-tri-${d1} qc-c1"></div><div class="pw-tri pw-tri-${d2} qc-bg"></div>`;
      return d;
    });
    el.style.gap = '1px';
  },

  'drunkards-path'(el) {
    el.innerHTML = '';
    makeGrid(el, 2, 2, (r, c) => {
      const d = document.createElement('div');
      d.className = 'dp-cell';
      const bg = document.createElement('div');
      bg.className = 'dp-bg qc-c1';
      const curve = document.createElement('div');
      const corners = ['dp-br', 'dp-bl', 'dp-tr', 'dp-tl'];
      curve.className = `dp-curve qc-bg ${corners[r * 2 + c]}`;
      d.appendChild(bg);
      d.appendChild(curve);
      return d;
    });
  },

  'sawtooth-star'(el) {
    el.innerHTML = '';
    makeGrid(el, 3, 3, (r, c) => {
      if ((r === 0 || r === 2) && (c === 0 || c === 2)) return cell('qc-bg');
      if (r === 1 && c === 1) return cell('qc-c2');

      const d = document.createElement('div');
      d.style.display = 'grid';
      d.style.width = '100%';
      d.style.height = '100%';
      d.style.gap = '0px';

      const isHoriz = (r === 0 || r === 2);
      d.style.gridTemplateColumns = isHoriz ? '1fr 1fr' : '1fr';
      d.style.gridTemplateRows = isHoriz ? '1fr' : '1fr 1fr';

      let pairs;
      if (r === 0)      pairs = [['tl','br'],['tr','bl']];
      else if (r === 2) pairs = [['bl','tr'],['br','tl']];
      else if (c === 0) pairs = [['tl','br'],['bl','tr']];
      else              pairs = [['tr','bl'],['br','tl']];

      for (const [dark, bg] of pairs) {
        const h = document.createElement('div');
        h.className = 'pw-cell';
        h.innerHTML = `<div class="pw-tri pw-tri-${dark} qc-c1"></div><div class="pw-tri pw-tri-${bg} qc-bg"></div>`;
        d.appendChild(h);
      }
      return d;
    });
  },

  'grandmothers-flower-garden'(el) {
    el.innerHTML = '';
    const wrap = document.createElement('div');
    wrap.className = 'gfg-wrap';
    const W = 18;
    const H = W * 2 / Math.sqrt(3);
    const vStep = H * 0.75;
    const maxR = Math.ceil(100 / vStep) + 2;
    const maxC = Math.ceil(100 / W) + 2;

    const flowers = [
      { center: '--qb-c1', petal: '--qb-c2' },
      { center: '--qb-c3', petal: '--qb-c4' },
      { center: '--qb-c4', petal: '--qb-c1' },
      { center: '--qb-c2', petal: '--qb-c3' },
      { center: '--qb-c1', petal: '--qb-c4' },
      { center: '--qb-c3', petal: '--qb-c1' },
    ];

    function m3(n) { return ((n % 3) + 3) % 3; }
    function cq(col, row) { return col - Math.floor(row / 2); }
    function isCtr(q, r) { return m3(q) === 0 && m3(r) === 0; }

    function flowerIdx(q, r) {
      const a = ((q / 3 % 6) + 6) % 6;
      const b = ((r / 3 % 6) + 6) % 6;
      return Math.floor((a * 3 + b * 7) % flowers.length);
    }

    function nearestCenter(col, row) {
      const even = ((row % 2) + 2) % 2 === 0;
      const nb = even
        ? [[col+1,row],[col-1,row],[col,row-1],[col-1,row-1],[col,row+1],[col-1,row+1]]
        : [[col+1,row],[col-1,row],[col+1,row-1],[col,row-1],[col+1,row+1],[col,row+1]];
      for (const [nc, nr] of nb) {
        const nq = cq(nc, nr);
        if (isCtr(nq, nr)) return { q: nq, r: nr };
      }
      return null;
    }

    for (let row = -1; row <= maxR; row++) {
      const odd = ((row % 2) + 2) % 2;
      const xOff = odd ? W / 2 : 0;
      for (let col = -1; col <= maxC; col++) {
        const cx = col * W + xOff;
        const cy = row * vStep;
        if (cx < -W || cx > 100 + W || cy < -H || cy > 100 + H) continue;
        const q = cq(col, row);
        const hex = document.createElement('div');
        hex.className = 'gfg-hex';
        hex.style.left = `${cx}%`;
        hex.style.top = `${cy}%`;
        hex.style.width = `${W}%`;
        hex.style.height = `${H}%`;

        if (isCtr(q, row)) {
          const f = flowers[flowerIdx(q, row)];
          hex.style.background = `var(${f.center})`;
        } else {
          const ctr = nearestCenter(col, row);
          if (ctr) {
            const f = flowers[flowerIdx(ctr.q, ctr.r)];
            hex.style.background = `var(${f.petal})`;
          } else {
            hex.classList.add('qc-bg');
          }
        }

        wrap.appendChild(hex);
      }
    }
    el.appendChild(wrap);
  },

  'jacobs-ladder'(el) {
    el.innerHTML = '';
    makeGrid(el, 3, 3, (r, c) => {
      const isFourPatch = (r + c) % 2 === 0;
      if (isFourPatch) {
        const d = document.createElement('div');
        d.className = 'jl-fp';
        for (let sr = 0; sr < 2; sr++) {
          for (let sc = 0; sc < 2; sc++) {
            d.appendChild(cell((sr + sc) % 2 === 0 ? 'qc-c1' : 'qc-c2'));
          }
        }
        return d;
      }
      const d = document.createElement('div');
      d.className = 'pw-cell';
      d.innerHTML = `<div class="pw-tri pw-tri-tl qc-c1"></div><div class="pw-tri pw-tri-br qc-c2"></div>`;
      return d;
    });
  },

  'monkey-wrench'(el) {
    el.innerHTML = '';
    makeGrid(el, 3, 3, (r, c) => {
      if (r === 1 && c === 1) return cell('qc-c1');
      if ((r === 0 || r === 2) && (c === 0 || c === 2)) {
        const d = document.createElement('div');
        d.className = 'pw-cell';
        const inner = r === 0 ? (c === 0 ? 'br' : 'bl') : (c === 0 ? 'tr' : 'tl');
        const outer = { br: 'tl', bl: 'tr', tr: 'bl', tl: 'br' }[inner];
        d.innerHTML = `<div class="pw-tri pw-tri-${inner} qc-c1"></div><div class="pw-tri pw-tri-${outer} qc-bg"></div>`;
        return d;
      }
      const d = document.createElement('div');
      d.className = 'qc';
      d.style.width = '100%';
      d.style.height = '100%';
      const dir = r === 0 ? 'to bottom' : r === 2 ? 'to top' : c === 0 ? 'to right' : 'to left';
      d.style.background = `linear-gradient(${dir}, var(--qb-bg) 50%, var(--qb-c1) 50%)`;
      return d;
    });
  },

  'snails-trail'(el) {
    el.innerHTML = '';
    makeGrid(el, 2, 2, (r, c) => {
      const corners = ['br', 'bl', 'tr', 'tl'];
      const corner = corners[r * 2 + c];
      const startC1 = (r === c);
      const d = document.createElement('div');
      d.className = `st-quad ${startC1 ? 'qc-c2' : 'qc-c1'}`;
      [100, 71, 43, 14].forEach((size, i) => {
        const tri = document.createElement('div');
        tri.className = `st-tri st-tri-${corner} ${(i % 2 === 0) === startC1 ? 'qc-c1' : 'qc-c2'}`;
        tri.style.width = `${size}%`;
        tri.style.height = `${size}%`;
        d.appendChild(tri);
      });
      return d;
    });
  },
};

export function buildBlockPattern(el, blockId) {
  const builder = BLOCK_BUILDERS[blockId];
  if (builder) {
    el.classList.add('qb-rendered');
    builder(el);
  }
}

export function applyPalette(el, paletteId) {
  const p = FABRIC_PALETTES[paletteId];
  if (!p) return;
  el.style.setProperty('--qb-c1', p.c1);
  el.style.setProperty('--qb-c2', p.c2);
  el.style.setProperty('--qb-c3', p.c3);
  el.style.setProperty('--qb-c4', p.c4);
  el.style.setProperty('--qb-bg', p.bg);
}

export function buildFabricPicker(targetEl, onChange) {
  const picker = document.createElement('div');
  picker.className = 'fabric-picker';
  picker.innerHTML = `
    <div class="fabric-picker-label">Choose Fabric</div>
    <div class="fabric-picker-swatches">
      ${Object.entries(FABRIC_PALETTES).map(([id, p]) => `
        <button class="fabric-swatch ${id === 'traditional' ? 'active' : ''}"
                data-palette="${id}" aria-label="${p.name}" aria-pressed="${id === 'traditional'}">
          <span class="swatch-dot" style="background:${p.c1}"></span>
          <span class="swatch-dot" style="background:${p.c2}"></span>
          <span class="swatch-dot" style="background:${p.c3}"></span>
        </button>
      `).join('')}
    </div>
  `;

  picker.addEventListener('click', (e) => {
    const btn = e.target.closest('.fabric-swatch');
    if (!btn) return;
    picker.querySelectorAll('.fabric-swatch').forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');
    onChange(btn.dataset.palette);
  });

  targetEl.appendChild(picker);
  return picker;
}

export { FABRIC_PALETTES, BLOCK_BUILDERS };
