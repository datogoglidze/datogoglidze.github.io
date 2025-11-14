import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { copyFileSync } from "fs";

// Plugin to copy index.html to 404.html for GitHub Pages SPA routing
const copy404Plugin = () => ({
  name: "copy-404",
  closeBundle() {
    const distPath = path.resolve(__dirname, "dist");
    const indexHtml = path.join(distPath, "index.html");
    const notFoundHtml = path.join(distPath, "404.html");
    try {
      copyFileSync(indexHtml, notFoundHtml);
      console.log("✓ Copied index.html to 404.html");
    } catch (error) {
      console.error("✗ Failed to copy index.html to 404.html:", error);
    }
  },
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), copy404Plugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
