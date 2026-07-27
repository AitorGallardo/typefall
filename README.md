# typefall

A 3D typing test. It works like [monkeytype](https://monkeytype.com), but the
words are real extruded 3D letters. The default view is **star wars**, and it's
a survival game: a Star Wars opening crawl that types short, Star-Wars-flavored
lines instead of random words, tilting back and climbing toward a horizon. The
crawl is frozen until your first keystroke, then it starts moving. Keep ahead of
it. The moment one word reaches the top zone, the run is over — the stars stretch
into a hyperspace jump and the crawl streaks away. Then you're one keystroke from
going again. It reads how far you got, not how fast.

Every correct keystroke detaches a copy of that letter and blows it away with
whatever completion effect you picked — it falls and piles on the floor, or
bursts into particles, or rockets off — while the letter itself **exits the
scene**: the surface glyph fades out of its slot (which stays reserved, so
nothing reflows) and the passage empties as you type. Miss a letter and it stays
red until you fix it.

I built the first version as a toy where any key you pressed fell into the
scene. I use monkeytype every day and wanted the same muscle memory, so I turned
it into an actual test: live WPM, accuracy, a results screen, the instant
restart — all rendered inside the 3D scene instead of on a flat page. Star wars
turned that into a survival run you retry the way you'd pull a slot machine.

## Controls

- **Type** — the words in front of you. Correct letters detach and fly off.
- **Tab** — open the menu / restart the test.
- **Tab then Enter** — restart (monkeytype muscle memory).
- **Esc** or the **gear** — open settings.
- **Enter** or **space** (on the results / lose screen) — go again, instantly.
- **Mobile** — tap to open the keyboard, tap the lose screen to retry; same
  flow, effects capped for perf.

## Views

How the text is presented. Set it in settings; it persists.

- **star wars** (default) — the survival crawl. It types short Star-Wars-flavored
  lines — a handful of iconic catchphrases plus a set of original crawl lines I
  wrote (rebellions, star systems, fallen empires), shuffled each run. It's
  frozen until your first keystroke, then it climbs, and one word reaching the
  top ends the run in a hyperspace jump. No modes here — it's always survival.
  The **speed** setting sets the climb rate: 1x, 1.4x, 1.9x, 2.5x, or **auto**,
  which rubber-bands the climb to your rolling WPM so the line always sits just
  behind you. Each speed keeps its own best, scored by words survived.
- **paragraph** — a monkeytype-style wall of three rows, laid out as readable
  lines facing the camera. Finish the active (top) line and the block scrolls up
  one row — the finished line slides out, the next slides in.
- **stream** — words fly in from the background. The current word sits up front,
  big and close; the next few recede into the dark and dim out. Stream always
  auto-advances, so you never need a space.

## Advance

(Applies to paragraph and star wars. Stream always auto-advances.)

- **space** (default) — a word advances when you press space, even if you typed
  it perfectly. Skipped letters are marked as errors, monkeytype-style.
- **auto** — an all-correct word advances the instant its last letter lands.

## Modes

(Paragraph and stream. Star wars ignores these — it's always survival.)

- **time** — 15, 30 or 60 seconds.
- **words** — 10, 25 or 50 words.
- **zen** — endless, no timer, no score. Just type and watch the effects.
- **rush** — you start with 15 seconds and each word you finish adds 1.2s, up to
  a 30s cap. The clock is the whole game; it ends when it hits zero. Scored by
  words.
- **sudden death** — one wrong keystroke ends the run. Scored by words.

On a fresh visit the desktop defaults to star wars at 2.5x; a phone (or a narrow
window) defaults to stream. Once you change anything, your settings win.

## Completion effects

Pick one, or pick **surprise** to rotate through them word by word:

- **fall** — the letter drops with real physics and piles on the floor.
- **explode** — bursts into glowing particles that fade.
- **disintegrate** — dissolves into ash that drifts up and out.
- **vortex** — spirals away into a point behind the camera.
- **launch** — rockets straight up with a gold trail.
- **shatter** — splits into shards that spin off.

## Stack

- [three.js](https://threejs.org) — rendering, `TextGeometry` for the chunky
  3D letters and the flying clones.
- [troika-three-text](https://github.com/protectwise/troika) — the flat SDF
  reading surface, in [Space Mono](https://fonts.google.com/specimen/Space+Mono)
  (bundled locally, no CDN).
- [cannon-es](https://github.com/pmndrs/cannon-es) — physics, used only for the
  fall pile.
- Vite + vanilla TypeScript. No framework.

Everything is pooled: text geometry is cached per character and reused, all
particles share one point cloud, shards and physics bodies are recycled, and the
loop pauses when the tab is hidden. It holds 60fps on a laptop.

## Run it

```bash
bun install
bun run dev
```

Build:

```bash
bun run build
```

## Live

https://aitorgallardo.github.io/typefall/

Part of the lab on my site.
