// Star-wars-flavored corpus for the crawl (survival) view. The engine types
// these as sequential lines instead of random words: each phrase is split into
// words and fed to the same word pipeline, so scoring, effects and the miss line
// are unchanged — only the source text differs.
//
// Two banks:
//   • ICONIC — a handful of short, universally-known catchphrases (each < 10
//     words). Short phrases only; no extended dialogue.
//   • CRAWL  — original lines written in the galactic-epic register (rebellions,
//     star systems, distant outposts, fallen empires). These are my own text —
//     evocative but never a reproduction of any actual opening crawl.
//
// Everything is lowercase to match the game's reading surface.

// ~15 iconic short catchphrases (each under 10 words).
export const ICONIC: string[] = [
  'may the force be with you',
  'i have a bad feeling about this',
  'do or do not there is no try',
  'never tell me the odds',
  'the force will be with you always',
  'in my experience there is no such thing as luck',
  'i am your father',
  'these are not the droids you are looking for',
  'help me you are my only hope',
  'let the wookiee win',
  'stay on target',
  'the garbage will do',
  'i find your lack of faith disturbing',
  'it is a trap',
  'the force is strong with this one',
];

// ~40 original crawl-flavored lines (my own text, galactic-epic register).
export const CRAWL: string[] = [
  'a thin rebellion smolders in the outer dark',
  'the old republic is ash and the throne sits empty',
  'across a thousand quiet systems the beacons wake',
  'somewhere past the last charted star a fleet is gathering',
  'the empire counts its worlds and finds one missing',
  'on a moon of salt the couriers trade in whispers',
  'the fallen capital still burns beneath its glass',
  'far outposts blink their coded lamps into the void',
  'a smuggler runs the blockade with the plans aboard',
  'the twin suns set on a planet that remembers nothing',
  'in the ruined shipyards the resistance builds again',
  'a single freighter carries the hope of a dying order',
  'the senate is silent and the stars keep their secrets',
  'beyond the veil of dust the old fleets wait to rise',
  'the garrison sleeps while the outer moons conspire',
  'a coded signal crosses the gulf between two empires',
  'the last archive drifts unguarded above a broken world',
  'rebels scatter their cells among the frontier stations',
  'the dark fleet folds space and vanishes from the maps',
  'a princess hides the truth inside a wandering machine',
  'the desert keeps the bones of a hundred lost patrols',
  'somewhere a farm boy watches the horizon and waits',
  'the council fractures over a war it cannot win',
  'across the rim the old alliances quietly reform',
  'a stolen cruiser limps toward the neutral systems',
  'the emperor tightens his grip and worlds slip free',
  'in the frozen wastes a base hums beneath the ice',
  'the trade routes fall silent one convoy at a time',
  'a lone pilot threads the asteroid field toward home',
  'the ancient order leaves its temples to the sand',
  'far from the core a new rebellion learns to breathe',
  'the blockade holds but the couriers always find a gap',
  'a dead star marks the grave of the third fleet',
  'the outer colonies raise their banners in the dark',
  'a message older than the war reaches the wrong hands',
  'the shipwrights of the rim forge engines for the fight',
  'across the black a single transponder answers back',
  'the empire burns the maps that lead to the free worlds',
  'a quiet moon becomes the heart of the resistance',
  'the long night ends where the first beacon is lit',
];

// The full corpus, shuffled per run with no immediate repeats. Iconic and crawl
// lines are pooled together so a run mixes the familiar with the original.
export const PHRASES: string[] = [...ICONIC, ...CRAWL];

/**
 * A shuffled run of phrases with no line immediately repeating the last of the
 * previous shuffle when the bag refills — so a long survival run never reads the
 * same line twice back to back. Returns the lines as one flat word list, which is
 * what the existing word engine consumes.
 */
export function buildPhraseSequence(minWords: number): string[] {
  const out: string[] = [];
  let bag: string[] = [];
  let last = '';
  while (out.length < minWords) {
    if (bag.length === 0) {
      bag = shuffle(PHRASES.slice());
      // Avoid an immediate repeat across the bag boundary.
      if (bag.length > 1 && bag[bag.length - 1] === last) {
        [bag[bag.length - 1], bag[0]] = [bag[0], bag[bag.length - 1]];
      }
    }
    const line = bag.pop()!;
    last = line;
    for (const w of line.split(' ')) out.push(w);
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
