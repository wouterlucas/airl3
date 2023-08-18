import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
// import devtools from 'solid-devtools/vite';

export default defineConfig({
  plugins: [solidPlugin({
    solid: {
      moduleName: "@lightningjs/solid-lightning3",
      generate: 'universal'
    }
  })],
  server: {
    port: 3000,
    hmr: false
  },
  build: {
    target: 'esnext',
  },
});
