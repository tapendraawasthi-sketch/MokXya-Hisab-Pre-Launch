# Pilot Data Model

## Overview
This document outlines the data types, validation rules, normalisation standards, and privacy boundaries for the MokXya Hisab Founding Pilot application form. 

## Types

```typescript
export interface PilotApplication {
  ownerName: string;
  phone: string;
  city: string;
  businessName: string;
  businessType: string;
  businessTypeOther?: string; // Used only if businessType is 'other'
  staffRange: string;
  recordMethod: string;
  inventoryUsage: string;
  creditSalesFrequency: string;
  preferredLanguage: string;
  mainDifficulty?: string; // Optional field
  consent: boolean;
}

export type PilotSubmissionMode = 'endpoint' | 'whatsapp' | 'email' | 'unavailable';

export type PilotSubmissionState = 
  | 'idle' 
  | 'validating' 
  | 'submitting' 
  | 'success' 
  | 'error' 
  | 'ready-for-external-contact' 
  | 'unavailable';

export interface SubmissionResult {
  success: boolean;
  message?: string;
  externalUrl?: string; // Used for WhatsApp and Email modes
}
```

## Validation Rules
1. **Owner Name**: Required. Trimmed. Rejects pure whitespace. Allows Devanagari and Latin script.
2. **Phone Number**: Required. Trimmed. Must contain at least 10 digits after stripping non-numeric characters (`\D`). Does not mandate specific prefix (+977) to accommodate legacy formats but allows them.
3. **City**: Required. Trimmed. Rejects pure whitespace.
4. **Business Name**: Required. Trimmed. Rejects pure whitespace. Allows Devanagari and Latin script.
5. **Business Type**: Required. Must be selected from a predefined list.
6. **Business Type (Other)**: Required only if `businessType` is `other`. Trimmed.
7. **Staff Range, Record Method, Inventory Usage, Credit Sales Frequency, Preferred Language**: Required. Must be selected from provided options.
8. **Main Difficulty**: Optional. Trimmed. 
9. **Consent**: Required to be `true`.

## Normalisation Rules
- **Form Trimming**: All free-text inputs are trimmed (`.trim()`) before final payload generation to prevent empty-space submissions.
- **Phone Normalisation (WhatsApp Mode)**: Before constructing the `wa.me/` link, the target WhatsApp number is stripped of spaces, dashes, and plus signs (e.g., `+977 98-XXXX` becomes `97798XXXX`).
- **URI Encoding**: All data sent via WhatsApp or Email links is strictly wrapped in `encodeURIComponent()` to prevent broken links and URL injection.

## Payload Mapping
The payload mapped to the `endpoint` mode is a strict reflection of the `PilotApplication` interface, with an added `source: "mokxya-website-founding-pilot"` tag for backend tracking.

## WhatsApp & Email Summary Format
For fallback modes, a readable plaintext summary is generated. 

**Format:**
```
Founding Pilot Application:
Name: [ownerName]
Business: [businessName] ([businessType] - [businessTypeOther])
City: [city]
Phone: [phone]
Staff: [staffRange]
Records: [recordMethod]
Inventory: [inventoryUsage]
Credit: [creditSalesFrequency]
Language: [preferredLanguage]
Difficulty: [mainDifficulty]
```

## Unavailable State Rules
If no configuration is loaded:
- The `pilotConfig` reader immediately returns `mode: 'unavailable'`.
- The form interface is completely hidden.
- An "Applications opening soon" component is rendered instead.
- Validation and submission logic become inaccessible.

## Privacy Restrictions
- Data is strictly maintained in React state (`useState`).
- It is NEVER written to `localStorage`, `sessionStorage`, or IndexedDB.
- It is NEVER attached to the URL query string.
- It is NEVER printed to `console.log`.
- Once `submitApplication` confirms a successful endpoint response, the form state is aggressively reset to empty.

## Prohibited Fields
The data model intentionally omits fields considered sensitive during early qualification:
- PAN / VAT Number
- Exact Street Address
- Citizenship Number
- Financial figures
- Email (unless voluntarily provided as contact)
- Passwords or credentials

## Testing Fixtures
A valid testing fixture:
```typescript
const validApplication: PilotApplication = {
  ownerName: 'Ram Sharma',
  phone: '9800000000',
  city: 'Kathmandu',
  businessName: 'Sharma Traders',
  businessType: 'retail',
  staffRange: '2–5',
  recordMethod: 'Notebook or register',
  inventoryUsage: 'Yes',
  creditSalesFrequency: 'Often',
  preferredLanguage: 'Nepali',
  consent: true
};
```

## Future Backend Considerations
If a bespoke backend is developed later, it must accept `application/json` encoded with the fields described above and return standard HTTP statuses. It should implement its own sanitization and not rely solely on this frontend model for validation.
