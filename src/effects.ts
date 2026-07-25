import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import type { EffectId } from './settings';
import { REAL_EFFECTS } from './settings';

// Completion effects. Each takes a detached 3D letter mesh (already reparented
// to the scene at its world transform, scale 1) and animates it away. Every
// effect is cheap: one pooled Points cloud for all particles, a small pool of
// reused box shards, and cannon-es bodies only where real piling matters.

const WHITE = new THREE.Color(0xe8e8ea);
const GREEN = new THREE.Color(0x22c55e);
const ASH = new THREE.Color(0x9aa0a6);

export interface PlayOpts {
  color: THREE.Color;
  half: CANNON.Vec3; // half-extents for physics (fall / sizing)
}

interface AnimLetter {
  mesh: THREE.Mesh;
  kind: 'vortex' | 'launch';
  age: number;
  life: number;
  vel: THREE.Vector3;
  target: THREE.Vector3; // vortex focus
  baseAngle: number;
}

interface Shard {
  mesh: THREE.Mesh;
  vel: THREE.Vector3;
  spin: THREE.Vector3;
  age: number;
  life: number;
  active: boolean;
}

interface FallLetter {
  mesh: THREE.Mesh;
  body: CANNON.Body;
  born: number;
  fading: boolean;
  fadeStart: number;
}

export class EffectSystem {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private world: CANNON.World;

  // Shared particle cloud ------------------------------------------------
  private pCount: number;
  private pPos: Float32Array;
  private pCol: Float32Array;
  private pVel: Float32Array;
  private pLife: Float32Array;
  private pMax: Float32Array;
  private pGrav: Float32Array;
  private points: THREE.Points;
  private cursor = 0;

  // Shard pool -----------------------------------------------------------
  private shards: Shard[] = [];
  private shardGeo: THREE.BufferGeometry;

  // Animated letters (vortex / launch) ----------------------------------
  private anims: AnimLetter[] = [];

  // Physics fall letters -------------------------------------------------
  private fall: FallLetter[] = [];
  private fallCap: number;

  private surpriseTick = 0;
  private mobile: boolean;

  constructor(opts: {
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    world: CANNON.World;
    mobile: boolean;
  }) {
    this.scene = opts.scene;
    this.camera = opts.camera;
    this.world = opts.world;
    this.mobile = opts.mobile;

    this.pCount = opts.mobile ? 1200 : 3500;
    this.fallCap = opts.mobile ? 70 : 150;
    this.pPos = new Float32Array(this.pCount * 3);
    this.pCol = new Float32Array(this.pCount * 3);
    this.pVel = new Float32Array(this.pCount * 3);
    this.pLife = new Float32Array(this.pCount);
    this.pMax = new Float32Array(this.pCount);
    this.pGrav = new Float32Array(this.pCount);
    // Park everything far below until used.
    for (let i = 0; i < this.pCount; i++) this.pPos[i * 3 + 1] = -9999;

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.pPos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(this.pCol, 3));
    const mat = new THREE.PointsMaterial({
      size: opts.mobile ? 0.14 : 0.12,
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });
    this.points = new THREE.Points(geo, mat);
    this.points.frustumCulled = false;
    this.scene.add(this.points);

