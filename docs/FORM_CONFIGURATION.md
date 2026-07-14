# Form Configuration Guide

This guide explains how to wire the Pilot Application form to an external endpoint (such as Google Forms or a CRM webhook).

## How it works

The MokXya Hisab marketing website features a dynamic configuration system (`src/config/site.ts`).
The Pre-Qualification Form built into `/pilot` collects non-sensitive data initially to capture user interest. 
Based on the `pilotFormUrl` value in your configuration, the form conditionally redirects the user or displays a fallback.

## 1. Connecting a Google Form

1. Create a Google Form with the detailed questions required for pilot qualification.
2. Get the public sharing URL for the form (e.g. `https://docs.google.com/forms/d/e/1FAIp.../viewform`).
3. Open `src/config/site.ts`.
4. Locate the `pilotFormUrl` key.
5. Set its value to your form URL:
   ```ts
   export const siteConfig = {
     // ...
     pilotFormUrl: 'https://docs.google.com/forms/d/e/1FAIp.../viewform',
     // ...
   }
   ```
6. Now, when a user fills out the pre-qualification form and clicks "Continue to Full Application", the website will track the conversion event and automatically open your Google Form in a new tab.

## 2. Using the Fallback Method (Unconfigured)

If you are not yet ready to accept form submissions, simply leave the `pilotFormUrl` empty:

```ts
export const siteConfig = {
  // ...
  pilotFormUrl: '', 
  // ...
}
```

When empty:
- The submit button changes to "Register Interest".
- Upon clicking, the form acknowledges the submission via analytics.
- A fallback contact section elegantly displays underneath the form, encouraging users to call or WhatsApp you directly to register.

## 3. Social and Contact Configuration

The fallback method relies on the `social` block in `src/config/site.ts`. Ensure your numbers and links are accurate. If you wish to hide a contact method (e.g., Email), simply set its value to an empty string `""`.
