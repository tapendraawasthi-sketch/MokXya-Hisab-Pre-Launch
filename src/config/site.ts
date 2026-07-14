export const siteConfig = {
  name: 'MokXya Hisab',
  tagline: 'Freedom from Complexity',
  url: import.meta.env.VITE_SITE_URL || 'https://mokxya.pages.dev',
  links: {
    dashboard: '/app',
    pilot: '/pilot',
  },
  pilotFormUrl: '', // Leave empty to trigger fallback contact
  pricing: {
    founding: 'Free',
    starter: null, // Indicates 'Price to be announced'
    business: null,
  },
  social: {
    phone: import.meta.env.VITE_CONTACT_PHONE || '',
    whatsapp: import.meta.env.VITE_CONTACT_WHATSAPP || '',
    email: import.meta.env.VITE_CONTACT_EMAIL || '',
    facebook: import.meta.env.VITE_SOCIAL_FACEBOOK || '',
    tiktok: import.meta.env.VITE_SOCIAL_TIKTOK || '',
    youtube: import.meta.env.VITE_SOCIAL_YOUTUBE || '',
    instagram: import.meta.env.VITE_SOCIAL_INSTAGRAM || '',
  },
  brand: {
    name: "MokXya",
    productName: "MokXya Hisab",
    futureProduct: "MokXya ERP",
    assistantIdentity: "Ask MokXya",
    pronunciation: "Mok-shya",
    tagline: "Freedom from Complexity",
    nepaliProductLine: "आफ्नै भाषामा व्यवसायको हिसाब",
    supportingLine: "बोल्नुहोस्। बुझ्नुहोस्। हिसाब राख्नुहोस्।"
  },
  contact: {
    address: "Kathmandu, Nepal",
    founder: import.meta.env.VITE_FOUNDER_NAME || ""
  },
  features: {
    exportAndBackup: "Roadmap",
    roleAwareAccess: "Roadmap",
    offlineOperation: "Under Development"
  },
  environment: {
    isProduction: import.meta.env.PROD,
    mockDataMode: false
  }
};

