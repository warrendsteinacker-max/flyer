// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: '/flyer/', // Replace 'flyer' with your actual repository name

// })



import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/flyer/', // Your GitHub repo name
  server: {
    port: 3000,      // Changes the listening port
    host: true,      // Allows network access (Tailscale)
    strictPort: true // Prevents Vite from switching to 3001 if 3000 is busy
  }
})
