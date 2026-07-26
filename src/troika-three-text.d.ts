// Minimal ambient types for troika-three-text (the package ships .d.ts under
// dist/types but declares no "types" entry point, so TS can't resolve them).
// Only the surface we use is declared here.
declare module 'troika-three-text' {
  import { Mesh, Color } from 'three';

  export class Text extends Mesh {
    text: string;
    font: string | null;
    fontSize: number;
    anchorX: number | string;
    anchorY: number | string;
    color: number | string | Color;
    fillOpacity: number;
    letterSpacing: number;
    outlineWidth: number | string;
    outlineColor: number | string | Color;
    outlineOpacity: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    material: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    readonly textRenderInfo: any;
    sync(callback?: () => void): void;
    dispose(): void;
  }

  export function preloadFont(
    options: { font: string; characters?: string },
    callback: () => void,
  ): void;
}
