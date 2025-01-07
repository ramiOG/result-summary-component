import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'
// https://vite.dev/config/
export default defineConfig({
  base: '/result-summary-component/',
  plugins: [react(),
  viteStaticCopy({
    targets: [
      {
        src: 'src/assets/images/*', // Copies all images
        dest: 'assets/images', // Places them in the 'dist/assets/images' directory
      },
    ],
  }),
  ],

})  
