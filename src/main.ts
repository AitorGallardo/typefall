import './style.css';
import * as THREE from 'three';
import { FontLoader, type Font } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import * as CANNON from 'cannon-es';

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
const BG = 0x0a0a0a;
const WHITE = 0xe8e8ea;
const GREEN = 0x22c55e;
const MAX_LETTERS = 120;
const SPAWN_HEIGHT = 15;
const LETTER_SIZE = 1.9;
const FLOOR_Y = 0;
const BRAND = 'gmsudo';
const IDLE_MS = 6000;
const isTouch = matchMedia('(hover: none) and (pointer: coarse)').matches;

// ---------------------------------------------------------------------------
// Renderer / scene / camera
// ---------------------------------------------------------------------------
const canvas = document.getElementById('scene') as HTMLCanvasElement;
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.15;

const scene = new THREE.Scene();
scene.background = new THREE.Color(BG);
scene.fog = new THREE.Fog(BG, 26, 60);

const camera = new THREE.PerspectiveCamera(48, window.innerWidth / window.innerHeight, 0.1, 200);
const camTarget = new THREE.Vector3(0, 3.2, 0);
// Orbit state (spherical around target)
let camAngle = 0.5;
let camElev = 0.32;
const camRadius = 24;
let autoOrbit = true;

function applyCamera() {
  const r = camRadius;
  camera.position.set(
    Math.sin(camAngle) * Math.cos(camElev) * r,
    Math.sin(camElev) * r + 3.5,
    Math.cos(camAngle) * Math.cos(camElev) * r
  );
  camera.lookAt(camTarget);
}
applyCamera();

// ---------------------------------------------------------------------------
// Lighting
// ---------------------------------------------------------------------------
scene.add(new THREE.HemisphereLight(0x334155, 0x0a0a0a, 0.35));
const ambient = new THREE.AmbientLight(0xffffff, 0.12);
scene.add(ambient);

const key = new THREE.DirectionalLight(0xffffff, 2.1);
key.position.set(6, 16, 8);
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

// Cool rim light from behind for edge definition
const rim = new THREE.DirectionalLight(0x60a5fa, 0.9);
rim.position.set(-10, 6, -12);
scene.add(rim);

// Subtle green fill so the terminal accent lives in the air a little
const accentFill = new THREE.PointLight(GREEN, 0.5, 40, 2);
accentFill.position.set(-4, 2, 6);
scene.add(accentFill);

// ---------------------------------------------------------------------------
// Floor
// ---------------------------------------------------------------------------
const floorMat = new THREE.MeshStandardMaterial({
  color: 0x101012,
  roughness: 0.95,
  metalness: 0.0,
});
const floor = new THREE.Mesh(new THREE.PlaneGeometry(120, 120), floorMat);
floor.rotation.x = -Math.PI / 2;
floor.position.y = FLOOR_Y;
floor.receiveShadow = true;
scene.add(floor);

// faint grid for depth, very muted
const grid = new THREE.GridHelper(120, 60, 0x1b1b20, 0x141418);
grid.position.y = FLOOR_Y + 0.01;
(grid.material as THREE.Material).transparent = true;
(grid.material as THREE.Material).opacity = 0.5;
scene.add(grid);

// ---------------------------------------------------------------------------
// Physics world
// ---------------------------------------------------------------------------
const world = new CANNON.World({ gravity: new CANNON.Vec3(0, -32, 0) });
world.allowSleep = true;
world.defaultContactMaterial.friction = 0.4;
world.defaultContactMaterial.restitution = 0.12;
(world.solver as CANNON.GSSolver).iterations = 12;

const groundBody = new CANNON.Body({ type: CANNON.Body.STATIC, shape: new CANNON.Plane() });
groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
world.addBody(groundBody);

// Invisible containment walls so the pile stays roughly centred.
function addWall(nx: number, nz: number, px: number, pz: number) {
  const b = new CANNON.Body({ type: CANNON.Body.STATIC, shape: new CANNON.Plane() });
  b.quaternion.setFromVectors(new CANNON.Vec3(0, 0, 1), new CANNON.Vec3(nx, 0, nz));
  b.position.set(px, 0, pz);
  world.addBody(b);
}
addWall(1, 0, -10, 0); // left
addWall(-1, 0, 10, 0); // right
addWall(0, 1, 0, -8); // back
addWall(0, -1, 0, 8); // front

// ---------------------------------------------------------------------------
// Letters
// ---------------------------------------------------------------------------
interface Letter {
  mesh: THREE.Mesh;
  body: CANNON.Body;
  born: number;
  fading: boolean;
  fadeStart: number;
}

