import { test, expect } from '@playwright/test';

test.describe('Accessibility & Keyboard Navigation', () => {
  test('Skip link focuses main content', async ({ page }) => {
    await page.goto('/');
    
    // Press Tab to focus the skip link
    await page.keyboard.press('Tab');
    
    // The skip link should be visible when focused
    const skipLink = page.locator('a[href="#main-content"]');
    await expect(skipLink).toBeVisible();
    await expect(skipLink).toBeFocused();
    
    // Press Enter to follow the skip link
    await page.keyboard.press('Enter');
    
    // The main content should now have focus
    const mainContent = page.locator('#main-content');
    await expect(mainContent).toBeFocused();
  });

  test('Has semantic landmarks', async ({ page }) => {
    await page.goto('/');
    
    // Check for banner, main, and contentinfo landmarks
    await expect(page.getByRole('banner')).toBeVisible();
    await expect(page.getByRole('main')).toBeVisible();
    await expect(page.getByRole('contentinfo')).toBeVisible();
  });
});
