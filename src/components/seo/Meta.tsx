import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../../config/site';

interface MetaProps {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
}

export const Meta: React.FC<MetaProps> = ({ 
  title, 
  description, 
  path = '',
  ogImage = '/assets/og-image-placeholder.png'
}) => {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} - ${siteConfig.tagline}`;
  const metaDescription = description || "Nepali accounting software for small businesses. Run your business accounts in your own language. udharo हिसाब, stock management Nepal, and business हिसाब app.";
  const url = `${siteConfig.url}${path}`;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={url} />
      <meta name="theme-color" content="#2563EB" /> {/* match var(--color-primary-blue) */}
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={`${siteConfig.url}${ogImage}`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={`${siteConfig.url}${ogImage}`} />
    </Helmet>
  );
};
