import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { siteConfig } from '../config/site';

describe('App', () => {
  it('renders the home page correctly with the correct brand name', () => {
    render(<App />);
    
    // Check for the correct brand name
    expect(screen.getAllByText(siteConfig.brand.name).length).toBeGreaterThan(0);
    expect(screen.getAllByText(siteConfig.brand.productName).length).toBeGreaterThan(0);
    expect(screen.getAllByText(siteConfig.brand.tagline).length).toBeGreaterThan(0);
    
    // Ensure no deprecated spelling appears
    const allText = document.body.textContent || '';
    expect(allText).not.toMatch(/Orbix/i);
    expect(allText).not.toMatch(/Mok-Xya/i);
    expect(allText).not.toMatch(/Moc-Xya/i);
    expect(allText).not.toMatch(/Mokshya/i);
  });
});
