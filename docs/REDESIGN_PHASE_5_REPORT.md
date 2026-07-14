# Phase 5: Founding-Pilot Conversion & Form Engineering

**Status:** Completed
**Primary Objective:** Implement the `/pilot` page with a strict, state-machine driven form and fail-closed submission behaviours.

## Summary of Changes

1. **Architecture & State Machine:**
   - Designed and built a robust submission architecture using a `pilotConfig.ts` configuration driver to decide runtime submission mode (`endpoint`, `whatsapp`, `email`, or `unavailable`).
   - Implemented a fail-closed principle where the absence of valid configuration automatically hides the form and renders an "Applications opening soon" state.

2. **Form UI & Data Collection:**
   - Rewrote `src/pages/Pilot.tsx` completely, moving away from a generic contact form to a precise 11-field application form designed to qualify Nepalese retail and trading businesses.
   - Built an accessible validation layer utilizing HTML5 constraint validation coupled with custom ARIA-live error summaries for screen readers.
   - Removed the obsolete and generic `ContactSection.tsx`.

3. **Global Integration & Routing:**
   - Modified all global CTAs (Header, Footer, HeroSection, CtaSection, PilotOffer) to point directly to `/pilot` with the unified call-to-action text "Apply for the Founding Pilot".

4. **Testing Strategy (Unit & E2E):**
   - Engineered unit tests (`Pilot.test.tsx`) to validate component rendering, specific accessibility trees, and mocked state behaviors.
   - Engineered E2E Playwright tests (`pilot.spec.ts`) using a novel `sessionStorage` overriding technique to force runtime configuration modes without requiring separate builds, successfully verifying all 4 state modes.
   - Expanded accessibility tests to verify focus management during validation failures.

5. **Visual Documentation:**
   - Executed an automated Playwright screenshot script (`scripts/capture-phase5-screenshots.ts`) to capture 18 mandatory visual states across Desktop and Mobile, ensuring layout integrity across all modes.

6. **Documentation Updates:**
   - Authored `docs/PILOT_FORM_SETUP.md` for DevOps/Deployment instructions.
   - Authored `docs/PILOT_DATA_MODEL.md` for defining the payload schemas.
   - Updated `docs/BRAND_AND_CONTENT_GUIDE.md` to reflect the new tone and explicit consent patterns.
   - Updated `.env.example` with requisite endpoint mapping variables.

## Verified Principles
- **No False Assurances:** The system avoids providing false success indications. Success is strictly reported if, and only if, the endpoint confirms it or the client-side intents (mailto/wa.me) are successfully dispatched.
- **Tone Integrity:** Form labels and context are highly specific to small Nepalese businesses (e.g., asking about "Notebook or register", and supporting "Nepali" and "Romanised Nepali" language preferences).

## Next Steps
The codebase is now fully prepared for **Phase 6**, which will focus on deploying the finalized layout, finalizing SEO configuration, verifying caching rules, and conducting the final production rollout checks.
