
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
    },
    cors: true,
    allowedHosts: [
      '6aca1f71-5ef5-4bff-bff5-5907ead25b22-00-qvy4dgaklyoi.janeway.replit.dev',
      'qvy4dgaklyoi.janeway.replit.dev'
    ]
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});
