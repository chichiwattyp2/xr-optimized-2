import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',  // root is the project root
  publicDir: 'assets',  // or wherever your static assets live
  build: {
    outDir: 'dist',  // your build output folder
    rollupOptions: {
      input: {
        main: './index.html',
        // If you have multiple HTML entry points, list them:
        // ar: './ar-showcase.html',
        // gallery: './gallery.html',
      }
    }
  }
});
