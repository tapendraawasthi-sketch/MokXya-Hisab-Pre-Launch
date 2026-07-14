# Phase 5 Pilot Audit

## 1. Current Route & Page Structure
- **Route:** `/pilot`
- **File:** `src/pages/Pilot.tsx`
- **Current Structure:**
  - Header & Hero
  - "Pilot Details" (Who it's for, what you get, expectations, development note)
  - Pre-Qualification Form
  - Fallback "Contact the Founder" section if `siteConfig.pilotFormUrl` is missing.
- **Classification:** **Refactor/Replace**. The structure is decent but needs to become a much stronger two-column or highly-focused design, replacing generic UI with the MokXya system and strictly following Phase 5 requirements.

## 2. Current Form Fields & Validation
- **Current Fields:**
  - `ownerName`, `phone`, `city` (missing from current UI, but in state), `businessName` (missing from UI), `businessType`, `staffRange` (missing from UI), `recordMethod` (missing from UI), `inventory` (missing from UI), `creditSales` (missing from UI), `language` (missing from UI), `consent`.
- **Current Validation:** Basic HTML5 `required` attributes. No summary, no strict `aria-invalid` bindings, no custom phone validation. 
- **Current Browser Storage/Logging:** The current form holds state only in React `useState`. There is no `localStorage` usage, but `analytics.trackFormOpen()` is called on submit without waiting for success.
- **Classification:** **Replace**. We must add all Phase 5 fields, accessible validation, error summaries, and remove the `analytics.trackFormOpen()` call for now.

## 3. Submit & Endpoint Behaviour
- **Current Submit Logic:** 
  - If `siteConfig.pilotFormUrl` exists, opens it in `_blank` (new tab).
  - No actual form data is sent! The form data is completely ignored.
  - If it's missing, no submit action occurs, and it shows the `ContactSection`.
- **Current Success/Failure Behaviour:** None exists because data isn't submitted to an endpoint.
- **Classification:** **Replace**. Must implement `src/features/pilot/pilotSubmission.ts` with Endpoint, WhatsApp, Email, and Unavailable modes, properly handling data and states.

## 4. Current Contact / "Contact Founder" Behaviour
- **File:** `src/components/sections/ContactSection.tsx`
- **Current Behaviour:** Renders WhatsApp, Phone, and Email buttons reading from `siteConfig.social`. 
- **Issues:** The user explicitly requires removing "Contact the Founder" if no destination exists, and we must route CTAs to `/pilot`. If `ContactSection` is used on `/pilot`, it should be integrated into the Unavailable mode or replaced by the unified submission adapter.
- **Classification:** **Replace**. We must remove `ContactSection.tsx` and instead rely on the `pilotSubmission.ts` logic for unavailable states. 

## 5. Current Configuration Weaknesses
- **Current:** Relies on `src/config/site.ts` which has hardcoded empty strings or dummy values.
- **New Requirement:** Must read from environment variables `VITE_PILOT_FORM_URL`, `VITE_CONTACT_EMAIL`, `VITE_WHATSAPP_NUMBER` and fail closed (Unavailable mode) if they are missing or malformed.
- **Classification:** **Refactor**. We must create a central configuration reader.

## 6. Current Privacy Risks & Analytics
- **Current:** `analytics.trackFormOpen()` on submit. No data storage in browser.
- **Privacy Page:** Needs a small update to reflect that application data is only used to assess suitability.
- **Classification:** **Refactor**. Remove analytics calls, add the required privacy copy.

## 7. Current CTAs
- **Current:** Header ("Apply for the Founding Pilot"), Hero ("Apply for the Founding Pilot"), Footer ("Founding Pilot"), PilotOfferSection, CtaSection all point to `/pilot` correctly. 
- **Classification:** **Preserve**. They already point to `/pilot`, though we will ensure no generic "Start Free" remains.

## 8. Current Tests
- **Current:** `Pilot.test.tsx` tests the form fields (the few that exist) and the fallback contact section.
- **Classification:** **Replace**. Must write comprehensive tests across the four submission modes and validation states.
