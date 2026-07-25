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
//   • paragraph (default) — the upcoming text is laid out as a readable wall of
//     3 rows facing the camera; the active word is bright with a green caret, the
//     rest recede in brightness, and finished lines scroll up out of view.
//   • stream — upcoming words fly in from the background; the current word sits
//     up front and the next few recede and dim.
// Each correct keystroke detaches that letter and fires the selected completion
// effect. Wrong keys flash red, nudge the camera, and count as errors
// (monkeytype "stop on letter").
// ---------------------------------------------------------------------------

const BG = 0x0a0a0a;
const WHITE = 0xe8e8ea;
const GREEN = 0x22c55e;
const RED = 0xef4444;

const LETTER_SIZE = 1.55;
const LETTER_SPACING = 0.16;

// --- stream layout ---
const BASE_Y = 4.2;
const Z_GAP = 5.4;
const Y_RISE = 0.42;
const SCALE_FALLOFF = 0.85;
const WINDOW = 7; // visible upcoming words (including current)

// --- paragraph layout ---
const PARA_SCALE = 0.52; // word scale on the text wall
const PARA_LINE_WIDTH = 24; // world units of usable line width
const PARA_SPACE_WORLD = 0.85; // gap between words on a line
const PARA_TOP_Y = 6.4; // y of the active (top) visible line
const PARA_LINE_GAP = 2.55; // vertical spacing between lines
const PARA_VISIBLE = 3; // rows shown at once (active + upcoming)

// --- per-view cameras ---
const STREAM_CAM_BASE = new THREE.Vector3(0, 5.6, 13.5);
const STREAM_CAM_LOOK = new THREE.Vector3(0, 4.0, -4);
const PARA_CAM_BASE = new THREE.Vector3(0, 3.9, 20.5);
const PARA_CAM_LOOK = new THREE.Vector3(0, 3.9, -0.5);

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

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 200);
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

const key = new THREE.DirectionalLight(0xffffff, 2.2);
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
floor.receiveShadow = true;
scene.add(floor);

