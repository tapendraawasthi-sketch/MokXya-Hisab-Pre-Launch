# MokXya Hisab — Redesign Master Brief
*Version 2.0 — Phase 0 Full Specification — 2026-07-14*
*Status: Approved for execution through Phase 8*

---

## 1. Executive Summary

MokXya Hisab is a Nepal-first, AI-assisted accounting product for small Nepalese retail and trading businesses. The pre-launch marketing website exists but suffers from: a fake logo, a generic SaaS template appearance, a dark-mode failure, dead CTAs, a non-functional pilot form, and wrong canonical URLs. This redesign corrects every structural, visual, content, and technical problem across 8 controlled phases — without changing the technology stack and without fabricating any product claim.

The redesign must produce a premium-feeling, honest, conversion-optimised site that immediately communicates what MokXya is, why it matters to Nepalese small business owners, and how to apply for the founding pilot.

---

## 2. Product Identity

| Field | Value |
|-------|-------|
| Company name | MokXya |
| Product name | MokXya Hisab |
| ERP product | MokXya ERP |
| AI feature | Ask MokXya |
| Tagline | Freedom from Complexity |
| Language | Nepal-first; Nepali, Romanised Nepali, English |
| Deployment | Controlled founding pilot (not public) |
| Status | Under development |

**Names that must never appear in the codebase or content:**
Mok-Xya · Mokshya · Moc-Xya · Orbix · Chat ERP

---

## 3. Product Positioning

MokXya Hisab occupies a specific position: it is not an accounting tool for accountants, nor a generic ledger app. It is an intelligent business-record assistant that lets a shop owner describe their day in their own words and produces structured, accountant-ready records automatically.

**Positioning statement (internal reference):**
> "The accounting tool built for how Nepal's small businesses actually think and speak."

**What makes it different:**
- Language-first: Nepali, Romanised Nepali, English — or mixed
- Confirmation-first: nothing is recorded without user review
- Account-effects visible: every entry shows what increases, what decreases, and why
- Accountant-compatible: organised records for periodic professional review

---

## 4. Current Development Status

The product is in an invitation-only founding pilot. The following is true:

- ✅ Core transaction-recording concept exists and is being tested
- ✅ Ask MokXya (language-to-entry) is the central feature
- ✅ Users can record: sales, purchases, expenses, payments, stock-linked entries
- ✅ Confirmation-before-recording is a non-negotiable principle
- ⚠️ Many advanced features (reporting, export, role-based access) are roadmap items
- ❌ Product is not publicly released
- ❌ No public pricing has been announced
- ❌ No launch date has been announced
- ❌ No regulatory certification has been claimed or verified

**All content must reflect this status. No section of the site may imply the product is publicly available, fully featured, or compliance-certified.**

---

## 5. Primary Audience

**Owner-operated Nepalese retail and trading businesses.**

Profile:
- Owner runs the business day-to-day
- 1–5 staff total
- Daily transactions: cash sales, QR payments, credit sales, stock purchases
- May currently use: notebook/khata, Saral, Excel, or nothing
- Mix of Nepali and English in daily speech
- Accountant visits quarterly or at year-end, if at all
- Not trained in accounting — records by memory or habit

Geographic focus: Nepal. Urban and semi-urban markets first.

Business categories supported in pilot phase:
- Garments, Footwear, Cosmetics, Stationery, Mobile accessories
- Electrical goods, Hardware, Household goods
- Small wholesale/distribution, General traders

---

## 6. Secondary Audience

- Business owners in adjacent categories considering the pilot
- Accountants or tax professionals looking for clients who use MokXya-organised records
- Potential investors or partners (must see honest product status)
- Journalists or researchers covering Nepalese tech/fintech

---

## 7. Audience Problems

Problems verified from current site content and target-market knowledge:

1. Customer dues are difficult to track manually
2. Stock runs out without warning — no running inventory view
3. Cash, bank, and QR records are kept separately and drift apart
4. Sales happen but actual profit is unclear at month-end
5. Business and personal cash become mixed in notebooks
6. Records are incomplete or disorganised when an accountant arrives
7. Traditional accounting software (Tally, Saral) requires accounting knowledge
8. Nepali-language workflows are not supported in most tools
9. Entry confirmation is rare — mistakes are hard to undo

---

## 8. Core Product Promise

**Nepali lead:**
आफ्नै भाषामा, सजिलो व्यवसायिक हिसाब।

**Primary English headline:**
Accounting that understands how your business speaks.

**Supporting explanation:**
Type or speak a sale, purchase, expense, or payment in Nepali, Roman Nepali, or English. MokXya prepares a clear accounting preview for you to review before anything is recorded.

