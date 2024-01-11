import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/naturlig-guide-till-graviditetsdiabetes/',
  plugins: [react()],
  server: {
    host: true,
    port: 4000,
  },
})
