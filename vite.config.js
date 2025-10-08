/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import tailwindcss from "@tailwindcss/vite"
import preact from '@preact/preset-vite'
import path from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
    preact(),
  ],
  build: {
    target: 'ES2020',
    outDir: 'dist',
    assetsDir: '.'
  },
  server: {
    port: 8700,
    strictPort: true,
  },
  base: './',
  test: {
    include: ["src/**/*.test.*"],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
