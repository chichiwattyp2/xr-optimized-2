import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        xrtest: resolve(__dirname, 'XR-Test.html'),
        arshowcase: resolve(__dirname, 'ar-showcase.html'),
        assistantshop: resolve(__dirname, 'assistant-shop.html'),
        assistant: resolve(__dirname, 'assistant.html'),
        assistant1: resolve(__dirname, 'assistant1.html'),
        beta: resolve(__dirname, 'beta.html'),
        browser: resolve(__dirname, 'browser.html'),
        callback: resolve(__dirname, 'callback.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        integrated: resolve(__dirname, 'integrated_xr_experience.html'),
        maps: resolve(__dirname, 'maps.html'),
        material: resolve(__dirname, 'material_workspace.html'),
        menu: resolve(__dirname, 'menu.html'),
        oldchat: resolve(__dirname, 'old-chat.html'),
        shop: resolve(__dirname, 'shop.html'),
        siteindex: resolve(__dirname, 'site-index.html'),
        terrain: resolve(__dirname, 'terrain.html'),
        videoplayer: resolve(__dirname, 'video-player.html'),
        vologram: resolve(__dirname, 'vologram.html'),
        workspace: resolve(__dirname, 'workspace.html')
      }
    }
  }
});
