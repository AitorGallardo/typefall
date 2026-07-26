import { defineConfig } from 'vite';

export default defineConfig({
  // Served from the typefall repo's GitHub Pages at aitorgallardo.github.io/typefall/.
  base: '/typefall/',
  build: {
    target: 'es2020',
  },
});
