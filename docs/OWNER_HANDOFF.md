# MokXya Hisab Pre-Launch Website — Owner Handoff

Welcome to the finalized MokXya Hisab pre-launch website. This document contains everything you need to know to take ownership of the repository, deploy it, and manage pilot applications.

## 1. What You Have

You have a robust, high-performance static website built with React and Vite. It is engineered specifically for Cloudflare Pages (free tier) and requires zero server infrastructure.

Key features include:
- **Responsive Architecture:** Fully tested from small mobile devices (320px) to large desktop monitors (1920px+).
- **Interactive Demo:** A controlled, deterministic state machine that safely demonstrates product concepts without exposing a real AI backend.
- **Fail-Closed Pilot Engine:** A secure application flow that adapts automatically based on the environment variables you provide (API endpoint, WhatsApp, Email, or "Opening Soon").
- **SEO Readiness:** Comprehensive Open Graph tags, Twitter Cards, canonical routing, and JSON-LD structured data configured for `mokxya.pages.dev`.

## 2. Your Next Steps

1. **Commit and Deploy:**
   Run the following commands to save the redesign and trigger Cloudflare Pages (assuming Cloudflare Pages is connected to your `main` branch):
   ```bash
   git add .
   git commit -m "chore: MokXya Hisab website final redesign (Phases 1-8)"
   git push origin main
   ```

2. **Configure Cloudflare Pages Environment Variables:**
   Log into Cloudflare > Workers & Pages > `mokxya` > Settings > Environment variables.
   Set up your preferred pilot application routing:
   - To use an endpoint: `VITE_PILOT_FORM_URL` = `https://your-api.com/pilot`
   - To use WhatsApp: `VITE_WHATSAPP_NUMBER` = `+977...`
   - To use Email: `VITE_CONTACT_EMAIL` = `founders@mokxya.com`

3. **Link Your Domain (Future):**
   When `mokxya.com.np` is acquired, follow the steps in `docs/DEPLOYMENT.md` to map the domain and update `VITE_SITE_URL`.

## 3. Reference Material
For detailed management, please consult the following finalized documentation:
- `README.md` (General overview and installation)
- `docs/ARCHITECTURE.md` (Technical structure)
- `docs/DEPLOYMENT.md` (Detailed deployment steps)
- `docs/PILOT_FORM_SETUP.md` (Submission configuration)
- `docs/BRAND_AND_CONTENT_GUIDE.md` (Brand rules)
- `docs/PRE_LAUNCH_CHECKLIST.md` (Marketing checklist before going public)

**Your website is ready. Welcome to MokXya Hisab.**
