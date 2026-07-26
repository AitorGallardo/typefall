// Test settings, persisted to localStorage. Mirrors monkeytype's shape:
// a mode, an amount for that mode, a completion effect, and an optional sound.

export type ModeId = 'time' | 'words' | 'zen';
export type ViewId = 'crawl' | 'paragraph' | 'stream';
// Crawl-only line speed. The numeric options are multipliers on the base
// climb rate; 'auto' rubber-bands the crawl to the player's rolling WPM so the
// miss line always chases just behind their true pace — a race against yourself.
export type SpeedId = '0.8' | '1' | '1.25' | '1.6' | 'auto';
export type EffectId =
  | 'fall'
  | 'explode'
  | 'disintegrate'
  | 'vortex'
  | 'launch'
  | 'shatter'
  | 'surprise';

export interface Settings {
  view: ViewId; // how upcoming words are presented
  mode: ModeId;
  time: number; // seconds, time mode
  words: number; // count, words mode
  effect: EffectId;
  speed: SpeedId; // crawl-only line speed
  sound: boolean;
}

export const TIME_OPTIONS = [15, 30, 60];
export const WORD_OPTIONS = [10, 25, 50];

// crawl → a Star Wars opening crawl: the reading surface tilts back and the
// lines climb continuously toward a horizon fade, typed as they travel;
// paragraph → a calm monkeytype-style wall of rows; stream → words fly in from
// the background. crawl is the default.
export const VIEW_OPTIONS: ViewId[] = ['crawl', 'paragraph', 'stream'];
export const VIEW_LABELS: Record<ViewId, string> = {
  crawl: 'crawl',
  paragraph: 'paragraph',
  stream: 'stream',
};

// Crawl speed picker. Numeric values are climb-rate multipliers; 'auto' hands
// control to the WPM rubber-band controller.
export const SPEED_OPTIONS: SpeedId[] = ['0.8', '1', '1.25', '1.6', 'auto'];
export const SPEED_LABELS: Record<SpeedId, string> = {
  '0.8': '0.8x',
  '1': '1x',
  '1.25': '1.25x',
  '1.6': '1.6x',
  auto: 'auto',
};

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
  view: 'crawl',
  mode: 'words',
  time: 30,
  words: 25,
  effect: 'fall',
  speed: '1',
  sound: false,
};

export function loadSettings(): Settings {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { ...DEFAULTS };
    const parsed = JSON.parse(raw) as Partial<Settings>;
    const s: Settings = { ...DEFAULTS, ...parsed };
    // Guard against tampered/stale values.
    if (!VIEW_OPTIONS.includes(s.view)) s.view = DEFAULTS.view;
    if (!['time', 'words', 'zen'].includes(s.mode)) s.mode = DEFAULTS.mode;
    if (!TIME_OPTIONS.includes(s.time)) s.time = DEFAULTS.time;
    if (!WORD_OPTIONS.includes(s.words)) s.words = DEFAULTS.words;
    if (!EFFECT_OPTIONS.includes(s.effect)) s.effect = DEFAULTS.effect;
    if (!SPEED_OPTIONS.includes(s.speed)) s.speed = DEFAULTS.speed;
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
