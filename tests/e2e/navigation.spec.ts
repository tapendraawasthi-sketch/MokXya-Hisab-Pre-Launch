import { test, expect } from '@playwright/test';

test.describe('Navigation and Layout', () => {
  test('Header desktop navigation works correctly', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/');

    const productLink = page.locator('.desktop-nav a').filter({ hasText: 'Product' });
    await expect(productLink).toBeVisible();
    await productLink.click();
    await expect(page).toHaveURL(/.*#capabilities/);
    
    // Hash navigation should scroll the page
    const productHeading = page.locator('#capabilities h2').first();
    await expect(productHeading).toBeInViewport();
  });

  test('Mobile menu behaves correctly', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');

    const menuToggle = page.getByLabel('Toggle mobile menu');
    await expect(menuToggle).toBeVisible();
    
    // Open menu
    await menuToggle.click();
    
    const mobileMenu = page.locator('#mobile-menu');
    await expect(mobileMenu).toBeVisible();

    // Body scroll should be locked
    const bodyOverflow = await page.evaluate(() => document.body.style.overflow);
    expect(bodyOverflow).toBe('hidden');

    // Click link and verify menu closes
    await page.locator('#mobile-menu a').filter({ hasText: 'Product' }).click();
    await expect(mobileMenu).toBeHidden();
    
    // Body scroll should be restored
    const bodyOverflowAfter = await page.evaluate(() => document.body.style.overflow);
    expect(bodyOverflowAfter).toBe('unset');
  });

  test('Skip link is accessible via keyboard', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Tab');
    
    const skipLink = page.getByRole('link', { name: /skip to main content/i });
    await expect(skipLink).toBeFocused();
    
    await skipLink.press('Enter');
    const mainContent = page.locator('#main-content');
    await expect(mainContent).toBeFocused();
  });
});
