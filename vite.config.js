import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  // Si se compila en GitHub Actions, usa el subdirectorio.
  // En Local o Vercel, usa la raíz.
  base: process.env.GITHUB_ACTIONS === "true" ? "/gows-booking-app/" : "/",
});
