// playwright.config.mjs
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	testDir: './tests/e2e',
	timeout: 30000,
	retries: 2,
	workers: 4,
	use: {
		baseURL: 'http://localhost:5173',
		browserName: 'chromium',
		headless: true,
		screenshot: 'only-on-failure',
		video: 'retain-on-failure',
	},
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] },
		},
		{
			name: 'firefox',
			use: { ...devices['Desktop Firefox'] },
		},
		{
			name: 'mobile',
			use: { ...devices['iPhone 12'] },
		},
	],
	webServer: {
		command: 'npm run dev',
		url: 'http://localhost:5173',
		reuseExistingServer: !process.env.CI,
	},
});
