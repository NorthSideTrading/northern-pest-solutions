import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  base: '/',
  plugins: [
    react()
  ],
  resolve: { 
    alias: { '@': path.resolve(__dirname, 'src') }
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'),
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          vendor: ['@radix-ui/react-accordion', '@radix-ui/react-dialog', 'lucide-react'],
          router: ['wouter'],
          query: ['@tanstack/react-query']
        }
      }
    },
    copyPublicDir: true
  },
  publicDir: '../public'
});