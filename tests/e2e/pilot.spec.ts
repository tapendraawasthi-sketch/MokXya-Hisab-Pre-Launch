import { test, expect } from '@playwright/test';

test.describe('Pilot Application Flow', () => {
  test('Form validation works and focuses error summary', async ({ page }) => {
    // Set up mock config for unavailable to bypass or endpoint to test submission
    await page.goto('/pilot');
    
    // Check if the form is available
    await page.addInitScript(() => {
      sessionStorage.setItem('__TEST_PILOT_MODE__', 'endpoint');
    });
    
    await page.goto('/pilot');

    const submitBtn = page.getByRole('button', { name: /Send pilot application/i });
    await expect(submitBtn).toBeVisible();

    // Click without filling anything
    await submitBtn.click();

    // Error summary should appear
    const errorSummary = page.locator('.pilot-error-summary');
    await expect(errorSummary).toBeVisible();
    await expect(errorSummary).toBeFocused(); // check accessibility focus

    // Fill required fields
    await page.fill('input[name="ownerName"]', 'Test Owner');
    await page.fill('input[name="phone"]', '9800000000');
    await page.fill('input[name="city"]', 'Kathmandu');
    await page.fill('input[name="businessName"]', 'Test Business');
    await page.selectOption('select[name="businessType"]', 'retail');
    
    // Check radio buttons
    await page.locator('input[name="staffRange"][value="Just me"]').click();
    await page.selectOption('select[name="recordMethod"]', 'Spreadsheet');
    await page.selectOption('select[name="inventoryUsage"]', 'Yes');
    await page.selectOption('select[name="creditSalesFrequency"]', 'Often');
    await page.locator('input[name="preferredLanguage"][value="English"]').click();
    
    // Consent
    await page.locator('input[name="consent"]').check();
    
    // Mock the fetch request to simulate success
    await page.route('https://test-endpoint.local', async route => {
      await route.fulfill({ status: 200 });
    });

    await submitBtn.click();

    // Success state should appear
    const successState = page.locator('.pilot-success-state');
    await expect(successState).toBeVisible();
    await expect(successState).toContainText('Application sent');
    
    // Form should be gone
    await expect(page.locator('.pilot-form')).toBeHidden();
  });
});
