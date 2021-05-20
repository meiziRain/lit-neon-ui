import { defineConfig } from 'vite'
import litcss from 'rollup-plugin-postcss-lit';
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3010,
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es']
    },
    rollupOptions: {
      external: /^lit-element/
    }
  },
  plugins: [
    {
      ...litcss(),
      enforce: 'post'
    }
  ]
})