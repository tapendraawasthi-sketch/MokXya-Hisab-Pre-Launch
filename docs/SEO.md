# SEO and Discoverability Guide

This guide explains how the MokXya Hisab marketing website handles Search Engine Optimization and structured data.

## 1. Route-Aware Metadata
We use `react-helmet-async` to inject route-specific metadata into the document `<head>`.
The `<Meta>` component (`src/components/seo/Meta.tsx`) handles:
- `<title>` and `<meta name="description">`
- Canonical URL generation based on `siteConfig.url`.
- Open Graph tags (`og:title`, `og:image`, etc.) for Facebook sharing.
- Twitter Card tags for Twitter sharing.
- Safe `robots` indexing policies.

**Usage**:
Simply import `<Meta>` into any page-level component and pass the relevant props:
```tsx
<Meta title="About Us" description="Learn about our mission." path="/about" />
```

## 2. Structured Data (JSON-LD)
We inject schema.org structured data using the `<StructuredData>` component (`src/components/seo/StructuredData.tsx`).

Currently supported types:
- **Organization**: Provides search engines with the MokXya brand identity and contact points.
- **SoftwareApplication**: Communicates that MokXya Hisab is a web application and explicitly marks it as free during the pilot phase.
- **FAQPage**: Enhances search results with accordion-style Q&A snippets.

## 3. Social Assets
- **OG Image**: By default, the `<Meta>` component looks for `/assets/og-image-placeholder.png`. Replace this placeholder with a designed social sharing card.

## 4. Crawling Config
- `public/robots.txt`: Allows all crawlers to access the site.
- `public/sitemap.xml`: A static sitemap mapping the core routes (`/`, `/pilot`, `/about`, `/privacy`, `/terms`) with relative priorities. Update this file whenever adding new public routes.