**Three trust points (compact):**
- Review before posting
- Built for everyday Nepali business language
- Records organised for accountant review

---

## 9. Honest Claim Boundaries

### Approved Claims
- MokXya understands Nepali, Romanised Nepali, and English descriptions of business events
- Nothing is recorded until the user explicitly confirms
- MokXya produces structured, date-ordered records
- Records are designed to be reviewed by a professional accountant
- Selected founding-pilot businesses receive free access during the controlled pilot period
- Future pricing will be announced before paid activation begins
- Pilot access does not guarantee permanent free access

### Forbidden Claims
- 100% accurate / guaranteed accuracy
- Guaranteed tax compliance (NFRS, VAT, IRD)
- Bank-grade / military-grade security
- Replaces an accountant
- Works completely offline
- Publicly available
- Free forever
- One year free (unless formally announced)
- Certified by any regulator
- Any specific user count, revenue, or business statistic
- Any testimonial not directly provided by a named, real pilot participant

---

## 10. Brand-Name Rules

| Situation | Correct |
|-----------|---------|
| Product mention (general) | MokXya Hisab |
| Company mention | MokXya |
| AI chat feature | Ask MokXya |
| ERP product (if mentioned) | MokXya ERP |
| Tagline | Freedom from Complexity |
| In Nepali contexts | MokXya Hisab (same spelling) |

**Never**: Mok-Xya, Mokshya, Moc-Xya, MokXya-Hisab (hyphenated), mokxya (lowercase in headings)

---

## 11. Original Logo Rules

The only authorised source: `design-inputs/mokxya-original-brand-board.png`

### What the brand board contains (verified 2026-07-14):
1. **Mark-only (top centre)**: Deep navy M-shape with teal diagonal X stroke cutting through the counter-space. Clean geometric letterform.
2. **Full light-surface lockup (centre)**: Mark + "MokXya" wordmark (navy M, o, k; teal X; navy ya) + "— Hisab —" in teal with teal rule dashes + "Freedom from Complexity" tagline in tracked small caps.
3. **App icon (bottom left)**: Rounded-corner white-background with mark only.
4. **Dark horizontal lockup (bottom right)**: Deep navy rectangle, white mark, white "MokXya" wordmark, teal "— Hisab —", "Freedom from Complexity".

### Non-Negotiable Rules
- Do not redraw, trace, vectorise, or reinterpret the mark
- Do not alter the navy/teal colour relationships
- Do not change the geometry of the M or the X stroke
- Do not replace the mark with letters, mountains, arrows, atoms, AI stars, or generic icons
- The existing `BrandMark.tsx` SVG (a triangle/cross) is wrong and must be fully replaced
- Use only pixel-accurate crops from the brand board source
- All production assets must be derived from the same source file
- Preserve an untouched copy of the source at `design-inputs/mokxya-original-brand-board.png`

---

## 12. Visual Design Direction

**Aesthetic goal**: Premium Nepal-first financial product. NOT a generic SaaS template.

**Feel**: Disciplined, confident, trustworthy. Like a well-designed accounting dashboard, not a startup landing page.

**Inspiration category**: Professional financial-product web presence. Think Xero, Monzo, or Stripe — but localised for Nepal's business language and economic context.

**Motion**: Restrained. Transitions and hover states only. No auto-playing animations. Reduced-motion fully respected.

**Layout**: Strong grid discipline. Generous whitespace. Deliberate section hierarchy.

---

## 13. Colour Direction

All colours derived from the real logo:

| Token | Hex | Use |
|-------|-----|-----|
| `--color-brand-navy` | `#0d284a` | Primary brand, headings, logo navy |
| `--color-brand-teal` | `#0f766e` | Accent, logo teal, teal typography |
| `--color-bg-page` | `#f8fafc` | Page background (warm white) |
| `--color-surface-elevated` | `#ffffff` | Cards, overlays |
| `--color-surface-subtle` | `#f1f5f9` | Section alternates |
| `--color-text-main` | `#0f172a` | Body text (graphite) |
| `--color-text-muted` | `#475569` | Secondary text (muted slate) |
| `--color-border` | `#e2e8f0` | Dividers, card borders |
| `--color-success` | `#15803d` | Positive effects, confirmations |
| `--color-danger` | `#b91c1c` | Negative effects, errors |
| `--color-warning` | `#b45309` | Roadmap labels, cautions |

**Dark surface** (footer, hero CTAs):
- Background: `#0d284a` (navy)
- Text: `#f8fafc`
- Teal accent: `#2dd4bf` (lighter teal for dark surface legibility)

