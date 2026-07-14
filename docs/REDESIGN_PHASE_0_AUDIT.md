# MokXya Hisab — Redesign Phase 0 Audit Report
*Baseline: 2026-07-14 | Build: passing | Tests: 23 unit / 8 E2E — all passing*

---

## Baseline Command Results

| Command | Result | Notes |
|---------|--------|-------|
| `npm run build` | ✅ PASS | 306kB JS, 4.1kB CSS (gzipped: 93kB / 1.4kB). Build in 313ms |
| `npm run lint` | ⚠️ 2 WARNINGS | Unused `asChild` param in Button.tsx; `useTheme` hook export in ThemeProvider.tsx (React fast-refresh) |
| `npm test` | ✅ PASS | 23 tests across 10 test files |
| `npm run test:e2e` | ✅ PASS | 8 tests — Chromium + Mobile Chrome |
| Baseline screenshots | ✅ | `docs/redesign/baseline/desktop-1440x900.png` + `mobile-390x844.png` |

---

## Current Repository Facts (Verified)

- **Stack**: React 19, TypeScript ~6, Vite 8, React Router 7, React Helmet Async 3, Lucide React, custom CSS
- **Testing**: Vitest 4 (unit), Playwright 1.61 (E2E, Chromium + Mobile Chrome)
- **Deployment**: Static Cloudflare Pages (`_redirects`, `_headers` present)
- **Routes**: `/`, `/pilot`, `/about`, `/privacy`, `/terms`, `*`
- **Total source files**: 57 (including tests)
- **CSS approach**: CSS custom properties (tokens.css), global utility classes, heavy inline styles in components

---

## 1. Current Strengths Worth Preserving

| Strength | Location | Notes |
|----------|----------|-------|
| Correct stack for static hosting | `package.json`, `vite.config.ts` | No backend, no CMS — correct |
| React Helmet Async for head management | `App.tsx`, `Meta.tsx` | Proper SSR-safe head management — keep |
| Cloudflare Pages config | `public/_redirects`, `public/_headers` | SPA redirect + security headers — keep |
| CSS token system foundation | `src/styles/tokens.css` | Good token names, navy/teal colours correct — refine, don't replace |
| Semantic layout structure | `Layout.tsx` | SkipLink + Header + main + Footer — correct pattern |
| Interactive demo state machine | `InteractiveDemoSection.tsx` | 3-state machine with `aria-live` — refactor, preserve pattern |
| Accessible form layout | `Pilot.tsx` | Labels, field structure present — improve |
| Honest pilot framing | Multiple sections | Never claims public availability — preserve this discipline |
| Devanagari font support | `global.css` | `lang-ne` class with Noto Sans Devanagari — keep |
| Analytics stub | `lib/analytics.ts` | Clean no-op with named events — keep |
| Content moderation | `siteConfig` | Contact/social fields show nothing when empty — keep behaviour |
| Reduced motion support | `global.css` | `@media (prefers-reduced-motion)` global — keep |
| Skip link | `SkipLink.tsx` | Present and functional — keep |

---

## 2. Current Visual and Conversion Failures

### A. Logo — CRITICAL
**File**: `src/components/common/BrandMark.tsx`
**Problem**: The rendered mark is a simple cross/plus/diagonal SVG (three strokes: two diagonal lines and a horizontal bar). It does not resemble the real M/X geometry in any way. Users who know the brand will distrust the site.
**Required action**: Full replacement with BrandLogo component using real cropped assets from `design-inputs/mokxya-original-brand-board.png`.

### B. Dark Mode on First Load — HIGH
**Files**: `src/styles/tokens.css` (line: `@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) { ... }}`), `src/app/ThemeProvider.tsx`
**Problem**: ThemeProvider initialises with `useState('system')`, then `useEffect` reads `window.matchMedia` and sets `data-theme`. The `tokens.css` media query fires independently on system dark mode. On first paint (before React hydrates), system dark users see dark tokens. After hydration, `data-theme` is set which also triggers dark. Both work in the same direction but the intent creates a first view that is reliably dark for ~50% of users. The marketing brief requires light as the deterministic default.
**Required action**: ThemeProvider must default to `'light'`. Remove `@media (prefers-color-scheme: dark)` auto-override from tokens.css. Optional: a manual user dark mode toggle if the design supports it.

### C. Generic Hero — HIGH
**File**: `src/components/sections/HeroSection.tsx`
**Problem**: Single-column centered text with Nepali lead, English headline, two CTAs, and six trust bullets. No product visualisation. First view gives no sense of what MokXya actually does.
**Required action**: Two-column hero with real code-built Ask MokXya product preview on the right.

