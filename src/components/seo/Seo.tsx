import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../../config/site';

interface SeoProps {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export const Seo: React.FC<SeoProps> = ({ 
  title, 
  description, 
  path = '',
  ogImage = '/brand/mokxya-og.png',
  noIndex = false
}) => {
  const fullTitle = title ? `${title} — ${siteConfig.name}` : `${siteConfig.name} — ${siteConfig.tagline}`;
  const metaDescription = description || "MokXya Hisab is being developed to help small businesses in Nepal prepare sales, purchases, expenses, payments and other supported records using Nepali, Romanised Nepali or English, with review before confirmation.";
  const url = `${siteConfig.url}${path}`;
  const absoluteOgImage = `${siteConfig.url}${ogImage}`;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={url} />
      <meta name="theme-color" content="#071A2B" /> {/* match var(--color-brand-navy) */}
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={absoluteOgImage} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="MokXya Hisab - Accounting that understands how your business speaks." />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={absoluteOgImage} />
      <meta name="twitter:image:alt" content="MokXya Hisab - Accounting that understands how your business speaks." />
    </Helmet>
  );
};
