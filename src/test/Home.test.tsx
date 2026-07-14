import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import { ThemeProvider } from '../app/ThemeProvider';

describe('Home Page', () => {
  const renderHome = () => {
    return render(
      <ThemeProvider>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </ThemeProvider>
    );
  };

  it('renders primary hero content in both languages', () => {
    renderHome();
    
    // Nepali Hero
    expect(screen.getByText('आफ्नै भाषामा आफ्नो व्यवसायको हिसाब राख्नुहोस्।')).toBeInTheDocument();
    
    // English Hero
    expect(screen.getByText('Run your business accounts in your own language.')).toBeInTheDocument();
    
    // Trust microcopy
    expect(screen.getByText(/You remain in control/i)).toBeInTheDocument();
  });

  it('renders CTAs correctly', () => {
    renderHome();
    
    // Primary CTA
    expect(screen.getAllByText('Join the Founding Pilot').length).toBeGreaterThan(0);
    
    // Secondary CTA
    expect(screen.getByText('See How It Works')).toBeInTheDocument();
  });

  it('renders the workflow steps', () => {
    renderHome();
    
    expect(screen.getByText('Say or type the transaction')).toBeInTheDocument();
    expect(screen.getByText('Review what MokXya understood')).toBeInTheDocument();
    expect(screen.getByText('Confirm before it is recorded')).toBeInTheDocument();
    expect(screen.getByText('बोल्नुहोस्। बुझ्नुहोस्। हिसाब राख्नुहोस्।')).toBeInTheDocument();
  });

  it('ensures no accountant replacement claims are made', () => {
    renderHome();
    
    const allText = document.body.textContent || '';
    expect(allText).not.toMatch(/replace your accountant/i);
    expect(allText).not.toMatch(/no need for an accountant/i);
    
    // Check that professional review is mentioned in safety section
    expect(screen.getByText(/may still require a certified accountant/i)).toBeInTheDocument();
  });

  it('ensures no old brand names are used', () => {
    renderHome();
    
    const allText = document.body.textContent || '';
    expect(allText).not.toMatch(/Orbix/i);
    expect(allText).not.toMatch(/Mok-Xya/i);
    expect(allText).not.toMatch(/Mokshya/i);
  });
});
