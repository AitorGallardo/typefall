import './style.css';
import * as THREE from 'three';
import { FontLoader, type Font } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import * as CANNON from 'cannon-es';
import { buildSequence } from './words';
import { loadSettings, saveSettings, type Settings, type EffectId } from './settings';
import { EffectSystem } from './effects';
import { createUI } from './ui';

// ---------------------------------------------------------------------------
// A monkeytype-style typing test rendered inside a 3D scene. Two presentations
// share the same scoring, effects and input:
//   • paragraph (default) — a measured-flow layout engine places words by their
//     glyph widths into a centered column and shows three lines at once; the
//     active word is bright with a thin green caret, upcoming words are muted,
//     typed letters turn green, mistakes red, and finished lines scroll up.
//   • stream — upcoming words fly in from the background; the current word sits
//     up front and the next few recede and dim.
// Each correct keystroke locks the letter in place (green) and blows away a
// clone with the selected effect, so the passage never reflows. A wrong key
// turns the letter red and advances the caret; backspace restores letters in
// the current word, which won't complete until every character is correct.
// ---------------------------------------------------------------------------

const BG = 0x0a0a0a;
const WHITE = 0xe8e8ea;
const GREEN = 0x22c55e;
const RED = 0xef4444;
const GRAY = 0x878d99; // upcoming words — muted but comfortably readable on black

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
const PARA_CENTER_BIAS = 0.09; // push the block this fraction of view height above center

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

// Unscaled width of a word (glyph units) — measured from the cache, no meshes.
function wordUnscaledWidth(text: string): number {
  let w = 0;
  for (const ch of text) w += getGlyph(ch).width;
  return w + LETTER_SPACING * (text.length - 1);
}

// ---------------------------------------------------------------------------
// Caret
// ---------------------------------------------------------------------------
// A thin green vertical bar. Its world position and scale are recomputed each
// frame from the active word's glyph advances so it lands exactly on the next
// character boundary and never overlaps a letter (see updateCaret).
const caret = new THREE.Mesh(
  new THREE.BoxGeometry(0.06, LETTER_SIZE * 1.05, 0.03),
  new THREE.MeshBasicMaterial({ color: GREEN, transparent: true, opacity: 0.9 }),
);
caret.visible = false;
scene.add(caret);

// ---------------------------------------------------------------------------
// Shared word / letter primitives
// ---------------------------------------------------------------------------
type LetterState = 'untyped' | 'correct' | 'incorrect';

interface LayoutLetter {
  ch: string;
  mesh: THREE.Mesh;
  mat: THREE.MeshStandardMaterial;
  localX: number; // x within the word group (unscaled glyph units)
  halfWidth: number; // unscaled half advance
  state: LetterState;
}

// Build a word group with its letters centred around the group origin. Not
// added to any parent — the caller scales and places it. The originals stay put
// for the whole test so their layout slots are reserved (no reflow) and typed
// letters can be un-typed by backspace; the flying "blow away" effect operates
// on a clone (see detachClone).
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
    letters.push({ ch, mesh, mat, localX, halfWidth: widths[i] / 2, state: 'untyped' });
    cursor += widths[i] + LETTER_SPACING;
  });
  return { group, letters, width: total };
}

// Dispose a word group and every letter it owns. Flying clones are owned by the
// effect system (which disposes them when the effect ends) — never touched here.
function disposeWord(group: THREE.Group, letters: LayoutLetter[]) {
  for (const l of letters) {
    group.remove(l.mesh);
    l.mat.dispose();
  }
  group.removeFromParent();
}

