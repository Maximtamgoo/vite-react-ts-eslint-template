import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"', // for example, lint .ts & .tsx
      }
    }),
    react()
  ],
  server: {
    open: true,
    port: 3000,
    strictPort: true,
    proxy: {
      '/api': 'http://localhost:5000'
    }
  }
})
