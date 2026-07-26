import './style.css';
import * as THREE from 'three';
import { FontLoader, type Font } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { Text as TroikaText, preloadFont } from 'troika-three-text';
import * as CANNON from 'cannon-es';
import { buildSequence } from './words';
import { loadSettings, saveSettings, type Settings, type EffectId } from './settings';
import { EffectSystem } from './effects';
import { createUI } from './ui';

// ---------------------------------------------------------------------------
// A monkeytype-style typing test rendered inside a 3D scene. Two presentations
// share the same scoring, effects and input:
//   • paragraph (default) — the reading surface is flat SDF text (troika-three-
//     text, JetBrains Mono): crisp, calm, tool-like. A measured-flow layout
//     engine places words by their real monospace glyph advances into a centered
//     column and shows three lines at once; the active word is bright with a thin
//     green caret that smoothly lerps + blinks, upcoming words are muted, typed
//     letters turn green, mistakes red, and finished lines scroll up.
//   • stream — upcoming words fly in from the background as chunky extruded 3D
//     letters; the current word sits up front and the next few recede and dim.
// Each correct keystroke locks the flat letter in place (green) and detaches a
// chunky extruded 3D clone that blows away with the selected effect — that's
// where Typefall's identity lives now — so the passage never reflows. A wrong
// key turns the letter red and advances the caret; backspace restores letters in
// the current word, which won't complete until every character is correct.
// ---------------------------------------------------------------------------

const BG = 0x0a0a0a;
const WHITE = 0xe8e8ea;
const GREEN = 0x22c55e;
const RED = 0xef4444;
const GRAY = 0x878d99; // upcoming words — muted but comfortably readable on black
const PAST = 0x6b7280; // completed words — neutral dim gray (monkeytype past-text)
const PAST_RED = 0x9b5555; // completed-word mistakes / skips — a dimmed red tint

const LETTER_SIZE = 1.55;
const LETTER_SPACING = 0.1;

// Self-lit emissive tiers, keyed by a letter's typing state. Each state is
// readable regardless of scene lighting, and the tiers form monkeytype's
// hierarchy: the active word leads, upcoming text recedes, typed text is the
// green accent, mistakes are red, finished words sink to a quiet trail.
const EM_CURRENT = 0.42; // active word, not yet typed
const EM_CORRECT = 0.34; // typed correctly — green accent
const EM_INCORRECT = 0.5; // typed wrong — red until corrected
const EM_UPCOMING = 0.07; // words further ahead — muted gray
const EM_COMPLETED = 0.06; // finished words — subordinate

// Opacity tiers (the paragraph view multiplies these by a per-line fade).
const OP_CURRENT = 1;
const OP_UPCOMING = 0.6;
const OP_COMPLETED = 0.42;

// --- stream layout ---
const BASE_Y = 4.2;
const Z_GAP = 5.4;
const Y_RISE = 0.42;
const SCALE_FALLOFF = 0.85;
const WINDOW = 7; // visible upcoming words (including current)

// Floor sits well below the text so falling debris and shadows stay out of the
// reading zone — background flavor, not clutter.
const FLOOR_Y = -5.5;

// --- paragraph layout (a measured-flow engine; see makeParagraphView) ---
// Everything is expressed in em (1em = the on-screen font height) and derived
// from the camera frustum at render time, so the passage keeps the same CSS-px
// size and centered column at 1024 / 1440 / 1920 and every aspect ratio — no
// hardcoded world coordinates that only look right at one resolution.
const PARA_FONT_PX = 30; // target on-screen em height in CSS pixels
const PARA_COL_VW = 0.78; // reading column as a fraction of viewport width…
const PARA_COL_MAX_PX = 1000; // …capped to this many CSS px (centered)
const PARA_GAP_EM = 0.55; // inter-word gap (~one normal space)
const PARA_LINE_EM = 1.42; // line height
const PARA_VISIBLE = 3; // rows shown at once (active + the next two)
const PARA_CENTER_BIAS = 0.05; // push the block this fraction of view height above center
// (kept slight — the owner spec asks for "near visual center, slightly above if
// necessary"; 0.05 keeps the block centered with fall room, not in the upper third)

// The flat reading surface uses a real monospace typeface bundled locally (no
// runtime CDN fetch) and rendered as SDF text by troika. Monospace means every
// glyph shares one advance, so the measured-flow packing is perfectly regular.
const PARA_FONT_URL = `${import.meta.env.BASE_URL}fonts/JetBrainsMono-Regular.ttf`;
// Advance width of one glyph as a fraction of the em, measured from the real
// font at boot (see measureMonoAdvance). 0.6 is JetBrains Mono's true advance
// and a safe fallback if the measurement font hasn't resolved yet.
let MONO_ADVANCE = 0.6;

// --- per-view cameras (fov chosen per view; paragraph is flat/near-orthographic
// so rows stay parallel and letters keep a uniform size — the "tool" feel) ---
const STREAM_CAM_BASE = new THREE.Vector3(0, 5.6, 13.5);
const STREAM_CAM_LOOK = new THREE.Vector3(0, 4.0, -4);
const STREAM_FOV = 50;
const PARA_CAM_BASE = new THREE.Vector3(0, 3.6, 30);
const PARA_CAM_LOOK = new THREE.Vector3(0, 3.6, 0);
const PARA_FOV = 28;

const isTouch = matchMedia('(hover: none) and (pointer: coarse)').matches;

// ---------------------------------------------------------------------------
// Renderer / scene / camera
// ---------------------------------------------------------------------------
const canvas = document.getElementById('scene') as HTMLCanvasElement;
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.15;

const scene = new THREE.Scene();
scene.background = new THREE.Color(BG);
scene.fog = new THREE.Fog(BG, 26, 62);

const camera = new THREE.PerspectiveCamera(STREAM_FOV, window.innerWidth / window.innerHeight, 0.1, 200);
const camBase = STREAM_CAM_BASE.clone();
const camLook = STREAM_CAM_LOOK.clone();
const shake = new THREE.Vector3();

function applyCamera() {
  camera.position.copy(camBase).add(shake);
  camera.lookAt(camLook);
}
applyCamera();

// ---------------------------------------------------------------------------
// Lighting
// ---------------------------------------------------------------------------
scene.add(new THREE.HemisphereLight(0x3a3a40, 0x16161a, 0.75));
scene.add(new THREE.AmbientLight(0xffffff, 0.22));

const key = new THREE.DirectionalLight(0xffffff, 1.55);
key.position.set(5, 16, 12);
key.target.position.set(0, 3, 0);
scene.add(key.target);
key.castShadow = true;
key.shadow.mapSize.set(2048, 2048);
key.shadow.camera.near = 1;
key.shadow.camera.far = 60;
key.shadow.camera.left = -18;
key.shadow.camera.right = 18;
key.shadow.camera.top = 18;
key.shadow.camera.bottom = -18;
key.shadow.bias = -0.0004;
key.shadow.radius = 4;
scene.add(key);

const rim = new THREE.DirectionalLight(0x60a5fa, 0.8);
rim.position.set(-10, 6, -12);
scene.add(rim);

const accentFill = new THREE.PointLight(GREEN, 0.5, 44, 2);
accentFill.position.set(-4, 3, 8);
scene.add(accentFill);

// ---------------------------------------------------------------------------
// Floor
// ---------------------------------------------------------------------------
const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(120, 120),
  new THREE.MeshStandardMaterial({ color: 0x101012, roughness: 0.95, metalness: 0 }),
);
floor.rotation.x = -Math.PI / 2;
floor.position.y = FLOOR_Y;
floor.receiveShadow = true;
scene.add(floor);

