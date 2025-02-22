
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    host: "0.0.0.0",
    port: 8080,
    strictPort: true,
    hmr: {
      clientPort: 443,
      host: process.env.REPL_SLUG + "." + process.env.REPL_OWNER + ".repl.co",
      protocol: "wss",
    }
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});
