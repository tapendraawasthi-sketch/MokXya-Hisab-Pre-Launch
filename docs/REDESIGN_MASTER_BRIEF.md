# MokXya Hisab — Redesign Master Brief
*Version 1.0 — Phase 0 Baseline — 2026-07-14*

---

## 1. Fixed Brand Rules

### Approved Spellings (Non-Negotiable)
| Term | Correct | Never Use |
|------|---------|-----------|
| Company name | MokXya | Mok-Xya, Mokshya, Moc-Xya |
| Product name | MokXya Hisab | MokXya-Hisab, Mokxya Hisab |
| ERP product | MokXya ERP | — |
| AI feature | Ask MokXya | — |
| Tagline | Freedom from Complexity | — |
| Old names | — | Orbix, Chat ERP |

### Logo Rules
- The real logo source is `design-inputs/mokxya-original-brand-board.png`
- Do **not** redraw, reinterpret, or simplify the M/X mark
- Do not change navy/teal colour geometry
- Do not replace with letters, mountains, arrows, atoms, AI stars, or generic icons
- The existing `BrandMark.tsx` SVG (triangle-cross) is a temporary placeholder — it must be fully replaced

### Logo Brand Board Contents
The brand board contains four assets:
1. **Mark-only** — standalone M/X navy/teal mark (top center)
2. **Full lockup** — M/X mark + "MokXya — Hisab —" wordmark + "Freedom from Complexity" tagline
3. **App icon** — rounded-corner white-background mark (bottom left)
4. **Dark horizontal lockup** — navy rectangle, white/teal logo + full wordmark (bottom right)

### Colour System (Derived from Logo)
- **Deep navy**: `#0d284a` (primary brand, logo M strokes)
- **Restrained teal**: `#0f766e` (logo X stroke, accent)
- **Warm white**: `#f8fafc` (page background)
- **Graphite**: `#0f172a` (body text)
- **Muted slate**: `#475569` (secondary text)
- **Success green**: `#15803d`
- **Danger red**: `#b91c1c`
- **Warning amber**: `#b45309`

---

## 2. Product Positioning

### What MokXya Hisab Does (Verified, Approved)
MokXya Hisab helps small Nepalese business owners record daily business transactions by describing them in Nepali, Romanised Nepali, or English. MokXya prepares a structured preview showing the accounting effects, explains the entry clearly, and records it only after the user explicitly confirms.

Covered transaction types:
- Sales (cash and credit)
- Purchases
- Expenses
- Customer payment collection
- Supplier payment
- Cash/bank/QR receipts
- Stock movements (linked to sales/purchases)

### What MokXya Does NOT Do (Do Not Claim)
- Replace professional accountants
- Guarantee tax compliance
- Guarantee NFRS/regulatory compliance
- Provide 100% AI accuracy
- Complete offline support
- Automatic (unconfirmed) recording of any entry

### Product Status
- Under active development
- Entering a controlled, invitation-only founding pilot
- Not yet publicly available
- Pilot businesses receive free access during the pilot period
- Future pricing has not been finalised

---

## 3. Target Audience

### Primary Audience
Owner-operated Nepalese retail and trading businesses. Characteristics:
- 1–5 staff (typically the owner does the accounts)
- Daily cash, credit, and QR transactions
- Mix of Nepali and Romanised Nepali in everyday speech
- Currently using notebooks, Saral, or Excel — if anything
- A real accountant may review records quarterly or at year-end

### Pilot Business Categories
- Garments
- Footwear
- Cosmetics
- Stationery
- Mobile accessories
- Electrical goods
- Hardware
- Household goods
- Small wholesale/distribution
- General traders

Explicitly not initial targets: hospitality, manufacturing, services, NGOs, complex multi-location businesses.

---

## 4. Honest Product-Status Rules

### In Every Phase
- Always distinguish between current capabilities and roadmap items
- Use "Pilot" framing consistently — controlled, invitation-only
- Never use phrases like "coming soon" for unconfirmed features
- Mark roadmap items with a visible but restrained "In development" or "Roadmap" indicator
- Never display fake launch dates

### Phrases That Are Approved
- "Selected founding-pilot businesses receive free access during the controlled pilot"
- "Future pricing will be announced before paid activation"
- "Pilot access does not guarantee permanent free access"
- "Currently under development — joining the pilot gets you early access"

### Phrases That Are Forbidden
- "Guaranteed compliance"
- "100% accurate"
- "Bank-grade security"
- "Military-grade encryption"
- "Free forever"
- "One year free"
- "Replaces your accountant"
- Any claim not verifiable from the repository and approved by the product owner

---

## 5. Visual Direction

### Aesthetic Goal
Premium Nepal-first financial product. Not a generic SaaS template.

