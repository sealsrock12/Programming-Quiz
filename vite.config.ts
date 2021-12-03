import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  resolve: {
    alias: {
      "@": path.join(__dirname, "./src"),
      react: "preact-compat",
      "react-dom": "preact-compat"
    }
  }
});
