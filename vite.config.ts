import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// GitHub Pages project site: set VITE_BASE_PATH=/repo-name/ when building (see .github/workflows).
// Local dev: leave unset → base is "/".
const base = process.env.VITE_BASE_PATH?.replace(/\/?$/, '/') || '/'

export default defineConfig({
  base,
  plugins: [vue()],
})
