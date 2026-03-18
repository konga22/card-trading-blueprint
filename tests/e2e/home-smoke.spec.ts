import { expect, test } from '@playwright/test';

test.describe('homepage smoke', () => {
  test('loads the root route', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL('/');
  });
});

