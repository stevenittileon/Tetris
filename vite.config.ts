import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
// NOTE: Update the base path below if your repository name changes.
export default defineConfig({
  base: '/Tetris/',
  plugins: [react(), eslint()],
});
