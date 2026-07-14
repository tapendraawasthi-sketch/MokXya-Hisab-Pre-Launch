# Phase 7 Quality Audit

## 1. Executive Summary
The MokXya Hisab pre-launch website has successfully transitioned through Phases 1–6, establishing a strong brand foundation, narrative, and functional pilot flow. Phase 7 is the final polish step before the Phase 8 release audit. Overall, the codebase is in good shape, with modern React (Vite) tooling, clean CSS architecture, and high testing coverage. This audit outlines remaining risks across responsiveness, accessibility, performance, and cross-browser consistency that must be addressed in Phase 7.

## 2. Route Inventory
- `/` (Home): Contains hero, trust, problem, workflow, demo, capabilities, control, businesses, pilot, FAQ, and CTA sections.
- `/pilot`: Multi-step form for pilot application (with unavailable, email, whatsapp, and endpoint modes).
- `/about`: Mission and approach details.
- `/privacy`: Privacy notice.
- `/terms`: Terms of use.
- `/*` (NotFound): 404 error page.

## 3. Component Inventory
- **Layout**: `Header`, `Footer`, `Layout`
- **Common**: `Button`, `Card`, `Cluster`, `Container`, `Section`, `Stack`, `ThemeToggle`, `BrandMark`, `SkipLink`
- **Sections**: Assorted homepage sections (e.g., `HeroSection`, `InteractiveDemoSection`)
- **Product Previews**: `DashboardPreview`, `MobileEntryPreview`
- **SEO**: `Seo`, `StructuredData`

## 4. CSS Architecture
- Leverages global tokens (`tokens.css`) and global resets (`global.css`).
- Component-specific CSS files exist (`hero.css`, `demo.css`, etc.), keeping styles localized.
- **Risk**: Potential for inline styles overriding CSS, and some magic numbers (e.g., hardcoded pixels instead of `var(--spacing-*)`) in complex components like the demo.
- **Action**: Fix now. Refine inline styles to use tokens.

## 5. Responsive Risks
- **Horizontal Overflow**: Complex sections like the Product Demo (`demo.css`) or the capabilities grid may overflow on 320px viewports.
- **Text Wrapping**: Long Devanagari strings or financial figures in product previews might wrap awkwardly or clip.
- **Action**: Fix now. Test all viewports (320px to 1920px) and enforce flex/grid wrapping with `min-width: 0`.

## 6. Accessibility Risks
- **Landmarks**: Ensure `main`, `header`, `footer`, and `nav` landmarks are correctly nested and unique.
- **Heading Hierarchy**: Ensure a single `<h1>` per page, followed logically by `<h2>`, `<h3>`, etc.
- **Action**: Fix now. Run automated accessibility tests (`axe` / Playwright) and manual checks.

## 7. Keyboard-Navigation Risks
- **Focus Trap**: Mobile menu and Pilot Form (if modal) need proper focus management.
- **Visible Focus**: Ensure all interactive elements have a clear, high-contrast `:focus-visible` ring.
- **Action**: Fix now. Add global focus-visible styles in `global.css`.

## 8. Screen-Reader Risks
- **Live Regions**: The Demo flow uses `aria-live="polite"`. Needs verification that status changes (e.g., "Interpreting...", "Confirmed") are read correctly.
- **Action**: Fix now. Verify `aria-live` regions and form error announcements.

## 9. Colour-Contrast Risks
- **Teal on Light**: The brand teal (`#40D6B1` / `#059669`) might lack sufficient contrast against white backgrounds for small text.
- **Action**: Fix now. Audit text contrast, adjust to darker variants (e.g., `var(--color-brand-teal-dark)`) for text on light surfaces.

## 10. Motion Risks
- **Animations**: CSS transitions (fade-ins, demo spinners).
- **Action**: Fix now. Add `@media (prefers-reduced-motion: reduce)` to disable non-essential animations.

## 11. Form Usability Risks
- **Pilot Flow**: Ensure validation messages are explicitly linked to inputs via `aria-describedby` or `aria-errormessage`.
- **Action**: Fix now. Review form input associations.

