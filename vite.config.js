import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Split CSS per async chunk
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // Separate heavy dependencies into their own chunks
        manualChunks: {
          gsap: ['gsap', '@gsap/react'],
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
})
