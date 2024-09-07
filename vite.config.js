import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),svgr()],
  server: {
    host: '0.0.0.0',
    port: 5173, // or any other port you prefer
  },
})
