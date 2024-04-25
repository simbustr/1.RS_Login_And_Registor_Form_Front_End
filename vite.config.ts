// vite.config.ts
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import tailwindcss from 'tailwindcss'; // Import Tailwind CSS

export default defineConfig({
  plugins: [
    reactRefresh(),
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss, // Use Tailwind CSS plugin
      ],
    },
  },
});
