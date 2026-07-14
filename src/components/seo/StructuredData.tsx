import React from 'react';
import { siteConfig } from '../../config/site';

interface StructuredDataProps {
  type: 'Organization' | 'SoftwareApplication' | 'FAQPage';
  data?: any;
}

export const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  let schemaData: any = {};

  if (type === 'Organization') {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": siteConfig.name,
      "url": siteConfig.url,
      "logo": `${siteConfig.url}/assets/og-image-placeholder.png`,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": siteConfig.social.phone,
        "contactType": "customer service"
      }
    };
  } else if (type === 'SoftwareApplication') {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": siteConfig.brand.productName,
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "NPR",
        "availability": "https://schema.org/InStock",
        "description": "Founding Pilot Phase"
      }
    };
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

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};
