import path from 'path';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	base: '/',
	resolve: {
		alias: {
			'@services': path.resolve(__dirname, './src/app/api/services'),
			'@servicestypes': path.resolve(__dirname, './src/app/api/types'),
			'@constants': path.resolve(__dirname, './src/app/constants'),
			'@app': path.resolve(__dirname, './src/app'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@components': path.resolve(__dirname, './src/shared/components'),
			'@modules': path.resolve(__dirname, './src/modules'),
			'@hooks': path.resolve(__dirname, './src/hooks'),
			'@': path.resolve(__dirname, './src'),
		},
	},
});
