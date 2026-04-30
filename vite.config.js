import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    plugins: [
      tailwindcss(),
      react(),
    ],
    // Si estamos en GitHub Pages (usualmente detectado por una variable de entorno o simplemente para prod de GH)
    // Pero para que funcione en VERCEL y LOCAL, el base debe ser '/'
    // Solo usa '/gows-booking-app/' si vas a desplegar específicamente en GitHub Pages.
    base: process.env.NODE_ENV === 'production' && !process.env.VERCEL ? '/gows-booking-app/' : '/',
  }
})
