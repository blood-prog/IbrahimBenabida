import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';

function inlineCss(): Plugin {
  return {
    name: 'inline-css',
    apply: 'build',
    enforce: 'post',
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        if (!ctx.bundle) return html;
        let inlinedHtml = html;
        for (const [fileName, chunk] of Object.entries(ctx.bundle)) {
          if (fileName.endsWith('.css') && 'source' in chunk) {
            const cssContent = typeof chunk.source === 'string' ? chunk.source : chunk.source.toString();
            const baseName = fileName.split('/').pop() || fileName;
            const pattern = new RegExp(`<link[^>]+rel="stylesheet"[^>]+href="[^"]*${baseName}"[^>]*>`, 'i');
            if (pattern.test(inlinedHtml)) {
              inlinedHtml = inlinedHtml.replace(pattern, `<style>${cssContent}</style>`);
            }
          }
        }
        return inlinedHtml;
      },
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), inlineCss()],
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
});