### Approved Visual Language
- **Colours**: Deep navy, restrained teal, warm white, graphite, muted slate
- **Typography**: Inter (primary), Noto Sans Devanagari (Nepali/Devanagari)
- **Radius**: Restrained — 4px–8px. No extreme pill-shaped cards
- **Shadows**: Subtle — single-layer, low blur
- **Spacing**: Generous — let content breathe; consistent 8px grid
- **Line weight**: Clean, financial-product precision

### Forbidden Visual Patterns
- Purple AI gradients
- Neon colours
- Glassmorphism / glowing borders
- AI robot imagery
- Stock photography
- Mountain photos (Nepal cliché)
- Random floating blobs / decorative shapes
- Excessive card grids (six identical boxes in a row)
- Generic SaaS hero with floating UI screenshots
- Animated sparkle/star AI indicators

### Background Geometry (If Used)
- Subtle ledger grid lines at very low opacity
- Thin rule separators
- NO bold decorative shapes

---

## 6. Information Architecture

### Route Map
```
/              — Homepage (complete pre-launch story)
/pilot         — Founding pilot application page
/about         — Why MokXya exists, principles, honest status
/privacy       — Privacy policy (marketing site scope)
/terms         — Terms of service (pre-launch scope)
*              — Branded 404
```

### Homepage Section Order (Proposed)
```
A. Header (sticky, clean light, real logo)
B. Hero (two-column desktop, strong single-column mobile)
   - Nepali lead + headline + paragraph + dual CTA + trust strip
   - Right: polished code-built Ask MokXya product preview
C. Compact capability/trust strip (5–6 short items, no cards)
D. "Why existing methods fail" → problem-to-outcome pairs
E. Three-step workflow (1. Say → 2. Review → 3. Confirm)
F. Main Ask MokXya product experience (interactive demo)
G. Core business capabilities (varied layout, not card grid)
H. "You stay in control" — review, edit, confirm, accountant-ready
I. Suitable business types (honest scope)
J. Founding pilot offer (single honest offer, no pricing cards)
K. FAQ (accordion)
L. Final CTA (strong, dark, real action)
M. Footer (dark-surface lockup, no empty columns)
```

---

## 7. Proposed Component Architecture

### New / Rebuilt Components
```
src/
  assets/
    brand/          ← real logo crops from brand board
  content/
    home.ts         ← homepage section content
    navigation.ts   ← nav links, routes
    faq.ts          ← FAQ questions and answers
    pilot.ts        ← pilot page content
    legal.ts        ← last-updated dates, legal copy config
  components/
    common/
      BrandLogo.tsx         ← replaces BrandMark.tsx
      Button.tsx            ← keep, minor cleanup
      Section.tsx           ← keep
      Container.tsx         ← keep
      Stack.tsx             ← keep
      Cluster.tsx           ← keep
      SkipLink.tsx          ← keep
      Badge.tsx             ← keep
    layout/
      Header.tsx            ← full rebuild (real logo, no theme toggle in nav)
      Footer.tsx            ← full rebuild (dark lockup, no empty columns)
      Layout.tsx            ← minor update
    sections/
      HeroSection.tsx       ← full rebuild (2-col, code-built preview)
      TrustStripSection.tsx ← new (compact trust points)
      ProblemsSection.tsx   ← refactor (problem → outcome pairs)
      WorkflowSection.tsx   ← refactor (stronger horizontal/vertical)
      InteractiveDemoSection.tsx ← substantial rebuild
      CapabilitiesSection.tsx    ← replaces BenefitsSection
      ControlSection.tsx         ← replaces SafetySection
      SuitableBusinessesSection.tsx ← refactor
      PilotOfferSection.tsx      ← replaces PricingSection + DevStatusSection
      FaqSection.tsx             ← refactor (content from faq.ts)
      FinalCtaSection.tsx        ← replaces CtaSection
    previews/
      AskMokXyaPreview.tsx  ← new (hero right-side product interface)
      DashboardPreview.tsx  ← keep, improve
      MobileEntryPreview.tsx ← keep, improve
    seo/
      Meta.tsx              ← update (use real URL, real OG image)
      StructuredData.tsx    ← update (real logo URL)
  pages/
    Home.tsx                ← updated section order
    Pilot.tsx               ← full rebuild (focused conversion page)
    About.tsx               ← full rebuild (honest, no fabricated details)
    Privacy.tsx             ← improve readability, fix date
    Terms.tsx               ← improve readability, fix date
    NotFound.tsx            ← branded, useful
  styles/
    tokens.css              ← rebuild from real logo colours
    global.css              ← extend, maintain
  lib/
    pilotAdapter.ts         ← new (fail-closed submission logic)
    analytics.ts            ← keep, clean up
  config/
    site.ts                 ← fix URL to mokxya.pages.dev
  app/
    ThemeProvider.tsx       ← fix: light by default, no prefers-color-scheme override
```

