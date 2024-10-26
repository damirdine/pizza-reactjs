import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const __direname = import.meta.dirname;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.DEPLOY_TO === "GH" ? "/pizza-reactjs" : "/",
  build: { outDir: path.resolve(__direname, "..", "..", "frontend") },
});
