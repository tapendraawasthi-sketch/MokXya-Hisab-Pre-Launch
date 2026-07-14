# Architecture Document

## Overview
This repository contains the front-end code for the MokXya Hisab pre-launch marketing website. It is designed to be statically hosted on Cloudflare Pages.

## Tech Stack
- **Framework**: React 19 with TypeScript
- **Bundler**: Vite
- **Routing**: React Router v7
- **Testing**: Vitest (Unit/Component), Playwright (E2E)
- **Styling**: Vanilla CSS (CSS variables, semantic classes)

## Directory Structure
- `public/`: Static assets (icons, robots.txt, favicon, images, manifest.json, sitemap.xml, _redirects)
- `src/app/`: App-wide configurations and providers (e.g. `ThemeProvider`)
- `src/components/`: Reusable React components organized by scope (`common`, `layout`, `sections`, `home`, `product`, `seo`)
- `src/config/`: Central configurations (e.g., `site.ts`)
- `src/content/`: Content data (no hardcoded text in components)
- `src/features/`: Complex feature logic (e.g., `pilot` state management and submission adapter)
- `src/pages/`: Page level components (`Home.tsx`, `Pilot.tsx`, `About.tsx`, `Privacy.tsx`, `Terms.tsx`, `NotFound.tsx`)
- `src/styles/`: Global styles (`global.css`) and CSS variables (`tokens.css`)
- `src/test/`: Unit and component tests
- `src/types/`: TypeScript definitions
- `tests/e2e/`: Playwright end-to-end tests

## Core Architectural Concepts

### Routing
We use React Router for client-side routing.
- `/` - Homepage
- `/pilot` - Founding Pilot Application
- `/about` - About MokXya
- `/privacy`, `/terms` - Legal Pages
- Hash navigation is supported on the homepage (e.g. `/#how-it-works`).
- `public/_redirects` ensures Cloudflare Pages falls back to `index.html` for unknown client-side routes.

### Styling Architecture
- **Tokens**: `src/styles/tokens.css` defines all colors, typography, spacing, and sizing as CSS Custom Properties.
- **Global**: `src/styles/global.css` provides CSS resets, typography base styles, and utility classes.
- **Component-Level**: Complex components import their own CSS (e.g., `pilot.css`, `hero.css`) using BEM-inspired semantic classes to prevent collision.
- **No Utility Frameworks**: Tailwind or similar libraries are strictly forbidden to ensure lightweight bundles.

### Demo State Machine
The Interactive Demo (`InteractiveDemoSection.tsx`) is a controlled state machine:
- **States**: `idle` -> `interpreting` -> `preview` -> `confirmed`.
- **Transitions**: Driven by timeouts (`setTimeout`) to simulate AI interpretation and deterministic user actions (Confirm, Reset).
- **Accessibility**: Includes ARIA live regions to announce state changes to screen readers seamlessly.

### Pilot Submission Adapter
The Pilot form (`Pilot.tsx`) is decoupled from a single submission destination via `src/features/pilot/pilotConfig.ts`.
- **Modes**: Parses environment variables (`VITE_PILOT_FORM_URL`, `VITE_WHATSAPP_NUMBER`, `VITE_CONTACT_EMAIL`) to dynamically select the best submission adapter (`endpoint`, `whatsapp`, `email`, or `unavailable`).
- **Fail-Closed**: If no configuration is present, the form fails closed, preventing broken submissions.
- **Security**: Ensures no applicant data is logged, persisted in local storage, or embedded in URL query parameters.

### SEO Architecture
- **Meta Component**: `src/components/seo/Meta.tsx` uses `react-helmet-async` to inject title, description, Open Graph, and Twitter metadata.
- **Structured Data**: `src/components/seo/StructuredData.tsx` injects valid JSON-LD schemas (`WebSite`, `SoftwareApplication`).
- **Canonical URLs**: Derived dynamically from `VITE_SITE_URL` to prevent staging domain indexation.

### Build Architecture
- **Vite**: Produces an optimized static bundle into `dist/`.
- **LCP Optimization**: Above-the-fold assets use `fetchpriority="high"`. Below-the-fold assets use `loading="lazy"`.

### Deployment Architecture
- **Target**: Cloudflare Pages (Static preset).
- **Process**: `npm run build` triggers a compilation. The `dist/` folder is served statically.
- **SPA Routing**: `public/_redirects` contains `/* /index.html 200` to manage SPA routing at the edge.
