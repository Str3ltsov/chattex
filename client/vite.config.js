import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import pluginRewriteAll from 'vite-plugin-rewrite-all'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return ({
    plugins: [react(), pluginRewriteAll()],
    server: {
      port: env.VITE_APP_PORT,
      proxy: {
        '/api': {
          target: `http://${env.VITE_SERVER_APP_URL}:${env.VITE_SERVER_APP_PORT}`,
          changeOrigin: true
        }
      }
    }
  })
})