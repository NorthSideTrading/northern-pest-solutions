import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    sitemap({ hostname: "https://www.mainepestpros.com" })
  ],
  resolve: { 
    alias: { '@': path.resolve(__dirname, 'src') }
  },
  build: {
    outDir: 'dist',
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
    }
  },
  publicDir: '../public'
});