    this.shardGeo = new THREE.BoxGeometry(0.42, 0.42, 0.42);
  }

  /** Resolve a "surprise" pick deterministically per call. */
  private resolve(effect: EffectId): Exclude<EffectId, 'surprise'> {
    if (effect !== 'surprise') return effect;
    const pick = REAL_EFFECTS[this.surpriseTick % REAL_EFFECTS.length];
    this.surpriseTick++;
    return pick as Exclude<EffectId, 'surprise'>;
  }

  play(effect: EffectId, mesh: THREE.Mesh, opts: PlayOpts): void {
    const kind = this.resolve(effect);
    switch (kind) {
      case 'fall':
        return this.doFall(mesh, opts);
      case 'explode':
        return this.doExplode(mesh, opts);
      case 'disintegrate':
        return this.doDisintegrate(mesh, opts);
      case 'vortex':
        return this.doVortex(mesh);
      case 'launch':
        return this.doLaunch(mesh);
      case 'shatter':
        return this.doShatter(mesh, opts);
    }
  }

  // --- effects ----------------------------------------------------------

  private doFall(mesh: THREE.Mesh, opts: PlayOpts): void {
    const p = mesh.position;
    const body = new CANNON.Body({
      mass: 1,
      shape: new CANNON.Box(opts.half),
      position: new CANNON.Vec3(p.x, p.y, p.z),
      linearDamping: 0.02,
      angularDamping: 0.06,
      sleepSpeedLimit: 0.6,
      sleepTimeLimit: 1.0,
    });
    body.quaternion.set(mesh.quaternion.x, mesh.quaternion.y, mesh.quaternion.z, mesh.quaternion.w);
    body.velocity.set((Math.random() - 0.5) * 3, -3, 2 + Math.random() * 2);
    body.angularVelocity.set(
      (Math.random() - 0.5) * 6,
      (Math.random() - 0.5) * 6,
      (Math.random() - 0.5) * 6,
    );
    this.world.addBody(body);
    this.fall.push({ mesh, body, born: performance.now(), fading: false, fadeStart: 0 });
    this.capFall();
  }

  private doExplode(mesh: THREE.Mesh, opts: PlayOpts): void {
    const p = mesh.position;
    const n = this.mobile ? 22 : 44;
    for (let i = 0; i < n; i++) {
      const dir = randDir();
      const speed = 4 + Math.random() * 7;
      const c = Math.random() < 0.35 ? GREEN : opts.color;
      this.emit(p.x, p.y, p.z, dir.x * speed, dir.y * speed, dir.z * speed, c, 0.55 + Math.random() * 0.25, 9);
    }
    this.removeMesh(mesh);
  }

  private doDisintegrate(mesh: THREE.Mesh, opts: PlayOpts): void {
    const p = mesh.position;
    const half = opts.half;
    const n = this.mobile ? 26 : 52;
    for (let i = 0; i < n; i++) {
      // Sample from the letter's bounding volume so it reads as the glyph
      // crumbling in place.
      const ox = (Math.random() - 0.5) * half.x * 2;
      const oy = (Math.random() - 0.5) * half.y * 2;
      const oz = (Math.random() - 0.5) * half.z * 2;
      const drift = 0.8 + Math.random() * 1.6;
      this.emit(
        p.x + ox,
        p.y + oy,
        p.z + oz,
        (Math.random() - 0.5) * 1.2,
        drift,
        (Math.random() - 0.5) * 1.2,
        ASH,
        1.1 + Math.random() * 0.5,
        -1.5, // gentle upward buoyancy
      );
    }
    this.removeMesh(mesh);
  }

  private doVortex(mesh: THREE.Mesh): void {
    const target = this.camera.position.clone();
    const rel = mesh.position.clone().sub(target);
    this.anims.push({
      mesh,
      kind: 'vortex',
      age: 0,
      life: 0.9,
      vel: new THREE.Vector3(),
      target,
      baseAngle: Math.atan2(rel.x, rel.z),
    });
  }

  private doLaunch(mesh: THREE.Mesh): void {
    this.anims.push({
      mesh,
      kind: 'launch',
      age: 0,
      life: 0.85,
      vel: new THREE.Vector3((Math.random() - 0.5) * 2, 20, (Math.random() - 0.5) * 2),
      target: new THREE.Vector3(),
      baseAngle: 0,
    });
  }

  private doShatter(mesh: THREE.Mesh, opts: PlayOpts): void {
    const p = mesh.position;
    const n = 5;
    for (let i = 0; i < n; i++) {
      const s = this.acquireShard();
      const m = s.mesh;
      const mat = m.material as THREE.MeshStandardMaterial;
      mat.color.copy(opts.color);
      mat.opacity = 1;
      m.visible = true;
      m.position.set(p.x + (Math.random() - 0.5) * 0.8, p.y + (Math.random() - 0.5) * 0.8, p.z);
      m.scale.setScalar(0.6 + Math.random() * 0.6);
      m.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      const dir = randDir();
      s.vel.set(dir.x * 6, 3 + Math.random() * 5, dir.z * 6);
      s.spin.set((Math.random() - 0.5) * 12, (Math.random() - 0.5) * 12, (Math.random() - 0.5) * 12);
      s.age = 0;
      s.life = 1.1;
      s.active = true;
    }
    this.removeMesh(mesh);
  }

  // --- particle pool ----------------------------------------------------

  private emit(
    x: number,
    y: number,
    z: number,
    vx: number,
    vy: number,
    vz: number,
    color: THREE.Color,
    life: number,
    grav: number,
  ): void {
    const i = this.cursor;
    this.cursor = (this.cursor + 1) % this.pCount;
    const i3 = i * 3;
    this.pPos[i3] = x;
    this.pPos[i3 + 1] = y;
    this.pPos[i3 + 2] = z;
    this.pVel[i3] = vx;
    this.pVel[i3 + 1] = vy;
    this.pVel[i3 + 2] = vz;
    this.pCol[i3] = color.r;
    this.pCol[i3 + 1] = color.g;
    this.pCol[i3 + 2] = color.b;
    this.pLife[i] = life;
    this.pMax[i] = life;
    this.pGrav[i] = grav;
  }

  // --- shard pool -------------------------------------------------------

  private acquireShard(): Shard {
    for (const s of this.shards) if (!s.active) return s;
    const mat = new THREE.MeshStandardMaterial({
      color: WHITE.clone(),
      roughness: 0.5,
      metalness: 0.05,
      emissive: WHITE.clone(),
      emissiveIntensity: 0.12,
      transparent: true,
      opacity: 1,
    });
    const mesh = new THREE.Mesh(this.shardGeo, mat);
    mesh.castShadow = true;
    this.scene.add(mesh);
    const s: Shard = {
      mesh,
      vel: new THREE.Vector3(),
      spin: new THREE.Vector3(),
      age: 0,
      life: 0,
      active: false,
    };
    this.shards.push(s);
    return s;
  }

  // --- per-frame update -------------------------------------------------

  update(dt: number): void {
    this.stepParticles(dt);
    this.stepShards(dt);
    this.stepAnims(dt);
    this.stepFall(dt);
  }

  private stepParticles(dt: number): void {
    let dirty = false;
    for (let i = 0; i < this.pCount; i++) {
      const l = this.pLife[i];
      if (l <= 0) continue;
      dirty = true;
      const nl = l - dt;
      const i3 = i * 3;
      if (nl <= 0) {
        this.pLife[i] = 0;
        this.pPos[i3 + 1] = -9999;
        continue;
      }
      this.pLife[i] = nl;
      this.pVel[i3 + 1] -= this.pGrav[i] * dt;
      this.pPos[i3] += this.pVel[i3] * dt;
      this.pPos[i3 + 1] += this.pVel[i3 + 1] * dt;
      this.pPos[i3 + 2] += this.pVel[i3 + 2] * dt;
      // Fade toward black (near-black background swallows it).
      const k = nl / this.pMax[i];
      this.pCol[i3] *= 0.94 + k * 0.06;
      this.pCol[i3 + 1] *= 0.94 + k * 0.06;
      this.pCol[i3 + 2] *= 0.94 + k * 0.06;
    }
    if (dirty) {
      (this.points.geometry.getAttribute('position') as THREE.BufferAttribute).needsUpdate = true;
      (this.points.geometry.getAttribute('color') as THREE.BufferAttribute).needsUpdate = true;
    }
  }

  private stepShards(dt: number): void {
    for (const s of this.shards) {
      if (!s.active) continue;
      s.age += dt;
      s.vel.y -= 26 * dt;
      s.mesh.position.addScaledVector(s.vel, dt);
      s.mesh.rotation.x += s.spin.x * dt;
      s.mesh.rotation.y += s.spin.y * dt;
      s.mesh.rotation.z += s.spin.z * dt;
      const t = s.age / s.life;
      const mat = s.mesh.material as THREE.MeshStandardMaterial;
      mat.opacity = Math.max(0, 1 - t);
      if (t >= 1 || s.mesh.position.y < -6) {
        s.active = false;
        s.mesh.visible = false;
      }
    }
  }

  private stepAnims(dt: number): void {
    for (let i = this.anims.length - 1; i >= 0; i--) {
      const a = this.anims[i];
      a.age += dt;
      const t = a.age / a.life;
      const mat = a.mesh.material as THREE.MeshStandardMaterial;
      if (a.kind === 'launch') {
        a.vel.y += 8 * dt; // accelerate skyward
        a.mesh.position.addScaledVector(a.vel, dt);
        a.mesh.rotation.z += dt * 4;
        // Green trail.
        const p = a.mesh.position;
        this.emit(p.x, p.y - 0.6, p.z, (Math.random() - 0.5) * 0.6, -1, (Math.random() - 0.5) * 0.6, GREEN, 0.4, 2);
        mat.opacity = Math.max(0, 1 - t * t);
      } else {
        // vortex: spiral inward toward the focus point and shrink.
        const angle = a.baseAngle + t * 14;
        const radius = (1 - t) * a.mesh.position.distanceTo(a.target) * 0 + (1 - t) * 8;
        const focus = a.target;
        a.mesh.position.set(
          focus.x + Math.sin(angle) * radius,
          THREE.MathUtils.lerp(a.mesh.position.y, focus.y, 0.12) + Math.sin(t * 20) * 0.2,
          focus.z + Math.cos(angle) * radius,
        );
        a.mesh.rotation.y += dt * 12;
        a.mesh.scale.setScalar(Math.max(0.01, 1 - t));
        mat.opacity = Math.max(0, 1 - t);
      }
      if (t >= 1) {
        this.removeMesh(a.mesh);
        this.anims.splice(i, 1);
      }
    }
  }

  private stepFall(dt: number): void {
    if (this.fall.length === 0) return;
    const now = performance.now();
    for (let i = this.fall.length - 1; i >= 0; i--) {
      const f = this.fall[i];
      const p = f.body.position;
      f.mesh.position.set(p.x, p.y, p.z);
      f.mesh.quaternion.set(
        f.body.quaternion.x,
        f.body.quaternion.y,
        f.body.quaternion.z,
        f.body.quaternion.w,
      );
      if (f.fading) {
        const k = (now - f.fadeStart) / 600;
        const mat = f.mesh.material as THREE.MeshStandardMaterial;
        mat.opacity = Math.max(0, 1 - k);
        f.mesh.scale.setScalar(Math.max(0.001, 1 - k * 0.4));
        if (k >= 1) {
          this.disposeFall(f);
          this.fall.splice(i, 1);
        }
      } else if (p.y < -8) {
        this.disposeFall(f);
        this.fall.splice(i, 1);
      }
    }
    void dt;
  }

  private capFall(): void {
    const live = this.fall.filter((f) => !f.fading);
    const excess = live.length - this.fallCap;
    for (let i = 0; i < excess; i++) {
      live[i].fading = true;
      live[i].fadeStart = performance.now();
    }
  }

  private disposeFall(f: FallLetter): void {
    this.scene.remove(f.mesh);
    (f.mesh.material as THREE.Material).dispose();
    this.world.removeBody(f.body);
  }

  private removeMesh(mesh: THREE.Mesh): void {
    if (mesh.parent) mesh.parent.remove(mesh);
    (mesh.material as THREE.Material).dispose();
    // Geometry is shared/cached by the caller — never dispose it here.
  }

  /** Rain a batch of settled letters for the results backdrop. */
  rain(mesh: THREE.Mesh, opts: PlayOpts): void {
    this.doFall(mesh, opts);
  }

  /** One restrained outward particle burst — the new-personal-best moment. */
  burst(x: number, y: number, z: number, color: THREE.Color): void {
    const n = this.mobile ? 28 : 54;
    for (let i = 0; i < n; i++) {
      const dir = randDir();
      const speed = 5 + Math.random() * 6;
      this.emit(x, y, z, dir.x * speed, dir.y * speed * 0.8, dir.z * speed, color, 0.7 + Math.random() * 0.3, 5);
    }
  }

  /** Number of live physics bodies (for the debug handle). */
  get fallCount(): number {
    return this.fall.filter((f) => !f.fading).length;
  }

  /** Wipe everything — used on restart. */
  reset(): void {
    for (const f of this.fall) this.disposeFall(f);
    this.fall.length = 0;
    for (const a of this.anims) this.removeMesh(a.mesh);
    this.anims.length = 0;
    for (const s of this.shards) {
      s.active = false;
      s.mesh.visible = false;
    }
    for (let i = 0; i < this.pCount; i++) {
      this.pLife[i] = 0;
      this.pPos[i * 3 + 1] = -9999;
    }
    (this.points.geometry.getAttribute('position') as THREE.BufferAttribute).needsUpdate = true;
  }
}

function randDir(): THREE.Vector3 {
  const u = Math.random() * 2 - 1;
  const th = Math.random() * Math.PI * 2;
  const r = Math.sqrt(1 - u * u);
  return new THREE.Vector3(r * Math.cos(th), Math.abs(u) * 0.7 + 0.15, r * Math.sin(th));
}
