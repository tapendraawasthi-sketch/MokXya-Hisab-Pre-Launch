# MokXya Hisab — Redesign Phase 0 Audit Report
*Version 2.0 — Phase 0 Full Specification — 2026-07-14*
*Baseline: Passing | Tests: 23 unit / 8 E2E — all passing*

---

## 1. Repository Overview

The repository is a static React application using Vite, React Router, and a custom CSS design token system. It is designed to be hosted on Cloudflare Pages without a backend. The codebase is fully TypeScript and heavily components-based.

## 2. Technology Stack

- **Framework**: React 19 + TypeScript (~6.0.2)
- **Build Tool**: Vite 8.1.1
- **Routing**: React Router v7
- **Styling**: Vanilla CSS with CSS custom properties (`tokens.css` + `global.css`)
- **Icons**: Lucide React
- **Unit Testing**: Vitest 4 + React Testing Library
- **E2E Testing**: Playwright 1.61
- **Head Management**: React Helmet Async 3
- **Deployment**: Static (Cloudflare Pages compatible)

## 3. Existing Route Map

- `/` → `src/pages/Home.tsx`
- `/pilot` → `src/pages/Pilot.tsx`
- `/about` → `src/pages/About.tsx`
- `/privacy` → `src/pages/Privacy.tsx`
- `/terms` → `src/pages/Terms.tsx`
- `*` → `src/pages/NotFound.tsx`

## 4. Existing Component Map

- **Brand**: `src/components/common/BrandMark.tsx` (Fake triangle SVG - must be replaced)
- **Layout**: `Header.tsx`, `Footer.tsx`, `Layout.tsx`
- **Home Sections**: `HeroSection.tsx`, `ProblemsSection.tsx`, `WorkflowSection.tsx`, `InteractiveDemoSection.tsx`, `PreviewGallerySection.tsx`, `BenefitsSection.tsx`, `SafetySection.tsx`, `SuitableBusinessesSection.tsx`, `DevStatusSection.tsx`, `PricingSection.tsx`, `FaqSection.tsx`, `CtaSection.tsx`, `ContactSection.tsx`
- **Previews**: `DashboardPreview.tsx`, `MobileEntryPreview.tsx`
- **Common Utilities**: `Button.tsx`, `Section.tsx`, `Container.tsx`, `Stack.tsx`, `Cluster.tsx`, `Badge.tsx`, `Card.tsx`, `SkipLink.tsx`, `ThemeToggle.tsx`, `IconButton.tsx`
- **SEO**: `Meta.tsx`, `StructuredData.tsx`

## 5. Existing Content Map

Currently, content is heavily hardcoded directly into the component files (e.g., `HeroSection.tsx`, `InteractiveDemoSection.tsx`, `FaqSection.tsx`). There is no `src/content/` directory.

- `src/config/site.ts` acts as the primary configuration for URLs, names, and contact details.

## 6. Existing Styling Architecture

- `src/styles/tokens.css`: Defines the design token system using CSS variables. Contains a critical flaw where `@media (prefers-color-scheme: dark)` overrides the theme provider on first load.
- `src/styles/global.css`: Base styles, typography scale, utilities.
- **Inline Styles**: Extensive use of inline styles throughout components (e.g., `style={{ ... }}`).

## 7. Existing Asset Inventory

- `design-inputs/mokxya-original-brand-board.png`: **Authentic Brand Source (Present & Verified)**
- `public/favicon.svg`: Current favicon.
- `public/assets/og-image-placeholder.png`: Placeholder for Open Graph image.
- `src/assets/hero.png`: Generic purple gradient image.
- `src/assets/react.svg`, `src/assets/vite.svg`: Leftover scaffold assets.

## 8. Current Strengths Worth Preserving

