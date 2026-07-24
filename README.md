# typefall

A keyboard-first 3D type playground. Press a key, that character drops into the
scene as a chunky 3D letter and falls with real physics — letters tumble,
collide, and pile up on the floor. Type a word and watch it rain.

I built this because I like keyboard-first interfaces and I like things that
react instantly. It's a small toy, but every key does something and it feels
right.

## Controls

- **Any key** — spawns that letter falling from above.
- **Enter** — drops the word you've typed as a burst.
- **Backspace** — flings the last letter across the scene.
- **Drag a letter** — grab and throw it.
- **Drag empty space** — orbit the camera.
- **Escape** — sweep the floor clean.
- **Mobile** — tap to open the keyboard; tap empty space spawns a random letter.

Leave it alone for a few seconds and it types to itself.

## Stack

- [three.js](https://threejs.org) — rendering, `TextGeometry` for the letters.
- [cannon-es](https://github.com/pmndrs/cannon-es) — physics.
- Vite + vanilla TypeScript. No framework.

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
