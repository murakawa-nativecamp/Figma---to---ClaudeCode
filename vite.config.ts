import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Gallery/preview app used for the screenshot-verification loop.
export default defineConfig({
  plugins: [react()],
  server: { port: 5191, host: true, strictPort: true },
});
