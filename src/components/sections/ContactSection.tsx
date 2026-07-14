import React from 'react';
import { Cluster } from '../common/Cluster';
import { Button } from '../common/Button';
import { siteConfig } from '../../config/site';
import { analytics } from '../../lib/analytics';

export const ContactSection: React.FC = () => {
  return (
    <Cluster justify="center" gap="var(--spacing-4)">
      {siteConfig.social.whatsapp && (
        <Button 
          variant="outline" 
          onClick={() => {
            analytics.trackWhatsAppClick();
            window.open(siteConfig.social.whatsapp, '_blank');
          }}
        >
          Message on WhatsApp
        </Button>
      )}
      
      {siteConfig.social.phone && (
        <Button 
          variant="outline" 
          onClick={() => {
            analytics.trackContactClick();
            window.location.href = `tel:${siteConfig.social.phone}`;
          }}
        >
          Call Us
        </Button>
      )}

      {siteConfig.social.email && (
        <Button 
          variant="outline" 
          onClick={() => {
            analytics.trackContactClick();
            window.location.href = `mailto:${siteConfig.social.email}`;
          }}
        >
          Email Us
        </Button>
      )}
    </Cluster>
  );
};