**WCAG AA minimum contrast required for all text.**

Light mode is the deterministic default. Dark mode may exist as a user-activated option only.

---

## 14. Typography Direction

**Primary sans-serif**: Inter (Google Fonts)
- Weights: 400, 500, 600, 700
- Used for all UI, body, headings

**Devanagari**: Noto Sans Devanagari (Google Fonts)
- Applied via `.lang-ne` class
- Line height: 1.6 minimum (Devanagari ascenders need more space)
- Used for Nepali text in hero, workflow, demo examples

**Financial numbers**: `font-variant-numeric: tabular-nums`
- Never monospace for numbers in real UI contexts
- Tabular nums only

**Type scale (fluid where applicable)**:
```
display:    clamp(2.5rem, 5vw, 3.5rem)   — hero headline
h1:         clamp(2rem, 4vw, 2.75rem)    — page titles
h2:         clamp(1.5rem, 3vw, 2.25rem)  — section headings
h3:         1.25rem                       — subsection headings
body:       1rem                          — base (16px)
small:      0.875rem                      — captions, labels
label:      0.75rem uppercase             — eyebrow labels
```

**Tracking**: Section labels use `letter-spacing: 0.08em`. Tagline uses tracked spacing.

---

## 15. Illustration and Imagery Direction

**Preferred approach**: Code-built UI component previews (not screenshots, not stock art, not SVG illustrations).

### What to build as code
- Ask MokXya conversation preview (hero right side)
- Business dashboard preview (NPR figures, receivables, activity)
- Mobile entry screen preview (quick-action grid)
- Accounting entry preview (tabular, with effects)

### Permitted background treatment
- Subtle grid/ledger lines at very low opacity (< 5%)
- Thin horizontal rules as dividers
- Solid colour section backgrounds alternating warm white / slate

### Explicitly forbidden imagery
- Purple, violet, or neon gradient hero images
- Glowing AI orbs or stars
- Robot or humanoid AI illustrations
- Glassmorphic floating cards
- Mountain photos or scenery
- Nepal flag or map as decoration
- Mandala or decorative motifs
- Random floating geometric shapes
- Stock photography of people, offices, or devices
- Fake browser chrome screenshots

---

## 16. Explicit Visual Anti-Patterns

Each of these exists in the current site and must be eliminated:

1. **Fake logo mark** — triangle/cross SVG replacing the real M/X geometry
2. **Purple gradient hero image** — `src/assets/hero.png` (Vite default)
3. **Monitor icon in nav** — theme toggle using a monitor/screen icon
4. **Repetitive card grid** — six identical bordered cards in every section
5. **Red alarming warning block** — `DevStatusSection` large red-bordered panel
6. **Speculative pricing cards** — three-column "Free / TBA / TBA" grid
7. **Dead contact column** — footer CONTACT column that renders nothing
8. **Monospace font for transaction text** — code-style rendering in demo
9. **"Interactive product concept" label** — undermines confidence
10. **"Development Demonstration" floating badge** — undermines confidence
11. **Generic centred text-only hero** — no product proof visible above fold

---

## 17. Homepage Information Architecture

The final homepage section order:

```
A. Header
   — Sticky, clean light background
   — Real logo (compact horizontal lockup)
   — Navigation: Home | How It Works | Features | About | Founding Pilot
   — CTA button: "Apply for the Founding Pilot" → /pilot

B. Hero
   — Desktop: Two-column (left: copy + CTAs; right: Ask MokXya product preview)
   — Mobile: Strong single-column sequence (copy → preview)
   — Nepali lead, primary headline, supporting paragraph
   — Primary CTA: Apply for the Founding Pilot → /pilot
   — Secondary CTA: See the product flow → #interactive-demo
   — Three compact trust points below CTAs

C. Compact Capability/Trust Strip
   — 5–6 short capability statements (no cards)
   — Thin dividers, no box containers

D. Problem-to-Outcome Section
   — Each pair: problem statement → MokXya outcome
   — Not a card grid: use comparison rows or editorial layout

E. Three-Step Workflow
   — Strong numbered sequence: Say → Review → Confirm
   — Desktop horizontal, mobile vertical
   — Nepali example for each step

F. Main Ask MokXya Product Experience
   — id="interactive-demo" (anchor target)
   — Full deterministic state machine (select → interpreting → preview → confirmed)
   — 3+ language examples: Nepali, Romanised Nepali, English
   — No "Interactive product concept" label
   — "Illustrative workflow" disclosure in small print only
   — Accessible aria-live announcements

G. Core Business Capabilities
   — Sales, Purchases, Expenses, Customer dues, Cash/bank/QR, Stock, Reports
   — Roadmap items clearly marked
   — Varied layout (not identical cards)

H. Control, Review, and Accountant-Readiness
   — "You stay in control" section
   — Preview → Edit → Confirm → Organised record
   — Accountant-review positioning (not replacement)
   — No regulatory certification claims

I. Suitable Business Types
   — 10 pilot business categories
   — Honest scope statement ("not initial targets: hospitality, manufacturing…")

J. Founding Pilot Offer
   — Single honest offer section
   — No pricing grid (no "Free / TBA / TBA")
   — Pilot is free, future pricing TBA, no permanence guarantee
   — CTA: Apply for the Founding Pilot → /pilot

K. FAQ
   — Accordion pattern
   — Content from src/content/faq.ts

L. Final CTA
   — Dark navy background
   — Strong conversion copy
   — Single primary CTA → /pilot
   — No dead contact scroll

M. Footer
   — Dark navy background
   — Real logo (dark-surface lockup)
   — PRODUCT / LEGAL columns only (CONTACT column hidden when empty)
   — Product status in one restrained sentence
   — Legal disclaimer
```

