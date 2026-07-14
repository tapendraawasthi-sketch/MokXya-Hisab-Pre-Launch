# Phase 3 Hero Audit

## Current Hero Implementation

- **Component Path**: `src/components/sections/HeroSection.tsx`
- **Content Source**: `src/content/home.ts`
- **Current Layout**: Single column, centered text stack, large empty spaces around content.
- **Image/Illustration Usage**: Currently no image or product preview is rendered in the hero section. There are unused `hero.png` and `react.svg` in `src/assets`.
- **CTA Destinations**:
  - Primary: `/pilot`
  - Secondary: `#how-it-works`
- **Responsive Behaviour**: Relies on basic `Stack` and `Cluster` which handles padding and centering, but not optimized for a 2-column product-led approach.
- **Accessibility Behaviour**: Has basic semantic `<section>` and `<h1>`, CTAs are functional but lack complex structural semantics needed for a product preview (like `aria-hidden` on decorative UI).
- **First-Contentful Layout**: Very text-heavy, not visually engaging or product-led.
- **Header Overlap Risk**: `Layout.tsx` handles sticky header correctly via CSS variables, but hero relies on large arbitrary padding-block.
- **Visual Weaknesses**: It lacks credibility without a product UI. Feels like a generic startup template rather than a premium financial tool.
- **Generic-Template Characteristics**: Centered text stack with two buttons below is the most generic SaaS pattern.
- **Inline Styling**: Uses inline `style` props heavily for typography (e.g. `fontFamily: 'var(--font-family-devanagari)'`).
- **Unused Assets**: `src/assets/hero.png`
- **Performance Risks**: Low right now as there are no images, but a complex UI preview might add DOM depth.
- **Layout-Shift Risks**: None currently, but adding a column requires careful CSS grid/flex to avoid CLS.

## Decisions

- **Preserve**: Content source (`heroContent`), semantic `<h1>`.
- **Refactor**: Component architecture. Move `HeroSection.tsx` to `src/components/home/hero/HeroSection.tsx` and split into `HeroCopy`, `HeroProductPreview`, etc.
- **Replace**: The single-column layout with a responsive 2-column CSS grid.
- **Remove**: Inline styling in favor of scoped CSS or utility classes if applicable, and old `src/assets/hero.png`.
