import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    hmr: false,
    watch: null,

    proxy: {
      "/image": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
      "/todos": {
        target: "http://todo-backend-svc:2345",
        changeOrigin: true,
      },
    },
  },
});
