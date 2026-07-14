# MokXya Hisab — Pre-Launch Website

**Freedom from Complexity**

This repository contains the source code for the MokXya Hisab pre-launch marketing and founding-pilot application website. It is a static React site deployable for free on Cloudflare Pages.

---

## Product Purpose

MokXya Hisab is being developed for small Nepalese business owners (garments, footwear, cosmetics, hardware, electrical, and similar retail/trading shops) who:

- do not have a full-time accountant;
- manage Sales, Purchases, inventory and credit records;
- want to work in Nepali, Romanised Nepali or English.

The website explains the product, recruits founding-pilot businesses, and collects qualified pilot applications.

---

## Repository Purpose

This is the **marketing website only**. It is not the MokXya Hisab application itself. It produces a static bundle deployable with zero server infrastructure.

---

## Technology

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Routing**: React Router v7
- **Styling**: Vanilla CSS with CSS variables (design token system)
- **Icons**: Lucide React
- **Unit Testing**: Vitest + React Testing Library
- **E2E Testing**: Playwright (Chromium + Mobile Chrome)
- **Deployment**: Cloudflare Pages (free tier)

---

## Local Installation

### Prerequisites
- Node.js v20 or later
- npm

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/mokxya-website.git
cd mokxya-website

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The site will be available at `http://localhost:5173`.

---

## Development

All site configuration is centralised in one file:

```
src/config/site.ts
```

Update this file to change:
- Pilot form URL
- Contact phone, WhatsApp, email
- Social media links (Facebook, TikTok, YouTube, Instagram)
- Founder name/identity
- Future pricing (when decided)
- Feature availability labels

---

## Testing

**Unit tests** (Vitest):
```bash
npm run test
```

**End-to-End browser tests** (Playwright):
```bash
npx playwright test
```

**Lint**:
```bash
npm run lint
```

---

## Building

```bash
npm run build
```

Output is placed in `dist/`. The build includes `_redirects` and `_headers` automatically from the `public/` directory.

---

## Cloudflare Pages Deployment

See [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) for the complete step-by-step deployment guide including project naming, build settings, route testing, and custom domain setup.

### Quick settings

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Production branch | `main` |

---

## Configuration

### Replacing product screenshots
Currently, the product-preview section uses CSS mockups. When real screenshots are available:
1. Place images in `public/assets/product-previews/`
2. Update `src/components/sections/PreviewGallerySection.tsx` to reference the new files
3. Ensure all `<img>` elements have descriptive `alt` text

### Changing the pilot form URL
1. Open `src/config/site.ts`
2. Set `pilotFormUrl` to your Google Form URL (or equivalent)
3. The website automatically switches from the fallback contact view to a "Continue to Full Application" button

### Changing contact information
1. Open `src/config/site.ts`
2. Update `social.phone`, `social.whatsapp`, `social.email`
3. Populate `social.facebook`, `social.tiktok`, `social.youtube`, `social.instagram` when accounts are ready
4. Leave any value empty (`''`) to hide that link automatically

### Custom domain setup (`mokxya.com.np`)
1. Add the custom domain in the Cloudflare Pages dashboard (your project → Custom domains)
2. Update `src/config/site.ts` → `url` to `https://mokxya.com.np`
3. Push to `main` — Cloudflare deploys automatically

---

## Legal

The Privacy Policy (`/privacy`) and Terms of Service (`/terms`) pages should be reviewed by a qualified legal adviser before the site is used for commercial or investor purposes.

---

## Documentation

| Document | Purpose |
|----------|---------|
| [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) | Project structure and technical decisions |
| [`docs/BRAND_AND_CONTENT_GUIDE.md`](docs/BRAND_AND_CONTENT_GUIDE.md) | Brand rules, spelling, and content guidelines |
| [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) | Step-by-step Cloudflare Pages deployment |
| [`docs/FORM_CONFIGURATION.md`](docs/FORM_CONFIGURATION.md) | How to configure the pilot form |
| [`docs/ACCESSIBILITY.md`](docs/ACCESSIBILITY.md) | Accessibility strategy and compliance |
| [`docs/SEO.md`](docs/SEO.md) | SEO strategy and structured data |
| [`docs/PRE_LAUNCH_CHECKLIST.md`](docs/PRE_LAUNCH_CHECKLIST.md) | Complete pre-launch checklist for the founder |

---

## License

All content, designs, and branding are the intellectual property of MokXya. All rights reserved.
