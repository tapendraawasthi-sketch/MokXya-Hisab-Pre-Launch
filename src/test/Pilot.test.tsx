import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Pilot from '../pages/Pilot';
import { analytics } from '../lib/analytics';

// Mock config to test conditional rendering
vi.mock('../config/site', () => ({
  siteConfig: {
    pilotFormUrl: '',
    social: {
      phone: '123',
      whatsapp: '456',
      email: 'abc'
    }
  }
}));

describe('Pilot Page', () => {
  it('renders fallback contact when pilotFormUrl is empty', () => {
    render(<Pilot />);
    expect(screen.getByText(/Our pilot groups are currently being organized/i)).toBeInTheDocument();
    expect(screen.getByText('Register Interest')).toBeInTheDocument();
  });

  it('validates consent checkbox before submit', () => {
    render(<Pilot />);
    const submitBtn = screen.getByRole('button', { name: 'Register Interest' });
    expect(submitBtn).toBeDisabled();
    
    const checkbox = screen.getByLabelText(/I consent to being contacted/i);
    fireEvent.click(checkbox);
    
    expect(submitBtn).not.toBeDisabled();
  });

  it('calls analytics on submit', () => {
    const spy = vi.spyOn(analytics, 'trackFormOpen');
    render(<Pilot />);
    
    // Fill required fields to allow submit
    fireEvent.change(screen.getByLabelText('Owner Name'), { target: { value: 'Test' } });
    fireEvent.change(screen.getByLabelText('Phone'), { target: { value: '123456' } });
    fireEvent.change(screen.getByLabelText('Business Type'), { target: { value: 'garments' } });
    
    const checkbox = screen.getByLabelText(/I consent to being contacted/i);
    fireEvent.click(checkbox);
    
    const submitBtn = screen.getByRole('button', { name: 'Register Interest' });
    fireEvent.click(submitBtn);
    
    expect(spy).toHaveBeenCalled();
  });
});
