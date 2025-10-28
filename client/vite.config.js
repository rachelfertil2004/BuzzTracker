import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current directory and its parents
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    base: '/',
    plugins: [react()],
    server: {
      port: 5173,
      proxy: {
        '/api': {
          target: 'http://localhost:3001',
          changeOrigin: true
        }
      }
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      emptyOutDir: true,
      sourcemap: true
    },
    define: {
      'process.env': process.env.NODE_ENV === 'production' 
        ? env 
        : { ...env, VITE_API_URL: env.VITE_API_URL || 'http://localhost:3001' }
    }
  }
})
