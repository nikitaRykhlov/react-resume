import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Keep output in `build/` so the existing gh-pages deploy script works unchanged.
    outDir: 'build',
  },
})