### D. Repetitive Card Grid — MEDIUM
**Files**: `BenefitsSection.tsx`, `ProblemsSection.tsx`, `SuitableBusinessesSection.tsx`
**Problem**: Every section is the same pattern: centered heading + `Cluster` of `Card` components. Visually monotonous. No visual rhythm or editorial variety.
**Required action**: Vary layouts — comparison rows, annotated previews, compact lists, editorial alternating sections.

### E. "Interactive product concept" Label — MEDIUM
**File**: `InteractiveDemoSection.tsx`
**Problem**: The section header reads "Interactive product concept" and the Card has a floating `<Badge variant="warning">Development Demonstration</Badge>` badge over it. This undermines confidence rather than building it. The phrase "concept" implies the product doesn't work.
**Required action**: Replace with "See how MokXya turns everyday language into a reviewable entry" + discrete "Illustrative workflow" label.

### F. PricingSection — HIGH
**File**: `src/components/sections/PricingSection.tsx`
**Problem**: Three pricing cards ("Founding Pilot: Free", "Future Starter: TBA", "Future Business: TBA"). The "Founding Pilot: Free" card looks like a real price. The TBA cards create confusion about whether pricing exists. All values are speculative placeholders.
**Required action**: Replace with a single honest pilot-offer section. No pricing cards.

### G. Dead Contact CTA — HIGH
**Files**: `CtaSection.tsx`, `ContactSection.tsx`
**Problem**: "Contact the Founder" button smooth-scrolls to `#contact`. The `ContactSection` renders nothing when all `siteConfig.social.*` fields are empty (which they currently are). Result: pressing "Contact the Founder" scrolls to an invisible empty area.
**Required action**: Remove the "Contact the Founder" CTA. Replace CtaSection with a strong "Apply for the Founding Pilot" final CTA only.

### H. DevStatusSection — MEDIUM
**File**: `src/components/sections/DevStatusSection.tsx`
**Problem**: A red-bordered warning block dominates the page. The content is accurate but the visual treatment (large warning card, red text) reads as alarming rather than honest.
**Required action**: Replace with a compact status line woven into the pilot offer section.

---

## 3. Dead or Misleading Interactions

| Interaction | File | Problem |
|-------------|------|---------|
| "Contact the Founder" button | `CtaSection.tsx` | Smooth-scrolls to empty section |
| Pilot form "Register Interest" | `Pilot.tsx` | If `VITE_PILOT_FORM_URL` is empty, button fires analytics only — no real action |
| ThemeToggle in nav | `Header.tsx` | Theme control appears in navigation — non-standard UX |
| Hash links (`/#how-it-works`) from other pages | `Header.tsx` | May not scroll correctly after cross-page navigation |

---

## 4. Technical Debt

| Item | File(s) | Priority |
|------|---------|----------|
| Wrong canonical URL | `src/config/site.ts` → `url: 'https://mokxya.com'` | **CRITICAL** |
| `robots.txt` wrong sitemap URL | `public/robots.txt` → `https://mokxya.com/sitemap.xml` | **CRITICAL** |
| `sitemap.xml` wrong base URL | `public/sitemap.xml` → all URLs `https://mokxya.com/...` | **CRITICAL** |
| All content hardcoded in components | All section files | **HIGH** |
| No `src/content/` directory | — | **HIGH** |
| OG image is placeholder | `public/assets/og-image-placeholder.png` | **HIGH** |
| Placeholder dates in legal pages | `Privacy.tsx`, `Terms.tsx` → "Just now" | **HIGH** |
| ThemeProvider defaults to 'system' | `ThemeProvider.tsx` | **HIGH** |
| Dark mode CSS fires independently | `tokens.css` | **HIGH** |
| StructuredData logo is placeholder | `StructuredData.tsx` | **MEDIUM** |
| `theme-color` meta wrong value | `Meta.tsx` → `#2563EB` vs token `#0d284a` | **MEDIUM** |
| Scaffold assets committed | `src/assets/react.svg`, `src/assets/vite.svg`, `src/assets/hero.png` | **MEDIUM** |
| No `noindex` on 404 page | `NotFound.tsx` | **MEDIUM** |
| `public/icons/` empty directory | `public/icons/` | **LOW** |
| No font preconnect hints | `index.html` | **LOW** |
| No favicon.ico (only favicon.svg) | `public/` | **LOW** |

---

## 5. Accessibility Risks