---

## 18. Route Architecture

| Route | Component | Notes |
|-------|-----------|-------|
| `/` | `pages/Home.tsx` | Main conversion page |
| `/pilot` | `pages/Pilot.tsx` | Focused application page |
| `/about` | `pages/About.tsx` | Why, principles, honest status |
| `/privacy` | `pages/Privacy.tsx` | Marketing site privacy policy |
| `/terms` | `pages/Terms.tsx` | Pre-launch terms of service |
| `*` | `pages/NotFound.tsx` | Branded 404, noindex |

No additional routes planned. No server-side routes. SPA handled by `public/_redirects`.

---

## 19. Proposed Component Architecture

```
src/
├── assets/
│   └── brand/
│       ├── mokxya-mark.png          ← cropped M/X mark (transparent bg)
│       ├── mokxya-lockup-light.png  ← full lockup, light surface
│       ├── mokxya-lockup-dark.png   ← full lockup, dark surface
│       ├── mokxya-compact-light.png ← header horizontal lockup
│       └── mokxya-compact-dark.png  ← footer horizontal lockup
├── components/
│   ├── brand/
│   │   └── BrandLogo.tsx           ← replaces BrandMark.tsx
│   ├── common/
│   │   ├── Button.tsx              ← keep (fix asChild warning)
│   │   ├── Section.tsx             ← keep
│   │   ├── Container.tsx           ← keep
│   │   ├── Stack.tsx               ← keep
│   │   ├── Cluster.tsx             ← keep
│   │   ├── Badge.tsx               ← keep
│   │   ├── Card.tsx                ← keep (use sparingly)
│   │   ├── SkipLink.tsx            ← keep
│   │   ├── Accordion.tsx           ← new (for FAQ)
│   │   └── VisuallyHidden.tsx      ← keep
│   ├── layout/
│   │   ├── Header.tsx              ← full rebuild
│   │   ├── Footer.tsx              ← full rebuild
│   │   └── Layout.tsx              ← minor update
│   ├── home/
│   │   ├── HeroSection.tsx         ← full rebuild
│   │   ├── TrustStripSection.tsx   ← new
│   │   ├── ProblemsSection.tsx     ← refactor
│   │   ├── WorkflowSection.tsx     ← refactor
│   │   ├── InteractiveDemoSection.tsx ← substantial rebuild
│   │   ├── CapabilitiesSection.tsx ← replaces BenefitsSection
│   │   ├── ControlSection.tsx      ← replaces SafetySection
│   │   ├── SuitableBusinessSection.tsx ← refactor
│   │   ├── PilotOfferSection.tsx   ← replaces PricingSection+DevStatusSection
│   │   ├── FaqSection.tsx          ← refactor
│   │   └── FinalCtaSection.tsx     ← replaces CtaSection
│   ├── product/
│   │   ├── AskMokXyaPreview.tsx    ← new (hero right panel)
│   │   ├── DashboardPreview.tsx    ← improve
│   │   └── MobileEntryPreview.tsx  ← improve
│   ├── pilot/
│   │   └── PilotForm.tsx           ← new (extracted from Pilot.tsx)
│   └── seo/
│       ├── Meta.tsx                ← update (real URL, real OG)
│       └── StructuredData.tsx      ← update (real logo URL)
├── content/
│   ├── home.ts                     ← homepage section content
│   ├── navigation.ts               ← nav links
│   ├── faq.ts                      ← FAQ Q&A pairs
│   ├── pilot.ts                    ← pilot page copy
│   └── legal.ts                    ← last-updated dates, legal copy config
├── config/
│   └── site.ts                     ← fix URL to mokxya.pages.dev
├── hooks/
│   └── useHashNavigation.ts        ← new (smooth scroll with header offset)
├── lib/
│   ├── analytics.ts                ← keep, clean up
│   └── pilotAdapter.ts             ← new (fail-closed submission logic)
├── pages/
│   ├── Home.tsx                    ← updated section order
│   ├── Pilot.tsx                   ← full rebuild
│   ├── About.tsx                   ← full rebuild
│   ├── Privacy.tsx                 ← improve readability + fix date
│   ├── Terms.tsx                   ← improve readability + fix date
│   └── NotFound.tsx                ← branded, noindex
├── styles/
│   ├── tokens.css                  ← full rebuild from real logo
│   ├── globals.css                 ← maintain + extend
│   └── utilities.css               ← new (shared utility classes)
├── types/
│   └── index.ts                    ← shared TypeScript types
└── app/
    └── ThemeProvider.tsx           ← fix: light default, no auto-dark
```

