import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',  // Ye sabse zaroori hai agar folder 'it' hai
})