| Risk | Location | Severity |
|------|----------|----------|
| Interactive demo state changes not announced on all transitions | `InteractiveDemoSection.tsx` | Medium (partial `aria-live` present) |
| Mobile menu — not verified as focus-trapped | `Header.tsx` | Medium |
| ThemeToggle accessible name not confirmed | `ThemeToggle.tsx` | Low |
| Hash-navigation offset may cause content hidden under sticky header | All anchored sections | Medium |
| Pilot form error focus management not confirmed | `Pilot.tsx` | Medium |
| 404 page indexed (no noindex) | `NotFound.tsx` | Low (not an a11y issue but an SEO one) |
| `code` elements in demo use monospace font making text feel generic | `InteractiveDemoSection.tsx` | Low |

---

## 6. Content Problems

| Problem | Location |
|---------|----------|
| Hero sub-bullet "Entries are reversible" — not verified as true for the product | `HeroSection.tsx` |
| "Pricing" section implies public pricing tiers exist | `PricingSection.tsx` |
| "Development Demonstration" badge over demo undermines credibility | `InteractiveDemoSection.tsx` |
| "Interactive product concept" label implies prototype/mockup, not real product | `InteractiveDemoSection.tsx` |
| Section heading "Familiar business problems" is passive — doesn't promise resolution | `ProblemsSection.tsx` |
| "Safety and Control" section (SafetySection) is only two paragraphs, buried mid-page | `SafetySection.tsx` |
| Contact section can render completely empty with no explanation | `ContactSection.tsx` |
| Privacy/Terms "Last Updated: Just now" is a placeholder | `Privacy.tsx`, `Terms.tsx` |
| Founder biography, portrait, company details: NOT present — correct, but About page should explain why |

---

## 7. SEO Problems

| Problem | File | Impact |
|---------|------|--------|
| Canonical URL `https://mokxya.com` not owned/deployed | `src/config/site.ts` | **Critical** — wrong OG/canonical signals |
| Sitemap uses `https://mokxya.com` | `public/sitemap.xml` | **Critical** — crawler gets wrong URLs |
| robots.txt sitemap URL is `https://mokxya.com/sitemap.xml` | `public/robots.txt` | **Critical** |
| OG image is a placeholder | `public/assets/og-image-placeholder.png` | **High** — poor social sharing |
| `theme-color` in `<head>` doesn't match brand | `Meta.tsx` | Low |
| Structured data: logo URL is placeholder | `StructuredData.tsx` | Medium |
| Structured data: phone is empty string | `StructuredData.tsx` | Low (suppressed if empty) |
| NotFound page not marked `noindex` | `NotFound.tsx` | Medium |
| No font `<link rel="preconnect">` for Google Fonts | `index.html` | Low — performance |

---

## 8. Asset Problems

| Asset | Problem |
|-------|---------|
| `src/components/common/BrandMark.tsx` | Fake logo SVG — not the real brand mark |
| `src/assets/hero.png` | Generic purple Vite gradient — must be removed |
| `src/assets/react.svg` | Vite scaffold leftover — remove |
| `src/assets/vite.svg` | Vite scaffold leftover — remove |
| `public/assets/og-image-placeholder.png` | Placeholder OG image — replace with real branded OG |
| `public/favicon.svg` | May not be the real logo mark — verify in Phase 1 |
| `design-inputs/mokxya-original-brand-board.png` | ✅ Now present — 936KB PNG brand board confirmed |

---

## 9. Exact Files Involved

### Files to Fully Replace/Rebuild
- `src/components/common/BrandMark.tsx` → replace with `BrandLogo.tsx`
- `src/components/layout/Header.tsx` → full rebuild
- `src/components/layout/Footer.tsx` → full rebuild
- `src/components/sections/HeroSection.tsx` → full rebuild
- `src/components/sections/PricingSection.tsx` → delete, replace with `PilotOfferSection.tsx`
- `src/components/sections/DevStatusSection.tsx` → delete, merge into PilotOfferSection
- `src/components/sections/ContactSection.tsx` → delete
- `src/components/sections/BenefitsSection.tsx` → replace with `CapabilitiesSection.tsx`
- `src/components/sections/SafetySection.tsx` → replace with `ControlSection.tsx`
- `src/pages/About.tsx` → full rebuild
- `src/pages/Pilot.tsx` → full rebuild
- `src/styles/tokens.css` → rebuild from real logo (Phase 1)
- `src/config/site.ts` → fix URL (Phase 2)

### Files to Substantially Refactor
- `src/components/sections/InteractiveDemoSection.tsx`
- `src/components/sections/WorkflowSection.tsx`
- `src/components/sections/ProblemsSection.tsx`
- `src/components/sections/SuitableBusinessesSection.tsx`
- `src/components/sections/FaqSection.tsx`
- `src/components/sections/CtaSection.tsx`
- `src/components/previews/DashboardPreview.tsx`
- `src/components/previews/MobileEntryPreview.tsx`
- `src/components/seo/Meta.tsx`
- `src/components/seo/StructuredData.tsx`
- `src/app/ThemeProvider.tsx`
- `src/pages/Home.tsx`
- `src/pages/Privacy.tsx`
- `src/pages/Terms.tsx`
- `src/pages/NotFound.tsx`
- `public/robots.txt`
- `public/sitemap.xml`

