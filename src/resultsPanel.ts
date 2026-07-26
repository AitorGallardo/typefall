import * as THREE from 'three';
import { detectHtmlInCanvas, type CanvasSupport } from './htmlCanvas';

// HTML-in-canvas results panel — the progressive-enhancement tech showcase.
//
// Where Chrome's html-in-canvas API exists, the live HTML results overlay is
// rasterised every frame via drawElement into an offscreen 2D canvas, wrapped in
// a THREE.CanvasTexture, and mapped onto a floating 3D panel in the scene (slight
// tilt + subtle drift). Interaction still flows through the *real* DOM overlay,
// which is left invisible-but-interactive on top — cardstock's source-of-truth
// pattern: pixels come from drawElement, input keeps flowing through the DOM.
//
// Where the API is absent (everywhere today, including local dev), tryShow()
// returns false and the caller leaves the ordinary DOM overlay visible. Every
// canvas call is guarded — any surprise from the still-moving API silently falls
// back to the DOM and nothing the visitor sees ever breaks.

// Testable seam: paint a DOM element into a 2D-context-like object via the
// detected draw method. Kept tiny and pure so the drawElement path can be
// mock-verified by recording calls on a stub ctx (see window.typefall).
export function paintElementToCtx(
  ctx: any,
  method: 'drawElement' | 'drawElementImage',
  el: HTMLElement,
  w: number,
  h: number,
): void {
  ctx.clearRect(0, 0, w, h);
  ctx[method](el, 0, 0);
}

export class ResultsPanel {
  readonly support: CanvasSupport;
  active = false;
  private canvas: HTMLCanvasElement | null = null;
  private ctx: any = null;
  private method: 'drawElement' | 'drawElementImage' = 'drawElement';
  private texture: THREE.CanvasTexture | null = null;
  private mesh: THREE.Mesh | null = null;
  private drift = 0;

  constructor(
    private scene: THREE.Scene,
    private el: HTMLElement,
    support?: CanvasSupport,
  ) {
    this.support = support ?? detectHtmlInCanvas();
  }

  /** Footer copy for the results screen: the draw method, or 'dom'. */
  get label(): string {
    return this.active && this.support.drawMethod ? this.support.drawMethod : 'dom';
  }

  /**
   * Try to raise the floating panel. Returns true only if the drawElement path
   * took over — in which case the caller should hide the DOM overlay's *visuals*
   * (keeping it interactive) so the panel is the sole picture.
   */
  tryShow(): boolean {
    if (!this.support.supported || !this.support.drawMethod) return false;
    try {
      this.method = this.support.drawMethod;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.max(1, this.el.clientWidth || window.innerWidth);
      const h = Math.max(1, this.el.clientHeight || window.innerHeight);
      const canvas = document.createElement('canvas');
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      if (this.support.layoutAttr) canvas.setAttribute('layoutsubtree', '');
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('no 2d context');
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Probe the (still-moving) draw signature once — throwing here bails to DOM.
      paintElementToCtx(ctx, this.method, this.el, w, h);

      const texture = new THREE.CanvasTexture(canvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.minFilter = THREE.LinearFilter;
      const aspect = w / h;
      const panelH = 9;
      const geo = new THREE.PlaneGeometry(panelH * aspect, panelH);
      const mat = new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthWrite: false });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.renderOrder = 20;
      this.scene.add(mesh);

      this.canvas = canvas;
      this.ctx = ctx;
      this.texture = texture;
      this.mesh = mesh;
      this.active = true;
      return true;
    } catch {
      this.hide();
      return false;
    }
  }

  /** Repaint the overlay into the texture and drift the panel gently. */
  drawFrame(camera: THREE.PerspectiveCamera, dt: number): void {
    if (!this.active || !this.ctx || !this.canvas || !this.mesh || !this.texture) return;
    try {
      const w = this.el.clientWidth || window.innerWidth;
      const h = this.el.clientHeight || window.innerHeight;
      paintElementToCtx(this.ctx, this.method, this.el, w, h);
      this.texture.needsUpdate = true;

      // Float the panel a short way in front of the camera with a slow drift and
      // a slight tilt so it reads as a physical card, not a HUD.
      this.drift += dt;
      const forward = new THREE.Vector3();
      camera.getWorldDirection(forward);
      const pos = camera.position.clone().addScaledVector(forward, 15);
      pos.x += Math.sin(this.drift * 0.5) * 0.4;
      pos.y += Math.sin(this.drift * 0.37) * 0.25;
      this.mesh.position.copy(pos);
      this.mesh.quaternion.copy(camera.quaternion);
      this.mesh.rotation.z += Math.sin(this.drift * 0.3) * 0.02;
      this.mesh.rotation.x += -0.05 + Math.sin(this.drift * 0.4) * 0.015;
    } catch {
      this.hide();
    }
  }

  hide(): void {
    this.active = false;
    if (this.mesh) {
      this.scene.remove(this.mesh);
      this.mesh.geometry.dispose();
      (this.mesh.material as THREE.Material).dispose();
    }
    this.texture?.dispose();
    this.mesh = null;
    this.texture = null;
    this.ctx = null;
    this.canvas = null;
  }
}
