import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/D-D-5E-API/',
	plugins: [react()],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './vitest.setup.js',
	},
});
