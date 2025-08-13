import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // Keep relative path for Capacitor
  base: './',

  // Force dev mode so errors are readable in APK
  define: {
    'process.env.NODE_ENV': '"development"',
  },

  server: {
    host: "::",
    port: 8080,
  },

  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
