import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    define: {
      'process.env': env
    },
    // If you are deploying to username.github.io/repo-name/, 
    // set base to '/repo-name/'. For custom domains, keep it as '/'.
    base: process.env.NODE_ENV === 'production' ? './' : '/',
    build: {
      outDir: 'dist',
      emptyOutDir: true,
    },
    server: {
      port: 3000,
    }
  };
});