import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    '@': path.join(__dirname, 'src'),
  },
  plugins: [reactRefresh(), tsconfigPaths()],
});
