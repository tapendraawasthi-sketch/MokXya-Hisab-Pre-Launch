# Architecture Document

## Overview
This repository contains the front-end code for the MokXya Hisab pre-launch marketing website. It is designed to be statically hosted on Cloudflare Pages.

## Tech Stack
- **Framework**: React with TypeScript
- **Bundler**: Vite
- **Routing**: React Router
- **Testing**: Vitest (Unit/Component), Playwright (E2E)
- **Styling**: Vanilla CSS (CSS variables, semantic classes)

## Directory Structure
- `public/`: Static assets (icons, robots.txt, favicon, images)
- `src/app/`: App-wide configurations and setups
- `src/components/`: Reusable React components
- `src/config/`: Central configurations (e.g., site.ts)
- `src/content/`: Content data (no hardcoded text in components)
- `src/pages/`: Page level components
- `src/routes/`: Route definitions
- `src/styles/`: Global styles and CSS variables
- `src/test/`: Test setups and unit tests
- `src/types/`: TypeScript definitions

## Deployment Strategy
Designed for static export or standard SPA fallback compatibility for Cloudflare Pages.
