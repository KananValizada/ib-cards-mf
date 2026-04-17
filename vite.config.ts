import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'cards',
      filename: 'remoteEntry.js',
      exposes: {
    './CardsPage': './src/CardsPage.tsx'
    },
    shared: { 
        react: {
          requiredVersion: '^19.2.4',
        },
        'react-dom': {
          requiredVersion: '^19.2.4',
        },
    }
    }),
  ],
  build: {
    target: 'esnext',
  },
  server: {
    port: 3002,
    cors: true,
  },
  preview: {
    port: 3002,
    cors: true,
  },
});