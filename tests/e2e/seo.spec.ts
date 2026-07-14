import { test, expect } from '@playwright/test';

test.describe('SEO and Metadata', () => {
  test('Home page has correct SEO metadata', async ({ page }) => {
    await page.goto('/');
    
    // Check canonical URL
    const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
    expect(canonical).toBe('https://mokxya.pages.dev/');
    
    // Check Open Graph tags
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', 'MokXya Hisab — Freedom from Complexity');
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', 'https://mokxya.pages.dev/brand/mokxya-og.png');
    
    // Check Twitter tags
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute('content', 'summary_large_image');
  });

  test('About page has correct SEO metadata', async ({ page }) => {
    await page.goto('/about');
    const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
    expect(canonical).toBe('https://mokxya.pages.dev/about');
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', 'About MokXya Hisab — MokXya Hisab');
  });

  test('Privacy page has correct SEO metadata', async ({ page }) => {
    await page.goto('/privacy');
    const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
    expect(canonical).toBe('https://mokxya.pages.dev/privacy');
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', 'Privacy Notice — MokXya Hisab');
  });

  test('Terms page has correct SEO metadata', async ({ page }) => {
    await page.goto('/terms');
    const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
    expect(canonical).toBe('https://mokxya.pages.dev/terms');
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', 'Terms of Use — MokXya Hisab');
  });

  test('NotFound page has noindex', async ({ page }) => {
    await page.goto('/this-does-not-exist');
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex, nofollow');
  });
});
