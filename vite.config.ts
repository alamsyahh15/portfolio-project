import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: '103.181.143.153',
    port: 3000,
  },
  preview: {
    host: '103.181.143.153',
    port: 3000,
  },
});
