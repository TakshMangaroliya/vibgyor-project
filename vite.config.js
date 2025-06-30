// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "./",
  
  build: {
    rollupOptions: {
      external: ['gsap'], // 👈 mark gsap as external
    },
  },
});