## 12. Hash-Navigation Risks
- **Sticky Header**: Hash links must offset scroll position by the height of the sticky header to avoid hiding content.
- **Action**: Fix now. Add `scroll-margin-top` to all section IDs.

## 13. Header and Footer Risks
- **Mobile Menu**: Ensure it fits within 100vh and doesn't allow background body scrolling when open.
- **Action**: Fix now. Implement body scroll lock when mobile menu is active.

## 14. Product-Demo Risks
- **Layout Shift**: Ensure the preview panel height doesn't jump aggressively when transitioning from "Interpreting" to "Preview".
- **Action**: Fix now. Reserve minimum height for the output panel.

## 15. Pilot-Flow Risks
- **State Leaks**: Ensure no applicant data persists in URL parameters or unexpected local storage beyond the intended session.
- **Action**: Fix now. Verify `sessionStorage` cleanup on success.

## 16. Legal-Page Risks
- **Reading Width**: Ensure text doesn't span full width on large desktop screens.
- **Action**: Fix now. Restrict text max-width (`ch` units) for readability.

## 17. Metadata Risks
- **Verification**: Ensure Open Graph (`og:image`, `og:title`) and canonical URLs are absolutely correct on all pages.
- **Action**: Deferred to Phase 8 / E2E verification (already mostly handled in Phase 6).

## 18. Performance Risks
- **LCP (Largest Contentful Paint)**: Hero image (lockup logo) must load immediately.
- **Action**: Fix now. Add `fetchpriority="high"` and `loading="eager"` to the hero logo. Add `loading="lazy"` to below-the-fold images.

## 19. Asset-Size Risks
- **Logo Files**: Ensure `.png` files are properly sized (e.g., `mokxya-lockup-light.png` is ~350KB, could be optimized if necessary).
- **Action**: Preserve. Brand assets are generated deterministically; acceptable size for a primary asset.

## 20. Bundle-Size Risks
- **Dependencies**: The bundle includes `lucide-react`, `react-helmet-async`, `react-router-dom`. All are relatively lightweight.
- **Action**: Preserve. Total JS is currently around ~100KB gzip, which is excellent.

## 21. Layout-Shift Risks
- **Fonts**: Ensure fallback fonts match the metrics of the primary fonts to prevent jumping.
- **Action**: Fix now. Use `font-display: swap` and ensure system font stack is robust.

## 22. Browser-Compatibility Risks
- **CSS Features**: Check for `gap` in flexbox, `has()` selector (if used). 
- **Action**: Verify in Chromium, WebKit, and Firefox via Playwright.

## 23. Test-Coverage Gaps
- **E2E**: Need to explicitly test mobile menu body scroll lock, hash navigation offset, and reduced motion.
- **Action**: Fix now. Add specific E2E test cases.

## 24. Dead Code / 25. Duplicate Code
- **Action**: Sweep `src/components` to remove unused files or duplicated logic.

## 26. Inline-Style Inventory
- Extensively used in `NotFound.tsx`, `HeroSection.tsx`, `PilotOfferSection.tsx`, etc.
- **Action**: Fix now. Move complex inline styles to component CSS files or replace with generic Stack/Cluster spacing props.

## 27. Unused Assets / 28. Unused Dependencies
- **Action**: Verify package.json. Removed outdated dependencies if any.

## 29. Console Warning Inventory
- React strict mode double-invocations might trigger warnings if state is mutated. 
- **Action**: Fix now. Check console during E2E runs.

## 30. Release-Blocking Defects
- None currently identified, but Responsive overflows on 320px and A11y contrast issues are the most likely candidates.

## 31. Non-Blocking Defects
- Slight layout shifts during demo state changes.

## 32. Recommended Fixes
1. Implement global focus-visible and reduced-motion rules.
2. Implement body-scroll lock for the mobile menu.
3. Migrate heavy inline styles to CSS files.
4. Add `scroll-margin-top` to all navigable hash targets.
5. Add `fetchpriority="high"` to LCP images.

## 33. Deferred Items Requiring Phase 8 Verification
- Final production URL verification.
- Real-world Lighthouse score on Cloudflare Pages infrastructure.