---

## 20. Proposed Content Architecture

All content extracted from component files into typed TypeScript files:

**`src/content/home.ts`** — hero, trust strip, problems, workflow, capabilities, control, suitable businesses

**`src/content/navigation.ts`** — nav links, footer links, route definitions

**`src/content/faq.ts`** — FAQ questions and answers (currently inline in FaqSection)

**`src/content/pilot.ts`** — pilot page copy, form field labels, validation messages

**`src/content/legal.ts`** — last-updated dates, legal copy, product status sentence

**`src/config/site.ts`** — single source of truth for URL, brand names, environment config

Content in components is limited to layout and rendering logic. No large text arrays hardcoded inside JSX.

---

## 21. Responsive Design Rules

### Breakpoints
```css
/* Mobile first */
/* sm  */ @media (min-width: 480px)
/* md  */ @media (min-width: 768px)
/* lg  */ @media (min-width: 1024px)
/* xl  */ @media (min-width: 1280px)
/* 2xl */ @media (min-width: 1440px)
```

### Rules
- Minimum supported width: 320px (no horizontal overflow)
- Hero: 2-column desktop (lg+), single-column mobile
- Navigation: hamburger below 900px
- Touch targets: minimum 44×44px on mobile
- Nepali text: must not clip or wrap awkwardly on 320px
- Product preview: scales gracefully, does not overflow
- Footer: stacks to single column on mobile
- Hash-scroll: correct offset for sticky header height on all breakpoints
- Form: full-width fields on mobile, 2-col grid on desktop

### Test viewports (required in Phase 7)
320×568, 360×800, 390×844, 768×1024, 1024×768, 1366×768, 1440×900, 1920×1080

---

## 22. Accessibility Requirements

Standard: WCAG 2.1 Level AA minimum.

| Requirement | Implementation |
|-------------|---------------|
| Semantic landmarks | `header`, `nav`, `main`, `footer`, `section` |
| Heading hierarchy | Single `<h1>` per route; h1→h2→h3 no skips |
| Keyboard navigation | Tab/Enter/Space/Escape/Arrow keys |
| Focus indicator | Visible on all interactive elements |
| Skip link | `<SkipLink />` to `#main-content` |
| Mobile menu | aria-expanded, aria-controls, closes on Escape |
| Demo live region | aria-live="polite" for all state changes |
| Form fields | `<label for="">`, aria-describedby for help text |
| Form errors | Error summary, focus moves to first error |
| Image alt | Decorative → aria-hidden="true"; informative → alt text |
| Colour contrast | All text ≥ 4.5:1, large text ≥ 3:1 |
| Reduced motion | All animations check prefers-reduced-motion |
| Zoom | 200% zoom — no content hidden, no horizontal scroll |
| Touch targets | 44×44px minimum |
| No automated violations | No "serious" or "critical" axe/pa11y findings |

---

## 23. Conversion Requirements

### Goal
Pilot applications via `/pilot`.

### Rules
1. Every pilot CTA on every page must navigate to `/pilot`
2. The "See the product flow" CTA must scroll to `#interactive-demo` with correct offset
3. No dead CTAs anywhere on the site
4. No self-scrolling button that leads nowhere
5. The pilot form must fail-closed (see Section 24)
6. Navigation active state must correctly indicate current route/section

---

## 24. Pilot Form Requirements

The pilot form must implement a strict fail-closed adapter with four states:

**State A — Configured Google Form**: If `VITE_PILOT_FORM_URL` is set, embed or link to that real endpoint.

