import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  plugins: [react()],
  // Allow overriding the base path so preview builds can live under
  // a subdirectory like /suu-pizza-map/pr-42/
  base: process.env.BASE_PATH ?? '/suu-pizza-map/',
})
