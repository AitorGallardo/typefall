// Feature detection for the HTML-in-canvas API (Chrome origin trial, 2025-2026).
// Ported from cardstock — the API surface is still moving: the draw call is
// either `drawElement` or `drawElementImage`, and layout is opted in via a
// `layoutsubtree` attribute (or a `layoutSubtree()` method). We detect
// defensively and never assume one exact shape, and we never throw to callers.
//
// In typefall this gates the html-in-canvas results panel: when the API exists
// we paint the live HTML results overlay onto a floating 3D panel via
// drawElement; interaction still flows through the real (invisible) DOM overlay,
// exactly like cardstock's source-of-truth pattern. Where the API is absent, the
// DOM overlay is shown unchanged.

export interface CanvasSupport {
  supported: boolean;
  drawMethod: 'drawElement' | 'drawElementImage' | null;
  layoutAttr: boolean;
  layoutMethod: boolean;
}

export function detectHtmlInCanvas(): CanvasSupport {
  const result: CanvasSupport = {
    supported: false,
    drawMethod: null,
    layoutAttr: false,
    layoutMethod: false,
  };

  try {
    const ctxProto = (window as any).CanvasRenderingContext2D?.prototype;
    const canvasProto = (window as any).HTMLCanvasElement?.prototype;
    if (!ctxProto || !canvasProto) return result;

    if ('drawElement' in ctxProto) result.drawMethod = 'drawElement';
    else if ('drawElementImage' in ctxProto) result.drawMethod = 'drawElementImage';

    result.layoutAttr = 'layoutsubtree' in canvasProto;
    result.layoutMethod = typeof canvasProto.layoutSubtree === 'function';

    // Support is claimed only when a draw method exists — that is the
    // load-bearing part; the layout opt-in is applied best-effort at runtime.
    result.supported = result.drawMethod !== null;
  } catch {
    return result;
  }

  return result;
}

export function engineLabel(support: CanvasSupport): string {
  return support.supported && support.drawMethod ? support.drawMethod : 'dom';
}
