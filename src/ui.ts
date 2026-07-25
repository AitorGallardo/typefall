import {
  type Settings,
  type ModeId,
  type EffectId,
  TIME_OPTIONS,
  WORD_OPTIONS,
  EFFECT_OPTIONS,
  EFFECT_LABELS,
} from './settings';

export interface ResultStats {
  wpm: number;
  acc: number;
  raw: number;
  correct: number;
  incorrect: number;
  best: number;
}

export interface UICallbacks {
  getSettings(): Settings;
  applySettings(patch: Partial<Settings>): void;
  restart(): void;
  onMenuOpen(): void;
  onMenuClose(): void;
}

// Builds and owns all DOM chrome: the live HUD, the gear button, the results
// overlay and the settings/menu panel. Same visual language as the scene:
// dark, mono, one green accent, no gamey colour.
export function createUI(cb: UICallbacks) {
  const root = document.createElement('div');
  root.id = 'ui';
  document.body.appendChild(root);

  // --- live HUD ---------------------------------------------------------
  const hud = el('div', 'hud');
  const hudMode = el('span', 'hud-mode');
  const hudPrimary = el('span', 'hud-primary');
  const hudStats = el('span', 'hud-stats');
  hud.append(hudMode, hudPrimary, hudStats);

  const gear = el('button', 'gear');
  gear.textContent = '⚙';
  gear.setAttribute('aria-label', 'settings');
  gear.addEventListener('click', () => openMenu());

  root.append(hud, gear);

  // --- results overlay --------------------------------------------------
  const results = el('div', 'overlay results hidden');
  const rWpm = el('div', 'r-wpm');
  const rWpmLabel = el('div', 'r-label');
  rWpmLabel.textContent = 'wpm';
  const rGrid = el('div', 'r-grid');
  const rHint = el('div', 'r-hint');
  rHint.innerHTML = 'restart <span class="k">tab</span> + <span class="k">enter</span> · or click';
  results.append(rWpm, rWpmLabel, rGrid, rHint);
  results.addEventListener('click', () => cb.restart());

  // --- settings / menu panel -------------------------------------------
  const menu = el('div', 'overlay menu hidden');
  const panel = el('div', 'panel');
  menu.appendChild(panel);
  menu.addEventListener('click', (e) => {
    if (e.target === menu) closeMenu();
  });

  root.append(results, menu);

  let menuOpen = false;
  let opts: HTMLButtonElement[] = [];
  let focusIdx = 0;

  function buildMenu(): void {
    const s = cb.getSettings();
    panel.innerHTML = '';
    opts = [];

    const title = el('div', 'p-title');
    title.textContent = 'typefall';
    panel.appendChild(title);

    const restart = opt('restart', 'p-restart', () => cb.restart());
    panel.appendChild(wrapRow('', [restart]));

    // mode
    const modeBtns = (['time', 'words', 'zen'] as ModeId[]).map((m) =>
      opt(m, s.mode === m ? 'sel' : '', () => cb.applySettings({ mode: m })),
    );
    panel.appendChild(wrapRow('mode', modeBtns));

    // amount (depends on mode)
    if (s.mode !== 'zen') {
      const values = s.mode === 'time' ? TIME_OPTIONS : WORD_OPTIONS;
      const cur = s.mode === 'time' ? s.time : s.words;
      const label = s.mode === 'time' ? 'seconds' : 'words';
      const amountBtns = values.map((v) =>
        opt(String(v), cur === v ? 'sel' : '', () =>
          cb.applySettings(s.mode === 'time' ? { time: v } : { words: v }),
        ),
      );
      panel.appendChild(wrapRow(label, amountBtns));
    }

    // effect
    const effectBtns = EFFECT_OPTIONS.map((eff: EffectId) =>
      opt(EFFECT_LABELS[eff], s.effect === eff ? 'sel' : '', () => cb.applySettings({ effect: eff })),
    );
    panel.appendChild(wrapRow('effect', effectBtns));

    // sound
    const soundBtns = [
      opt('off', !s.sound ? 'sel' : '', () => cb.applySettings({ sound: false })),
      opt('on', s.sound ? 'sel' : '', () => cb.applySettings({ sound: true })),
    ];
    panel.appendChild(wrapRow('sound', soundBtns));

    const hint = el('div', 'p-hint');
    hint.innerHTML =
      '<span class="k">↑↓←→</span> move · <span class="k">enter</span> pick · <span class="k">esc</span> close';
    panel.appendChild(hint);

    focusIdx = Math.min(focusIdx, opts.length - 1);
  }

  function opt(text: string, cls: string, onClick: () => void): HTMLButtonElement {
    const b = document.createElement('button');
    b.className = 'opt' + (cls ? ' ' + cls : '');
    b.textContent = text;
    b.tabIndex = -1;
    b.addEventListener('click', () => {
      onClick();
      buildMenu();
      focusCurrent();
    });
    opts.push(b);
    return b;
  }

  function wrapRow(label: string, children: HTMLElement[]): HTMLElement {
    const row = el('div', 'p-row');
    if (label) {
      const l = el('span', 'p-rowlabel');
      l.textContent = label;
      row.appendChild(l);
    }
    const group = el('span', 'p-group');
    group.append(...children);
    row.appendChild(group);
    return row;
  }

  function focusCurrent(): void {
    opts.forEach((o, i) => o.classList.toggle('cursor', i === focusIdx));
    opts[focusIdx]?.focus();
  }

  function openMenu(): void {
    if (menuOpen) return;
    menuOpen = true;
    buildMenu();
    menu.classList.remove('hidden');
    focusIdx = 0; // restart button first → Tab+Enter muscle memory
    focusCurrent();
    cb.onMenuOpen();
  }

  function closeMenu(): void {
    if (!menuOpen) return;
    menuOpen = false;
    menu.classList.add('hidden');
    cb.onMenuClose();
  }

  // Keyboard navigation while the menu is open. Returns true if handled.
  function handleMenuKey(key: string): boolean {
    if (!menuOpen) return false;
    if (key === 'Escape' || key === 'Tab') {
      closeMenu();
      return true;
    }
    if (key === 'Enter' || key === ' ') {
      opts[focusIdx]?.click();
      return true;
    }
    if (key === 'ArrowRight' || key === 'ArrowDown') {
      focusIdx = (focusIdx + 1) % opts.length;
      focusCurrent();
      return true;
    }
    if (key === 'ArrowLeft' || key === 'ArrowUp') {
      focusIdx = (focusIdx - 1 + opts.length) % opts.length;
      focusCurrent();
      return true;
    }
    return false;
  }

  return {
    setHud(modeLabel: string, primary: string, stats: string) {
      hudMode.textContent = modeLabel;
      hudPrimary.textContent = primary;
      hudStats.textContent = stats;
    },
    setHudVisible(v: boolean) {
      hud.style.opacity = v ? '1' : '0';
    },
    showResults(st: ResultStats) {
      rWpm.textContent = String(st.wpm);
      rGrid.innerHTML = '';
      const cells: [string, string][] = [
        ['acc', st.acc + '%'],
        ['raw', String(st.raw)],
        ['chars', `${st.correct}/${st.incorrect}`],
        ['best', String(st.best)],
      ];
      for (const [k, v] of cells) {
        const cell = el('div', 'r-cell');
        const kk = el('div', 'r-k');
        kk.textContent = k;
        const vv = el('div', 'r-v');
        vv.textContent = v;
        cell.append(kk, vv);
        rGrid.appendChild(cell);
      }
      results.classList.remove('hidden');
    },
    hideResults() {
      results.classList.add('hidden');
    },
    openMenu,
    closeMenu,
    toggleMenu() {
      menuOpen ? closeMenu() : openMenu();
    },
    isMenuOpen: () => menuOpen,
    handleMenuKey,
  };
}

function el(tag: string, cls: string): HTMLElement {
  const e = document.createElement(tag);
  e.className = cls;
  return e;
}
