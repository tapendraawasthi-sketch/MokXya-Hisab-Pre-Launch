# Phase 4 Lower-Homepage Audit

This audit evaluates the current sections on the lower homepage against the requirements for Phase 4 (Product Story, Interactive Demonstration, Capabilities and Business Fit).

## 1. Problem-to-Outcome Section
- **Current Path**: `src/components/sections/ProblemOutcomeSection.tsx`
- **Content Source**: `src/content/home.ts` (`problemOutcomeContent`)
- **Current Purpose**: Presents business pain points and MokXya solutions.
- **Issues**: Relies on a generic stacked layout with 4 identical cards (Problem -> Arrow -> Outcome). This violates the requirement to avoid "four identical feature cards" and lacks visual variety.
- **Decision**: **Replace**. Re-architect as `src/components/home/problem/ProblemOutcomeSection.tsx` using a split editorial layout or timeline.

## 2. Three-Step Workflow Section
- **Current Path**: `src/components/sections/WorkflowSection.tsx`
- **Content Source**: `src/content/home.ts` (`workflowContent`)
- **Current Purpose**: Outlines the 3-step usage process.
- **Issues**: Uses isolated cards with large background numbers, lacking a strong horizontal progression. Violates the requirement to avoid "isolated cards with no visual relationship".
- **Decision**: **Replace**. Re-architect as `src/components/home/workflow/WorkflowSection.tsx` with a connected horizontal progression on desktop.

## 3. Interactive Demonstration (Product Experience)
- **Current Path**: `src/components/sections/ProductExperienceSection.tsx`
- **Content Source**: `src/content/home.ts` (`productExperience`)
- **Current Purpose**: Serves as a static demo of the Ask MokXya input interpretation.
- **Issues**: It is a static tabbed interface that does not demonstrate the state machine (Ready -> Interpreting -> Preview -> Confirmed -> Reset). It lacks the mandated interactive state transitions, editing capabilities, and clear confirmation flow.
- **Decision**: **Replace**. Re-architect as `src/components/home/demo/InteractiveDemoSection.tsx` with a full local deterministic state machine.

## 4. Core Capabilities Section
- **Current Path**: `src/components/sections/CapabilitiesSection.tsx`
- **Content Source**: `src/content/home.ts` (`capabilitiesContent`)
- **Current Purpose**: Lists business capabilities and roadmap status.
- **Issues**: Uses a generic CSS grid of 8 identical feature cards. Violates the instruction to "avoid eight identical feature cards" and fails to group capabilities into Daily Records, Business Tracking, and Review.
- **Decision**: **Replace**. Re-architect as `src/components/home/capabilities/CapabilitiesSection.tsx` using category clusters or capability rows with a supporting preview.

## 5. User-Control Section
- **Current Path**: `src/components/sections/ControlSection.tsx`
- **Content Source**: `src/content/home.ts` (`controlContent`)
- **Current Purpose**: Communicates user control and accountant readiness.
- **Issues**: Presented as a centered cluster of text pills and a navy text block. It is entirely text-based and lacks the "product-led composition" (e.g., annotated confirmation preview) required.
- **Decision**: **Replace**. Re-architect as `src/components/home/control/ControlSection.tsx` incorporating a side-by-side layout with an annotated product preview.

## 6. Suitable-Business Section
- **Current Path**: `src/components/sections/SuitableBusinessesSection.tsx`
- **Content Source**: `src/content/home.ts` (`suitableBusinessesContent`)
- **Current Purpose**: Lists target businesses and explicit non-targets.
- **Issues**: Currently a basic cluster of tags. The layout could be more distinct to differentiate it from other feature grids.
- **Decision**: **Refactor**. Move to `src/components/home/businesses/BusinessFitSection.tsx` and ensure the presentation is a compact, elegant grouped list.

## 7. Product Previews (Reusable)
- **Current Paths**: `src/components/previews/` or missing entirely.
- **Issues**: The required illustrative product previews (Business Overview, Mobile Entry, Accountant Review) are not implemented as robust visual components.
- **Decision**: **Create**. Build these under `src/components/product/`.

## General Architecture Issues
- **Component Bloat**: The `sections/` folder is flat and becoming crowded.
- **Asset/Style Duplication**: Missing a centralised NPR formatting utility and structured demo data model.
- **Motion/Accessibility**: Existing motion is minimal, but the new interactive demo will require robust `aria-live` regions, accessible state management, and strict reduced-motion adherence.