**State B — WhatsApp fallback**: If `VITE_WHATSAPP_NUMBER` is set, open an encoded qualification summary via `wa.me`.

**State C — Email fallback**: If `VITE_CONTACT_EMAIL` is set, open a prefilled `mailto:` with form data.

**State D — Unconfigured (current state)**: Show a clear "Applications opening soon" message. Do not show a submit button. Do not simulate submission success. Do not store any data.

### Form Fields (when active)
- Owner name (required)
- Phone (required, Nepal-friendly validation)
- City (required)
- Business name (required)
- Business type (select, required)
- Staff range (select, required)
- Current record method (radio)
- Maintains inventory (yes/no)
- Credit sales (yes/no)
- Preferred language (checkbox multi-select)
- Consent (required checkbox)

### Security Rules
- Never store form data in localStorage
- Never log form data to console in production
- Never include form data in analytics events
- Never put real contact details in source code

---

## 25. SEO Requirements

| Item | Requirement |
|------|-------------|
| Canonical base URL | `https://mokxya.pages.dev` (until custom domain is live) |
| Title format | `[Page Title] — MokXya Hisab` |
| Meta description | Unique per route, <160 chars, includes Nepali business context |
| Canonical tag | Set per route from `siteConfig.url` |
| Open Graph | og:type, og:url, og:title, og:description, og:image |
| OG image | Real branded image (not placeholder), 1200×630px |
| Twitter card | summary_large_image |
| robots.txt | Allow all; correct sitemap URL |
| sitemap.xml | All 5 routes with correct base URL |
| 404 page | `<meta name="robots" content="noindex">` |
| Structured data | Organization + SoftwareApplication JSON-LD; real logo URL |
| hreflang | Not required (single-language site) |

---

## 26. Social Sharing Requirements

- OG image: 1200×630px, real logo on navy or warm-white background
- No placeholder, no fake product screenshot
- Title and description match actual page content
- Image URL uses correct canonical base
- Structured data logo points to a real, accessible image URL

---

## 27. Performance Requirements

| Metric | Target |
|--------|--------|
| JS bundle (gzipped) | < 200kB ideally; current 93kB is excellent |
| CSS bundle (gzipped) | < 10kB |
| LCP (Largest Contentful Paint) | < 2.5s on 4G mobile |
| No layout shift | Reserve image dimensions |
| Lazy loading | Below-fold images/previews where appropriate |
| No unused dependencies | Audit bundle in Phase 7 |
| No Node modules in dist | Confirmed by build check |
| Static deployment | Cloudflare Pages, no server-side rendering |

---

## 28. Cloudflare Pages Requirements

| Item | Status/Requirement |
|------|-------------------|
| Production branch | `main` |
| Build command | `npm run build` |
| Output directory | `dist` |
| SPA redirect | `public/_redirects`: `/* /index.html 200` |
| Security headers | `public/_headers`: maintain all existing headers |
| Custom domain | Not yet — use `mokxya.pages.dev` as canonical |
| Wrangler deploy | Not required for Pages |
| Environment variables | Set in Cloudflare dashboard; never in source |
| `node_modules` tracked | Never — confirmed excluded by `.gitignore` |
| `dist` tracked | Never — confirmed excluded by `.gitignore` |

---

## 29. Testing Strategy

### Unit Tests (Vitest + Testing Library)
- Run: `npm test`
- Location: `src/test/`
- Required coverage:
  - Brand logo renders correct image (no fake BrandMark)
  - Header: all navigation links present
  - Mobile menu: opens, closes, keyboard accessible
  - Hero: Nepali lead, headline, CTA text, CTA destinations
  - Interactive demo: all 3 states (select, preview, confirmed)
  - Demo: all language examples
  - Pilot form: all 4 adapter states
  - Pilot form: consent validation, phone validation
  - Legal pages: Privacy, Terms render correctly
  - 404 page renders
  - About page renders correct content
  - Meta: correct title per route
  - Canonical: correct URL per route

### E2E Tests (Playwright)
- Run: `npm run test:e2e`
- Browsers: Chromium + Mobile Chrome (Pixel 5)
- Location: `tests/e2e/`
- Required coverage:
  - Navigate homepage, pilot, about, privacy, terms
  - Mobile menu toggle (open, close, Escape key)
  - Hash navigation: click "See the product flow" → scrolls to `#interactive-demo`
  - Hero CTA → /pilot
  - Pilot page: State D (unconfigured) renders "Applications opening soon"
  - Semantic landmarks present on every route
  - Skip link functionality
  - 404 page renders for unknown route
  - Page titles correct per route

### Screenshot Tests
- Produced by Phase 3, 4, 7, 8 as documented in each phase report

