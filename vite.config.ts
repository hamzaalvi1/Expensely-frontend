import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteWebfontDownload } from 'vite-plugin-webfont-dl';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: ['VITE_', 'PRIME_REACT_'],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    react(),
    ViteWebfontDownload(
      [
        'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap&subset=latin',

      ],
      {
        injectAsStyleTag: true,
        minifyCss: true,
        cache: true,
        assetsSubfolder: 'fonts',
      }
    ),
  ],
})