const letters: Letter[] = [];
const geomCache = new Map<string, { geo: TextGeometry; half: CANNON.Vec3 }>();
const countEl = document.getElementById('count') as HTMLSpanElement;

let font: Font | null = null;

function getGeometry(ch: string) {
  let cached = geomCache.get(ch);
  if (cached) return cached;
  const geo = new TextGeometry(ch, {
    font: font!,
    size: LETTER_SIZE,
    depth: LETTER_SIZE * 0.42,
    curveSegments: 6,
    bevelEnabled: true,
    bevelThickness: 0.04,
    bevelSize: 0.03,
    bevelSegments: 2,
  });
  geo.computeBoundingBox();
  const bb = geo.boundingBox!;
  const cx = (bb.max.x + bb.min.x) / 2;
  const cy = (bb.max.y + bb.min.y) / 2;
  const cz = (bb.max.z + bb.min.z) / 2;
  geo.translate(-cx, -cy, -cz); // centre geometry on its own origin
  geo.computeVertexNormals();
  const half = new CANNON.Vec3(
    Math.max((bb.max.x - bb.min.x) / 2, 0.18),
    Math.max((bb.max.y - bb.min.y) / 2, 0.18),
    Math.max((bb.max.z - bb.min.z) / 2, 0.18)
  );
  cached = { geo, half };
  geomCache.set(ch, cached);
  return cached;
}

let accentTick = 0;