- **Stack Choice**: The Vite/React static build is appropriate for this project phase.
- **`InteractiveDemoSection.tsx` Logic**: The state machine (initial -> interpreting -> preview -> confirmed) is structurally sound and includes `aria-live` regions.
- **Routing Setup**: React Router is correctly configured.
- **Testing Foundation**: Vitest and Playwright are set up and tests are currently passing.
- **Security Headers**: `public/_headers` contains good baseline headers.
- **SPA Fallback**: `public/_redirects` is correctly configured for Cloudflare Pages.

## 9. Current Brand Failures

- **`src/components/common/BrandMark.tsx`**: Renders a fake triangle/cross SVG instead of the authentic MokXya M/X logo.
- **Generic Vibe**: The site looks like a generic SaaS template rather than a premium Nepalese financial product.
- **Purple Gradient Hero**: `src/assets/hero.png` conflicts with the brand colors (navy/teal).

## 10. Current Logo Failure

- The logo used across the site (`BrandMark.tsx`) is entirely incorrect and fabricated. The real source of truth (`design-inputs/mokxya-original-brand-board.png`) must be processed to generate the correct assets.

## 11. Current First-View Failures

- **`src/components/sections/HeroSection.tsx`**: Uses a centered text block without any visual product proof above the fold. The primary messaging is weak visually.
- **Header Crowding**: The header feels crowded, especially with the unnecessary `ThemeToggle.tsx` (monitor icon).

## 12. Current Conversion Failures

- **`src/components/sections/CtaSection.tsx`**: "Contact the Founder" button smooth-scrolls to an empty `#contact` anchor if the contact config is empty.
- **`src/pages/Pilot.tsx`**: The pilot form allows "Register Interest" even when `VITE_PILOT_FORM_URL` is empty, leading to a dead end.
- **Pricing Cards**: `PricingSection.tsx` shows speculative tiers ("TBA") which distracts from the pilot conversion goal.

## 13. Current Interaction Failures

- **Theme Toggle**: The `ThemeToggle` in the header is unnecessary and confusing.
- **Dark Mode Flash**: `ThemeProvider.tsx` defaults to 'system', but `tokens.css` has a hardcoded `@media (prefers-color-scheme: dark)` block that forces dark mode before React hydrates, causing a flash or permanent dark mode for some users.

## 14. Current Content Problems

- Hardcoded content across all sections makes updates difficult.
- The phrase "Interactive product concept" undermines product readiness.
- "Development Demonstration" badge on the demo is overly cautious.

## 15. Current Trust Problems

- **`src/components/sections/DevStatusSection.tsx`**: The red-bordered warning block is alarming rather than honest and reassuring.
- Placeholder dates in `Privacy.tsx` and `Terms.tsx` ("Just now").

## 16. Current Product-Positioning Problems

- The site lacks clear visual evidence of *how* the product works in the hero section. The narrative relies too much on text.

## 17. Current Mobile Problems

- Heavy use of card clusters (`Cluster` component) wraps awkwardly on smaller screens.
- The mobile menu implementation in `Header.tsx` needs polish for focus trapping and accessibility.

## 18. Current Accessibility Risks

- Mobile menu focus management is incomplete.
- Demo live regions (`aria-live`) might not announce all state changes perfectly.
- Hash-link navigation offsets (due to sticky header) can hide content.

## 19. Current SEO Problems

- **`src/config/site.ts`**: Canonical URL is `https://mokxya.com` instead of the temporary production URL `https://mokxya.pages.dev`.

## 20. Current Metadata Problems

- **`public/robots.txt`**: Sitemap URL is `https://mokxya.com/sitemap.xml`.
- **`public/sitemap.xml`**: URLs use `https://mokxya.com`.
- **`src/components/seo/StructuredData.tsx`**: Logo URL points to the placeholder OG image.
- **`public/assets/og-image-placeholder.png`**: Not a real branded image.

## 21. Current Form Problems

- **`src/pages/Pilot.tsx`**: The form does not gracefully handle the unconfigured state (missing webhook/URL).

## 22. Current Deployment Risks

