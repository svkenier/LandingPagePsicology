import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Importa el módulo 'path'
import { fileURLToPath } from 'url'; // Importa 'fileURLToPath' para manejar __dirname

// Obtener el equivalente de __dirname en un módulo ES
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // ✅ Alias para la carpeta 'src'
    },
  },
});
