import {
  type Settings,
  type ModeId,
  type ViewId,
  type EffectId,
  type SpeedId,
  type AdvanceId,
  TIME_OPTIONS,
  WORD_OPTIONS,
  VIEW_OPTIONS,
  VIEW_LABELS,
  MODE_OPTIONS,
  MODE_LABELS,
  EFFECT_OPTIONS,
  EFFECT_LABELS,
  SPEED_OPTIONS,
  SPEED_LABELS,
  ADVANCE_OPTIONS,
  ADVANCE_LABELS,
} from './settings';

export interface ResultStats {
  wpm: number;
  acc: number;
  raw: number;
  correct: number;
  incorrect: number;
  timeSec: number;
  missed: number | null; // crawl: words that crossed the miss line untyped (null = hide)
  pb: number | null; // previous best (of the headline metric) for this config (null = none yet)
  isNewPb: boolean;
  deltaPb: number | null; // headline - previous best, when beaten and a prior best existed
  history: { wpm: number; acc: number }[]; // most-recent-first, up to 5
  // Flexible headline: the big number + its label. Defaults to wpm. Survival /
  // rush / sudden set this to words-survived so the score UI reads in the metric
  // that setup actually chases.
  headline?: number;
  headlineLabel?: string;
  // Optional restrained title above the score (e.g. "lost to hyperspace"). The
  // pb line and the (optional) custom grid cells + restart hint round out the
  // adapted lose card.
  title?: string;
  cells?: [string, string][];
  hint?: string;
}

export interface UICallbacks {
  getSettings(): Settings;
  applySettings(patch: Partial<Settings>): void;
  restart(): void;
  onMenuOpen(): void;
  onMenuClose(): void;
  onFocusRestore(): void; // user clicked the "click to focus" overlay
}