function spawnLetter(ch: string, x = 0, opts: { accent?: boolean; impulse?: number } = {}) {
  if (!font) return;
  const printable = ch.length === 1 && ch.charCodeAt(0) >= 33;
  if (!printable) return;

  const { geo, half } = getGeometry(ch);

  const accent = opts.accent ?? (++accentTick % 7 === 0);
  const mat = new THREE.MeshStandardMaterial({
    color: accent ? GREEN : WHITE,
    roughness: 0.42,
    metalness: 0.15,
    emissive: accent ? GREEN : 0x000000,
    emissiveIntensity: accent ? 0.32 : 0,
    transparent: true,
    opacity: 1,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.castShadow = true;
  mesh.receiveShadow = true;

  const px = THREE.MathUtils.clamp(x + (Math.random() - 0.5) * 1.2, -8, 8);
  const pz = (Math.random() - 0.5) * 4;
  mesh.position.set(px, SPAWN_HEIGHT + Math.random() * 2, pz);
  scene.add(mesh);

  const body = new CANNON.Body({
    mass: 1,
    shape: new CANNON.Box(half),
    position: new CANNON.Vec3(mesh.position.x, mesh.position.y, mesh.position.z),
    sleepSpeedLimit: 0.6,
    sleepTimeLimit: 1.2,
    linearDamping: 0.02,
    angularDamping: 0.06,
  });
  const imp = opts.impulse ?? 1;
  body.velocity.set((Math.random() - 0.5) * 2 * imp, -2, (Math.random() - 0.5) * 2 * imp);
  body.angularVelocity.set(
    (Math.random() - 0.5) * 6,
    (Math.random() - 0.5) * 6,
    (Math.random() - 0.5) * 6
  );
  body.quaternion.setFromEuler(
    Math.random() * Math.PI,
    Math.random() * Math.PI,
    Math.random() * Math.PI
  );
  world.addBody(body);

  letters.push({ mesh, body, born: performance.now(), fading: false, fadeStart: 0 });
  enforceCap();
  updateCount();
}

function updateCount() {
  const live = letters.filter((l) => !l.fading).length;
  countEl.textContent = String(live);
}

function enforceCap() {
  const live = letters.filter((l) => !l.fading);
  if (live.length <= MAX_LETTERS) return;
  const excess = live.length - MAX_LETTERS;
  for (let i = 0; i < excess; i++) {
    startFade(live[i]);
  }
}

function startFade(l: Letter) {
  if (l.fading) return;
  l.fading = true;
  l.fadeStart = performance.now();
}

function disposeLetter(l: Letter) {
  scene.remove(l.mesh);
  (l.mesh.material as THREE.Material).dispose();
  world.removeBody(l.body);
}

function clearAll() {
  for (const l of letters) startFade(l);
}

// ---------------------------------------------------------------------------
// Word buffer (for Enter "drop the word")
// ---------------------------------------------------------------------------
let word = '';

function dropWord() {
  if (!word) return;
  const w = word;
  word = '';
  const span = Math.min(w.length, 8);
  const startX = -span * 0.5;
  [...w].forEach((ch, i) => {
    setTimeout(() => spawnLetter(ch, startX + i, { impulse: 1.6 }), i * 40);
  });
}

// ---------------------------------------------------------------------------
// Input handling
// ---------------------------------------------------------------------------
const capture = document.getElementById('capture') as HTMLInputElement;

function markActivity() {
  lastActivity = performance.now();
  stopIdle();
}

function handleChar(ch: string) {
  markActivity();
  spawnLetter(ch);
  word += ch;
  if (word.length > 24) word = word.slice(-24);
}

window.addEventListener('keydown', (e) => {
  if (e.metaKey || e.ctrlKey || e.altKey) return;

  if (e.key === 'Enter') {
    e.preventDefault();
    markActivity();
    dropWord();
    return;
  }
  if (e.key === 'Backspace') {
    e.preventDefault();
    markActivity();
    flickLast();
    word = word.slice(0, -1);
    return;
  }
  if (e.key === 'Escape') {
    e.preventDefault();
    markActivity();
    clearAll();
    return;
  }
  if (e.key.length === 1 && e.key.charCodeAt(0) >= 33) {
    handleChar(e.key);
  }
});

// Mobile soft keyboard sends characters through the hidden input.
capture.addEventListener('input', () => {
  const v = capture.value;
  for (const ch of v) {
    if (ch.charCodeAt(0) >= 33) handleChar(ch);
  }
  capture.value = '';
});

// Fling the most recently spawned, still-awake letter (Backspace).
function flickLast() {
  for (let i = letters.length - 1; i >= 0; i--) {
    const l = letters[i];
    if (l.fading) continue;
    l.body.wakeUp();
    l.body.velocity.set((Math.random() - 0.5) * 10, 9 + Math.random() * 4, (Math.random() - 0.5) * 10);
    l.body.angularVelocity.set(
      (Math.random() - 0.5) * 14,
      (Math.random() - 0.5) * 14,
      (Math.random() - 0.5) * 14
    );
    return;
  }
}

// ---------------------------------------------------------------------------
// Pointer: drag-to-orbit, or grab-and-throw a letter
// ---------------------------------------------------------------------------
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
const dragPlane = new THREE.Plane();
const dragPoint = new THREE.Vector3();

let mode: 'none' | 'orbit' | 'drag' = 'none';
let grabbed: Letter | null = null;
let lastPointer = { x: 0, y: 0 };
let prevGrabPos = new THREE.Vector3();
let grabVel = new THREE.Vector3();
let movedDistance = 0;

function setPointer(e: PointerEvent) {
  pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;
}

canvas.addEventListener('pointerdown', (e) => {
  markActivity();
  if (isTouch) capture.focus({ preventScroll: true });
  setPointer(e);
  lastPointer = { x: e.clientX, y: e.clientY };
  movedDistance = 0;

  raycaster.setFromCamera(pointer, camera);
  const meshes = letters.filter((l) => !l.fading).map((l) => l.mesh);
  const hit = raycaster.intersectObjects(meshes, false)[0];

  if (hit) {
    const l = letters.find((x) => x.mesh === hit.object)!;
    grabbed = l;
    mode = 'drag';
    l.body.type = CANNON.Body.KINEMATIC;
    l.body.velocity.setZero();
    l.body.angularVelocity.setZero();
    l.body.wakeUp();
    // Drag plane faces camera, through the grab point.
    dragPlane.setFromNormalAndCoplanarPoint(
      camera.getWorldDirection(new THREE.Vector3()).negate(),
      hit.point
    );
    prevGrabPos.copy(l.mesh.position);
    grabVel.set(0, 0, 0);
  } else {
    mode = 'orbit';
    autoOrbit = false;
  }
  canvas.setPointerCapture(e.pointerId);
});

canvas.addEventListener('pointermove', (e) => {
  if (mode === 'none') return;
  const dx = e.clientX - lastPointer.x;
  const dy = e.clientY - lastPointer.y;
  movedDistance += Math.abs(dx) + Math.abs(dy);
  lastPointer = { x: e.clientX, y: e.clientY };

  if (mode === 'orbit') {
    camAngle -= dx * 0.005;
    camElev = THREE.MathUtils.clamp(camElev + dy * 0.004, -0.05, 0.95);
    applyCamera();
  } else if (mode === 'drag' && grabbed) {
    setPointer(e);
    raycaster.setFromCamera(pointer, camera);
    if (raycaster.ray.intersectPlane(dragPlane, dragPoint)) {
      dragPoint.x = THREE.MathUtils.clamp(dragPoint.x, -9, 9);
      dragPoint.y = Math.max(dragPoint.y, 0.6);
      dragPoint.z = THREE.MathUtils.clamp(dragPoint.z, -7, 7);
      grabVel.subVectors(dragPoint, prevGrabPos).multiplyScalar(9);
      prevGrabPos.copy(dragPoint);
      grabbed.body.position.set(dragPoint.x, dragPoint.y, dragPoint.z);
      grabbed.body.velocity.set(grabVel.x, grabVel.y, grabVel.z);
    }
  }
});

function endPointer(e: PointerEvent) {
  if (mode === 'drag' && grabbed) {
    grabbed.body.type = CANNON.Body.DYNAMIC;
    grabbed.body.wakeUp();
    // Throw with the last drag velocity.
    grabbed.body.velocity.set(grabVel.x, grabVel.y, grabVel.z);
    grabbed.body.angularVelocity.set(
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 8
    );
    grabbed = null;
  } else if (mode === 'orbit' && movedDistance < 6 && isTouch) {
    // A tap on empty space (mobile): spawn a random brand letter.
    spawnLetter(BRAND[Math.floor(Math.random() * BRAND.length)]);
  }
  mode = 'none';
  try {
    canvas.releasePointerCapture(e.pointerId);
  } catch {
    /* ignore */
  }
}
canvas.addEventListener('pointerup', endPointer);
canvas.addEventListener('pointercancel', endPointer);

// Keep the hidden input focused on any tap so the mobile keyboard stays up.
if (isTouch) {
  window.addEventListener('touchstart', () => capture.focus({ preventScroll: true }), { passive: true });
}

// ---------------------------------------------------------------------------
// Idle self-demo — type a phrase slowly until the user takes over.
// ---------------------------------------------------------------------------
let lastActivity = performance.now();
let idleTimer: number | null = null;
const idlePhrase = 'type something ' + BRAND;
let idleIndex = 0;

function stopIdle() {
  if (idleTimer !== null) {
    clearTimeout(idleTimer);
    idleTimer = null;
  }
}

function idleStep() {
  if (performance.now() - lastActivity < IDLE_MS) {
    scheduleIdle();
    return;
  }
  const ch = idlePhrase[idleIndex % idlePhrase.length];
  idleIndex++;
  if (ch !== ' ') spawnLetter(ch);
  scheduleIdle();
}

function scheduleIdle() {
  stopIdle();
  idleTimer = window.setTimeout(idleStep, 520);
}

// ---------------------------------------------------------------------------
// Loop
// ---------------------------------------------------------------------------
const clock = new THREE.Clock();
const FADE_MS = 650;
let running = true;

function step() {
  const dt = Math.min(clock.getDelta(), 1 / 30);
  world.step(1 / 60, dt, 3);

  const now = performance.now();
  for (let i = letters.length - 1; i >= 0; i--) {
    const l = letters[i];
    const p = l.body.position;
    l.mesh.position.set(p.x, p.y, p.z);
    l.mesh.quaternion.set(
      l.body.quaternion.x,
      l.body.quaternion.y,
      l.body.quaternion.z,
      l.body.quaternion.w
    );

    if (l.fading) {
      const t = (now - l.fadeStart) / FADE_MS;
      const mat = l.mesh.material as THREE.MeshStandardMaterial;
      mat.opacity = Math.max(0, 1 - t);
      const s = Math.max(0.001, 1 - t * 0.4);
      l.mesh.scale.setScalar(s);
      if (t >= 1) {
        disposeLetter(l);
        letters.splice(i, 1);
        updateCount();
      }
    } else if (p.y < -8) {
      // Fell out of the world somehow — recycle.
      disposeLetter(l);
      letters.splice(i, 1);
      updateCount();
    }
  }

  // Gentle auto-orbit when the user isn't driving.
  if (autoOrbit) {
    camAngle += dt * 0.06;
    applyCamera();
  }

  renderer.render(scene, camera);
}

function animate() {
  if (!running) return;
  requestAnimationFrame(animate);
  step();
}

// Pause when tab is hidden; resume cleanly.
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

// Re-enable auto-orbit after a stretch of no interaction.
setInterval(() => {
  if (performance.now() - lastActivity > IDLE_MS && !grabbed) autoOrbit = true;
}, 2000);

// ---------------------------------------------------------------------------
// Boot
// ---------------------------------------------------------------------------
new FontLoader().load(
  `${import.meta.env.BASE_URL}fonts/helvetiker_bold.typeface.json`,
  (loaded) => {
    font = loaded;
    animate();
    // Kick off the self-demo shortly after load.
    lastActivity = performance.now() - IDLE_MS + 900;
    scheduleIdle();
  }
);

if (isTouch) {
  // Prime focus so the first tap reliably opens the keyboard.
  window.addEventListener('load', () => capture.focus({ preventScroll: true }), { once: true });
}