const grid = new THREE.GridHelper(120, 60, 0x141417, 0x0f0f12);
grid.position.y = FLOOR_Y + 0.01;
(grid.material as THREE.Material).transparent = true;
(grid.material as THREE.Material).opacity = 0.22;
scene.add(grid);

// ---------------------------------------------------------------------------
// Physics world (used by the fall + rain effects)
// ---------------------------------------------------------------------------
const world = new CANNON.World({ gravity: new CANNON.Vec3(0, -32, 0) });
world.allowSleep = true;
world.defaultContactMaterial.friction = 0.4;
world.defaultContactMaterial.restitution = 0.12;
(world.solver as CANNON.GSSolver).iterations = 12;

const groundBody = new CANNON.Body({ type: CANNON.Body.STATIC, shape: new CANNON.Plane() });
groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
groundBody.position.set(0, FLOOR_Y, 0);
world.addBody(groundBody);

function addWall(nx: number, nz: number, px: number, pz: number) {
  const b = new CANNON.Body({ type: CANNON.Body.STATIC, shape: new CANNON.Plane() });
  b.quaternion.setFromVectors(new CANNON.Vec3(0, 0, 1), new CANNON.Vec3(nx, 0, nz));
  b.position.set(px, 0, pz);
  world.addBody(b);
}
addWall(1, 0, -11, 0);
addWall(-1, 0, 11, 0);
addWall(0, 1, 0, -6);
addWall(0, -1, 0, 10);

const effects = new EffectSystem({ scene, camera, world, mobile: isTouch });

// ---------------------------------------------------------------------------
// Letter geometry cache — one TextGeometry per character, reused by every word
// in both views (current, upcoming, and the ones detaching mid-flight).
// ---------------------------------------------------------------------------
interface Glyph {
  geo: TextGeometry;
  half: CANNON.Vec3;
  width: number;
}
const glyphCache = new Map<string, Glyph>();
let font: Font | null = null;

function getGlyph(ch: string): Glyph {
  let g = glyphCache.get(ch);
  if (g) return g;
  // Shallow extrusion + a whisper of bevel: enough to keep Typefall's
  // dimensional identity, flat enough that the paragraph reads like type
  // rather than a row of chunky objects.
  const geo = new TextGeometry(ch, {
    font: font!,
    size: LETTER_SIZE,
    depth: LETTER_SIZE * 0.16,
    curveSegments: 5,
    bevelEnabled: true,
    bevelThickness: 0.02,
    bevelSize: 0.014,
    bevelSegments: 2,
  });
  geo.computeBoundingBox();
  const bb = geo.boundingBox!;
  const w = bb.max.x - bb.min.x;
  const cx = (bb.max.x + bb.min.x) / 2;
  const cy = (bb.max.y + bb.min.y) / 2;
  const cz = (bb.max.z + bb.min.z) / 2;
  geo.translate(-cx, -cy, -cz);
  geo.computeVertexNormals();
  const half = new CANNON.Vec3(
    Math.max(w / 2, 0.16),
    Math.max((bb.max.y - bb.min.y) / 2, 0.16),
    Math.max((bb.max.z - bb.min.z) / 2, 0.16),
  );
  g = { geo, half, width: Math.max(w, 0.4) };
  glyphCache.set(ch, g);
  return g;
}

// ---------------------------------------------------------------------------
// Caret
// ---------------------------------------------------------------------------
// A thin green vertical bar (unit box, scaled per-frame to the active word's
// glyph size). It smoothly lerps to the next character boundary on every
// keystroke and blinks at rest — monkeytype's smooth caret (see updateCaret).
const caret = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 0.04),
  new THREE.MeshBasicMaterial({ color: GREEN, transparent: true, opacity: 0.9 }),
);
caret.visible = false;
caret.renderOrder = 10;
scene.add(caret);
const caretTarget = new THREE.Vector3();
const CARET_TAU = 0.045; // position-lerp time constant → ~100ms fast ease-out
const CARET_BLINK_PERIOD = 1.0; // seconds per blink cycle
const CARET_TYPE_PAUSE = 1.0; // seconds the caret stays solid after a keystroke
let caretSnap = true; // snap (don't lerp) on first show / view switch
// Frame-driven clocks (the automation tab suspends rAF, so wall-clock time can't
// drive the caret) — animClock advances by dt each frame, lastTypeClock records
// the last keystroke so the caret pauses blinking while typing.
let animClock = 0;
let lastTypeClock = -10;
function noteType() {
  lastTypeClock = animClock;
}

// ---------------------------------------------------------------------------
// Shared word / letter primitives
// ---------------------------------------------------------------------------
type LetterState = 'untyped' | 'correct' | 'incorrect' | 'skipped';

// A single laid-out letter, backed by either an extruded 3D mesh (stream view)
// or a flat troika SDF glyph (paragraph reading surface). The shared scoring /
// caret / clone pipeline talks to letters only through this interface, so the
// two rendering backends stay swappable.
interface LayoutLetter {
  ch: string;
  object3d: THREE.Object3D; // world-transform source for the caret + detached clone
  localX: number; // x of the glyph centre within the word group (local units)
  halfWidth: number; // half advance (local units)
  state: LetterState;
  // World scale to give the extruded clone so it matches the on-screen glyph.
  // undefined → derive from the object's live world scale (stream, where words
  // fly and scale over time); a number → fixed (paragraph, group scale is 1).
  cloneScale?: number;
  // Colour the letter. `emissive` is the self-lit intensity used by the extruded
  // stream letters; the flat paragraph glyphs are unlit and ignore it (glow lives
  // on the falling clones only — the reading surface stays calm).
  applyColor(color: number, emissive: number): void;
  setOpacity(o: number): void;
  dispose(): void;
}

// Build an extruded-3D word group (stream view) with its letters centred around
// the group origin. Not added to any parent — the caller scales and places it.
function createWord(
  text: string,
  castShadow = true,
): { group: THREE.Group; letters: LayoutLetter[]; width: number } {
  const group = new THREE.Group();
  const widths = [...text].map((c) => getGlyph(c).width);
  const total = widths.reduce((a, b) => a + b, 0) + LETTER_SPACING * (text.length - 1);
  let cursor = -total / 2;
  const letters: LayoutLetter[] = [];
  [...text].forEach((ch, i) => {
    const glyph = getGlyph(ch);
    const mat = new THREE.MeshStandardMaterial({
      color: GRAY,
      roughness: 0.5,
      metalness: 0.02,
      emissive: GRAY,
      emissiveIntensity: EM_UPCOMING,
      transparent: true,
      opacity: 1,
    });
    const mesh = new THREE.Mesh(glyph.geo, mat);
    mesh.castShadow = castShadow;
    const localX = cursor + widths[i] / 2;
    mesh.position.set(localX, 0, 0);
    group.add(mesh);
    letters.push({
      ch,
      object3d: mesh,
      localX,
      halfWidth: widths[i] / 2,
      state: 'untyped',
      applyColor(color, emissive) {
        mat.color.setHex(color);
        mat.emissive.setHex(color);
        mat.emissiveIntensity = emissive;
      },
      setOpacity(o) {
        mat.opacity = o;
      },
      dispose() {
        group.remove(mesh);
        mat.dispose();
      },
    });
    cursor += widths[i] + LETTER_SPACING;
  });
  return { group, letters, width: total };
}

