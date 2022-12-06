import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  build: {
    minify: "terser",
  },
});
