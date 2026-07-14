# Pilot Form Setup Guide

## 1. Overview
The founding pilot application flow uses a "fail-closed" architecture. To ensure a reliable experience and protect application data, the frontend does not contain a fake backend or mock success states. 

It reads configuration from environment variables and prioritizes submission through three active modes. If no configuration is provided, it safely falls back to an "Unavailable" mode.

## 2. Supported Submission Modes
1. **Endpoint Mode**: Submits a JSON payload directly to a configured HTTPS backend.
2. **WhatsApp Mode**: Generates an encoded `wa.me/` link to continue the application via WhatsApp.
3. **Email Mode**: Generates an encoded `mailto:` link to continue the application via Email.
4. **Unavailable Mode**: Disables submission and informs the visitor that applications will open soon.

## 3. Submission Priority
The system evaluates configuration in this strict order:
`Endpoint` > `WhatsApp` > `Email` > `Unavailable`

If `VITE_PILOT_FORM_URL` is set to a valid URL, the system uses Endpoint mode and ignores WhatsApp and Email settings. If the URL is invalid, it falls through to WhatsApp, and so on.

## 4. Environment Variables
Add these variables to your environment to configure the form:
- `VITE_PILOT_FORM_URL`: (Optional) The full URL of your backend or serverless function.
- `VITE_WHATSAPP_NUMBER`: (Optional) Your WhatsApp number, including the country code (e.g. `97798XXXXXXXX`).
- `VITE_CONTACT_EMAIL`: (Optional) Your support or founding team email address.
- `VITE_PILOT_FORM_METHOD`: (Optional) HTTP method for the endpoint (defaults to `POST`).

## 5. Public-Client Configuration Warning
> **Warning**: All `VITE_` variables are bundled into the client-side JavaScript. **Never place secrets, private API keys, or database passwords in these variables.** The endpoint must be designed to accept public, unauthenticated submissions safely.

## 6. Endpoint-Mode Requirements
For the endpoint mode to function correctly, the destination server must:
- Be served over HTTPS.
- Accept the configured HTTP method (default `POST`).
- Respond with a `2xx` HTTP status code on success.

## 7. Expected Payload
When using Endpoint mode, the frontend sends a structured JSON payload:
```json
{
  "ownerName": "...",
  "phone": "...",
  "city": "...",
  "businessName": "...",
  "businessType": "...",
  "businessTypeOther": "...",
  "staffRange": "...",
  "recordMethod": "...",
  "inventoryUsage": "...",
  "creditSalesFrequency": "...",
  "preferredLanguage": "...",
  "mainDifficulty": "...",
  "consent": true,
  "source": "mokxya-website-founding-pilot"
}
```

## 8. CORS Requirements
The destination endpoint must include proper Cross-Origin Resource Sharing (CORS) headers if it is hosted on a different domain than the frontend. Specifically, it needs:
- `Access-Control-Allow-Origin: *` (or the exact frontend domain)
- `Access-Control-Allow-Methods: POST, OPTIONS`
- `Access-Control-Allow-Headers: Content-Type`

## 9. Timeout and Error Behaviour
The form uses an internal 10-second `AbortController` timeout. If the network drops or the server is unresponsive, the form will safely fail and prompt the user to try again. Application data is retained in the form until a successful response is received.

## 10. WhatsApp-Mode Setup
If no endpoint is configured but `VITE_WHATSAPP_NUMBER` is present, the form will format the collected data into a concise text summary, encode it, and open a `wa.me/` link. No data is sent automatically; the user must explicitly send the message in WhatsApp.

## 11. Email-Mode Setup
If neither an endpoint nor WhatsApp is configured, but `VITE_CONTACT_EMAIL` is present, the form generates a `mailto:` link with the data encoded in the body. Like WhatsApp, the user must explicitly send the email from their mail client.

## 12. Unavailable-Mode Behaviour
If all configuration variables are empty, the form is hidden, and a message ("Applications opening soon") is displayed. This prevents users from wasting effort filling out a form that cannot be submitted.

## 13. Local Testing
To test locally, copy `.env.example` to `.env` in the project root and add your test configurations. The `.env` file is in `.gitignore` and will not be committed.

## 14. Cloudflare Pages Environment Setup
To configure these variables in production on Cloudflare Pages:
1. Open your MokXya Pages project in the Cloudflare dashboard.
2. Go to **Settings**.
3. Open **Variables and Secrets** (or Environment Variables).
4. Add the appropriate `VITE_` variables for production (and preview, if desired).
5. Redeploy the project so the build system can bake the variables into the new bundle.

## 15. Production Testing Checklist
- Submit a test application and verify it reaches the destination.
- Verify that the network tab shows a successful `2xx` response.
- Verify that the form clears upon success (Endpoint mode).
- Verify that the WhatsApp or Email client opens correctly with pre-filled data (Fallback modes).

## 16. Privacy Considerations
The pilot form collects personal business data. Do not add hidden tracking identifiers, capture full page history, or embed third-party analytics pixels to the form submission. The data is held entirely in React memory and is cleared upon success. 

## 17. Troubleshooting
- **White Screen / Syntax Error**: Check that the `VITE_` variables are simple strings and not malformed JSON.
- **Form Always Says "Unavailable"**: Ensure you have configured at least one variable correctly and have rebuilt/redeployed.
- **CORS Errors**: The backend server is rejecting the browser's preflight request. Adjust the server's `Access-Control-Allow-Origin` headers.

## 18. Rollback Procedure
If an endpoint starts failing in production, you can immediately fall back to WhatsApp or Email by removing `VITE_PILOT_FORM_URL` from the Cloudflare Pages settings and redeploying.

## 19. Prohibited Setup Patterns
- Do not add paid vendor dependencies to the React frontend.
- Do not create custom backend proxies within the frontend repository in Phase 5.
- Do not write brittle scraping logic for third-party forms. 
- If using tools like Formspree, Basin, Getform, or Google Forms, ensure they accept the explicit JSON payload documented in Section 7, or handle the vendor-specific mapping entirely within `pilotSubmission.ts`.
