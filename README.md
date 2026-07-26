# typefall

A 3D typing test. It works like [monkeytype](https://monkeytype.com), but the
words are real extruded 3D letters. The default view is **star wars** — a
Star Wars opening crawl: the passage tilts back and the lines climb toward a
horizon, and you type each one before it slips past the miss line. The active
word is bright with a thin liquid-gold caret. Type it. Every correct keystroke
detaches a copy of that letter and blows it away with whatever completion effect
you picked — it falls and piles on the floor, or bursts into particles, or
rockets off — while the letter itself **exits the scene**: the surface glyph
fades out of its slot (which stays reserved, so nothing reflows) and the passage
empties as you type. Miss a letter and it stays red until you fix it.

I built the first version as a toy where any key you pressed fell into the
scene. I use monkeytype every day and wanted the same muscle memory, so I turned
it into an actual test: live WPM, accuracy, a results screen, the Tab+Enter
restart — all rendered inside the 3D scene instead of on a flat page.

## Controls

- **Type** — the words in front of you. Correct letters detach and fly off.
- **Tab** — open the menu / restart the test.
- **Tab then Enter** — restart (monkeytype muscle memory).
- **Esc** or the **gear** — open settings.
- **Enter** (on the results screen) — go again.
- **Mobile** — tap to open the keyboard; same flow, effects capped for perf.

## Views

How the text is presented. Set it in settings; it persists.

- **star wars** (default) — a Star Wars opening crawl. The reading surface tilts
  back and the lines climb continuously toward a horizon fade, typed as they
  travel. A word that crosses the miss line still untyped is auto-missed and
  dissolves into ash. A **speed** setting sets the climb rate: 1x, 1.4x, 1.9x,
  2.5x, or **auto**, which rubber-bands the climb to your rolling WPM so the miss
  line always sits just behind you. Each speed keeps its own personal best.
- **paragraph** — a monkeytype-style wall of three rows, laid out as readable
  lines facing the camera. Finish the active (top) line and the block scrolls up
  one row — the finished line slides out, the next slides in.
- **stream** — the same three-row measured-flow layout as paragraph, but rendered
  with the chunky extruded 3D letters instead of flat type. Upright rows on
  consistent baselines face the camera dead-on at a uniform size; finish the
  active (top) line and the block scrolls up one row. It reads like paragraph mode
  with the letters given real depth — the view where the 3D glyphs still shine.

## Advance

- **space** (default) — a word advances when you press space, even if you typed
  it perfectly. Skipped letters are marked as errors, monkeytype-style.
- **auto** — an all-correct word advances the instant its last letter lands.

## Modes

- **time** — 15, 30 or 60 seconds.
- **words** — 10, 25 or 50 words.
- **zen** — endless, no timer, no score. Just type and watch the effects.

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
