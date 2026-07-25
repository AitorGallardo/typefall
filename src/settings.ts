// Test settings, persisted to localStorage. Mirrors monkeytype's shape:
// a mode, an amount for that mode, a completion effect, and an optional sound.

export type ModeId = 'time' | 'words' | 'zen';
export type EffectId =
  | 'fall'
  | 'explode'
  | 'disintegrate'
  | 'vortex'
  | 'launch'
  | 'shatter'
  | 'surprise';

export interface Settings {
  mode: ModeId;
  time: number; // seconds, time mode
  words: number; // count, words mode
  effect: EffectId;
  sound: boolean;
}

export const TIME_OPTIONS = [15, 30, 60];
export const WORD_OPTIONS = [10, 25, 50];

// The concrete effects plus the rotating "surprise". Order drives the picker
// and the surprise rotation.
export const REAL_EFFECTS: EffectId[] = [
  'fall',
  'explode',
  'disintegrate',
  'vortex',
  'launch',
  'shatter',
];
export const EFFECT_OPTIONS: EffectId[] = [...REAL_EFFECTS, 'surprise'];

export const EFFECT_LABELS: Record<EffectId, string> = {
  fall: 'fall',
  explode: 'explode',
  disintegrate: 'disintegrate',
  vortex: 'vortex',
  launch: 'launch',
  shatter: 'shatter',
  surprise: 'surprise',
};

const KEY = 'typefall.settings.v1';

const DEFAULTS: Settings = {
  mode: 'words',
  time: 30,
  words: 25,
  effect: 'fall',
  sound: false,
};

export function loadSettings(): Settings {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { ...DEFAULTS };
    const parsed = JSON.parse(raw) as Partial<Settings>;
    const s: Settings = { ...DEFAULTS, ...parsed };
    // Guard against tampered/stale values.
    if (!['time', 'words', 'zen'].includes(s.mode)) s.mode = DEFAULTS.mode;
    if (!TIME_OPTIONS.includes(s.time)) s.time = DEFAULTS.time;
    if (!WORD_OPTIONS.includes(s.words)) s.words = DEFAULTS.words;
    if (!EFFECT_OPTIONS.includes(s.effect)) s.effect = DEFAULTS.effect;
    s.sound = !!s.sound;
    return s;
  } catch {
    return { ...DEFAULTS };
  }
}

export function saveSettings(s: Settings): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(s));
  } catch {
    /* storage unavailable — ignore */
  }
}