// Build a flat troika word group (paragraph view): one SDF Text node per glyph,
// centred on its monospace slot so its transform origin matches the extruded
// clone's centred geometry. `em` is the glyph world height; `advance` the slot
// width. Text nodes sync asynchronously and render once ready.
function createTroikaWord(
  text: string,
  em: number,
  advance: number,
): { group: THREE.Group; letters: LayoutLetter[]; width: number } {
  const group = new THREE.Group();
  const total = advance * text.length;
  const cloneScale = em / LETTER_SIZE; // extruded glyph is built at size = LETTER_SIZE
  let cursor = -total / 2;
  const letters: LayoutLetter[] = [];
  [...text].forEach((ch) => {
    const t = new TroikaText();
    t.text = ch;
    t.font = PARA_FONT_URL;
    t.fontSize = em;
    t.anchorX = 'center';
    t.anchorY = 'middle';
    t.color = GRAY;
    t.fillOpacity = OP_UPCOMING;
    t.material.transparent = true;
    t.material.fog = false; // keep the reading surface crisp, never hazed by scene fog
    const localX = cursor + advance / 2;
    t.position.set(localX, 0, 0);
    t.sync();
    group.add(t);
    letters.push({
      ch,
      object3d: t,
      localX,
      halfWidth: advance / 2,
      state: 'untyped',
      cloneScale,
      applyColor(color) {
        t.color = color;
      },
      setOpacity(o) {
        t.fillOpacity = o;
      },
      dispose() {
        group.remove(t);
        t.dispose();
      },
    });
    cursor += advance;
  });
  return { group, letters, width: total };
}

// Dispose a word group and every letter it owns. Flying clones are owned by the
// effect system (which disposes them when the effect ends) — never touched here.
function disposeWord(group: THREE.Group, letters: LayoutLetter[]) {
  for (const l of letters) l.dispose();
  group.removeFromParent();
}

// --- per-state colouring (colour + emissive tier; opacity is a view concern) ---
function setUpcoming(l: LayoutLetter) {
  l.applyColor(GRAY, EM_UPCOMING);
}
function setCurrentUntyped(l: LayoutLetter) {
  l.applyColor(WHITE, EM_CURRENT);
}
function setCorrect(l: LayoutLetter) {
  l.applyColor(GREEN, EM_CORRECT);
}
function setIncorrect(l: LayoutLetter) {
  l.applyColor(RED, EM_INCORRECT);
}
// Completed word, letter typed correctly — sinks to a neutral dim gray (the
// monkeytype past-text look), not green. Only the active word's correct prefix
// stays green; finished text recedes so the eye tracks the live word.
function setCompleted(l: LayoutLetter) {
  l.applyColor(PAST, EM_COMPLETED);
}
// Completed word, letter that was wrong or skipped — a dimmed red tint so past
// mistakes stay visible without shouting over the live word.
function setPastError(l: LayoutLetter) {
  l.applyColor(PAST_RED, EM_COMPLETED + 0.04);
}

// Spawn a flying clone of a just-typed letter at its exact on-screen transform
// and hand it to the effect system. The original letter is left in place (it
// turns green and holds its layout slot), so the passage never reflows and
// backspace can restore the letter to an untyped state.
function detachClone(l: LayoutLetter, effect: EffectId) {
  const src = l.object3d;
  src.updateWorldMatrix(true, false);
  const wp = new THREE.Vector3();
  const wq = new THREE.Quaternion();
  const ws = new THREE.Vector3();
  src.matrixWorld.decompose(wp, wq, ws);
  // A flat troika glyph has world scale 1, so its own scale can't size the
  // extruded clone — use the letter's fixed cloneScale. Extruded stream letters
  // have no cloneScale and inherit their live world scale.
  const s = l.cloneScale ?? ws.x;
  const glyph = getGlyph(l.ch);
  const mat = new THREE.MeshStandardMaterial({
    color: WHITE,
    roughness: 0.5,
    metalness: 0.02,
    emissive: WHITE,
    emissiveIntensity: 0.12,
    transparent: true,
    opacity: 1,
  });
  const clone = new THREE.Mesh(glyph.geo, mat);
  clone.castShadow = true;
  clone.position.copy(wp);
  clone.position.z += 0.5; // peel toward the camera so it never falls through lines below
  clone.quaternion.copy(wq);
  clone.scale.setScalar(s);
  scene.add(clone);
  const half = new CANNON.Vec3(glyph.half.x * s, glyph.half.y * s, glyph.half.z * s);
  effects.play(effect, clone, { color: new THREE.Color(WHITE), half });
}

// ---------------------------------------------------------------------------
// View abstraction — both presentations share the scoring / input pipeline and
// only differ in how words are laid out, dimmed and advanced.
// ---------------------------------------------------------------------------
interface View {
  currentWord(): { group: THREE.Group; letters: LayoutLetter[] } | null;
  paint(): void; // (re)apply highlight + dim state
  advance(): void; // move to the next word (scroll / slide)
  retreat(): void; // step back to the previous word (backspace across a boundary)
  boundaryGap(): number; // unscaled gap past the last glyph, for the word-end caret
  interLetterGap(): number; // unscaled gap between glyphs, for the inter-letter caret
  caretDims(): { w: number; h: number }; // caret bar world size for the active word
  update(dt: number): void; // per-frame layout easing
  relayout(): void; // recompute layout for a new viewport (keeps progress)
  dispose(): void;
  readonly camBase: THREE.Vector3;
  readonly camLook: THREE.Vector3;
  readonly camFov: number;
  readonly lockCamera: boolean; // true → the reading surface never drifts (no shake)
  info(): Record<string, unknown>;
}

let seq: string[] = [];
let wordIndex = 0; // index in seq of the current word
let letterIdx = 0; // cursor within the current word (chars committed, right or wrong)
// Per-char states of the letters already committed in the current word. Kept at
// module scope so a viewport relayout can restore red/green after a rebuild.
let letterStates: LetterState[] = [];
// Per-word committed states of already-finished words, kept so backspace can step
// back into an imperfect previous word and restore its letters for re-editing.
let wordHistory: LetterState[][] = [];
// Brief caret/word "pulse" (1 → 0) fired on an overflow keystroke so a full,
// errored word visibly rejects extra input instead of silently swallowing it.
let caretPulse = 0;
let activeView: View;

function ensureSeq(n: number) {
  while (seq.length < n) seq.push(...buildSequence(60));
}

const tmpVec = new THREE.Vector3();

