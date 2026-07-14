# MokXya Hisab — Phase 2 Content Audit
*Status: Completed as part of Phase 2*

## Overview
The existing homepage relies heavily on generic SaaS wording, repetitive card layouts, and unsupported technical/accounting claims that do not align with the product's actual status as a controlled pre-launch pilot. Content is hardcoded in presentation components, making translations and updates difficult.

## Section Audit & Decisions

### 1. `HeroSection` (`src/components/sections/HeroSection.tsx`)
- **Findings**: Generic SaaS phrasing ("revolutionary", "next-generation"). Over-promises AI capabilities.
- **Decision**: **Rewrite**. Replace with honest, focused hero copy centering on "Accounting that understands how your business speaks."

### 2. `ProblemsSection` (`src/components/sections/ProblemsSection.tsx`)
- **Findings**: Repetitive cards. Might inadvertently alienate accountants. 
- **Decision**: **Rewrite**. Transform into a "Problem-to-Outcome" section.

### 3. `WorkflowSection` (`src/components/sections/WorkflowSection.tsx`)
- **Findings**: Too many steps or poorly explained workflow.
- **Decision**: **Rewrite**. Strict 3-step workflow (Say/Type, Review, Confirm).

### 4. `InteractiveDemoSection` (`src/components/sections/InteractiveDemoSection.tsx`)
- **Findings**: Uses speculative language. 
- **Decision**: **Preserve/Rewrite**. Change wording to "Illustrative workflow", update demo data to the exact required 3-language examples, and use a typed content architecture.

### 5. `PreviewGallerySection` (`src/components/sections/PreviewGallerySection.tsx`)
- **Findings**: Showcases speculative features.
- **Decision**: **Rewrite**. Convert into "Core business capabilities".

### 6. `BenefitsSection` (`src/components/sections/BenefitsSection.tsx`)
- **Findings**: Repetitive generic benefits ("10x faster", "zero errors").
- **Decision**: **Delete/Merge**.

### 7. `SafetySection` (`src/components/sections/SafetySection.tsx`)
- **Findings**: Claims automatic compliance, audit readiness, or 100% security without validation.
- **Decision**: **Rewrite**. Replace with "Control and accountant-readiness" section.

### 8. `SuitableBusinessesSection` (`src/components/sections/SuitableBusinessesSection.tsx`)
- **Findings**: Claims to be for "everyone" or uses vague categories.
- **Decision**: **Rewrite**. Explicitly list the target owner-operated retail/trading businesses.

### 9. `DevStatusSection` (`src/components/sections/DevStatusSection.tsx`)
- **Findings**: Alarming warning styling or excessive repetition.
- **Decision**: **Merge**. Use honest status system tags across the site where relevant.

### 10. `PricingSection` (`src/components/sections/PricingSection.tsx`)
- **Findings**: Contains 3 fake pricing cards and speculative launch dates.
- **Decision**: **Rewrite**. Replace entirely with the honest "Help shape MokXya with the founding pilot" section.

### 11. `FaqSection` (`src/components/sections/FaqSection.tsx`)
- **Findings**: Long, generic, or evasive answers.
- **Decision**: **Rewrite**. 6-9 concise questions reflecting pilot realities.

### 12. `CtaSection` (`src/components/sections/CtaSection.tsx`)
- **Findings**: Dead links, overly repetitive.
- **Decision**: **Rewrite**. Final focused CTA.
