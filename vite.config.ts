import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
    host: true
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split MUI and Framer Motion into separate files to reduce main bundle size
          vendor: ['react', 'react-dom'],
          mui: ['@mui/material', '@mui/icons-material'],
          animations: ['framer-motion'],
        },
      },
    },
    // Optional: Increase the limit to 1000kb if you don't want to see the warning
    chunkSizeWarningLimit: 1000, 
  },
})