---

## 30. Phase-by-Phase Implementation Plan

### Phase 1 — Original Logo, Brand Assets, Design Tokens, Header and Footer
**Objective**: Establish authentic brand foundation; replace the fake logo; build the definitive header and footer.
**Scope**:
- Brand asset script (crop from brand board)
- All logo variants (mark, lockup light, lockup dark, compact, favicon, OG source)
- `BrandLogo.tsx` component (replaces `BrandMark.tsx`)
- Rebuilt Header (real logo, simplified nav, keyboard-accessible mobile menu, no monitor icon)
- Rebuilt Footer (dark lockup, hidden empty columns, honest status sentence)
- `tokens.css` rebuilt from real logo colours (navy, teal, warm white, graphite, slate)
- Light mode as deterministic default (remove prefers-color-scheme auto-dark)
- Remove generic assets (hero.png, react.svg, vite.svg)
**Files**: `scripts/prepare-brand-assets.py`, `src/assets/brand/*`, `public/brand/*`, `src/components/brand/BrandLogo.tsx`, `src/components/layout/Header.tsx`, `src/components/layout/Footer.tsx`, `src/styles/tokens.css`, `src/app/ThemeProvider.tsx`
**Prohibited**: Homepage body, pilot page, SEO changes
**Tests**: Logo renders, header nav, mobile menu, no fake mark, no broken image paths
**Screenshots**: Header close-up, footer close-up, 1440 and 390 views
**Pass criteria**: Build PASS, lint 0 errors, all unit tests PASS, logo visible and correct, no monitor icon, no fake BrandMark

### Phase 2 — Information Architecture and Conversion Copy
**Objective**: Restructure the homepage, centralise content, fix navigation, correct canonical URL.
**Scope**:
- `src/content/` directory with all content files
- Homepage section order (A–M as specified)
- Delete or merge redundant sections
- Fix `site.ts` URL to `https://mokxya.pages.dev`
- Fix `robots.txt` and `sitemap.xml`
- Fix hash-navigation offsets
- Replace PricingSection with honest pilot offer
- Replace "Interactive product concept" language
**Files**: `src/content/*.ts`, `src/pages/Home.tsx`, `src/config/site.ts`, `public/robots.txt`, `public/sitemap.xml`, all section files
**Prohibited**: Final visual polish of hero, full interactive demo rebuild
**Tests**: Content validation, correct section IDs, correct navigation, correct URLs
**Pass criteria**: Build PASS, lint PASS, all tests PASS, no mokxya.com canonical, no pricing cards

### Phase 3 — Premium First View and Hero Product Experience
**Objective**: Replace the centred text-only hero with a two-column premium first view including a code-built product preview.
**Scope**:
- Two-column hero (left: copy+CTAs, right: Ask MokXya preview)
- `AskMokXyaPreview.tsx` component (code-built, no screenshots)
- Trust strip below hero
- No purple image, no stock art
- Mobile single-column sequence
- Reduced-motion support
**Files**: `src/components/home/HeroSection.tsx`, `src/components/product/AskMokXyaPreview.tsx`
**Prohibited**: Lower sections redesign (Phases 4+)
**Screenshots**: `docs/redesign/phase-3/desktop-1440x900.png`, `docs/redesign/phase-3/mobile-390x844.png`
**Pass criteria**: WCAG AA contrast, no hero text hidden under header, no horizontal overflow at 320px, product preview visible

### Phase 4 — Product Story, Interactive Demo, Features and Business Fit
**Objective**: Rebuild all product-explanation sections with premium layouts and a polished interactive demo.
**Scope**:
- WorkflowSection (strong numbered sequence)
- InteractiveDemoSection (3 language examples, all states, aria-live, keyboard support)
- CapabilitiesSection (varied layout, roadmap items marked)
- ControlSection ("You stay in control")
- SuitableBusinessSection (honest scope)
- DashboardPreview and MobileEntryPreview improved
**Files**: All home section components, product preview components
**Prohibited**: Pilot page, SEO, legal pages
**Tests**: All demo states, all language examples, keyboard navigation, reduced-motion
**Pass criteria**: All states transition correctly, no "Development Demonstration" badge, disclosure in small print only

### Phase 5 — Founding Pilot Conversion and Real Contact Flow
**Objective**: Build the pilot page as a focused conversion page with a fail-closed form adapter.
**Scope**:
- `/pilot` full rebuild
- `pilotAdapter.ts` (all 4 states)
- All homepage CTAs verified → `/pilot`
- `.env.example` updated
- `docs/PILOT_FORM_SETUP.md` created
**Files**: `src/pages/Pilot.tsx`, `src/lib/pilotAdapter.ts`, `src/components/pilot/PilotForm.tsx`, `.env.example`
**Prohibited**: Do not connect a real backend
**Tests**: All 4 adapter states, consent validation, no fake success
**Pass criteria**: State D shows "Applications opening soon", no fake submit button when unconfigured

