# typefall

A 3D typing test. It works like [monkeytype](https://monkeytype.com), but the
words are real extruded 3D letters. By default the upcoming text is laid out as
a readable wall of rows facing you — the active word is bright with a green
caret, the rest recede in brightness, and you read ahead just like on
monkeytype. Type it. Every correct keystroke detaches that letter and blows it
away with whatever completion effect you picked — it falls and piles on the
floor, or bursts into particles, or rockets off with a green trail. Miss a
letter and it flashes red, the camera flinches, and you stay put until you get
it right.

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

How the upcoming text is presented. Set it in settings; it persists.

- **paragraph** (default) — a monkeytype-style wall of three rows, laid out as
  readable lines facing the camera. The active word is bright with the green
  caret; finished words have been blown away; upcoming words are dimmer. When you
  finish the active (top) line, the block scrolls up smoothly — the finished line
  slides out, the next line slides in.
- **stream** — the original presentation: words fly in from the background. The
  current word sits up front, big and close; the next few recede into the dark
  and dim out.

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
- **launch** — rockets straight up with a green trail.
- **shatter** — splits into shards that spin off.

## Stack

- [three.js](https://threejs.org) — rendering, `TextGeometry` for the letters.
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
