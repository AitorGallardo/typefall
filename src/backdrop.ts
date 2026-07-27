// DOM/SVG backdrop layers that sit BEHIND the (now transparent) WebGL canvas.
// One controller owns three whisper-quiet layers and shows exactly the one the
// active view wants:
//   • crawl      → an SVG starfield: ~90 tiny dotted stars in two parallax
//                  groups, cold-white with a few faint gold, slow staggered
//                  CSS twinkle. Also owns the hyperspace-jump loss animation
//                  (dots fade, radial light-streaks draw out from center, the
//                  field rushes past, one faint gold flash).
//   • paragraph  → an ultra-faint radial vignette + a dozen drifting dust motes.
//   • stream     → a depth haze toward the vanishing dark + a few gold particles.
//
// Everything is CSS-animated (so it keeps moving even while rAF is suspended in
// an automation tab) and deliberately below the noise floor of the text.

const SVGNS = 'http://www.w3.org/2000/svg';

export type BackdropView = 'crawl' | 'paragraph' | 'stream';

export class Backdrop {
  readonly root: HTMLDivElement;
  private stars: SVGSVGElement;
  private parA: SVGGElement;
  private parB: SVGGElement;
  private streaks: SVGGElement;
  private para: HTMLDivElement;
  private stream: HTMLDivElement;
  private flash: HTMLDivElement;
  private starPts: { x: number; y: number }[] = [];
  private view: BackdropView = 'crawl';

  constructor(host: HTMLElement = document.body, isTouch = false) {
    this.root = document.createElement('div');
    this.root.id = 'backdrop';

    // --- starfield (crawl) ---
    this.stars = document.createElementNS(SVGNS, 'svg') as SVGSVGElement;
    this.stars.setAttribute('class', 'tf-stars');
    this.stars.setAttribute('viewBox', '0 0 1000 1000');
    this.stars.setAttribute('preserveAspectRatio', 'xMidYMid slice');

    // A radial gradient for the streaks: bright at the outer end, nothing at the
    // convergence point — so the jump reads as light stretching past the viewer.
    const defs = document.createElementNS(SVGNS, 'defs');
    defs.innerHTML =
      '<linearGradient id="tf-streak-grad" x1="0" y1="0" x2="1" y2="0">' +
      '<stop offset="0" stop-color="#eef3f8" stop-opacity="0"/>' +
      '<stop offset="0.7" stop-color="#eef3f8" stop-opacity="0.85"/>' +
      '<stop offset="1" stop-color="#ffffff" stop-opacity="1"/>' +
      '</linearGradient>';
    this.stars.appendChild(defs);

    this.parA = document.createElementNS(SVGNS, 'g') as SVGGElement;
    this.parA.setAttribute('class', 'tf-parA');
    this.parB = document.createElementNS(SVGNS, 'g') as SVGGElement;
    this.parB.setAttribute('class', 'tf-parB');
    this.streaks = document.createElementNS(SVGNS, 'g') as SVGGElement;
    this.streaks.setAttribute('class', 'tf-streaks');

    const n = isTouch ? 72 : 96;
    for (let i = 0; i < n; i++) {
      const x = Math.random() * 1000;
      const y = Math.random() * 1000;
      this.starPts.push({ x, y });
      // Three subtle brightness/size tiers. Most are cold-white; a handful gold.
      const tier = Math.random();
      const gold = Math.random() < 0.12;
      let r: number;
      let lo: number;
      let hi: number;
      if (tier < 0.6) {
        r = 0.5 + Math.random() * 0.4; // faint, tiny
        lo = 0.15;
        hi = 0.5;
      } else if (tier < 0.9) {
        r = 0.9 + Math.random() * 0.4; // mid
        lo = 0.25;
        hi = 0.75;
      } else {
        r = 1.1 + Math.random() * 0.4; // brightest, few
        lo = 0.35;
        hi = 0.9;
      }
      const c = document.createElementNS(SVGNS, 'circle');
      c.setAttribute('class', 'tf-star');
      c.setAttribute('cx', x.toFixed(1));
      c.setAttribute('cy', y.toFixed(1));
      c.setAttribute('r', r.toFixed(2));
      c.setAttribute('fill', gold ? '#d9a743' : '#e9eef5');
      const dur = (3 + Math.random() * 4).toFixed(2); // 3–7s, no synced pulsing
      const delay = (-Math.random() * 7).toFixed(2);
      c.setAttribute(
        'style',
        `--lo:${lo};--hi:${gold ? Math.min(hi, 0.6) : hi};--d:${dur}s;--delay:${delay}s`,
      );
      // Split across the two parallax groups.
      (i % 2 === 0 ? this.parA : this.parB).appendChild(c);
    }

    this.stars.append(this.parA, this.parB, this.streaks);

    // --- paragraph: vignette + drifting dust motes ---
    this.para = document.createElement('div');
    this.para.className = 'tf-para';
    const vignette = document.createElement('div');
    vignette.className = 'tf-vignette';
    this.para.appendChild(vignette);
    const paraMotes = isTouch ? 8 : 11;
    for (let i = 0; i < paraMotes; i++) {
      const m = document.createElement('div');
      m.className = 'tf-mote';
      const size = (2 + Math.random() * 4).toFixed(1);
      const dur = (26 + Math.random() * 22).toFixed(1);
      m.setAttribute(
        'style',
        `left:${(Math.random() * 100).toFixed(1)}%;top:${(Math.random() * 100).toFixed(1)}%;` +
          `width:${size}px;height:${size}px;opacity:${(0.04 + Math.random() * 0.04).toFixed(3)};` +
          `--fd:${dur}s;--fdelay:${(-Math.random() * 40).toFixed(1)}s;` +
          `--fx:${(Math.random() * 40 - 20).toFixed(0)}px;--fy:${(-30 - Math.random() * 40).toFixed(0)}px`,
      );
      this.para.appendChild(m);
    }

    // --- stream: depth haze + a few gold particles ---
    this.stream = document.createElement('div');
    this.stream.className = 'tf-stream';
    const haze = document.createElement('div');
    haze.className = 'tf-haze';
    this.stream.appendChild(haze);
    const streamMotes = isTouch ? 5 : 7;
    for (let i = 0; i < streamMotes; i++) {
      const m = document.createElement('div');
      m.className = 'tf-mote tf-mote-gold';
      const size = (2 + Math.random() * 3).toFixed(1);
      const dur = (22 + Math.random() * 18).toFixed(1);
      m.setAttribute(
        'style',
        `left:${(Math.random() * 100).toFixed(1)}%;top:${(30 + Math.random() * 55).toFixed(1)}%;` +
          `width:${size}px;height:${size}px;opacity:${(0.05 + Math.random() * 0.04).toFixed(3)};` +
          `--fd:${dur}s;--fdelay:${(-Math.random() * 30).toFixed(1)}s;` +
          `--fx:${(Math.random() * 30 - 15).toFixed(0)}px;--fy:${(-40 - Math.random() * 50).toFixed(0)}px`,
      );
      this.stream.appendChild(m);
    }

    // One faint gold flash for the hyperspace jump.
    this.flash = document.createElement('div');
    this.flash.className = 'tf-flash';

    this.root.append(this.stars, this.para, this.stream, this.flash);
    host.appendChild(this.root);
    this.setView('crawl');
  }

