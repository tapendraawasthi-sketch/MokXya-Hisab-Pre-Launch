# Interactive Demonstration Data Model

This document outlines the data model and architecture behind the "Ask MokXya" deterministic demonstration. 

## Architectural Philosophy
The demonstration is entirely **local, deterministic, and illustrative**. It does not perform any backend network requests, interpret arbitrary user input via LLMs, or post live accounting entries. The data model is strictly typed and contained in `src/content/demoData.ts` to ensure consistent, accurate accounting logic that can be statically verified.

## TypeScript Data Model

```typescript
export type LanguageVariant = 'English' | 'Romanised Nepali' | 'Nepali';
export type PaymentStatus = 'Due' | 'Paid' | 'Payable' | 'None';
export type DemoState = 'ready' | 'interpreting' | 'preview' | 'confirmed' | 'reset';

export interface DemoEffect {
  description: string;
  type: 'increase' | 'decrease' | 'neutral';
}

export interface DemoInterpretation {
  party?: string;
  item?: string;
  quantity?: number;
  transactionType: string;
  amount?: number;
  paymentMethod?: string;
  paymentStatus?: PaymentStatus;
  accountingEffects: DemoEffect[];
  caveats?: string[];
}

export interface DemoExample {
  id: string;
  title: string;
  inputs: Record<LanguageVariant, string>;
  interpretation: DemoInterpretation;
}
```

## State Machine Schema

The `InteractiveDemoSection` component governs the transitions between states.

1. **`ready`**: Initial state where the user configures inputs (example type, language). The mock preview is empty.
2. **`interpreting`**: A brief deterministic delay state (e.g. 1200ms) with a spinner. **Strictly no network calls occur here**.
3. **`preview`**: The structured output (`DemoInterpretation`) is presented to the user alongside "Edit" and "Confirm" buttons.
4. **`confirmed`**: A local success state reinforcing that this is only an illustration.
5. **`reset`**: Transitions back to `ready` while retaining the current example selection.

## Rules for Adding Future Examples

If new examples are required for the interactive demonstration in the future, adhere to the following checklist to maintain accounting accuracy and avoid misleading claims.

### Accounting Review Checklist
- **Credit Sales**: Must increase `sales` and `customer amount due`. Must NOT increase cash/bank. Mention stock decrease only if qualified with "if tracked".
- **Cash Expenses**: Must increase `expenses` and decrease `cash`. No new receivables/payables should be generated.
- **Customer Payments**: Must increase `cash` and decrease `customer amount due`. Must NOT register a new sale.
- **Credit Purchases**: Must increase `purchases/inventory` and increase `supplier amount due`. Must NOT decrease cash.
- **Stock Adjustments**: Show quantity effects. Financial effects must be qualified with a caveat regarding missing cost data.
- **VAT/Tax**: Do NOT show VAT unless explicitly requested by the input string and fully qualified.
- **NFRS**: Do NOT claim NFRS compliance or "audit-proof" status. 

### Prohibited Example Behaviour
- Do NOT fabricate live AI processing.
- Do NOT add inputs that trigger random or unexpected effects.
- Do NOT generate arbitrary text or allow free-text input to masquerade as an LLM endpoint.
- Do NOT implement `localStorage` or `sessionStorage` tracking for demonstration actions.