// ---------------------------------------------------------------------------
// Stream view — words fly in from the background toward the player.
// ---------------------------------------------------------------------------
function makeStreamView(): View {
  interface StreamWord {
    group: THREE.Group;
    letters: LayoutLetter[];
    targetSlot: number;
  }
  let visible: StreamWord[] = [];

  function slotPos(slot: number, out: THREE.Vector3): THREE.Vector3 {
    return out.set(0, BASE_Y + slot * Y_RISE, -slot * Z_GAP);
  }
  function slotScale(slot: number): number {
    return Math.pow(SCALE_FALLOFF, slot);
  }
  function slotOpacity(slot: number): number {
    if (slot <= 0) return 1;
    return THREE.MathUtils.clamp(0.5 * Math.pow(0.72, slot - 1), 0.1, 1);
  }

  function addWord(seqIdx: number, slot: number): StreamWord {
    const { group, letters } = createWord(seq[seqIdx]);
    slotPos(slot, group.position);
    group.scale.setScalar(slotScale(slot));
    scene.add(group);
    return { group, letters, targetSlot: slot };
  }

  // Colour the front (active) word from its per-char state; further words stay
  // muted gray and are dimmed by the slot opacity.
  function paint(): void {
    const cur = visible[0];
    if (!cur) return;
    for (let i = 0; i < cur.letters.length; i++) {
      const l = cur.letters[i];
      if (i < letterIdx) letterStates[i] === 'correct' ? setCorrect(l) : setIncorrect(l);
      else setCurrentUntyped(l);
    }
  }

  // Build the initial window straight from wordIndex (0 on a fresh test).
  const count = Math.min(WINDOW, seq.length);
  for (let s = 0; s < count; s++) visible.push(addWord(wordIndex + s, s));
  paint();

  return {
    camBase: STREAM_CAM_BASE,
    camLook: STREAM_CAM_LOOK,
    camFov: STREAM_FOV,
    lockCamera: false,
    currentWord() {
      const cur = visible[0];
      return cur ? { group: cur.group, letters: cur.letters } : null;
    },
    paint,
    advance() {
      const gone = visible.shift();
      if (gone) disposeWord(gone.group, gone.letters);
      // Slide everyone forward one slot.
      for (let k = 0; k < visible.length; k++) visible[k].targetSlot = k;
      // Bring in a new word at the back if the sequence has one.
      const backSeqIdx = wordIndex + WINDOW - 1;
      if (settings.mode !== 'words') ensureSeq(backSeqIdx + 2);
      if (backSeqIdx < seq.length) {
        const w = addWord(backSeqIdx, WINDOW);
        w.targetSlot = visible.length;
        visible.push(w);
      }
      paint();
    },
    // Backspace stepped across a word boundary: the just-completed word was
    // disposed on advance, so rebuild it at the front slot (wordIndex has already
    // been decremented) and drop the tail word to keep the window bounded.
    retreat() {
      if (visible.length >= WINDOW) {
        const back = visible.pop();
        if (back) disposeWord(back.group, back.letters);
      }
      const front = addWord(wordIndex, 0);
      visible.unshift(front);
      for (let k = 0; k < visible.length; k++) visible[k].targetSlot = k;
      paint();
    },
    boundaryGap() {
      return LETTER_SPACING;
    },
    interLetterGap() {
      return LETTER_SPACING;
    },
    caretDims() {
      // The active word rests at slot 0 (scale 1), so the extruded glyphs are
      // LETTER_SIZE tall; a chunky-ish bar reads well against them.
      return { w: 0.09, h: LETTER_SIZE * 1.04 };
    },
    update(dt: number) {
      const lerp = 1 - Math.pow(0.0015, dt);
      for (const w of visible) {
        slotPos(w.targetSlot, tmpVec);
        w.group.position.lerp(tmpVec, lerp);
        const ts = slotScale(w.targetSlot);
        w.group.scale.setScalar(THREE.MathUtils.lerp(w.group.scale.x, ts, lerp));
        const op = slotOpacity(w.targetSlot);
        for (const l of w.letters) l.setOpacity(op);
      }
    },
    relayout() {
      /* stream slots are camera-relative — nothing to recompute on resize */
    },
    dispose() {
      for (const w of visible) disposeWord(w.group, w.letters);
      visible = [];
    },
    info() {
      return { view: 'stream', visible: visible.length };
    },
  };
}

// ---------------------------------------------------------------------------
// Paragraph view — a measured-flow layout engine, monkeytype's readability in
// Typefall's 3D language. Words flow left→right and wrap by their actual glyph
// width into a centered, px-consistent column; PARA_VISIBLE lines show at once
// with the active line on top. Finishing the active line scrolls the block up
// one line — deterministically — the finished line fading out above and a fresh
// line fading in below. All coordinates derive from the camera frustum, so the
// passage keeps its size and column at any resolution and never reflows on a
// keystroke (only on a viewport resize).
// ---------------------------------------------------------------------------
interface ParaMetrics {
  em: number; // glyph world height (troika fontSize); word groups are unscaled
  advance: number; // monospace glyph advance, world units
  colHalf: number; // half the reading-column width, world units
  gap: number; // inter-word gap, world units
  lineH: number; // line height, world units
  topY: number; // world y of the top (active) visible line
  caretW: number; // caret bar width, world units (~2 CSS px)
}

function paraMetrics(): ParaMetrics {
  // Camera looks straight down -z at the z=0 text plane, so the view distance
  // to the plane is exactly the camera's z. Derive the visible frustum there.
  const dist = PARA_CAM_BASE.z;
  const visH = 2 * dist * Math.tan(((PARA_FOV * Math.PI) / 180) / 2);
  const aspect = window.innerWidth / window.innerHeight;
  const visW = visH * aspect;
  const worldPerPx = visW / window.innerWidth;
  const em = PARA_FONT_PX * worldPerPx;
  const advance = em * MONO_ADVANCE; // real monospace advance from the font metrics
  const colWidth = Math.min(PARA_COL_VW * visW, PARA_COL_MAX_PX * worldPerPx);
  const lineH = PARA_LINE_EM * em;
  // Center the visible block (its middle row) slightly above the frustum's
  // vertical center. The top row sits (PARA_VISIBLE-1)/2 line-heights above the
  // middle row, so the term generalizes with PARA_VISIBLE instead of assuming 3.
  const centerY = PARA_CAM_LOOK.y;
  const topY = centerY + PARA_CENTER_BIAS * visH + (lineH * (PARA_VISIBLE - 1)) / 2;
  return {
    em,
    advance,
    colHalf: colWidth / 2,
    gap: PARA_GAP_EM * em,
    lineH,
    topY,
    caretW: Math.max(0.02, 2 * worldPerPx),
  };
}

