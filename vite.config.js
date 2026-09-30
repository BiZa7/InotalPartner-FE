import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Pastikan ini tetap ada

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss() // Tailwind tetap aktif
  ],
  server: {
    port: 5173,
    proxy: {
      // Proxy agar FE bisa memanggil /api ke http://localhost:8080
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
      '/uploads': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
})