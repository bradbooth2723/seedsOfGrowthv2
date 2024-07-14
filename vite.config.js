import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

const root = resolve(__dirname, 'src');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: root,
      components: resolve(root, 'components'),
      assets: resolve(root, 'assets'),
      pages: resolve(root, 'pages'),
      styles: resolve(root, 'styles'),
      data: resolve(root, 'data'),
    },
  },
});