function makeParagraphView(): View {
  interface ParaWord {
    seqIndex: number;
    group: THREE.Group;
    letters: LayoutLetter[];
    opacity: number; // target opacity from typed-state
  }
  interface ParaLine {
    index: number;
    group: THREE.Group;
    words: ParaWord[];
    start: number; // first seq index on this line
    end: number; // one past the last seq index on this line
    fade: number; // eased line-visibility factor
  }
  let m = paraMetrics();
  let lines: ParaLine[] = [];
  let top = 0; // index of the top (active) visible line
  let packSeq = 0; // next seq index to pack into a new line
  let packIdx = 0; // next line index to create

  function rowY(lineIndex: number): number {
    return m.topY - (lineIndex - top) * m.lineH;
  }

  // Greedily pack seq words into line `idx`: place each word immediately after
  // the previous one with a consistent gap, wrapping to a new line when the next
  // word would exceed the column. Ragged right — never justified.
  function createLine(idx: number): void {
    const g = new THREE.Group();
    g.position.set(0, rowY(idx), 0);
    scene.add(g);
    const words: ParaWord[] = [];
    const start = packSeq;
    let s = packSeq;
    let cursor = -m.colHalf; // left edge of the column
    for (;;) {
      if (settings.mode !== 'words') ensureSeq(s + 1);
      if (s >= seq.length) break;
      const worldW = m.advance * seq[s].length; // monospace: advance × char count
      if (words.length > 0 && cursor + worldW > m.colHalf) break;
      const { group, letters } = createTroikaWord(seq[s], m.em, m.advance);
      group.position.set(cursor + worldW / 2, 0, 0);
      g.add(group);
      words.push({ seqIndex: s, group, letters, opacity: OP_UPCOMING });
      cursor += worldW + m.gap;
      s++;
    }
    packSeq = s;
    packIdx = idx + 1;
    lines.push({ index: idx, group: g, words, start, end: s, fade: idx < PARA_VISIBLE ? 1 : 0 });
  }

  function ensureLines(throughIdx: number): void {
    // In words mode the sequence is finite; stop once it is exhausted so we never
    // manufacture trailing empty ParaLines past the last word. (time / zen extend
    // the sequence lazily inside createLine, so there is always another word.)
    while (packIdx <= throughIdx) {
      if (settings.mode === 'words' && packSeq >= seq.length) break;
      createLine(packIdx);
    }
  }

  function lineIndexOf(seqIdx: number): number {
    for (const l of lines) if (seqIdx >= l.start && seqIdx < l.end) return l.index;
    while (packSeq <= seqIdx && (settings.mode !== 'words' || packSeq < seq.length)) createLine(packIdx);
    for (const l of lines) if (seqIdx >= l.start && seqIdx < l.end) return l.index;
    return top;
  }

  // Apply the state hierarchy: completed words sink to a quiet trail, upcoming
  // words are muted gray, the active word is bright with its typed prefix in
  // green / red. Colour only — opacity is eased per-frame in update().
  function paint(): void {
    for (const l of lines) {
      for (const w of l.words) {
        if (w.seqIndex < wordIndex) {
          // Past text: neutral dim gray, but keep wrong / skipped letters red-tinted.
          w.opacity = OP_COMPLETED;
          for (const ll of w.letters) {
            if (ll.state === 'incorrect' || ll.state === 'skipped') setPastError(ll);
            else setCompleted(ll);
          }
        } else if (w.seqIndex > wordIndex) {
          w.opacity = OP_UPCOMING;
          for (const ll of w.letters) setUpcoming(ll);
        } else {
          w.opacity = OP_CURRENT;
          for (let i = 0; i < w.letters.length; i++) {
            const ll = w.letters[i];
            // A committed letter is green only if correct; wrong or skipped is red.
            if (i < letterIdx) letterStates[i] === 'correct' ? setCorrect(ll) : setIncorrect(ll);
            else setCurrentUntyped(ll);
          }
        }
      }
    }
  }

  // Rebuild the visible line packing (used on first build and on resize). Packs
  // forward from the active word — the new top line begins at wordIndex — so the
  // cost is O(PARA_VISIBLE) rather than O(wordIndex): a resize at word 500 no
  // longer re-measures and rebuilds meshes for all 500 preceding words. Progress
  // is preserved (wordIndex / letterIdx / per-letter states); paint() re-applies
  // every letter's state afterwards. The active word re-anchors to the start of
  // the top row, which only shows on the rare viewport resize.
  function rebuild(): void {
    for (const l of lines) {
      for (const w of l.words) disposeWord(w.group, w.letters);
      l.group.removeFromParent();
    }
    lines = [];
    packSeq = wordIndex;
    packIdx = 0;
    top = 0;
    ensureLines(PARA_VISIBLE - 1);
    // Snap lines straight to their resting rows so a resize doesn't animate.
    for (const l of lines) l.group.position.y = rowY(l.index);
    paint();
  }

  rebuild();

  return {
    camBase: PARA_CAM_BASE,
    camLook: PARA_CAM_LOOK,
    camFov: PARA_FOV,
    lockCamera: true,
    currentWord() {
      for (const l of lines) {
        if (l.index !== top) continue;
        for (const w of l.words) if (w.seqIndex === wordIndex) return { group: w.group, letters: w.letters };
      }
      for (const l of lines)
        for (const w of l.words) if (w.seqIndex === wordIndex) return { group: w.group, letters: w.letters };
      return null;
    },
    paint,
    advance() {
      const newTop = lineIndexOf(wordIndex);
      if (newTop !== top) {
        top = newTop;
        ensureLines(top + PARA_VISIBLE - 1);
      }
      paint();
    },
    // Backspace stepped back across a word boundary. The previous word's line is
    // still laid out (lines retire only after they scroll clear), so re-sync the
    // top row to it and repaint. If it was already retired (only after a resize
    // re-anchor), fall back to a rebuild.
    retreat() {
      const newTop = lineIndexOf(wordIndex);
      if (newTop === top && !lines.some((l) => wordIndex >= l.start && wordIndex < l.end)) {
        rebuild();
        return;
      }
      top = newTop;
      paint();
    },
    boundaryGap() {
      // Word groups are unscaled (troika renders at world size), so the world
      // inter-word gap is the caret's local boundary gap directly.
      return m.gap;
    },
    interLetterGap() {
      return 0; // monospace advance already bakes in side bearings — no extra gap
    },
    caretDims() {
      return { w: m.caretW, h: m.em * 1.05 };
    },
    update(dt: number) {
      const posLerp = 1 - Math.pow(0.0009, dt);
      const opLerp = 1 - Math.pow(0.0025, dt);
      for (let i = lines.length - 1; i >= 0; i--) {
        const l = lines[i];
        const row = l.index - top;
        const targetY = m.topY - row * m.lineH;
        l.group.position.y = THREE.MathUtils.lerp(l.group.position.y, targetY, posLerp);
        const fadeTarget = row >= 0 && row < PARA_VISIBLE ? 1 : 0;
        l.fade = THREE.MathUtils.lerp(l.fade, fadeTarget, opLerp);
        for (const w of l.words) {
          for (const ll of w.letters) ll.setOpacity(w.opacity * l.fade);
        }
        // Retire a line once it has scrolled clear above the active line.
        if (row < 0 && l.fade < 0.02) {
          for (const w of l.words) disposeWord(w.group, w.letters);
          l.group.removeFromParent();
          lines.splice(i, 1);
        }
      }
    },
    relayout() {
      m = paraMetrics();
      rebuild();
    },
    dispose() {
      for (const l of lines) {
        for (const w of l.words) disposeWord(w.group, w.letters);
        l.group.removeFromParent();
      }
      lines = [];
    },
    info() {
      const active = lines.find((l) => l.index === top);
      return {
        view: 'paragraph',
        topLine: top,
        lines: lines.length,
        // Per-word line assignments and column geometry for test assertions.
        colHalf: m.colHalf,
        activeWords: active ? active.words.map((w) => w.seqIndex) : [],
        rows: lines
          .slice()
          .sort((a, b) => a.index - b.index)
          .map((l) => ({ index: l.index, y: +l.group.position.y.toFixed(3), words: l.words.map((w) => w.seqIndex) })),
      };
    },
  };
}

// ---------------------------------------------------------------------------
// Game state + stats
// ---------------------------------------------------------------------------
type Phase = 'ready' | 'running' | 'finished';
const settings: Settings = loadSettings();

const state = {
  phase: 'ready' as Phase,
  correct: 0,
  incorrect: 0,
  wordsDone: 0,
  elapsed: 0, // seconds accumulated while running — frame-driven so the debug
  // handle can run deterministically (see update()).
};
// ---------------------------------------------------------------------------
// Personal bests + history, keyed per config (mode + amount + view) so each
// setup chases its own highscore — the monkeytype dopamine loop.
// ---------------------------------------------------------------------------
interface ScoreRecord {
  wpm: number;
  acc: number;
  raw: number;
  date: number;
}
const PB_PREFIX = 'typefall.pb.v1:';
const HIST_PREFIX = 'typefall.hist.v1:';

function configKey(): string {
  const amount = settings.mode === 'time' ? settings.time : settings.mode === 'words' ? settings.words : 0;
  return `${settings.mode}:${amount}:${settings.view}`;
}
function loadPb(key: string): ScoreRecord | null {
  try {
    const raw = localStorage.getItem(PB_PREFIX + key);
    return raw ? (JSON.parse(raw) as ScoreRecord) : null;
  } catch {
    return null;
  }
}
function savePb(key: string, rec: ScoreRecord): void {
  try {
    localStorage.setItem(PB_PREFIX + key, JSON.stringify(rec));
  } catch {
    /* ignore */
  }
}
function loadHistory(key: string): ScoreRecord[] {
  try {
    const raw = localStorage.getItem(HIST_PREFIX + key);
    return raw ? (JSON.parse(raw) as ScoreRecord[]) : [];
  } catch {
    return [];
  }
}
function pushHistory(key: string, rec: ScoreRecord): ScoreRecord[] {
  const h = loadHistory(key);
  h.unshift(rec);
  h.length = Math.min(h.length, 5);
  try {
    localStorage.setItem(HIST_PREFIX + key, JSON.stringify(h));
  } catch {
    /* ignore */
  }
  return h;
}

