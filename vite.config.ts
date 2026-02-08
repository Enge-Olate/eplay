///<reference types="vitest/config" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    host: true
  },
  test:{
    environment: 'jsdom',
    globals: true,
    css: true,
    coverage:{
      provider:'v8',
      reporter:['html', 'text']
    },
    setupFiles: "./src/setup.ts"
  }
})
