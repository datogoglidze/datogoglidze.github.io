import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { copyFileSync } from "fs";

const copy404Plugin = () => ({
  name: "copy-404",
  closeBundle() {
    const distPath = path.resolve(__dirname, "dist");
    try {
      copyFileSync(
        path.join(distPath, "index.html"),
        path.join(distPath, "404.html")
      );
      console.log("✓ Copied index.html → 404.html");
    } catch (error) {
      console.error("✗ Failed to copy 404.html:", error);
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