// Builds and owns all DOM chrome: the live HUD, the gear button, the results
// overlay and the settings/menu panel. Same visual language as the scene:
// dark, mono, one warm-gold accent, no gamey colour.
export function createUI(cb: UICallbacks) {
  const root = document.createElement('div');
  root.id = 'ui';
  document.body.appendChild(root);

  // --- live HUD (one sober mono line: mode/progress · wpm · acc) ---------
  const hud = el('div', 'hud');
  const hudMode = el('span', 'hud-mode');
  const hudProgress = el('span', 'hud-progress');
  const sep1 = el('span', 'hud-sep');
  sep1.textContent = '·';
  const hudWpm = el('span', 'hud-metric hud-wpm');
  const sep2 = el('span', 'hud-sep');
  sep2.textContent = '·';
  const hudAcc = el('span', 'hud-metric');
  const sep3 = el('span', 'hud-sep');
  sep3.textContent = '·';
  const hudExtra = el('span', 'hud-metric'); // crawl: missed counter
  hud.append(hudMode, hudProgress, sep1, hudWpm, sep2, hudAcc, sep3, hudExtra);

  const gear = el('button', 'gear');
  gear.textContent = '⚙';
  gear.setAttribute('aria-label', 'settings');
  gear.addEventListener('click', () => openMenu());

  // --- focus-lost overlay (monkeytype-style "click to focus") -----------
  const focusLost = el('div', 'focus-lost hidden');
  const focusLine = el('div', 'focus-line');
  focusLine.textContent = 'click to focus';
  focusLost.appendChild(focusLine);
  focusLost.addEventListener('click', () => cb.onFocusRestore());

  // --- "type to begin" prompt (crawl at rest) — quiet gold mono line --------
  const prompt = el('div', 'prompt hidden');

  // --- sudden-death red flinch — a quick full-screen red wash --------------
  const redFlash = el('div', 'red-flash');

  root.append(hud, gear, focusLost, prompt, redFlash);

  // --- results overlay --------------------------------------------------
  const results = el('div', 'overlay results hidden');
  const rTitle = el('div', 'r-title hidden');
  const rWpm = el('div', 'r-wpm');
  const rWpmLabel = el('div', 'r-label');
  rWpmLabel.textContent = 'wpm';
  const rPb = el('div', 'r-pb');
  const rGrid = el('div', 'r-grid');
  const rHistory = el('div', 'r-history');
  const rHint = el('div', 'r-hint');
  const DEFAULT_HINT = 'restart <span class="k">tab</span> + <span class="k">enter</span> · or click';
  rHint.innerHTML = DEFAULT_HINT;
  // Small mono footer, results only: which render path the panel used.
  const rFooter = el('div', 'r-footer');
  results.append(rTitle, rWpm, rWpmLabel, rPb, rGrid, rHistory, rHint, rFooter);
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

    // view
    const viewBtns = VIEW_OPTIONS.map((v: ViewId) =>
      opt(VIEW_LABELS[v], s.view === v ? 'sel' : '', () => cb.applySettings({ view: v })),
    );
    panel.appendChild(wrapRow('view', viewBtns));

    // speed (star wars only — the climb rate / auto rubber-band)
    if (s.view === 'crawl') {
      const speedBtns = SPEED_OPTIONS.map((sp: SpeedId) =>
        opt(SPEED_LABELS[sp], s.speed === sp ? 'sel' : '', () => cb.applySettings({ speed: sp })),
      );
      panel.appendChild(wrapRow('speed', speedBtns));
    }

    // advance — space (deliberate, default) vs auto (on last correct letter).
    // Stream always auto-advances (it never needs a space), so the control is
    // shown disabled-as-n/a there; crawl + paragraph get the live picker.
    if (s.view === 'stream') {
      const na = el('span', 'p-na');
      na.textContent = 'auto (n/a in stream)';
      panel.appendChild(wrapRow('advance', [na]));
    } else {
      const advanceBtns = ADVANCE_OPTIONS.map((a: AdvanceId) =>
        opt(ADVANCE_LABELS[a], s.advance === a ? 'sel' : '', () => cb.applySettings({ advance: a })),
      );
      panel.appendChild(wrapRow('advance', advanceBtns));
    }

    // mode — hidden in crawl (which is always survival). paragraph + stream get
    // the full set (time/words/zen/rush/sudden death).
    if (s.view !== 'crawl') {
      const modeBtns = MODE_OPTIONS.map((m: ModeId) =>
        opt(MODE_LABELS[m], s.mode === m ? 'sel' : '', () => cb.applySettings({ mode: m })),
      );
      panel.appendChild(wrapRow('mode', modeBtns));

      // amount (only time / words carry an amount)
      if (s.mode === 'time' || s.mode === 'words') {
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
    getResultsElement: () => results,
    setPanelLabel(label: string) {
      rFooter.textContent = `panel: ${label}`;
    },
    setHud(
      modeLabel: string,
      progress: string,
      wpm: string,
      acc: string,
      active: boolean,
      extra = '',
      progressKind: 'normal' | 'clock' | 'clockUrgent' = 'normal',
    ) {
      hudMode.textContent = modeLabel;
      hudProgress.textContent = progress;
      hudWpm.textContent = wpm;
      hudAcc.textContent = acc;
      hudExtra.textContent = extra;
      sep3.style.display = extra ? '' : 'none';
      hud.classList.toggle('active', active);
      hudProgress.classList.toggle('clock', progressKind !== 'normal');
      hudProgress.classList.toggle('urgent', progressKind === 'clockUrgent');
    },
    setHudVisible(v: boolean) {
      hud.style.opacity = v ? '' : '0';
    },
    showPrompt(text: string) {
      prompt.textContent = text;
      prompt.classList.remove('hidden');
    },
    hidePrompt() {
      prompt.classList.add('hidden');
    },
    // Quick red flinch for sudden death, then it fades on its own.
    flashRed() {
      redFlash.classList.remove('run');
      // force reflow so the animation restarts even on back-to-back deaths
      void redFlash.offsetWidth;
      redFlash.classList.add('run');
    },
    showFocusLost() {
      focusLost.classList.remove('hidden');
    },
    hideFocusLost() {
      focusLost.classList.add('hidden');
    },
    showResults(st: ResultStats) {
      // Optional restrained title above the score (lose cards use it).
      if (st.title) {
        rTitle.textContent = st.title;
        rTitle.classList.remove('hidden');
      } else {
        rTitle.classList.add('hidden');
      }

      const headline = st.headline ?? st.wpm;
      rWpm.textContent = String(headline);
      rWpm.classList.toggle('pb', st.isNewPb);
      rWpmLabel.textContent = st.headlineLabel ?? 'wpm';

      // The personal-best line: restrained normally, unmistakable when beaten.
      if (st.isNewPb) {
        rPb.classList.add('is-new');
        rPb.textContent =
          st.deltaPb != null ? `new personal best  +${st.deltaPb}` : 'new personal best';
      } else {
        rPb.classList.remove('is-new');
        rPb.textContent = st.pb != null ? `best ${st.pb}` : 'no best yet';
      }

      rGrid.innerHTML = '';
      const cells: [string, string][] = st.cells ?? [
        ['acc', st.acc + '%'],
        ['raw', String(st.raw)],
        ['chars', `${st.correct}/${st.incorrect}`],
        ['time', `${st.timeSec.toFixed(1)}s`],
      ];
      if (!st.cells && st.missed != null) cells.push(['missed', String(st.missed)]);
      for (const [k, v] of cells) {
        const cell = el('div', 'r-cell');
        const kk = el('div', 'r-k');
        kk.textContent = k;
        const vv = el('div', 'r-v');
        vv.textContent = v;
        cell.append(kk, vv);
        rGrid.appendChild(cell);
      }

      // Tiny most-recent-first history (skip if there's nothing prior).
      rHistory.innerHTML = '';
      if (st.history.length > 1) {
        for (let i = 0; i < st.history.length; i++) {
          const h = st.history[i];
          const row = el('div', 'r-hrow' + (i === 0 ? ' now' : ''));
          const w = el('span', 'r-hwpm');
          w.textContent = String(h.wpm);
          const a = el('span', 'r-hacc');
          a.textContent = h.acc + '%';
          row.append(w, a);
          rHistory.appendChild(row);
        }
      }

      rHint.innerHTML = st.hint ?? DEFAULT_HINT;

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
