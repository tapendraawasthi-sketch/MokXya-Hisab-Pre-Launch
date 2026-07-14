# Pre-Launch Checklist

Review and tick every item before announcing the site publicly.
Items marked **[FOUNDER]** require manual action from the founding team.

---

## Brand & Content

- [ ] All pages spell **MokXya** correctly (no Mok-Xya, Mokshya, Orbix, Chat ERP)
- [ ] **MokXya Hisab** is the product name throughout (not just "MokXya")
- [ ] **Ask MokXya** is used as the assistant identity where referenced
- [ ] Tagline reads **Freedom from Complexity** exactly
- [ ] Nepali tagline **आफ्नै भाषामा व्यवसायको हिसाब** appears in the hero
- [ ] No fake testimonials, fake statistics, fake awards, or fake government seals present
- [ ] No "accountant replacement" claim present
- [ ] No "100% accuracy", "bank-grade", "military-grade", or "guaranteed compliance" claims present
- [ ] No "free forever" or "one full year free for everyone" language present
- [ ] All UI mock-ups are labelled as **Product preview** or **Interface under development**

---

## Contact & Configuration **[FOUNDER]**

- [ ] Real phone number entered in `src/config/site.ts` → `contact.phone`
- [ ] Real WhatsApp number entered in `src/config/site.ts` → `urls.whatsapp`
- [ ] Real email address entered in `src/config/site.ts` → `contact.email`
- [ ] Founder name or team name entered in `src/config/site.ts` → `contact.founder`
- [ ] Facebook page URL entered in `src/config/site.ts` → `social.facebook`
- [ ] TikTok profile URL entered (if available) → `social.tiktok`
- [ ] YouTube channel URL entered (if available) → `social.youtube`
- [ ] Instagram profile URL entered (if available) → `social.instagram`

---

## Pilot Form **[FOUNDER]**

- [ ] Google Form (or equivalent) created with appropriate pilot qualification fields
- [ ] Pilot form URL entered in `src/config/site.ts` → `urls.pilotFormUrl`
- [ ] Form tested in both configured and unconfigured states
- [ ] Consent checkbox verified as required in local pre-qualification form
- [ ] No sensitive fields (passwords, PAN, bank details) in the form

---

## Pricing

- [ ] Pricing section shows "Price to be announced before paid activation" if prices not decided
- [ ] If prices are decided, they are entered in `src/config/site.ts` → `pricing`
- [ ] No fake urgency countdowns or fake discounts present

---

## Screenshots & Previews **[FOUNDER]**

- [ ] Dashboard preview is labelled as **Sample data / Illustrative figures**
- [ ] If real product screenshots are available, replace the CSS mockups in `PreviewGallerySection.tsx`
- [ ] All new screenshots are placed in `public/assets/product-previews/`
- [ ] All screenshot `alt` text is meaningful and accurate

---

## Legal Pages

- [ ] `/privacy` page is readable and accurately describes what the marketing site collects
- [ ] `/terms` page accurately describes the informational status of the website
- [ ] Legal pages contain the disclaimer that they are not legal advice
- [ ] Legal pages have been reviewed by a qualified legal adviser before commercial launch **[FOUNDER]**

---

## SEO & Metadata

- [ ] All routes have correct `<title>` tags
- [ ] All routes have correct `<meta name="description">` content
- [ ] Open Graph image placeholder has been replaced with a real social card **[FOUNDER]**
- [ ] `public/robots.txt` is present and correct
- [ ] `public/sitemap.xml` is present and lists all public routes
- [ ] Canonical URL in `src/config/site.ts` → `urls.canonicalBase` matches the live domain

---

## Accessibility

- [ ] Skip link is present and keyboard-focusable on every page
- [ ] All interactive elements have visible focus indicators
- [ ] Devanagari text renders correctly on the hero and workflow sections
- [ ] Colour contrast passes WCAG AA on both light and dark modes
- [ ] Mobile navigation is keyboard-accessible
- [ ] All form fields have associated `<label>` elements

---

## Responsive Design

- [ ] Site tested at 1920×1080 — no overflow
- [ ] Site tested at 1366×768 — no overflow
- [ ] Site tested at 768×1024 — no overflow
- [ ] Site tested at 430×932 — mobile layout intact
- [ ] Site tested at 360×800 — smallest target viewport, no overflow
- [ ] Mobile navigation menu opens and closes correctly
- [ ] Pilot form grid collapses to single column on mobile

---

## Analytics

- [ ] Analytics adapter (`src/lib/analytics.ts`) is configured if a privacy-conscious service is chosen
- [ ] No paid analytics service is connected without the founder's explicit instruction
- [ ] No personal data is logged to the browser console in production

---

## Build & Deployment

- [ ] `npm install` completes without errors
- [ ] `npm run build` produces a clean `dist/` folder
- [ ] `npm run test` — all 23 unit tests pass
- [ ] `npx playwright test` — all 8 E2E tests pass
- [ ] `dist/_redirects` file is present (SPA routing)
- [ ] `dist/_headers` file is present (security headers)
- [ ] Cloudflare Pages project is created with the correct build settings
- [ ] Production branch is set to `main`

---

## Domain & HTTPS

- [ ] Site is accessible at `mokxya.pages.dev` (or `mokxya-hisab.pages.dev` as fallback)
- [ ] HTTPS is active (Cloudflare Pages enables this by default)
- [ ] All routes resolve without 404 errors (SPA routing via `_redirects` tested)
- [ ] When `mokxya.com.np` is acquired, the custom domain is attached in the Cloudflare Pages dashboard and `urls.canonicalBase` is updated in `src/config/site.ts`

---

## Final Sign-off **[FOUNDER]**

- [ ] Founder has reviewed all visible content for accuracy
- [ ] Founder has approved the brand mark / wordmark presentation
- [ ] Founder has confirmed no unintended claims are made
- [ ] Legal pages reviewed before first commercial or investor use