### Files to Keep As-Is (with minor updates)
- `src/components/common/Button.tsx` (remove unused `asChild` param)
- `src/components/common/Section.tsx`
- `src/components/common/Container.tsx`
- `src/components/common/Stack.tsx`
- `src/components/common/Cluster.tsx`
- `src/components/common/SkipLink.tsx`
- `src/components/common/Badge.tsx`
- `src/components/common/Card.tsx`
- `src/components/layout/Layout.tsx`
- `src/lib/analytics.ts`
- `src/styles/global.css` (extend, maintain)
- `public/_redirects`
- `public/_headers`
- `vite.config.ts`
- `playwright.config.ts`
- `package.json`

### Files to Create
- `src/assets/brand/` directory (all logo variants)
- `src/content/home.ts`
- `src/content/navigation.ts`
- `src/content/faq.ts`
- `src/content/pilot.ts`
- `src/content/legal.ts`
- `src/lib/pilotAdapter.ts`
- `src/components/common/BrandLogo.tsx`
- `src/components/sections/TrustStripSection.tsx`
- `src/components/sections/CapabilitiesSection.tsx`
- `src/components/sections/ControlSection.tsx`
- `src/components/sections/PilotOfferSection.tsx`
- `src/components/sections/FinalCtaSection.tsx`
- `src/components/previews/AskMokXyaPreview.tsx`
- `scripts/prepare-brand-assets.py`
- `public/brand/` directory (favicon, app icons, OG image)
- `docs/PILOT_FORM_SETUP.md`
- `docs/REDESIGN_PHASE_N_REPORT.md` (one per phase)

### Files to Delete
- `src/components/common/BrandMark.tsx`
- `src/components/common/ThemeToggle.tsx` (if removed from nav)
- `src/components/sections/PricingSection.tsx`
- `src/components/sections/DevStatusSection.tsx`
- `src/components/sections/ContactSection.tsx`
- `src/components/sections/BenefitsSection.tsx`
- `src/components/sections/SafetySection.tsx`
- `src/assets/hero.png`
- `src/assets/react.svg`
- `src/assets/vite.svg`

---

## 10. Recommended Deletion/Refactor Priority

### Delete Immediately in Phase 1
1. `src/assets/react.svg` — no purpose
2. `src/assets/vite.svg` — no purpose
3. `src/assets/hero.png` — generic purple image

### Delete in Phase 2 (when sections are rebuilt)
4. `src/components/sections/PricingSection.tsx`
5. `src/components/sections/DevStatusSection.tsx`
6. `src/components/sections/ContactSection.tsx`
7. `src/components/sections/BenefitsSection.tsx`
8. `src/components/sections/SafetySection.tsx`
9. `src/components/common/BrandMark.tsx` (after Phase 1 BrandLogo is live)

---

## Appendix: Baseline Screenshots

Saved at:
- `docs/redesign/baseline/desktop-1440x900.png` — full homepage, 1440×900
- `docs/redesign/baseline/mobile-390x844.png` — full homepage, 390×844

### Observations from Screenshots

**Desktop (1440×900)**:
- Generic centered hero with no product visualisation
- Fake BrandMark (triangle SVG) top-left
- Long single-column scroll
- Consistent light background — no theme switching on this machine
- Card grid repetition visible across sections
- DevStatusSection red warning block prominent
- PricingSection shows three cards ("Free", "TBA", "TBA")
- Footer compact but visible

**Mobile (390×844)**:
- Same centered hero — readable
- Navigation hamburger not visible in screenshot (full page)
- Card grids wrap to single column
- DevStatusSection red block occupies large vertical space
- Overall readable but generic

---

## Phase 0 Summary

| Category | Status |
|----------|--------|
| Repository structure | ✅ Understood |
| Real logo confirmed | ✅ Present at `design-inputs/mokxya-original-brand-board.png` |
| Baseline build | ✅ Passing |
| Baseline tests | ✅ 23 unit + 8 E2E passing |
| Baseline screenshots | ✅ Captured |
| Critical issues identified | ✅ 12 critical/high items documented |
| Master brief written | ✅ `docs/REDESIGN_MASTER_BRIEF.md` |
| Phase plan agreed | ✅ Phases 1–8 defined |

---

**PHASE 0 VERDICT: READY FOR PHASE 1**