### Components to Delete
- `src/components/common/BrandMark.tsx` (replaced by BrandLogo)
- `src/components/sections/PricingSection.tsx` (replaced by PilotOfferSection)
- `src/components/sections/DevStatusSection.tsx` (merged into PilotOfferSection)
- `src/components/sections/ContactSection.tsx` (replaced by footer + pilot contact)
- `src/components/sections/BenefitsSection.tsx` (replaced by CapabilitiesSection)
- `src/components/sections/SafetySection.tsx` (replaced by ControlSection)
- `src/assets/hero.png` (generic purple gradient — remove)
- `src/assets/react.svg` (scaffold leftover — remove)
- `src/assets/vite.svg` (scaffold leftover — remove)

---

## 8. Responsive Requirements

### Breakpoint System
```
320px  — minimum supported width (small phone)
390px  — iPhone-class mobile (primary mobile target)
768px  — tablet portrait
1024px — tablet landscape / small laptop
1366px — common laptop
1440px — design target desktop
1920px — large desktop (max-width container applies)
```

### Rules
- No horizontal overflow at any breakpoint
- No text clipped by sticky header on anchor navigation
- Touch targets minimum 44×44px on mobile
- Nepali Devanagari text must not clip or overflow on 320px
- Two-column hero → single-column on mobile
- Navigation → hamburger menu below 900px
- Footer columns → stacked on mobile

---

## 9. Accessibility Requirements

### WCAG 2.1 AA minimum
- Semantic landmark elements: `header`, `nav`, `main`, `footer`, `section`, `aside`
- One logical `<h1>` per route
- Correct heading hierarchy (h1 → h2 → h3, no skips)
- Keyboard navigable (Tab, Enter, Space, Escape, Arrow keys)
- Visible focus indicator on all interactive elements
- Skip link to `#main-content`
- Accessible mobile menu (aria-expanded, aria-controls, role="dialog")
- Interactive demo: aria-live announcements for state changes
- Form fields: labels, descriptions, error summary, focus management
- Image alt decisions: decorative → aria-hidden, informative → descriptive alt
- Colour contrast: all text ≥ 4.5:1, large text ≥ 3:1
- Reduced-motion: animations respect `prefers-reduced-motion`
- 200% zoom: no content hidden, no horizontal scroll
- No automated serious/critical accessibility violations

---

## 10. Conversion Requirements

### Primary Conversion Goal
Applications to the founding pilot via `/pilot`

### Conversion Rules
- Every pilot CTA must navigate to `/pilot`
- No dead CTAs (no self-scrolling contact button with empty contact)
- Pilot form must fail-closed: if no endpoint configured, show "Applications opening soon" — never a fake working submit
- No data stored in localStorage, analytics, or console in production
- Contact details shown only when actually configured

### CTA Hierarchy
1. **Primary**: "Apply for the Founding Pilot" → `/pilot`
2. **Secondary**: "See the product flow" → smooth scroll to `#interactive-demo`
3. **Final CTA**: "Join the Founding Pilot" → `/pilot`

---

## 11. Performance Requirements

- Production bundle JS < 350kB gzipped
- No unused npm dependencies in production bundle
- Logo assets optimised (lossless PNG for mark, optimised for OG)
- Below-fold images lazy-loaded where appropriate
- No layout shift from images (dimensions reserved)
- Static Cloudflare Pages deployment (no server-side rendering required)
- `_redirects` and `_headers` in `public/` — maintained

---

## 12. Testing Gates

### Unit/Component (Vitest + Testing Library)
- All content from `src/content/*.ts` files renders correctly
- Brand logo renders — no fake BrandMark SVG
- Header navigation links work
- Mobile menu opens, closes, is keyboard accessible
- Interactive demo: all states, all example types, keyboard support
- Pilot form: all four submission-adapter states
- Legal routes render
- 404 route renders
- Meta/SEO component sets correct title and canonical per route

### E2E (Playwright — Chromium + Mobile Chrome)
- Homepage full navigation
- Mobile menu toggle
- Hash-section anchor navigation
- Hero CTA → /pilot route
- Pilot form: graceful empty-config state
- About, Privacy, Terms routes
- 404 handling
- Accessibility: skip link, semantic landmarks

---

## 13. Phase Plan

| Phase | Scope | Gate |
|-------|-------|------|
| 0 | Audit + blueprint + baseline screenshots | READY FOR PHASE 1 |
| 1 | Real logo, brand assets, tokens, header, footer | BRAND FOUNDATION PASSED |
| 2 | IA restructure, content architecture, copy | IA PASSED |
| 3 | Premium hero + hero product experience | FIRST VIEW PASSED |
| 4 | Product story, interactive demo, features, business fit | PRODUCT STORY PASSED |
| 5 | Pilot page, pilot form, fail-closed adapter | PILOT CONVERSION PASSED |
| 6 | About, trust, legal, SEO, OG, NotFound | TRUST AND SEO PASSED |
| 7 | Responsive QA, accessibility, performance, test hardening | QUALITY GATE PASSED |
| 8 | Final audit, Cloudflare readiness, commit plan | FINAL GATE PASSED |

---

*This brief is the single authoritative source for design decisions in every phase.*
