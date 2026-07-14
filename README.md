# MokXya Hisab — Pre-Launch Website

**Freedom from Complexity**

This repository contains the source code for the MokXya Hisab pre-launch marketing and founding-pilot application website. It is a static React site deployable for free on Cloudflare Pages.

---

## Product Purpose

MokXya Hisab is being developed for small Nepalese business owners (retail, trading, wholesale, distribution) who:

- do not have a full-time accountant;
- manage Sales, Purchases, inventory and credit records;
- want to work in Nepali, Romanised Nepali or English.

The website explains the product, recruits founding-pilot businesses, and collects qualified pilot applications. Note that the product is currently under development. The pilot is controlled and selective. MokXya does not replace accountants.

---

## Repository Purpose

This is the **marketing website only**. It is not the MokXya Hisab application itself. It produces a static bundle deployable with zero server infrastructure.
The site does not connect to a real backend, live AI, or database. 

---

## Technology

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Routing**: React Router v7
- **Styling**: Vanilla CSS with CSS variables (design token system)
- **Icons**: Lucide React
- **Unit Testing**: Vitest + React Testing Library
- **E2E Testing**: Playwright (Chromium, Firefox, WebKit, Mobile Chrome)
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
npm ci

# 3. Start the development server
npm run dev
```

The site will be available at `http://localhost:5173`.

---

## Testing

**End-to-End browser tests** (Playwright):
```bash
npm run test:e2e
```

**Unit tests** (Vitest):
```bash
npm test
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

Output is placed in `dist/`.

---

## Cloudflare Pages Deployment

See [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) for the complete step-by-step deployment guide.
Current Production URL: `https://mokxya.pages.dev`

### Quick settings

| Setting | Value |
|---------|-------|
| Framework preset | None / Static |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Production branch | `main` |

---

## Pilot Submission Modes

The pilot application page (`/pilot`) gracefully falls back based on your environment variables. 
Configure the mode by setting one of these in your `.env` (or Cloudflare Pages environment variables):

1. **Endpoint Mode:** Set `VITE_PILOT_FORM_URL=https://your-endpoint.com`. Submits a JSON payload.
2. **WhatsApp Mode:** Set `VITE_WHATSAPP_NUMBER=+977...` if no endpoint is available. Opens a pre-filled WhatsApp message.
3. **Email Mode:** Set `VITE_CONTACT_EMAIL=hello@mokxya.com` if neither above are available. Opens a pre-filled email.
4. **Unavailable Mode:** If none of the above are set, the form will fail closed and display "Applications opening soon".

See [`docs/PILOT_FORM_SETUP.md`](docs/PILOT_FORM_SETUP.md) for detailed configuration.

---

## Environment Configuration

Copy `.env.example` to `.env.local` to override settings locally.
- `VITE_SITE_URL`: The canonical URL for SEO (e.g. `https://mokxya.pages.dev`)
- `VITE_PILOT_FORM_URL`: The API endpoint for pilot submissions.
- `VITE_WHATSAPP_NUMBER`: The WhatsApp number for pilot submissions.
- `VITE_CONTACT_EMAIL`: The fallback contact email.

---

## Brand and Identity

The authentic logo source is maintained in `design-inputs/`. 
Do not alter the M/X geometry or use fake AI/React logos. 
Approved primary spelling is `MokXya Hisab` or `MokXya`. Do not use `Mok-Xya`, `Orbix`, `Chat ERP`, etc.

---

## Documentation

| Document | Purpose |
|----------|---------|
| [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) | Project structure and technical decisions |
| [`docs/BRAND_AND_CONTENT_GUIDE.md`](docs/BRAND_AND_CONTENT_GUIDE.md) | Brand rules, spelling, and content guidelines |
| [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) | Step-by-step Cloudflare Pages deployment |
| [`docs/PILOT_FORM_SETUP.md`](docs/PILOT_FORM_SETUP.md) | How to configure the pilot form |
| [`docs/SEO_AND_METADATA_GUIDE.md`](docs/SEO_AND_METADATA_GUIDE.md) | SEO strategy and metadata configuration |
| [`docs/PRE_LAUNCH_CHECKLIST.md`](docs/PRE_LAUNCH_CHECKLIST.md) | Complete pre-launch checklist for the owner |

---

## License

All content, designs, and branding are the intellectual property of MokXya. All rights reserved.
