import { test, expect } from '@playwright/test';

test('Dashboard should load and display sections', async ({ page }) => {
	await page.goto('http://localhost:5173/');

	await expect(
		page.getByRole('heading', { name: 'D&D Dashboard', exact: true })
	).toBeVisible();

	await expect(page.getByText('Go to Spells')).toBeVisible();
	await expect(page.getByText('Go to Monsters')).toBeVisible();
});
