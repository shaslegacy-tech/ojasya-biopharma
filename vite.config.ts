import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      strict: false,
    },
  },
  build: {
    rollupOptions: {
      input: "index.html",
    },
  },
  // Add this for proper SPA routing
  base: "/",
});
