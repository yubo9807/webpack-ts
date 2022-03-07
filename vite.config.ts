import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    'process.env.APP_ENV': JSON.stringify(process.env.APP_ENV)
  },
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
      fileName: module => {
        console.log(module);
        return 'index.js'
      },
      formats: ['cjs'],
    }
  },
})