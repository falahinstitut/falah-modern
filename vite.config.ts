import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: {
      preset: "static",
      prerender: {
        crawlLinks: true,
        routes: ["/"]
      }
    }
  }
});