const grid = new THREE.GridHelper(120, 60, 0x1b1b20, 0x141418);
grid.position.y = 0.01;
(grid.material as THREE.Material).transparent = true;
(grid.material as THREE.Material).opacity = 0.5;
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
  const geo = new TextGeometry(ch, {
    font: font!,
    size: LETTER_SIZE,
    depth: LETTER_SIZE * 0.4,
    curveSegments: 5,
    bevelEnabled: true,
    bevelThickness: 0.035,
    bevelSize: 0.025,
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
const caret = new THREE.Mesh(
  new THREE.BoxGeometry(0.14, LETTER_SIZE * 1.15, 0.14),
  new THREE.MeshBasicMaterial({ color: GREEN, transparent: true, opacity: 0.9 }),
);
caret.visible = false;
scene.add(caret);

// ---------------------------------------------------------------------------
// Shared word / letter primitives
// ---------------------------------------------------------------------------
interface LayoutLetter {
  ch: string;
  mesh: THREE.Mesh;
  mat: THREE.MeshStandardMaterial;
  localX: number; // x within the word group
  halfWidth: number;
  errorUntil: number;
  detached: boolean; // reparented to the scene and owned by the effect system
}

// Build a word group with its letters centred around the group origin. Not
// added to any parent — the caller places it.
function createWord(text: string): { group: THREE.Group; letters: LayoutLetter[]; width: number } {
  const group = new THREE.Group();
  const widths = [...text].map((c) => getGlyph(c).width);
  const total = widths.reduce((a, b) => a + b, 0) + LETTER_SPACING * (text.length - 1);
  let cursor = -total / 2;
  const letters: LayoutLetter[] = [];
  [...text].forEach((ch, i) => {
    const glyph = getGlyph(ch);
    const mat = new THREE.MeshStandardMaterial({
      color: WHITE,
      roughness: 0.5,
      metalness: 0.02,
      emissive: WHITE,
      emissiveIntensity: 0.08,
      transparent: true,
      opacity: 1,
    });
    const mesh = new THREE.Mesh(glyph.geo, mat);
    mesh.castShadow = true;
    const localX = cursor + widths[i] / 2;
    mesh.position.set(localX, 0, 0);
    group.add(mesh);
    letters.push({ ch, mesh, mat, localX, halfWidth: widths[i] / 2, errorUntil: 0, detached: false });
    cursor += widths[i] + LETTER_SPACING;
  });
  return { group, letters, width: total };
}

// Dispose a word group. Letters that were already detached are owned by the
// effect system (which disposes them when the effect ends) — never touch those.
function disposeWord(group: THREE.Group, letters: LayoutLetter[]) {
  for (const l of letters) {
    if (l.detached) continue;
    group.remove(l.mesh);
    l.mat.dispose();
  }
  group.removeFromParent();
}

function markPending(l: LayoutLetter) {
  l.mat.color.setHex(GREEN);
  l.mat.emissive.setHex(GREEN);
  l.mat.emissiveIntensity = 0.55;
}
function markNormal(l: LayoutLetter) {
  l.mat.color.setHex(WHITE);
  l.mat.emissive.setHex(WHITE);
  l.mat.emissiveIntensity = 0.08;
}

// Detach a letter from its word: reparent it to the scene at its current world
// transform (keeping the on-screen scale) and hand it to the effect system.
function detachLetterMesh(l: LayoutLetter, group: THREE.Group, effect: EffectId) {
  const mesh = l.mesh;
  mesh.updateWorldMatrix(true, false);
  const wp = new THREE.Vector3();
  const wq = new THREE.Quaternion();
  const ws = new THREE.Vector3();
  mesh.matrixWorld.decompose(wp, wq, ws);
  group.remove(mesh);
  scene.add(mesh);
  mesh.position.copy(wp);
  mesh.quaternion.copy(wq);
  mesh.scale.copy(ws);
  l.detached = true;
  markNormal(l);
  l.mat.opacity = 1;
  const glyph = getGlyph(l.ch);
  const half = new CANNON.Vec3(glyph.half.x * ws.x, glyph.half.y * ws.y, glyph.half.z * ws.z);
  effects.play(effect, mesh, { color: new THREE.Color(WHITE), half });
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
  dispose(): void;
  readonly camBase: THREE.Vector3;
  readonly camLook: THREE.Vector3;
  info(): Record<string, unknown>;
}

let seq: string[] = [];
let wordIndex = 0; // index in seq of the current word
let letterIdx = 0; // next letter to type in the current word
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

  function paint(): void {
    const cur = visible[0];
    if (!cur) {
      caret.visible = false;
      return;
    }
    for (let i = 0; i < cur.letters.length; i++) {
      if (i === letterIdx) markPending(cur.letters[i]);
      else markNormal(cur.letters[i]);
    }
  }

  // Build the initial window straight from wordIndex (0 on a fresh test).
  const count = Math.min(WINDOW, seq.length);
  for (let s = 0; s < count; s++) visible.push(addWord(wordIndex + s, s));
  paint();

  return {
    camBase: STREAM_CAM_BASE,
    camLook: STREAM_CAM_LOOK,
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
      const now = performance.now();
      const lerp = 1 - Math.pow(0.0015, dt);
      for (const w of visible) {
        slotPos(w.targetSlot, tmpVec);
        w.group.position.lerp(tmpVec, lerp);
        const ts = slotScale(w.targetSlot);
        w.group.scale.setScalar(THREE.MathUtils.lerp(w.group.scale.x, ts, lerp));
        const op = slotOpacity(w.targetSlot);
        for (const l of w.letters) {
          if (l.detached) continue;
          if (l.errorUntil) {
            if (now < l.errorUntil) continue;
            l.errorUntil = 0;
            paint();
          }
          l.mat.opacity = op;
        }
      }
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
// Paragraph view — monkeytype-style wall of rows. Words are packed into lines by
// width; PARA_VISIBLE lines are shown at once with the active line on top.
// Finishing the active line scrolls the whole block up: the finished line slides
// out the top and a fresh line slides in at the bottom.
// ---------------------------------------------------------------------------
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
  let lines: ParaLine[] = [];
  let top = 0; // index of the top (active) visible line
  let packSeq = 0; // next seq index to pack into a new line
  let packIdx = 0; // next line index to create

  function rowY(lineIndex: number): number {
    return PARA_TOP_Y - (lineIndex - top) * PARA_LINE_GAP;
  }

  // Greedily pack seq words into line `idx` up to PARA_LINE_WIDTH. A fresh line
  // starts one row lower and transparent so it eases up and fades in from below.
  function createLine(idx: number): void {
    const g = new THREE.Group();
    g.position.set(0, rowY(idx) - PARA_LINE_GAP, 0);
    scene.add(g);
    const words: ParaWord[] = [];
    const start = packSeq;
    let s = packSeq;
    let cursor = -PARA_LINE_WIDTH / 2;
    for (;;) {
      if (settings.mode !== 'words') ensureSeq(s + 1);
      if (s >= seq.length) break;
      const worldW = wordUnscaledWidth(seq[s]) * PARA_SCALE;
      if (words.length > 0 && cursor + worldW > PARA_LINE_WIDTH / 2) break;
      const { group, letters } = createWord(seq[s]);
      group.scale.setScalar(PARA_SCALE);
      group.position.set(cursor + worldW / 2, 0, 0);
      g.add(group);
      words.push({ seqIndex: s, group, letters, opacity: 0.5 });
      cursor += worldW + PARA_SPACE_WORLD;
      s++;
    }
    packSeq = s;
    packIdx = idx + 1;
    lines.push({ index: idx, group: g, words, start, end: s, fade: 0 });
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

  function paint(): void {
    for (const l of lines) {
      for (const w of l.words) {
        const dist = w.seqIndex - wordIndex;
        w.opacity = w.seqIndex < wordIndex ? 0 : dist === 0 ? 1 : 0.5;
        for (let i = 0; i < w.letters.length; i++) {
          if (w.seqIndex === wordIndex && i === letterIdx) markPending(w.letters[i]);
          else markNormal(w.letters[i]);
        }
      }
    }
  }

  // Build the opening window (active + upcoming lines).
  ensureLines(PARA_VISIBLE - 1);
  paint();

  return {
    camBase: PARA_CAM_BASE,
    camLook: PARA_CAM_LOOK,
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
      const now = performance.now();
      const posLerp = 1 - Math.pow(0.0009, dt);
      const opLerp = 1 - Math.pow(0.0025, dt);
      for (let i = lines.length - 1; i >= 0; i--) {
        const l = lines[i];
        const row = l.index - top;
        const targetY = PARA_TOP_Y - row * PARA_LINE_GAP;
        l.group.position.y = THREE.MathUtils.lerp(l.group.position.y, targetY, posLerp);
        const fadeTarget = row >= 0 && row < PARA_VISIBLE ? 1 : 0;
        l.fade = THREE.MathUtils.lerp(l.fade, fadeTarget, opLerp);
        for (const w of l.words) {
          for (const ll of w.letters) {
            if (ll.detached) continue;
            if (ll.errorUntil) {
              if (now < ll.errorUntil) continue;
              ll.errorUntil = 0;
              paint();
            }
            ll.mat.opacity = w.opacity * l.fade;
          }
        }
        // Retire a line once it has scrolled clear above the active line.
        if (row < 0 && l.fade < 0.02) {
          for (const w of l.words) disposeWord(w.group, w.letters);
          l.group.removeFromParent();
          lines.splice(i, 1);
        }
      }
    },
    dispose() {
      for (const l of lines) {
        for (const w of l.words) disposeWord(w.group, w.letters);
        l.group.removeFromParent();
      }
      lines = [];
    },
    info() {
      return { view: 'paragraph', topLine: top, lines: lines.length };
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
  startTime: 0,
  endTime: 0,
};
let best = Number(localStorage.getItem('typefall.best') || 0);

function wordsTotal(): number {
  return settings.mode === 'words' ? settings.words : 0;
}
function elapsedSec(): number {
  if (state.phase === 'ready') return 0;
  const end = state.phase === 'finished' ? state.endTime : performance.now();
  return Math.max(0, (end - state.startTime) / 1000);
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
    state.startTime = performance.now();
  }
}

function detachCurrent(effect: EffectId) {
  const w = activeView.currentWord();
  if (!w) return;
  detachLetterMesh(w.letters[letterIdx], w.group, effect);
}

function flashError(idx: number) {
  const w = activeView.currentWord();
  if (!w) return;
  const l = w.letters[idx];
  if (!l) return;
  l.errorUntil = performance.now() + 220;
  l.mat.color.setHex(RED);
  l.mat.emissive.setHex(RED);
  l.mat.emissiveIntensity = 0.6;
}

function handleChar(ch: string) {
  if (state.phase === 'finished') return;
  if (ui.isMenuOpen()) return;
  if (ch === ' ') return; // spaces are implicit; never an error at boundaries

  const w = activeView.currentWord();
  if (!w) return;
  const pending = w.letters[letterIdx];
  if (!pending) return;

  beginIfNeeded();

  if (ch.toLowerCase() === pending.ch.toLowerCase()) {
    detachCurrent(settings.effect);
    state.correct++;
    letterIdx++;
    if (letterIdx >= w.letters.length) {
      completeWord();
    } else {
      activeView.paint();
    }
  } else {
    state.incorrect++;
    flashError(letterIdx);
    addShake(0.32);
  }
}

function completeWord() {
  state.correct++; // implicit space, keeps WPM honest
  state.wordsDone++;
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
  applyCamera();
}

function restart() {
  state.phase = 'ready';
  state.correct = 0;
  state.incorrect = 0;
  state.wordsDone = 0;
  state.startTime = 0;
  state.endTime = 0;
  effects.reset();
  shake.set(0, 0, 0);
  ui.hideResults();
  ui.closeMenu();
  ui.setHudVisible(true);
  wordIndex = 0;
  letterIdx = 0;
  newSequence();
  buildView();
  updateHud();
  if (isTouch) capture.focus({ preventScroll: true });
}

function finish() {
  state.phase = 'finished';
  state.endTime = performance.now();
  const wpm = liveWpm();
  if (wpm > best) {
    best = wpm;
    try {
      localStorage.setItem('typefall.best', String(best));
    } catch {
      /* ignore */
    }
  }
  ui.setHudVisible(false);
  ui.showResults({
    wpm,
    acc: accuracy(),
    raw: rawWpm(),
    correct: state.correct,
    incorrect: state.incorrect,
    best,
  });
  rainResultLetters();
}

// Let a handful of letters rain down behind the results panel.
function rainResultLetters() {
  const chars = 'typefall'.split('');
  for (let i = 0; i < chars.length; i++) {
    const glyph = getGlyph(chars[i]);
    const mat = new THREE.MeshStandardMaterial({
      color: WHITE,
      roughness: 0.5,
      metalness: 0.02,
      emissive: WHITE,
      emissiveIntensity: 0.08,
      transparent: true,
      opacity: 1,
    });
    const mesh = new THREE.Mesh(glyph.geo, mat);
    mesh.castShadow = true;
    mesh.position.set((Math.random() - 0.5) * 12, 12 + Math.random() * 6, (Math.random() - 0.5) * 4);
    scene.add(mesh);
    effects.rain(mesh, { color: new THREE.Color(WHITE), half: glyph.half });
  }
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
  if (e.key.length === 1 && e.key.charCodeAt(0) >= 32) {
    e.preventDefault();
    handleChar(e.key);
  }
});

capture.addEventListener('input', () => {
  const v = capture.value;
  for (const ch of v) if (ch.charCodeAt(0) >= 32) handleChar(ch);
  capture.value = '';
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

function update(dt: number) {
  world.step(1 / 60, dt, 3);

  const now = performance.now();

  activeView.update(dt);

  // Caret at the pending letter's left edge.
  const cur = activeView.currentWord();
  const pending = cur?.letters[letterIdx];
  if (cur && pending && !pending.detached && state.phase !== 'finished') {
    caret.visible = true;
    cur.group.localToWorld(caret.position.set(pending.localX - pending.halfWidth - 0.16, 0, 0));
    caret.scale.setScalar(cur.group.scale.x);
    (caret.material as THREE.MeshBasicMaterial).opacity = 0.55 + 0.35 * Math.sin(now / 130);
  } else {
    caret.visible = false;
  }

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
  let primary = '';
  if (settings.mode === 'time') {
    modeLabel = 'time';
    const remain = Math.max(0, settings.time - elapsedSec());
    primary = state.phase === 'ready' ? String(settings.time) : String(Math.ceil(remain));
  } else if (settings.mode === 'words') {
    modeLabel = 'words';
    primary = `${state.wordsDone}/${settings.words}`;
  } else {
    modeLabel = 'zen';
    primary = String(state.wordsDone);
  }
  const stats =
    state.phase === 'ready' ? 'type to start' : `${liveWpm()} wpm · ${accuracy()}% acc`;
  ui.setHud(modeLabel, primary, stats);
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
    bodies: effects.fallCount,
    menuOpen: ui.isMenuOpen(),
    resultsShown: state.phase === 'finished',
    layout: activeView ? activeView.info() : {},
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
  // Type a whole string (letters only); spaces are ignored as usual.
  typeWord(s: string) {
    for (const c of s) handleChar(c);
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