// Latest finish outcome, surfaced through the debug handle for assertions.
let lastResult: {
  key: string;
  wpm: number;
  pb: number | null;
  prevPb: number | null;
  isNewPb: boolean;
  historyLen: number;
} | null = null;

function wordsTotal(): number {
  return settings.mode === 'words' ? settings.words : 0;
}
function elapsedSec(): number {
  return state.elapsed;
}
function liveWpm(): number {
  const t = elapsedSec();
  if (t <= 0) return 0;
  return Math.round(state.correct / 5 / (t / 60));
}
function rawWpm(): number {
  const t = elapsedSec();
  if (t <= 0) return 0;
  return Math.round((state.correct + state.incorrect) / 5 / (t / 60));
}
// Honest accuracy, monkeytype-style: correct keystrokes over every keystroke of
// the whole test. state.correct / state.incorrect are monotonic keystroke tallies
// — backspacing a mistake never refunds it, so corrected errors still cost points.
function accuracy(): number {
  const total = state.correct + state.incorrect;
  if (total === 0) return 100;
  return Math.round((state.correct / total) * 100);
}

// ---------------------------------------------------------------------------
// Input
// ---------------------------------------------------------------------------
function beginIfNeeded() {
  if (state.phase === 'ready') {
    state.phase = 'running';
    state.elapsed = 0;
  }
}

function allCurrentCorrect(): boolean {
  for (const s of letterStates) if (s !== 'correct') return false;
  return true;
}

function handleChar(ch: string) {
  if (state.phase === 'finished') return;
  if (ui.isMenuOpen()) return;
  if (ch === ' ') return; // space is an advance, routed through handleSpace
  noteType();

  const w = activeView.currentWord();
  if (!w) return;
  const pending = w.letters[letterIdx];
  if (!pending) {
    // Word is full and holding at least one uncorrected error, so it did not
    // auto-advance. Extra keystrokes here are overflow: count them as incorrect
    // and fire a visible pulse — never silently swallow input (the old bug).
    beginIfNeeded();
    state.incorrect++;
    caretPulse = 1;
    if (!activeView.lockCamera) addShake(0.32);
    activeView.paint();
    return;
  }

  beginIfNeeded();

  if (ch.toLowerCase() === pending.ch.toLowerCase()) {
    // Correct: the original locks in green (holding its slot) and a clone blows
    // away with the chosen effect — Typefall's signature, without reflow.
    detachClone(pending, settings.effect);
    pending.state = 'correct';
    setCorrect(pending);
    letterStates[letterIdx] = 'correct';
    state.correct++;
    letterIdx++;
    if (letterIdx >= w.letters.length && allCurrentCorrect()) completeWord();
    else activeView.paint();
  } else {
    // Wrong: the letter turns red and the caret advances (monkeytype default);
    // the word won't complete until the mistake is backspaced and corrected.
    pending.state = 'incorrect';
    setIncorrect(pending);
    letterStates[letterIdx] = 'incorrect';
    state.incorrect++;
    letterIdx++;
    if (!activeView.lockCamera) addShake(0.32);
    activeView.paint();
  }
}

// Monkeytype-style backspace. Within the current word it steps the caret back and
// reverts the letter to untyped — but it never refunds a keystroke tally, so a
// corrected mistake still costs accuracy. At the start of a word it steps back
// into the previous word only if that word is imperfect (holds a wrong or skipped
// letter), restoring its committed letters for re-editing; a perfect previous
// word is left alone, exactly as monkeytype does.
function handleBackspace() {
  if (state.phase === 'finished') return;
  if (ui.isMenuOpen()) return;
  noteType();

  if (letterIdx === 0) {
    if (wordIndex === 0) return;
    const prev = wordHistory[wordIndex - 1];
    const imperfect = !!prev && prev.some((s) => s === 'incorrect' || s === 'skipped');
    if (!imperfect) return; // previous word was perfect — no-op

    wordIndex--;
    state.wordsDone = Math.max(0, state.wordsDone - 1);
    // Counters stay put: the keystrokes that built the previous word (including
    // its space) already happened and monkeytype never un-counts them.
    letterStates = prev.slice();
    letterIdx = prev.length;
    delete wordHistory[wordIndex];
    activeView.retreat();
    const w = activeView.currentWord();
    if (w) for (let i = 0; i < w.letters.length; i++) w.letters[i].state = letterStates[i] ?? 'untyped';
    activeView.paint();
    return;
  }

  const w = activeView.currentWord();
  if (!w) return;
  letterIdx--;
  letterStates.pop();
  const l = w.letters[letterIdx];
  if (l) l.state = 'untyped';
  activeView.paint();
}

// Space is the deliberate word-advance (monkeytype semantics). With no character
// typed it is a no-op; otherwise it advances, marking any untyped remainder of the
// current word as skipped errors (each costs a keystroke), and the word finishes
// imperfect. A word that was already all-correct auto-advances on its last letter,
// so space there simply falls through as a boundary no-op.
function handleSpace() {
  if (state.phase === 'finished') return;
  if (ui.isMenuOpen()) return;
  noteType();
  if (letterIdx === 0) return; // nothing typed yet — no-op
  const w = activeView.currentWord();
  if (!w) return;
  beginIfNeeded();
  for (let i = letterIdx; i < w.letters.length; i++) {
    const l = w.letters[i];
    l.state = 'skipped';
    letterStates[i] = 'skipped';
    state.incorrect++;
  }
  letterIdx = w.letters.length;
  completeWord();
}

function completeWord() {
  state.correct++; // implicit space, keeps WPM honest
  state.wordsDone++;
  wordHistory[wordIndex] = letterStates.slice(); // remember for backspace-into-previous
  letterStates = [];
  if (settings.mode === 'words' && state.wordsDone >= settings.words) {
    finish();
    return;
  }
  wordIndex++;
  letterIdx = 0;
  activeView.advance();
}

function addShake(mag: number) {
  shake.x += (Math.random() - 0.5) * mag * 2;
  shake.y += (Math.random() - 0.5) * mag * 2;
}

// ---------------------------------------------------------------------------
// Test lifecycle
// ---------------------------------------------------------------------------
function newSequence() {
  if (settings.mode === 'words') seq = buildSequence(settings.words);
  else seq = buildSequence(120);
}

function buildView() {
  if (activeView) activeView.dispose();
  activeView = settings.view === 'stream' ? makeStreamView() : makeParagraphView();
  caretSnap = true; // don't fly the caret in from its old position on rebuild
  camBase.copy(activeView.camBase);
  camLook.copy(activeView.camLook);
  camera.fov = activeView.camFov;
  camera.updateProjectionMatrix();
  applyCamera();
}

function restart() {
  state.phase = 'ready';
  state.correct = 0;
  state.incorrect = 0;
  state.wordsDone = 0;
  state.elapsed = 0;
  effects.reset();
  shake.set(0, 0, 0);
  ui.hideResults();
  ui.closeMenu();
  ui.setHudVisible(true);
  wordIndex = 0;
  letterIdx = 0;
  letterStates = [];
  wordHistory = [];
  caretPulse = 0;
  newSequence();
  buildView();
  updateHud();
  if (isTouch) capture.focus({ preventScroll: true });
}

