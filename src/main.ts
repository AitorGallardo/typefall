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
// A monkeytype-style typing test rendered inside a 3D scene. Upcoming words
// float ahead as extruded 3D text; the current word is prominent, the next few
// recede and dim. Each correct keystroke detaches that letter and fires the
// selected completion effect. Wrong keys flash red, nudge the camera, and count
// as errors (monkeytype "stop on letter").
// ---------------------------------------------------------------------------

const BG = 0x0a0a0a;
const WHITE = 0xe8e8ea;
const GREEN = 0x22c55e;
const RED = 0xef4444;

const LETTER_SIZE = 1.55;
const LETTER_SPACING = 0.16;
const BASE_Y = 4.2;
const Z_GAP = 5.4;
const Y_RISE = 0.42;
const SCALE_FALLOFF = 0.85;
const WINDOW = 7; // visible upcoming words (including current)

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
const CAM_BASE = new THREE.Vector3(0, 5.6, 13.5);
const CAM_LOOK = new THREE.Vector3(0, 4.0, -4);
const shake = new THREE.Vector3();

function applyCamera() {
  camera.position.copy(CAM_BASE).add(shake);
  camera.lookAt(CAM_LOOK);
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
// Letter geometry cache
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
// Word stream
// ---------------------------------------------------------------------------
interface StreamLetter {
  ch: string;
  mesh: THREE.Mesh;
  mat: THREE.MeshStandardMaterial;
  localX: number;
  halfWidth: number;
  errorUntil: number;
}
interface StreamWord {
  text: string;
  group: THREE.Group;
  letters: StreamLetter[];
  targetSlot: number;
}

let seq: string[] = [];
let wordIndex = 0; // index in seq of the current word
let visible: StreamWord[] = [];
let letterIdx = 0; // next letter to type in the current word

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

function buildWord(text: string, initSlot: number): StreamWord {
  const group = new THREE.Group();
  slotPos(initSlot, group.position);
  group.scale.setScalar(slotScale(initSlot));

  const widths = [...text].map((c) => getGlyph(c).width);
  const total = widths.reduce((a, b) => a + b, 0) + LETTER_SPACING * (text.length - 1);
  let cursor = -total / 2;
  const letters: StreamLetter[] = [];
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
    letters.push({ ch, mesh, mat, localX, halfWidth: widths[i] / 2, errorUntil: 0 });
    cursor += widths[i] + LETTER_SPACING;
  });

  scene.add(group);
  return { text, group, letters, targetSlot: initSlot };
}

function disposeWord(w: StreamWord) {
  for (const l of w.letters) {
    w.group.remove(l.mesh);
    l.mat.dispose();
  }
  scene.remove(w.group);
}

function ensureSeq(n: number) {
  while (seq.length < n) seq.push(...buildSequence(60));
}

function buildStream() {
  for (const w of visible) disposeWord(w);
  visible = [];
  wordIndex = 0;
  letterIdx = 0;
  const count = Math.min(WINDOW, seq.length);
  for (let s = 0; s < count; s++) visible.push(buildWord(seq[s], s));
  paintCurrent();
}

function advanceWord() {
  const gone = visible.shift();
  if (gone) disposeWord(gone);
  wordIndex++;
  letterIdx = 0;

  // Slide everyone forward one slot.
  for (let k = 0; k < visible.length; k++) visible[k].targetSlot = k;

  // Bring in a new word at the back if the sequence has one.
  const backSeqIdx = wordIndex + WINDOW - 1;
  if (settings.mode !== 'words') ensureSeq(backSeqIdx + 2);
  if (backSeqIdx < seq.length) {
    const w = buildWord(seq[backSeqIdx], WINDOW);
    w.targetSlot = visible.length; // its slot after this push
    visible.push(w);
  }
  paintCurrent();
}

