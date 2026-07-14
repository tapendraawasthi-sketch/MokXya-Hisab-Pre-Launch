import { chromium, firefox, webkit, devices } from 'playwright';
import path from 'path';
import fs from 'fs';

const OUT_DIR = path.join(process.cwd(), 'docs', 'redesign', 'phase-7');
const BASE_URL = 'http://localhost:5173';

const viewports = {
  desktop1440: { width: 1440, height: 900 },
  desktop1920: { width: 1920, height: 1080 },
  tablet768: { width: 768, height: 1024 },
  tablet820: { width: 820, height: 1180 },
  mobile390: { width: 390, height: 844 },
  mobile320: { width: 320, height: 568 },
};

async function run() {
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  console.log('Launching Chromium...');
  const browser = await chromium.launch();
  const context = await browser.newContext({ reducedMotion: 'reduce' });
  
  try {
    // 1. Homepage 1440
    let page = await context.newPage();
    await page.setViewportSize(viewports.desktop1440);
    await page.goto(BASE_URL);
    await page.waitForTimeout(1000); // Wait for fonts and hero
    await page.screenshot({ path: path.join(OUT_DIR, 'homepage-first-view-1440x900.png') });
    await page.screenshot({ path: path.join(OUT_DIR, 'homepage-full-1440.png'), fullPage: true });

    // 2. Homepage 1920
    await page.setViewportSize(viewports.desktop1920);
    await page.screenshot({ path: path.join(OUT_DIR, 'homepage-first-view-1920x1080.png') });
    await page.screenshot({ path: path.join(OUT_DIR, 'homepage-full-1920.png'), fullPage: true });

    // 3. Homepage Tablet
    await page.setViewportSize(viewports.tablet768);
    await page.screenshot({ path: path.join(OUT_DIR, 'homepage-tablet-768x1024.png'), fullPage: true });
    await page.setViewportSize(viewports.tablet820);
    await page.screenshot({ path: path.join(OUT_DIR, 'homepage-tablet-820x1180.png'), fullPage: true });

    // 4. Homepage Mobile
    await page.setViewportSize(viewports.mobile390);
    await page.screenshot({ path: path.join(OUT_DIR, 'homepage-mobile-390x844.png') });
    await page.screenshot({ path: path.join(OUT_DIR, 'homepage-mobile-full-390.png'), fullPage: true });

    await page.setViewportSize(viewports.mobile320);
    await page.screenshot({ path: path.join(OUT_DIR, 'homepage-mobile-320x568.png') });
    await page.screenshot({ path: path.join(OUT_DIR, 'homepage-mobile-full-320.png'), fullPage: true });

    // 5. Header and Menu
    await page.setViewportSize(viewports.desktop1440);
    const header = page.locator('header');
    await header.screenshot({ path: path.join(OUT_DIR, 'header-desktop.png') });

    await page.setViewportSize(viewports.mobile390);
    await header.screenshot({ path: path.join(OUT_DIR, 'header-mobile.png') });

    await page.getByLabel('Toggle mobile menu').click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(OUT_DIR, 'mobile-menu-open.png') });
    
    // Keyboard focus on menu
    await page.keyboard.press('Tab');
    await page.screenshot({ path: path.join(OUT_DIR, 'mobile-menu-keyboard-focus.png') });
    await page.getByLabel('Toggle mobile menu').click();

    // 6. Demo
    await page.setViewportSize(viewports.desktop1440);
    await page.goto(`${BASE_URL}/#demo`);
    await page.waitForTimeout(500);
    const demoSection = page.locator('#demo');
    await demoSection.screenshot({ path: path.join(OUT_DIR, 'demo-ready-desktop.png') });

    await page.getByRole('button', { name: 'Process Example' }).click();
    await page.waitForTimeout(1500);
    await demoSection.screenshot({ path: path.join(OUT_DIR, 'demo-preview-desktop.png') });

    await page.getByRole('button', { name: 'Confirm Illustrative Entry' }).click();
    await page.waitForTimeout(500);
    await demoSection.screenshot({ path: path.join(OUT_DIR, 'demo-confirmed-desktop.png') });

    await page.setViewportSize(viewports.mobile390);
    await page.goto(`${BASE_URL}/#demo`);
    await page.getByRole('button', { name: 'Process Example' }).click();
    await page.waitForTimeout(1500);
    await demoSection.screenshot({ path: path.join(OUT_DIR, 'demo-preview-mobile.png') });

    // 7. Pilot Form
    await page.setViewportSize(viewports.desktop1440);
    await page.goto(`${BASE_URL}/pilot`);
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(OUT_DIR, 'pilot-desktop.png'), fullPage: true });

    await page.setViewportSize(viewports.mobile390);
    await page.screenshot({ path: path.join(OUT_DIR, 'pilot-mobile.png'), fullPage: true });

    await page.getByRole('button', { name: /Send pilot application|Submit/i }).click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(OUT_DIR, 'pilot-validation-errors.png') });

    // 8. Legal and other routes
    for (const route of ['about', 'privacy', 'terms']) {
      await page.setViewportSize(viewports.desktop1440);
      await page.goto(`${BASE_URL}/${route}`);
      await page.screenshot({ path: path.join(OUT_DIR, `${route}-desktop.png`), fullPage: true });

      await page.setViewportSize(viewports.mobile390);
      await page.screenshot({ path: path.join(OUT_DIR, `${route}-mobile.png`), fullPage: true });
    }

    await page.setViewportSize(viewports.desktop1440);
    await page.goto(`${BASE_URL}/this-does-not-exist`);
    await page.screenshot({ path: path.join(OUT_DIR, 'not-found-desktop.png'), fullPage: true });

    // Footer
    await page.goto(BASE_URL);
    const footer = page.locator('footer');
    await footer.scrollIntoViewIfNeeded();
    await footer.screenshot({ path: path.join(OUT_DIR, 'footer-desktop.png') });

    await page.setViewportSize(viewports.mobile390);
    await footer.scrollIntoViewIfNeeded();
    await footer.screenshot({ path: path.join(OUT_DIR, 'footer-mobile.png') });

    console.log('Screenshots completed successfully in Chromium.');
  } catch (error) {
    console.error('Error during screenshot capture:', error);
  } finally {
    await browser.close();
  }
}

run();
