// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // On désactive le SSR. 
    // Cela force la création d'un fichier index.html standard (SPA) idéal pour GitHub Pages.
    ssr: false, 
  },
});
