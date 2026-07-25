// A compact seed of common English words. Kept small on purpose; variety is
// expanded programmatically at load time (see buildPool) so the source stays
// readable and the test never feels repetitive.

const SEED: string[] = [
  'the', 'and', 'for', 'you', 'that', 'with', 'have', 'this', 'they', 'from',
  'what', 'were', 'when', 'your', 'said', 'each', 'time', 'will', 'about', 'there',
  'their', 'would', 'make', 'like', 'into', 'them', 'other', 'more', 'come', 'some',
  'than', 'then', 'look', 'only', 'over', 'also', 'back', 'after', 'work', 'first',
  'well', 'even', 'want', 'because', 'these', 'give', 'most', 'find', 'here', 'thing',
  'many', 'such', 'long', 'down', 'know', 'take', 'year', 'good', 'need', 'feel',
  'three', 'state', 'never', 'become', 'high', 'really', 'night', 'point', 'today', 'bring',
  'happen', 'next', 'without', 'before', 'large', 'call', 'move', 'live', 'believe', 'hold',
  'water', 'room', 'write', 'mother', 'area', 'money', 'story', 'young', 'month', 'right',
  'study', 'book', 'word', 'business', 'issue', 'side', 'kind', 'four', 'head', 'far',
  'black', 'both', 'little', 'house', 'world', 'school', 'still', 'group', 'begin', 'seem',
  'talk', 'turn', 'start', 'might', 'show', 'part', 'small', 'against', 'family', 'leave',
  'while', 'mean', 'keep', 'student', 'great', 'same', 'another', 'begin', 'those', 'again',
  'play', 'stand', 'increase', 'later', 'follow', 'around', 'city', 'since', 'change', 'light',
  'watch', 'question', 'love', 'person', 'help', 'plant', 'close', 'power', 'reason', 'field',
  'music', 'idea', 'body', 'color', 'hand', 'game', 'line', 'value', 'stay', 'level',
  'ship', 'build', 'clean', 'quick', 'sound', 'dream', 'river', 'stone', 'green', 'metal',
];

// Verbs that take regular -s / -ed / -ing forms cleanly (no doubling/e-drop
// surprises), used to grow the pool without spelling glitches. Irregulars whose
// past tense is not -ed (keep→kept, stand→stood, build→built) are deliberately
// excluded so the -ed derivation never manufactures a non-word like "keeped".
const REGULAR_VERBS = [
  'work', 'call', 'look', 'want', 'need', 'help', 'play', 'talk', 'turn', 'show',
  'watch', 'follow', 'start', 'point', 'clean',
];

// Nouns that pluralize with a sibilant-aware -s / -es.
const PLURAL_NOUNS = [
  'thing', 'year', 'word', 'book', 'room', 'group', 'point', 'reason', 'idea',
  'game', 'line', 'field', 'river', 'stone', 'plant', 'color', 'level', 'dream',
];

// English -s / -es rule: words ending in a sibilant (s, x, z, ch, sh) take -es
// (watch→watches), everything else a plain -s. Keeps the derivation from emitting
// "watchs".
function addS(word: string): string {
  return /(?:s|x|z|ch|sh)$/.test(word) ? word + 'es' : word + 's';
}

function buildPool(): string[] {
  const set = new Set<string>(SEED);
  for (const v of REGULAR_VERBS) {
    set.add(addS(v));
    set.add(v + 'ed');
    set.add(v + 'ing');
  }
  for (const n of PLURAL_NOUNS) set.add(addS(n));
  return [...set];
}

export const WORDS: string[] = buildPool();

/**
 * Build a shuffled sequence of `count` words for a test. When `count` exceeds
 * the pool it wraps and reshuffles so time/zen modes never run dry.
 */
export function buildSequence(count: number): string[] {
  const out: string[] = [];
  let bag: string[] = [];
  while (out.length < count) {
    if (bag.length === 0) bag = shuffle(WORDS.slice());
    out.push(bag.pop()!);
  }
  return out;
}

function shuffle<T>(a: T[]): T[] {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

