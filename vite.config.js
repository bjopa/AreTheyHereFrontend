import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "https://localhost:7175",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    outDir: "build",
  },
});
