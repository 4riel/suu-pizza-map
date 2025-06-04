import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// allow overriding base path when building previews
const base = process.env.BASE_PATH || '/suu-pizza-map/'

// https://vite.dev/config/
export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        landing: resolve(__dirname, 'src/landing.html'),
      },
    },
  },
  plugins: [react()],
  base,
})
