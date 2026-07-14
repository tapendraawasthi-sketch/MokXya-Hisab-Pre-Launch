export const analytics = {
  trackEvent: (eventName: string, data?: Record<string, any>) => {
    // No-op for now. 
    // In the future, this can be wired up to a privacy-conscious analytics service.
    if (import.meta.env.DEV) {
      console.log(`[Analytics Event]: ${eventName}`, data);
    }
  },
  trackPilotClick: () => analytics.trackEvent('pilot_cta_click'),
  trackDemoStart: () => analytics.trackEvent('demo_start'),
  trackFormOpen: () => analytics.trackEvent('form_open'),
  trackWhatsAppClick: () => analytics.trackEvent('whatsapp_click'),
  trackContactClick: () => analytics.trackEvent('contact_click'),
};
