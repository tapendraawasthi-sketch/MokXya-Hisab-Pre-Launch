import React from 'react';
import { siteConfig } from '../../config/site';

interface StructuredDataProps {
  type: 'WebSite' | 'Organization' | 'FAQPage';
  data?: any;
}

export const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  let schemaData: any = {};

  if (type === 'WebSite') {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": siteConfig.name,
      "url": siteConfig.url,
      "description": siteConfig.brand.supportingLine
    };
  } else if (type === 'Organization') {
    // Only output if we have actual public contact details
    if (siteConfig.social.phone || siteConfig.social.email) {
      schemaData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": siteConfig.name,
        "url": siteConfig.url,
        "contactPoint": siteConfig.social.phone ? {
          "@type": "ContactPoint",
          "telephone": siteConfig.social.phone,
          "contactType": "customer service"
        } : undefined
      };
    } else {
      return null;
    }
  } else if (type === 'FAQPage' && data) {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": data.map((faq: any) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    };
  }

  if (Object.keys(schemaData).length === 0) return null;

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

