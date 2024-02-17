import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/repairing_the_interior/',
  plugins: [react()],
});