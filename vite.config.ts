import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// allow overriding base path when building previews
const base = process.env.BASE_PATH || '/suu-pizza-map/'

// https://vite.dev/config/
export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  plugins: [react()],
  base,
})
