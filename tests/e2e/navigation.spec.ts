import { test, expect } from '@playwright/test';

test.describe('Navigation & Routing', () => {
  test('Navigate between key pages', async ({ page, isMobile }) => {
    await page.goto('/');
    
    if (isMobile) {
      await page.getByRole('button', { name: /toggle mobile menu/i }).click();
      await page.locator('nav[aria-label="Primary Mobile"]').getByRole('link', { name: 'Pilot' }).click();
    } else {
      await page.locator('nav[aria-label="Primary Desktop"]').getByRole('link', { name: 'Pilot' }).click();
    }
    
    await expect(page).toHaveURL(/.*pilot/);
    await expect(page.locator('h1')).toContainText('Founding Pilot');
    
    // Click Home logo to return
    await page.getByRole('link', { name: 'MokXya Home' }).click();
    await expect(page).toHaveURL('http://localhost:5173/');
  });

  test('Mobile navigation toggle', async ({ page, isMobile }) => {
    if (!isMobile) return;
    
    await page.goto('/');
    const menuBtn = page.getByRole('button', { name: /toggle mobile menu/i });
    
    // Open menu
    await menuBtn.click();
    const nav = page.locator('nav[aria-label="Primary Mobile"]');
    await expect(nav).toBeVisible();
    
    // Click a link and ensure menu closes or navigates
    await nav.getByRole('link', { name: 'FAQ' }).click();
    await expect(page).toHaveURL(/.*#faq/);
  });
});
