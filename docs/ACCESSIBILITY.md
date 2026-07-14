# Accessibility Strategy

## Objective
MokXya Hisab strives to be fully accessible to all users, adhering closely to WCAG 2.1 AA guidelines. Given our focus on the Nepalese market, we pay special attention to bilingual typography, contrast, and inclusive keyboard workflows.

## 1. Landmarks and Semantics
- **Main Content**: The core application layout utilizes a semantic `<main id="main-content">` element, ensuring a single main landmark per page.
- **Skip Link**: A "Skip to main content" link (`<SkipLink>`) is provided as the first focusable element on every page, allowing keyboard and screen-reader users to bypass repetitive navigation.
- **Heading Hierarchy**: We strictly enforce `<h1>` to `<h6>` hierarchies without skipping levels. The `t-page-heading` and `t-section-heading` classes separate visual styling from semantic meaning.

## 2. Keyboard Navigation
- **Focus Rings**: We utilize an enhanced `.focus-visible-outline` utility class globally. This ensures interactive elements display a clear `2px solid var(--color-primary-blue)` outline with a `4px` offset when focused via keyboard, while remaining hidden during mouse interactions (via `:focus-visible`).
- **Interactive Elements**: All interactive controls are native `<button>`, `<a>`, or `<input>` elements, guaranteeing inherent keyboard accessibility without custom `tabindex` management.

## 3. Motion and Animation
- **Reduced Motion**: We respect the OS-level `prefers-reduced-motion` setting. If a user requests reduced motion, all CSS animations, transitions, and smooth scrolling behaviors are instantly disabled globally via `global.css`.

## 4. Typography and Contrast
- **Devanagari Support**: The `.lang-ne` utility ensures text written in Devanagari utilizes an explicitly defined font stack and a taller line-height (`var(--line-height-devanagari)`) to prevent vowel markers from clipping.
- **Color Contrast**: All text colors, including `var(--color-text-muted)`, are verified to pass WCAG AA contrast ratios against their respective backgrounds (`var(--color-surface-elevated)`, `var(--color-bg-page)`).

## 5. Screen Readers
- **Invisible Text**: The `.sr-only` utility hides text visually while keeping it fully accessible to screen readers, allowing us to provide additional context where visual design constraints exist.

## Automated Testing
Accessibility is enforced continuously via Playwright E2E tests, specifically verifying landmark presence, skip link functionality, and focus states (`tests/e2e/accessibility.spec.ts`).