### Phase 6 — About, Trust, Legal, SEO and Social Sharing
**Objective**: Complete About page, legal pages, SEO metadata, branded OG image, and NotFound.
**Scope**:
- About page (principles, controlled pilot, no fabricated details)
- Privacy and Terms (readable, real dates from `legal.ts`)
- Branded OG image (1200×630px)
- Meta and StructuredData using real URL and real logo
- NotFound: branded, noindex
- All routes: correct title, description, canonical
**Files**: `src/pages/About.tsx`, `src/pages/Privacy.tsx`, `src/pages/Terms.tsx`, `src/pages/NotFound.tsx`, `src/components/seo/Meta.tsx`, `src/components/seo/StructuredData.tsx`, `public/brand/og-image.png`
**Tests**: Canonical per route, OG image exists, noindex on 404, legal routes render
**Pass criteria**: No mokxya.com canonical, no placeholder OG, no "Just now" dates

### Phase 7 — Responsive Polish, Accessibility, Performance and Test Hardening
**Objective**: Full QA across all breakpoints, accessibility gate, performance optimisation, test hardening.
**Scope**:
- 8-viewport responsive QA
- Fix all overflow, clipping, spacing, scaling issues
- Full accessibility audit and fixes
- Remove unused dependencies and assets
- Harden unit and E2E tests
- Final candidate screenshots
**Prohibited**: New features
**Screenshots**: `docs/redesign/phase-7/` (desktop, tablet, mobile for all key pages)
**Pass criteria**: No horizontal overflow at any breakpoint, no automated serious/critical a11y violations, build PASS, all tests PASS

### Phase 8 — Final Release Audit and Cloudflare Pages Readiness
**Objective**: Final audit, clean build from lockfile, documentation update, commit plan.
**Scope**:
- Confirm all gates from Phases 1–7 still pass
- Clean `npm ci` + full test suite
- Update README, DEPLOYMENT.md, PRE_LAUNCH_CHECKLIST.md
- Create REDESIGN_FINAL_REPORT.md
- Final screenshots
- Commit plan (no automatic deploy)
**Pass criteria**: Every gate passes. Final verdict: "FINAL REDESIGN GATE PASSED — READY TO COMMIT AND DEPLOY TO MOKXYA.PAGES.DEV"

---

## 31. Definition of Done

The redesign is complete when ALL of the following are true:

**Brand**
- [ ] Real MokXya M/X logo is used in header, footer, OG image, favicon, structured data
- [ ] No fake BrandMark SVG exists anywhere in the codebase
- [ ] No React, Vite, purple gradient, or generic placeholder assets remain

**Content**
- [ ] No dead CTAs on any page
- [ ] All pilot CTAs lead to `/pilot`
- [ ] No speculative pricing cards
- [ ] No "Interactive product concept" or "Development Demonstration" labels
- [ ] No fabricated testimonials, user counts, certifications, or launch dates
- [ ] No "Just now" dates in legal pages
- [ ] No "Contact the Founder" button that scrolls to empty section

**Technical**
- [ ] `siteConfig.url` is `https://mokxya.pages.dev`
- [ ] `robots.txt` and `sitemap.xml` use `https://mokxya.pages.dev`
- [ ] Pilot form fails closed when unconfigured
- [ ] Light mode is deterministic default
- [ ] No prefers-color-scheme auto-dark override
- [ ] No monitor icon in navigation
- [ ] `src/assets/hero.png`, `react.svg`, `vite.svg` deleted
- [ ] CONTACT footer column hidden when empty

**Quality**
- [ ] Build: PASS (exit 0)
- [ ] Lint: 0 errors
- [ ] Unit tests: all PASS
- [ ] E2E tests: all PASS (Chromium + Mobile Chrome)
- [ ] No serious/critical automated accessibility violations
- [ ] No horizontal overflow at 320px or any tested breakpoint
- [ ] WCAG AA contrast on all text

**Deployment**
- [ ] `public/_redirects` intact
- [ ] `public/_headers` intact
- [ ] `.env.example` accurate and complete
- [ ] No secrets in repository
- [ ] No `node_modules` or `dist` tracked in git
- [ ] `design-inputs/` source preserved in repository

---

*This brief is the single authoritative reference for all redesign decisions.*
*Last updated: 2026-07-14 | Phase 0 Complete*
