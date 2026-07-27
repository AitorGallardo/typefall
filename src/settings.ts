// Test settings, persisted to localStorage. Mirrors monkeytype's shape:
// a mode, an amount for that mode, a completion effect, and an optional sound.

// time/words/zen are the classic monkeytype-style modes; rush (a ticking clock
// topped up by each word) and sudden (one mistake ends it) are the new pressure
// modes. All apply to paragraph + stream. The crawl view ignores the mode axis
// entirely — it is implicitly "survival" (see main.ts).
export type ModeId = 'time' | 'words' | 'zen' | 'rush' | 'sudden';
// The 'crawl' id is kept internally (localStorage + per-config PB keys) for
// continuity; its user-facing label is "star wars" (see VIEW_LABELS).
export type ViewId = 'crawl' | 'paragraph' | 'stream';
// Star-wars-only line speed. The numeric options are multipliers on the base
// climb rate; 'auto' rubber-bands the crawl to the player's rolling WPM so the
// miss line always chases just behind their true pace — a race against yourself.
export type SpeedId = '1' | '1.4' | '1.9' | '2.5' | 'auto';
// Word-advance semantics. 'space' (default): a completed word — even all-correct
// — waits for a deliberate space to advance, exactly like monkeytype's default.
// 'auto': an all-correct word advances the instant its last letter lands.
export type AdvanceId = 'space' | 'auto';
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
  speed: SpeedId; // star-wars-only line speed
  advance: AdvanceId; // when a word advances to the next
  sound: boolean;
}

export const TIME_OPTIONS = [15, 30, 60];
export const WORD_OPTIONS = [10, 25, 50];

// Mode picker order (paragraph + stream). Crawl hides this row — it is always
// survival.
export const MODE_OPTIONS: ModeId[] = ['time', 'words', 'zen', 'rush', 'sudden'];
export const MODE_LABELS: Record<ModeId, string> = {
  time: 'time',
  words: 'words',
  zen: 'zen',
  rush: 'rush',
  sudden: 'sudden death',
};

// crawl → a Star Wars opening crawl: the reading surface tilts back and the
// lines climb continuously toward a horizon fade, typed as they travel;
// paragraph → a calm monkeytype-style wall of rows; stream → words fly in from
// the background. crawl (labelled "star wars") is the default.
export const VIEW_OPTIONS: ViewId[] = ['crawl', 'paragraph', 'stream'];
export const VIEW_LABELS: Record<ViewId, string> = {
  crawl: 'star wars',
  paragraph: 'paragraph',
  stream: 'stream',
};

// Star-wars speed picker. Numeric values are climb-rate multipliers on the base
// rate; 'auto' hands control to the WPM rubber-band controller.
export const SPEED_OPTIONS: SpeedId[] = ['1', '1.4', '1.9', '2.5', 'auto'];
export const SPEED_LABELS: Record<SpeedId, string> = {
  '1': '1x',
  '1.4': '1.4x',
  '1.9': '1.9x',
  '2.5': '2.5x',
  auto: 'auto',
};

// Word-advance picker.
export const ADVANCE_OPTIONS: AdvanceId[] = ['space', 'auto'];
export const ADVANCE_LABELS: Record<AdvanceId, string> = {
  space: 'space',
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
  advance: 'space',
  sound: false,
};

// Device-aware defaults, applied ONLY when there is no saved config (fresh
// localStorage). A saved config always wins. Desktop lands on the flagship
// survival crawl at top speed; a phone (coarse pointer or a narrow viewport)
// lands on the calmer stream, which auto-advances and never needs a soft-keyboard
// space.
function deviceDefaults(): Partial<Settings> {
  try {
    const coarse = matchMedia('(pointer: coarse)').matches;
    const narrow = window.innerWidth < 700;
    if (coarse || narrow) return { view: 'stream' };
    return { view: 'crawl', speed: '2.5' };
  } catch {
    return {};
  }
}

export function loadSettings(): Settings {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { ...DEFAULTS, ...deviceDefaults() };
    const parsed = JSON.parse(raw) as Partial<Settings>;
    const s: Settings = { ...DEFAULTS, ...parsed };
    // Guard against tampered/stale values.
    if (!VIEW_OPTIONS.includes(s.view)) s.view = DEFAULTS.view;
    if (!MODE_OPTIONS.includes(s.mode)) s.mode = DEFAULTS.mode;
    if (!TIME_OPTIONS.includes(s.time)) s.time = DEFAULTS.time;
    if (!WORD_OPTIONS.includes(s.words)) s.words = DEFAULTS.words;
    if (!EFFECT_OPTIONS.includes(s.effect)) s.effect = DEFAULTS.effect;
    if (!SPEED_OPTIONS.includes(s.speed)) s.speed = DEFAULTS.speed;
    if (!ADVANCE_OPTIONS.includes(s.advance)) s.advance = DEFAULTS.advance;
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
