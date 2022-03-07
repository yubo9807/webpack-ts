import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '~': resolve(__dirname, './')
    }
  },
  build: {
    outDir: 'dist',
    lib: {
      name: 'vite-ts',
      entry: resolve(__dirname, './src/index.ts'),
      fileName: 'index',
      formats: ['cjs'],
    }
  },
})