- The incorrect URLs in `site.ts` and `robots.txt` will negatively impact SEO on the actual deployed domain (`mokxya.pages.dev`).

## 23. Current Technical Debt

- Inline styles are pervasive (e.g., `style={{ ... }}`), making centralized design updates hard.
- No path aliases configured in `vite.config.ts`.
- `ThemeProvider` logic is flawed.

## 24. Dead Components

- `src/components/common/ThemeToggle.tsx` (once removed from Header).

## 25. Duplicate Components

- None identified, but many sections follow the exact same card-grid pattern.

## 26. Dead or Placeholder Assets

- `src/assets/hero.png`
- `src/assets/react.svg`
- `src/assets/vite.svg`
- `public/assets/og-image-placeholder.png`

## 27. Recommended Files to Delete

- `src/components/common/BrandMark.tsx`
- `src/components/common/ThemeToggle.tsx`
- `src/components/sections/PricingSection.tsx`
- `src/components/sections/DevStatusSection.tsx`
- `src/components/sections/ContactSection.tsx`
- `src/components/sections/BenefitsSection.tsx`
- `src/components/sections/SafetySection.tsx`
- `src/assets/hero.png`
- `src/assets/react.svg`
- `src/assets/vite.svg`

## 28. Recommended Files to Refactor

- `src/components/layout/Header.tsx` & `Footer.tsx`
- `src/components/sections/HeroSection.tsx`
- `src/pages/Pilot.tsx`, `About.tsx`, `Privacy.tsx`, `Terms.tsx`, `NotFound.tsx`
- `src/styles/tokens.css`
- `src/config/site.ts`
- `src/app/ThemeProvider.tsx`

## 29. Recommended Files to Preserve

- Core UI utilities: `Button.tsx`, `Container.tsx`, `Stack.tsx`, `Cluster.tsx`, `Badge.tsx`, `Card.tsx`, `Section.tsx`
- Configs: `package.json`, `vite.config.ts`, `playwright.config.ts`, `tsconfig.*.json`
- `public/_redirects`, `public/_headers`

## 30. Baseline Build Results

- **Command**: `npm run build`
- **Result**: PASS (Exit code 0)
- **Output**: ~306kB JS (93kB gzip), ~4.1kB CSS (1.35kB gzip)

## 31. Baseline Lint Results

- **Command**: `npm run lint`
- **Result**: PASS (Exit code 0, 2 warnings)
- **Warnings**: Unused `asChild` in `Button.tsx`; `useTheme` export in `ThemeProvider.tsx`.

## 32. Baseline Unit-Test Results

- **Command**: `npm test`
- **Result**: PASS (Exit code 0)
- **Output**: 23 tests passed across 10 files.

## 33. Baseline E2E Results

- **Command**: `npm run test:e2e`
- **Result**: PASS (Exit code 0)
- **Output**: 8 tests passed (Chromium + Mobile Chrome).

## 34. Screenshot Inventory

- `docs/redesign/baseline/home-desktop-1440x900.png`
- `docs/redesign/baseline/home-full-desktop.png`
- `docs/redesign/baseline/home-mobile-390x844.png`
- `docs/redesign/baseline/home-full-mobile.png`
- `docs/redesign/baseline/pilot-desktop.png`
- `docs/redesign/baseline/about-desktop.png`

## 35. Phase 1 Prerequisites

- Python script to slice the logo from the brand board.
- Clean working tree.

## 36. Blocking Issues

- None. Phase 0 tasks are complete, and the brand board exists.

## 37. Risk Register

- **Risk**: Modifying the `InteractiveDemoSection` might break the complex state machine tests.
- **Mitigation**: Rely heavily on the existing Vitest coverage during refactoring.
- **Risk**: Removing `prefers-color-scheme` from `tokens.css` might temporarily break some UI if colors are hardcoded assuming dark mode.
- **Mitigation**: Comprehensive review of colors in Phase 1 token rebuild.

---

**PHASE 0 VERDICT: READY FOR PHASE 1**
