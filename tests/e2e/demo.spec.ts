import { test, expect } from '@playwright/test';

test.describe('Interactive Demo Flow', () => {
  test('Demo goes through state transitions correctly', async ({ page }) => {
    await page.goto('/');
    
    // Find the Process Example button
    const processButton = page.getByRole('button', { name: 'Process Example' });
    await expect(processButton).toBeVisible();
    
    // Click process
    await processButton.click();
    
    // Check interpreting state (has spinner)
    await expect(page.getByText('Interpreting business event...')).toBeVisible();
    
    // Wait for preview state to appear (it takes 1.2s via setTimeout)
    const confirmButton = page.getByRole('button', { name: 'Confirm Illustrative Entry' });
    await expect(confirmButton).toBeVisible({ timeout: 2000 });
    
    // Click confirm
    await confirmButton.click();
    
    // Check confirmed state
    await expect(page.locator('h4', { hasText: 'Example confirmed' })).toBeVisible();
    
    // Check reset
    const resetButton = page.getByRole('button', { name: 'Reset' });
    await resetButton.click();
    
    // Should be back to Process Example
    await expect(processButton).toBeVisible();
  });
});
