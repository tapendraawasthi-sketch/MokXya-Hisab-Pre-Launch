import { chromium, Browser, Page } from 'playwright';
import * as fs from 'fs';
import * as path from 'path';

const outDir = path.join(process.cwd(), 'docs/redesign/phase-5');

async function run() {
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const browser = await chromium.launch({ headless: true });
  const desktopContext = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const mobileContext = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });

  const url = 'http://localhost:5173/pilot';

  async function capture(page: Page, mode: string, suffix: string, fullPage: boolean = false, selector?: string) {
    await page.goto(url);
    await page.evaluate((m) => window.sessionStorage.setItem('__TEST_PILOT_MODE__', m), mode);
    await page.reload();
    await page.waitForLoadState('networkidle');
    
    // Additional setup based on suffix
    if (suffix.includes('validation-errors') || suffix.includes('error-summary')) {
      const btn = page.locator('button[type="submit"]');
      if (await btn.isVisible()) {
        await btn.click();
        await page.waitForTimeout(200); // let focus and rendering settle
      }
    }

    if (suffix.includes('endpoint-success') || suffix.includes('success-focus')) {
      // Mock successful endpoint
      await page.route('https://test-endpoint.local', async (route) => {
        await route.fulfill({ status: 200, contentType: 'application/json', body: '{"success":true}' });
      });
      // Fill out to success
      await page.fill('input[name="ownerName"]', 'Ram');
      await page.fill('input[name="phone"]', '9800000000');
      await page.fill('input[name="businessName"]', 'Sharma Traders');
      await page.fill('input[name="city"]', 'Kathmandu');
      await page.selectOption('select[name="businessType"]', 'retail');
      await page.check('input[id="field-staff-2–5"]');
      await page.selectOption('select[name="recordMethod"]', 'Notebook or register');
      await page.selectOption('select[name="inventoryUsage"]', 'Yes');
      await page.selectOption('select[name="creditSalesFrequency"]', 'Often');
      await page.check('input[id="field-lang-Nepali"]');
      await page.check('input[name="consent"]');
      await page.click('button[type="submit"]');
      await page.waitForSelector('.pilot-success-icon'); // Wait for success state
    }

    if (suffix.includes('endpoint-error')) {
      await page.route('https://test-endpoint.local', async (route) => {
        await route.fulfill({ status: 500, contentType: 'application/json', body: '{"error":true}' });
      });
      await page.fill('input[name="ownerName"]', 'Ram');
      await page.fill('input[name="phone"]', '9800000000');
      await page.fill('input[name="businessName"]', 'Sharma Traders');
      await page.fill('input[name="city"]', 'Kathmandu');
      await page.selectOption('select[name="businessType"]', 'retail');
      await page.check('input[id="field-staff-2–5"]');
      await page.selectOption('select[name="recordMethod"]', 'Notebook or register');
      await page.selectOption('select[name="inventoryUsage"]', 'Yes');
      await page.selectOption('select[name="creditSalesFrequency"]', 'Often');
      await page.check('input[id="field-lang-Nepali"]');
      await page.check('input[name="consent"]');
      await page.click('button[type="submit"]');
      await page.waitForSelector('.pilot-error-summary');
    }

    if (suffix.includes('first-invalid-field-focus')) {
      await page.click('button[type="submit"]');
      await page.waitForTimeout(200);
      await page.keyboard.press('Tab'); // Move focus from error summary to first invalid field
      await page.waitForTimeout(100);
    }
    
    if (suffix.includes('keyboard-submit-focus')) {
      await page.focus('button[type="submit"]');
    }

    const filepath = path.join(outDir, `${suffix}.png`);
    if (selector) {
      await page.locator(selector).screenshot({ path: filepath });
    } else {
      await page.screenshot({ path: filepath, fullPage });
    }
    console.log(`Captured: ${suffix}.png`);
  }

  // DESKTOP
  const dp = await desktopContext.newPage();
  await capture(dp, 'endpoint', 'pilot-page-desktop-1440x900', false);
  await capture(dp, 'endpoint', 'pilot-page-full-desktop', true);
  await capture(dp, 'endpoint', 'pilot-form-endpoint-mode', false, '.pilot-form-container');
  await capture(dp, 'whatsapp', 'pilot-form-whatsapp-mode', false, '.pilot-form-container');
  await capture(dp, 'email', 'pilot-form-email-mode', false, '.pilot-form-container');
  await capture(dp, 'unavailable', 'pilot-applications-opening-soon', false, '.pilot-form-container');
  await capture(dp, 'endpoint', 'pilot-validation-errors-desktop', false, '.pilot-form-container');
  await capture(dp, 'endpoint', 'pilot-endpoint-success', false, '.pilot-form-container');
  await capture(dp, 'endpoint', 'pilot-endpoint-error', false, '.pilot-form-container');

  // MOBILE
  const mp = await mobileContext.newPage();
  await capture(mp, 'endpoint', 'pilot-page-mobile-390x844', false);
  await capture(mp, 'endpoint', 'pilot-page-full-mobile', true);
  await capture(mp, 'endpoint', 'pilot-form-mobile', false, '.pilot-form-container');
  await capture(mp, 'endpoint', 'pilot-validation-errors-mobile', false, '.pilot-form-container');
  await capture(mp, 'unavailable', 'pilot-unavailable-mobile', false, '.pilot-form-container');

  // ACCESSIBILITY (Desktop)
  await capture(dp, 'endpoint', 'pilot-error-summary-focus', false, '.pilot-error-summary');
  await capture(dp, 'endpoint', 'pilot-first-invalid-field-focus', false, '.pilot-form-container');
  await capture(dp, 'endpoint', 'pilot-keyboard-submit-focus', false, 'button[type="submit"]');
  await capture(dp, 'endpoint', 'pilot-success-focus', false, '.pilot-success-state');

  await browser.close();
  console.log('All screenshots captured successfully!');
}

run().catch(console.error);
