import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/ReactPortfolio/', // ✅ Add this line (must match your repo name)
  plugins: [react()],
})
