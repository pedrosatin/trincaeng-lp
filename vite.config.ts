import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    target: ['es2020', 'chrome96', 'edge96', 'firefox94', 'safari15'],
    cssTarget: ['chrome96', 'edge96', 'firefox94', 'safari15'],
  },
});
