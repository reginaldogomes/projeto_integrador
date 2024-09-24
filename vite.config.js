import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  root: 'src',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    historyApiFallback: true,
  },
  build: {
    outDir: '../dist',
  },
})