function finish() {
  state.phase = 'finished';
  const wpm = liveWpm();

  const key = configKey();
  const prev = loadPb(key);
  const prevPb = prev ? prev.wpm : null;
  const isNewPb = prevPb == null || wpm > prevPb;
  const rec: ScoreRecord = { wpm, acc: accuracy(), raw: rawWpm(), date: Date.now() };
  if (isNewPb) savePb(key, rec);
  const history = pushHistory(key, rec);
  const deltaPb = isNewPb && prevPb != null ? wpm - prevPb : null;
  lastResult = { key, wpm, pb: isNewPb ? wpm : prevPb, prevPb, isNewPb, historyLen: history.length };

  ui.setHudVisible(false);
  ui.showResults({
    wpm,
    acc: accuracy(),
    raw: rawWpm(),
    correct: state.correct,
    incorrect: state.incorrect,
    timeSec: elapsedSec(),
    pb: prevPb,
    isNewPb,
    deltaPb,
    history: history.map((h) => ({ wpm: h.wpm, acc: h.acc })),
  });
  rainResultLetters(isNewPb);
}

// Let a few letters rain behind the results — small and dim so the stats read
// clean. On a new personal best they tint green and a single restrained particle
// burst fires at the score (the dopamine hit, no confetti spam).
function rainResultLetters(newPb: boolean) {
  const tint = newPb ? GREEN : WHITE;
  const chars = 'typefall'.split('');
  for (let i = 0; i < chars.length; i++) {
    const glyph = getGlyph(chars[i]);
    const mat = new THREE.MeshStandardMaterial({
      color: tint,
      roughness: 0.5,
      metalness: 0.02,
      emissive: tint,
      emissiveIntensity: newPb ? 0.28 : 0.08,
      transparent: true,
      opacity: 1,
    });
    const mesh = new THREE.Mesh(glyph.geo, mat);
    mesh.castShadow = true;
    mesh.scale.setScalar(0.6);
    mesh.position.set((Math.random() - 0.5) * 16, 10 + Math.random() * 6, -3 - Math.random() * 4);
    scene.add(mesh);
    const half = new CANNON.Vec3(glyph.half.x * 0.6, glyph.half.y * 0.6, glyph.half.z * 0.6);
    effects.rain(mesh, { color: new THREE.Color(tint), half });
  }
  if (newPb) effects.burst(0, 4.2, 1, new THREE.Color(GREEN));
}

// ---------------------------------------------------------------------------
// UI wiring
// ---------------------------------------------------------------------------
const ui = createUI({
  getSettings: () => settings,
  applySettings: (patch) => {
    Object.assign(settings, patch);
    saveSettings(settings);
    restart();
  },
  restart,
  onMenuOpen: () => {},
  onMenuClose: () => {
    if (isTouch) capture.focus({ preventScroll: true });
  },
  onFocusRestore: () => regainFocus(),
});

// ---------------------------------------------------------------------------
// Keyboard + mobile input
// ---------------------------------------------------------------------------
const capture = document.getElementById('capture') as HTMLInputElement;

window.addEventListener('keydown', (e) => {
  if (e.metaKey || e.ctrlKey || e.altKey) return;

  if (ui.isMenuOpen()) {
    if (ui.handleMenuKey(e.key)) e.preventDefault();
    return;
  }

  if (e.key === 'Tab') {
    e.preventDefault();
    if (state.phase === 'finished') restart();
    else ui.openMenu();
    return;
  }
  if (e.key === 'Escape') {
    e.preventDefault();
    ui.openMenu();
    return;
  }
  if (e.key === 'Enter') {
    e.preventDefault();
    if (state.phase === 'finished') restart();
    return;
  }
  if (e.key === 'Backspace') {
    e.preventDefault();
    handleBackspace();
    return;
  }
  if (e.key === ' ') {
    e.preventDefault();
    handleSpace();
    return;
  }
  if (e.key.length === 1 && e.key.charCodeAt(0) >= 32) {
    e.preventDefault();
    handleChar(e.key);
  }
});

// Mobile soft keyboards deliver characters through the capture input; a
// deletion arrives as a deleteContentBackward input event.
capture.addEventListener('input', (e) => {
  if ((e as InputEvent).inputType === 'deleteContentBackward') {
    handleBackspace();
    capture.value = '';
    return;
  }
  const v = capture.value;
  for (const ch of v) {
    if (ch === ' ') handleSpace();
    else if (ch.charCodeAt(0) >= 32) handleChar(ch);
  }
  capture.value = '';
});
capture.addEventListener('keydown', (e) => {
  if (e.key === 'Backspace') handleBackspace();
});

if (isTouch) {
  const focusCapture = () => capture.focus({ preventScroll: true });
  canvas.addEventListener('pointerdown', () => {
    if (state.phase === 'finished') restart();
    else focusCapture();
  });
  window.addEventListener('touchstart', focusCapture, { passive: true });
  window.addEventListener('load', focusCapture, { once: true });
}

// ---------------------------------------------------------------------------
// Focus handling — when the window/input loses focus mid-test, dim + blur the
// passage and show a small mono "click to focus" line; a click anywhere (or the
// window regaining focus) removes it and re-captures typing. Menu / results are
// exempt so their own overlays aren't fought.
// ---------------------------------------------------------------------------
let focusLost = false;
function loseFocus() {
  if (focusLost || ui.isMenuOpen() || state.phase === 'finished') return;
  focusLost = true;
  ui.showFocusLost();
  canvas.classList.add('blurred');
}
function regainFocus() {
  if (!focusLost) return;
  focusLost = false;
  ui.hideFocusLost();
  canvas.classList.remove('blurred');
  capture.focus({ preventScroll: true });
}
window.addEventListener('blur', loseFocus);
window.addEventListener('focus', regainFocus);
window.addEventListener('pointerdown', () => {
  if (focusLost) regainFocus();
});

// ---------------------------------------------------------------------------
// Loop
// ---------------------------------------------------------------------------
const clock = new THREE.Clock();
let running = true;
let hudAccum = 0;

// Latest caret placement, surfaced through the debug handle for assertions.
const caretState = { visible: false, x: 0, y: 0, z: 0, targetX: 0, opacity: 0 };

// Place the caret on the next-character boundary, computed from real glyph
// advances (never a fixed slab in front of a letter), then smoothly ease it
// there. It sits just left of the pending glyph, or just past the last glyph at
// word end, and blinks at rest.
function updateCaret(dt: number) {
  const cur = activeView.currentWord();
  if (!cur || state.phase === 'finished') {
    caret.visible = false;
    caretState.visible = false;
    return;
  }
  const pending = cur.letters[letterIdx];
  let localX: number;
  if (pending) {
    // Sit in the boundary just left of the pending glyph. Monospace advances
    // bake in side bearings (interLetterGap = 0), so this lands on the slot edge.
    localX = pending.localX - pending.halfWidth - activeView.interLetterGap() * 0.5;
  } else {
    const last = cur.letters[cur.letters.length - 1];
    if (!last) {
      caret.visible = false;
      caretState.visible = false;
      return;
    }
    // At word end the gap to the next word is the view's boundary gap (m.gap in
    // the paragraph, a slot gap in the stream), not the intra-word spacing.
    localX = last.localX + last.halfWidth + activeView.boundaryGap() * 0.5;
  }
  cur.group.localToWorld(caretTarget.set(localX, 0, 0));

  // Snap on first appearance / view switch; otherwise fast ease-out toward the
  // target — this animates the caret between keystrokes and rides the line scroll.
  if (!caret.visible || caretSnap) {
    caret.position.copy(caretTarget);
    caretSnap = false;
  } else {
    caret.position.lerp(caretTarget, 1 - Math.exp(-dt / CARET_TAU));
  }
  caret.visible = true;

  const pulse = caretPulse;
  const dims = activeView.caretDims();
  caret.scale.set(dims.w * (1 + 0.9 * pulse), dims.h, 1);

  const mat = caret.material as THREE.MeshBasicMaterial;
  let opacity: number;
  if (pulse > 0.05) {
    // Overflow pulse — swell and redden so rejected input is felt.
    mat.color.setHex(RED);
    opacity = 1;
  } else {
    mat.color.setHex(GREEN);
    if (animClock - lastTypeClock < CARET_TYPE_PAUSE) {
      opacity = 1; // solid while typing (and just after), like monkeytype
    } else {
      // Calm ~1s sine blink once the typist pauses.
      const phase = ((animClock - lastTypeClock) % CARET_BLINK_PERIOD) / CARET_BLINK_PERIOD;
      opacity = 0.12 + 0.88 * (0.5 + 0.5 * Math.cos(phase * Math.PI * 2));
    }
  }
  mat.opacity = opacity;

  caretState.visible = true;
  caretState.x = +caret.position.x.toFixed(3);
  caretState.y = +caret.position.y.toFixed(3);
  caretState.z = +caret.position.z.toFixed(3);
  caretState.targetX = +caretTarget.x.toFixed(3);
  caretState.opacity = +opacity.toFixed(3);
}