  setView(view: BackdropView): void {
    this.view = view;
    this.root.setAttribute('data-view', view);
    this.reset();
  }

  /** Clear any in-flight hyperspace state (called on restart / view change). */
  reset(): void {
    this.stars.classList.remove('jump');
    this.root.classList.remove('flash');
    this.streaks.replaceChildren();
  }

  /**
   * The hyperspace-jump loss animation (crawl only). Dots fade, each becomes a
   * radial light-streak drawn out from the center past the viewer, the whole
   * field rushes outward, and one faint gold flash fires. Pure CSS so it plays
   * to completion regardless of the frame clock. ~820ms.
   */
  hyperspace(): void {
    if (this.view !== 'crawl') return;
    this.streaks.replaceChildren();
    const cx = 500;
    const cy = 500;
    const maxDist = Math.hypot(500, 500);
    for (const p of this.starPts) {
      let dx = p.x - cx;
      let dy = p.y - cy;
      let d = Math.hypot(dx, dy) || 0.001;
      dx /= d;
      dy /= d;
      // Line runs from the convergence point out through the star and well past
      // the edge, so the drawn streak reads as light stretching past the viewer.
      const far = 1500;
      const x2 = cx + dx * far;
      const y2 = cy + dy * far;
      const len = far;
      const line = document.createElementNS(SVGNS, 'line');
      line.setAttribute('class', 'tf-streak');
      line.setAttribute('x1', cx.toFixed(1));
      line.setAttribute('y1', cy.toFixed(1));
      line.setAttribute('x2', x2.toFixed(1));
      line.setAttribute('y2', y2.toFixed(1));
      // Stagger by distance: stars nearer the center streak a touch sooner.
      const sd = ((d / maxDist) * 110).toFixed(0);
      const sw = (0.8 + Math.random() * 2.2).toFixed(2);
      line.setAttribute('style', `--len:${len};--sd:${sd}ms;--sw:${sw}`);
      this.streaks.appendChild(line);
    }
    this.stars.classList.add('jump');
    this.root.classList.add('flash');
  }
}
