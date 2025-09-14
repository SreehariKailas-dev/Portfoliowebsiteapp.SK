import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio/", // <--- add this line (repo name)
  plugins: [react()],
});
