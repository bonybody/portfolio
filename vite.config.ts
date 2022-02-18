import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';
import { defineConfig } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';
import reactJsx from 'vite-react-jsx';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    '@': path.join(__dirname, 'src'),
  },
  plugins: [reactRefresh(), tsconfigPaths(), svgrPlugin(), reactJsx()],
});
