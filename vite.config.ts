import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/mcarpets/', // Using your repository name
  resolve: {
    alias: {
      '@': './src',
    },
  },
  build: {
    // Skip type checking during build for better performance
    sourcemap: false,
    commonjsOptions: {
      sourceMap: false
    }
  },
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  }
}) 