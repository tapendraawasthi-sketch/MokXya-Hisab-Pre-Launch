import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ContactSection } from '../components/sections/ContactSection';
import { analytics } from '../lib/analytics';

// Mock config
vi.mock('../config/site', () => ({
  siteConfig: {
    social: {
      phone: '123',
      whatsapp: '456',
      email: '' // empty email should hide the button
    }
  }
}));

describe('Contact Section', () => {
  it('renders only configured contact options', () => {
    render(<ContactSection />);
    
    expect(screen.getByText('Call Us')).toBeInTheDocument();
    expect(screen.getByText('Message on WhatsApp')).toBeInTheDocument();
    
    // Email is empty in mock, so button should not exist
    expect(screen.queryByText('Email Us')).not.toBeInTheDocument();
  });

  it('fires analytics events on click', () => {
    const trackCall = vi.spyOn(analytics, 'trackContactClick');
    const trackWhatsApp = vi.spyOn(analytics, 'trackWhatsAppClick');
    
    render(<ContactSection />);
    
    fireEvent.click(screen.getByText('Call Us'));
    expect(trackCall).toHaveBeenCalled();

    fireEvent.click(screen.getByText('Message on WhatsApp'));
    expect(trackWhatsApp).toHaveBeenCalled();
  });
});