// --- per-state colouring (colour + emissive only; opacity is a view concern) ---
function setUpcoming(l: LayoutLetter) {
  l.mat.color.setHex(GRAY);
  l.mat.emissive.setHex(GRAY);
  l.mat.emissiveIntensity = EM_UPCOMING;
}
function setCurrentUntyped(l: LayoutLetter) {
  l.mat.color.setHex(WHITE);
  l.mat.emissive.setHex(WHITE);
  l.mat.emissiveIntensity = EM_CURRENT;
}
function setCorrect(l: LayoutLetter) {
  l.mat.color.setHex(GREEN);
  l.mat.emissive.setHex(GREEN);
  l.mat.emissiveIntensity = EM_CORRECT;
}
function setIncorrect(l: LayoutLetter) {
  l.mat.color.setHex(RED);
  l.mat.emissive.setHex(RED);
  l.mat.emissiveIntensity = EM_INCORRECT;
}
function setCompleted(l: LayoutLetter) {
  l.mat.color.setHex(GREEN);
  l.mat.emissive.setHex(GREEN);
  l.mat.emissiveIntensity = EM_COMPLETED;
}

// Spawn a flying clone of a just-typed letter at its exact on-screen transform
// and hand it to the effect system. The original letter is left in place (it
// turns green and holds its layout slot), so the passage never reflows and
// backspace can restore the letter to an untyped state.
function detachClone(l: LayoutLetter, effect: EffectId) {
  const src = l.mesh;
  src.updateWorldMatrix(true, false);
  const wp = new THREE.Vector3();
  const wq = new THREE.Quaternion();
  const ws = new THREE.Vector3();
  src.matrixWorld.decompose(wp, wq, ws);
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
  clone.scale.copy(ws);
  scene.add(clone);
  const half = new CANNON.Vec3(glyph.half.x * ws.x, glyph.half.y * ws.y, glyph.half.z * ws.z);
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
      if (i < letterIdx) letterStates[i] === 'incorrect' ? setIncorrect(l) : setCorrect(l);
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
    update(dt: number) {
      const lerp = 1 - Math.pow(0.0015, dt);
      for (const w of visible) {
        slotPos(w.targetSlot, tmpVec);
        w.group.position.lerp(tmpVec, lerp);
        const ts = slotScale(w.targetSlot);
        w.group.scale.setScalar(THREE.MathUtils.lerp(w.group.scale.x, ts, lerp));
        const op = slotOpacity(w.targetSlot);
        for (const l of w.letters) l.mat.opacity = op;
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
  scale: number; // word-group scale (glyph units → world)
  colHalf: number; // half the reading-column width, world units
  gap: number; // inter-word gap, world units
  lineH: number; // line height, world units
  topY: number; // world y of the top (active) visible line
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
  const scale = em / LETTER_SIZE; // glyphs are built at size = LETTER_SIZE = 1em
  const colWidth = Math.min(PARA_COL_VW * visW, PARA_COL_MAX_PX * worldPerPx);
  const lineH = PARA_LINE_EM * em;
  // Center the middle line slightly above the frustum's vertical center.
  const centerY = PARA_CAM_LOOK.y;
  const topY = centerY + PARA_CENTER_BIAS * visH + lineH;
  return { scale, colHalf: colWidth / 2, gap: PARA_GAP_EM * em, lineH, topY };
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
      const worldW = wordUnscaledWidth(seq[s]) * m.scale;
      if (words.length > 0 && cursor + worldW > m.colHalf) break;
      const { group, letters } = createWord(seq[s], false); // paragraph text casts no shadow
      group.scale.setScalar(m.scale);
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
    while (packIdx <= throughIdx) createLine(packIdx);
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
          w.opacity = OP_COMPLETED;
          for (const ll of w.letters) setCompleted(ll);
        } else if (w.seqIndex > wordIndex) {
          w.opacity = OP_UPCOMING;
          for (const ll of w.letters) setUpcoming(ll);
        } else {
          w.opacity = OP_CURRENT;
          for (let i = 0; i < w.letters.length; i++) {
            const ll = w.letters[i];
            if (i < letterIdx) letterStates[i] === 'incorrect' ? setIncorrect(ll) : setCorrect(ll);
            else setCurrentUntyped(ll);
          }
        }
      }
    }
  }

  // Rebuild the whole line packing (used on first build and on resize). Preserves
  // typing progress; paint() re-applies every letter's state afterwards.
  function rebuild(): void {
    for (const l of lines) {
      for (const w of l.words) disposeWord(w.group, w.letters);
      l.group.removeFromParent();
    }
    lines = [];
    packSeq = 0;
    packIdx = 0;
    ensureLines(Math.max(PARA_VISIBLE - 1, 0));
    top = lineIndexOf(wordIndex);
    ensureLines(top + PARA_VISIBLE - 1);
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
          for (const ll of w.letters) ll.mat.opacity = w.opacity * l.fade;
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
  if (ch === ' ') return; // spaces are implicit; never an error at boundaries

  const w = activeView.currentWord();
  if (!w) return;
  const pending = w.letters[letterIdx];
  if (!pending) return; // word full and holding a mistake — wait for backspace

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

// Monkeytype-style backspace, scoped to the current word: step the caret back
// and restore that letter to an untyped state (a correct letter's clone has
// already flown, but the original is still here to revert).
function handleBackspace() {
  if (state.phase === 'finished') return;
  if (ui.isMenuOpen()) return;
  if (letterIdx === 0) return; // don't reach back into finished words
  const w = activeView.currentWord();
  if (!w) return;
  letterIdx--;
  const undone = letterStates.pop();
  if (undone === 'correct') state.correct = Math.max(0, state.correct - 1);
  else if (undone === 'incorrect') state.incorrect = Math.max(0, state.incorrect - 1);
  const l = w.letters[letterIdx];
  if (l) l.state = 'untyped';
  activeView.paint();
}

function completeWord() {
  state.correct++; // implicit space, keeps WPM honest
  state.wordsDone++;
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
  for (const ch of v) if (ch.charCodeAt(0) >= 32) handleChar(ch);
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
// Loop
// ---------------------------------------------------------------------------
const clock = new THREE.Clock();
let running = true;
let hudAccum = 0;

// Latest caret placement, surfaced through the debug handle for assertions.
const caretState = { visible: false, x: 0, y: 0, z: 0 };

// Place the caret exactly on the next-character boundary, computed from glyph
// advances (never a fixed slab in front of a letter). It sits in the inter-letter
// gap just left of the pending glyph, or just past the last glyph at word end.
function updateCaret(now: number) {
  const cur = activeView.currentWord();
  if (!cur || state.phase === 'finished') {
    caret.visible = false;
    caretState.visible = false;
    return;
  }
  const pending = cur.letters[letterIdx];
  let localX: number;
  if (pending) {
    localX = pending.localX - pending.halfWidth - LETTER_SPACING * 0.5;
  } else {
    const last = cur.letters[cur.letters.length - 1];
    if (!last) {
      caret.visible = false;
      caretState.visible = false;
      return;
    }
    localX = last.localX + last.halfWidth + LETTER_SPACING * 0.5;
  }
  caret.visible = true;
  cur.group.localToWorld(caret.position.set(localX, 0, 0));
  caret.scale.setScalar(cur.group.scale.x);
  (caret.material as THREE.MeshBasicMaterial).opacity = 0.55 + 0.35 * Math.sin(now / 130);
  caretState.visible = true;
  caretState.x = +caret.position.x.toFixed(3);
  caretState.y = +caret.position.y.toFixed(3);
  caretState.z = +caret.position.z.toFixed(3);
}

function update(dt: number) {
  world.step(1 / 60, dt, 3);

  if (state.phase === 'running') state.elapsed += dt;

  const now = performance.now();

  activeView.update(dt);

  updateCaret(now);

  // Camera shake decay.
  shake.multiplyScalar(Math.pow(0.0025, dt));
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

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  // Recompute the measured-flow layout for the new viewport without disturbing
  // the running test (keeps wordIndex / letterIdx / per-letter states).
  if (activeView) activeView.relayout();
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
  backspace() {
    handleBackspace();
  },
  // Type a whole string (letters only); spaces are ignored as usual.
  typeWord(s: string) {
    for (const c of s) handleChar(c);
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
new FontLoader().load(`${import.meta.env.BASE_URL}fonts/helvetiker_bold.typeface.json`, (loaded) => {
  font = loaded;
  restart();
  animate();
});
