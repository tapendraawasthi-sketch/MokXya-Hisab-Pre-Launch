# Cloudflare Pages Deployment Guide

Step-by-step instructions for deploying MokXya Hisab to Cloudflare Pages.

---

## Prerequisites

- A [GitHub](https://github.com) account with the `mokxya-website` repository pushed to the `main` branch.
- A [Cloudflare](https://cloudflare.com) account (free tier is sufficient).

---

## Step-by-Step Deployment

### 1. Create the GitHub repository
Push the `mokxya-website` directory to a new GitHub repository named `mokxya-website` on the `main` branch.

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/mokxya-website.git
git push -u origin main
```

### 2. Create a Cloudflare account
Go to [cloudflare.com](https://cloudflare.com) and register for a free account.

### 3. Open Workers & Pages
In the Cloudflare dashboard, click **Workers & Pages** in the left sidebar.

### 4. Create a Pages application
Click **Create application** → select the **Pages** tab → click **Connect to Git**.

### 5. Connect your GitHub repository
Authorize Cloudflare to access your GitHub account, then select the `mokxya-website` repository.

### 6. Set the project name

Use:
```
mokxya
```

If that name is already taken, use the fallback:
```
mokxya-hisab
```

This determines your deployment URL: `mokxya.pages.dev` or `mokxya-hisab.pages.dev`.

### 7. Configure build settings

| Setting | Value |
|---------|-------|
| Production branch | `main` |
| Framework preset | `None` |
| Build command | `npm run build` |
| Build output directory | `dist` |

### 8. Add environment variables (optional)
If you wish to use environment-driven configuration in the future, add variables in **Settings > Environment variables**. For now, no variables are required — all configuration is in `src/config/site.ts`.

### 9. Deploy
Click **Save and Deploy**. Cloudflare will clone the repository, run `npm run build`, and publish the `dist/` directory.

### 10. Test all routes
Once deployed, test these routes directly in your browser:

- `https://mokxya.pages.dev/`
- `https://mokxya.pages.dev/pilot`
- `https://mokxya.pages.dev/about`
- `https://mokxya.pages.dev/privacy`
- `https://mokxya.pages.dev/terms`
- `https://mokxya.pages.dev/nonexistent` → Should show the 404 page

### 11. Verify mobile
Open the site on your phone or use browser developer tools at 390×844 to confirm the mobile layout and navigation menu work correctly.

### 12. Verify the pilot form
Open `/pilot`. If `pilotFormUrl` is empty in `site.ts`, confirm the fallback contact section is displayed. If configured, confirm the "Continue to Full Application" button opens the form correctly.

### 13. Verify metadata
Right-click the homepage → **View Page Source** → confirm:
- `<title>` is `MokXya Hisab - Freedom from Complexity`
- `<meta name="description">` is present
- Open Graph (`og:title`, `og:description`) tags are present

### 14. Verify Privacy and Terms pages
Navigate to `/privacy` and `/terms` — confirm both pages load correctly.

### 15. Verify security headers
Use [securityheaders.com](https://securityheaders.com) to confirm the deployed site returns:
- `X-Content-Type-Options`
- `X-Frame-Options`
- `Strict-Transport-Security`

---

## Custom Domain (`mokxya.com.np`)

When you acquire the `mokxya.com.np` domain:

1. In the Cloudflare Pages dashboard, go to your project → **Custom domains**.
2. Click **Set up a custom domain** and enter `mokxya.com.np`.
3. Follow Cloudflare's instructions to add DNS records.
4. Update `src/config/site.ts` → `url` and `canonicalBase` from `https://mokxya.pages.dev` to `https://mokxya.com.np`.
5. Push the change to `main` — Cloudflare Pages will automatically redeploy.

---

## SPA Routing

The `public/_redirects` file contains:
```
/* /index.html 200
```

This ensures direct navigation to any route (e.g. `/pilot`) works correctly on Cloudflare Pages without returning a 404.

---

## Security Headers

The `public/_headers` file adds the following headers to all responses:
```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
Referrer-Policy: strict-origin-when-cross-origin
```

---

## Continuous Deployment

Every push to the `main` branch will trigger an automatic redeploy on Cloudflare Pages. You do not need to manually redeploy.