// Highlight the pending letter of the current word green; reset the rest.
function paintCurrent() {
  const cur = visible[0];
  if (!cur) {
    caret.visible = false;
    return;
  }
  for (let i = 0; i < cur.letters.length; i++) {
    const l = cur.letters[i];
    if (i === letterIdx) {
      l.mat.color.setHex(GREEN);
      l.mat.emissive.setHex(GREEN);
      l.mat.emissiveIntensity = 0.55;
    } else {
      l.mat.color.setHex(WHITE);
      l.mat.emissive.setHex(WHITE);
      l.mat.emissiveIntensity = 0.08;
    }
  }
}

// Detach the current pending letter and fire the chosen effect.
function detachLetter(effect: EffectId) {
  const cur = visible[0];
  const l = cur.letters[letterIdx];
  const mesh = l.mesh;
  mesh.updateWorldMatrix(true, false);
  const wp = new THREE.Vector3();
  const wq = new THREE.Quaternion();
  const ws = new THREE.Vector3();
  mesh.matrixWorld.decompose(wp, wq, ws);
  cur.group.remove(mesh);
  scene.add(mesh);
  mesh.position.copy(wp);
  mesh.quaternion.copy(wq);
  mesh.scale.setScalar(1);
  l.mat.color.setHex(WHITE);
  l.mat.emissive.setHex(WHITE);
  l.mat.emissiveIntensity = 0.08;
  l.mat.opacity = 1;
  const glyph = getGlyph(l.ch);
  effects.play(effect, mesh, { color: new THREE.Color(WHITE), half: glyph.half });
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

function handleChar(ch: string) {
  if (state.phase === 'finished') return;
  if (ui.isMenuOpen()) return;
  if (ch === ' ') return; // spaces are implicit; never an error at boundaries

  const cur = visible[0];
  if (!cur) return;
  const pending = cur.letters[letterIdx];
  if (!pending) return;

  beginIfNeeded();

  if (ch.toLowerCase() === pending.ch.toLowerCase()) {
    detachLetter(settings.effect);
    state.correct++;
    letterIdx++;
    if (letterIdx >= cur.letters.length) {
      completeWord();
    } else {
      paintCurrent();
    }
  } else {
    state.incorrect++;
    pending.errorUntil = performance.now() + 220;
    pending.mat.color.setHex(RED);
    pending.mat.emissive.setHex(RED);
    pending.mat.emissiveIntensity = 0.6;
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
  advanceWord();
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
  newSequence();
  buildStream();
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
const tmpVec = new THREE.Vector3();

function update(dt: number) {
  world.step(1 / 60, dt, 3);

  const now = performance.now();

  // Ease each visible word toward its target slot → the stream flows in.
  const lerp = 1 - Math.pow(0.0015, dt);
  for (let k = 0; k < visible.length; k++) {
    const w = visible[k];
    slotPos(w.targetSlot, tmpVec);
    w.group.position.lerp(tmpVec, lerp);
    const ts = slotScale(w.targetSlot);
    w.group.scale.setScalar(THREE.MathUtils.lerp(w.group.scale.x, ts, lerp));
    const op = slotOpacity(w.targetSlot);
    for (const l of w.letters) {
      if (l.errorUntil) {
        if (now < l.errorUntil) continue;
        l.errorUntil = 0;
        paintCurrent();
      }
      l.mat.opacity = op;
    }
  }

  // Caret at the pending letter's left edge.
  const cur = visible[0];
  if (cur && state.phase !== 'finished' && cur.letters[letterIdx]) {
    const l = cur.letters[letterIdx];
    caret.visible = true;
    cur.group.localToWorld(caret.position.set(l.localX - l.halfWidth - 0.16, 0, 0));
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
    phase: state.phase,
    wpm: liveWpm(),
    raw: rawWpm(),
    acc: accuracy(),
    correct: state.correct,
    incorrect: state.incorrect,
    wordsDone: state.wordsDone,
    wordsTotal: wordsTotal(),
    elapsed: elapsedSec(),
    current: visible[0]?.text ?? '',
    letterIdx,
    bodies: effects.fallCount,
    menuOpen: ui.isMenuOpen(),
    resultsShown: state.phase === 'finished',
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
  // Deterministic settle for pixel testing of the fall pile.
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
  newSequence();
  buildStream();
  updateHud();
  animate();
  if (isTouch) capture.focus({ preventScroll: true });
});