function update(dt: number) {
  world.step(1 / 60, dt, 3);

  if (state.phase === 'running') state.elapsed += dt;
  animClock += dt;

  activeView.update(dt);

  updateCaret(dt);

  // Camera shake + caret-pulse decay.
  shake.multiplyScalar(Math.pow(0.0025, dt));
  if (caretPulse > 0) caretPulse = Math.max(0, caretPulse - dt * 4);
  applyCamera();

  effects.update(dt);

  // Time-mode finish.
  if (state.phase === 'running' && settings.mode === 'time' && elapsedSec() >= settings.time) {
    finish();
  }

  // Throttled HUD.
  hudAccum += dt;
  if (hudAccum > 0.1) {
    hudAccum = 0;
    updateHud();
  }
}

function updateHud() {
  let modeLabel = '';
  let progress = '';
  if (settings.mode === 'time') {
    modeLabel = 'time';
    const remain = Math.max(0, settings.time - elapsedSec());
    progress = state.phase === 'ready' ? String(settings.time) : String(Math.ceil(remain));
  } else if (settings.mode === 'words') {
    modeLabel = 'words';
    progress = `${state.wordsDone}/${settings.words}`;
  } else {
    modeLabel = 'zen';
    progress = String(state.wordsDone);
  }
  ui.setHud(modeLabel, progress, `${liveWpm()} wpm`, `${accuracy()}%`, state.phase === 'running');
}

function render() {
  renderer.render(scene, camera);
}

function animate() {
  if (!running) return;
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), 1 / 30);
  update(dt);
  render();
}

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    running = false;
  } else if (!running) {
    running = true;
    clock.getDelta();
    animate();
  }
});

// The renderer/camera resize is cheap and must track the viewport instantly so
// the canvas never stretches; the measured-flow relayout is heavier, so it is
// debounced (trailing) — a drag-resize fires one relayout when the drag settles
// rather than one per intermediate size.
let relayoutTimer: number | undefined;
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  clearTimeout(relayoutTimer);
  // Recompute the layout for the new viewport without disturbing the running
  // test (keeps wordIndex / letterIdx / per-letter states).
  relayoutTimer = window.setTimeout(() => {
    if (activeView) activeView.relayout();
  }, 150);
});

// ---------------------------------------------------------------------------
// Debug / automation handle
// ---------------------------------------------------------------------------
function snapshot() {
  return {
    view: settings.view,
    phase: state.phase,
    wpm: liveWpm(),
    raw: rawWpm(),
    acc: accuracy(),
    correct: state.correct,
    incorrect: state.incorrect,
    wordsDone: state.wordsDone,
    wordsTotal: wordsTotal(),
    elapsed: elapsedSec(),
    current: seq[wordIndex] ?? '',
    wordIndex,
    letterIdx,
    letterStates: letterStates.slice(),
    caret: { ...caretState },
    bodies: effects.fallCount,
    menuOpen: ui.isMenuOpen(),
    resultsShown: state.phase === 'finished',
    focusLost,
    layout: activeView ? activeView.info() : {},
    configKey: configKey(),
    pb: loadPb(configKey())?.wpm ?? null,
    lastResult,
  };
}

(window as unknown as { typefall: unknown }).typefall = {
  get scene() {
    return scene;
  },
  get renderer() {
    return renderer;
  },
  get camera() {
    return camera;
  },
  get world() {
    return world;
  },
  get settings() {
    return settings;
  },
  get state() {
    return snapshot();
  },
  // Apply overrides and reset to a fresh test. Timing starts on first typeChar.
  startTest(opts: Partial<Settings> = {}) {
    Object.assign(settings, opts);
    saveSettings(settings);
    restart();
    return snapshot();
  },
  typeChar(c: string) {
    handleChar(c);
  },
  space() {
    handleSpace();
  },
  backspace() {
    handleBackspace();
  },
  // Type a whole string; embedded spaces advance the word like a real keypress.
  typeWord(s: string) {
    for (const c of s) c === ' ' ? handleSpace() : handleChar(c);
  },
  // Recompute the layout for the current viewport (as a resize would).
  relayout() {
    if (activeView) activeView.relayout();
    return snapshot();
  },
  // The automation tab suspends rAF — drive frames manually.
  frame(dt = 1 / 60) {
    update(dt);
    render();
  },
  render,
  reset: restart,
  // Focus overlay, driven for automation (the real listeners fire on these).
  blur() {
    window.dispatchEvent(new Event('blur'));
    return snapshot();
  },
  refocus() {
    window.dispatchEvent(new Event('focus'));
    return snapshot();
  },
  // Deterministic settle for pixel testing of the fall pile / line scroll.
  settle(n = 90) {
    for (let i = 0; i < n; i++) update(1 / 60);
    render();
    return effects.fallCount;
  },
};

// ---------------------------------------------------------------------------
// Boot
// ---------------------------------------------------------------------------
// Measure the real monospace advance (as a fraction of the em) from the bundled
// font via troika's caret metrics, so the paragraph flow uses the font's true
// glyph advances rather than an assumed constant.
function measureMonoAdvance(cb: () => void): void {
  const probe = new TroikaText();
  probe.text = 'MMMMMMMMMM';
  probe.font = PARA_FONT_URL;
  probe.fontSize = 1; // measure per-em
  probe.anchorX = 'left';
  probe.anchorY = 'middle';
  probe.sync(() => {
    const cp = probe.textRenderInfo?.caretPositions as Float32Array | undefined;
    if (cp && cp.length >= 8) {
      // caretPositions: 4 floats per char (startX, endX, …). Monospace → every
      // glyph shares one advance; average across the run for a robust value.
      const n = cp.length / 4;
      let sum = 0;
      for (let i = 0; i < n; i++) sum += cp[i * 4 + 1] - cp[i * 4];
      const adv = sum / n;
      if (adv > 0.3 && adv < 0.9) MONO_ADVANCE = adv;
    }
    probe.dispose();
    cb();
  });
}

new FontLoader().load(`${import.meta.env.BASE_URL}fonts/helvetiker_bold.typeface.json`, (loaded) => {
  font = loaded;
  // Warm troika's glyph/SDF cache for the alphabet, measure the advance, then
  // build the first test so the paragraph packs with real metrics from frame 1.
  preloadFont(
    { font: PARA_FONT_URL, characters: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ' },
    () => {
      measureMonoAdvance(() => {
        restart();
        animate();
      });
    },
  );
});
