import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/mount-icons.jsx'),
      name: 'HumanaIcons',
      formats: ['iife'],
      fileName: () => 'icons.bundle.js',
    },
    rollupOptions: {
      output: {
        extend: true,
        inlineDynamicImports: true,
      },
    },
    outDir: 'js',
    emptyOutDir: false,
  },
});
