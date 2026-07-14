import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import { ThemeProvider } from '../app/ThemeProvider';

const renderHome = () => {
  return render(
    <ThemeProvider>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </ThemeProvider>
  );
};

describe('Home Page (Phase 2)', () => {
  it('renders all required sections in the correct order with correct IDs', () => {
    const { container } = renderHome();
    const sections = container.querySelectorAll('section');
    
    // Check IDs map to the required architecture order
    const expectedIds = [
      'home',
      'trust',
      'why-mokxya',
      'how-it-works',
      'demo',
      'capabilities',
      'control',
      'businesses',
      'founding-pilot',
      'faq'
    ];
    
    // The last section is the CTA section, which doesn't strictly need an ID in the requirements,
    // but the previous 10 must match.
    for (let i = 0; i < expectedIds.length; i++) {
      expect(sections[i].id).toBe(expectedIds[i]);
    }
  });

  it('renders hero content and product preview correctly', () => {
    const { container } = renderHome();
    // 1-5. Core text
    expect(screen.getByText('Nepal-first accounting for everyday business')).toBeInTheDocument();
    expect(screen.getByText('Accounting that understands how your business speaks.')).toBeInTheDocument();
    expect(screen.getByText('आफ्नै भाषामा, सजिलो व्यवसायिक हिसाब।')).toBeInTheDocument();
    
    // 4. One h1
    const h1s = container.querySelectorAll('h1');
    expect(h1s.length).toBe(1);

    // 6-7. CTAs
    // Primary CTA points to pilot
    const pilotLinks = screen.getAllByRole('button', { name: /Apply for the Founding Pilot/i });
    expect(pilotLinks.length).toBeGreaterThan(0);
    
    // Secondary CTA
    const flowLink = screen.getByRole('link', { name: /See the product flow/i });
    expect(flowLink).toHaveAttribute('href', '#how-it-works');
    
    // 9-20. Product preview
    const previewRegion = screen.getByRole('region', { name: /Product Interface Preview/i });
    expect(previewRegion).toBeInTheDocument();
    expect(screen.getByText('Ask MokXya')).toBeInTheDocument();
    expect(screen.getAllByText('Illustrative workflow').length).toBeGreaterThan(0);
    expect(screen.getByText('Ram lai Rs 10,000 ko saman udharo beche.')).toBeInTheDocument();
    
    // Preview values
    expect(screen.getAllByText('Party').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Ram').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Transaction').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Credit sale').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Amount').length).toBeGreaterThan(0);
    expect(screen.getAllByText('NPR 10,000').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Payment status').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Due').length).toBeGreaterThan(0);
    
    // Accounting effects
    expect(screen.getByText('+ Sales increase')).toBeInTheDocument();
    expect(screen.getByText('+ Customer amount due increases')).toBeInTheDocument();
    expect(screen.getByText('- Stock decreases (if tracked)')).toBeInTheDocument();
    
    // Negative test: No cash increase
    expect(screen.queryByText(/Cash increase/i)).not.toBeInTheDocument();
    
    // Controls & Assurance
    expect(screen.getByRole('button', { name: /Illustrative edit button/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Illustrative confirm button/i })).toBeInTheDocument();
    expect(screen.getByText('Nothing is recorded until you confirm.')).toBeInTheDocument();
  });

  it('renders trust strip points', () => {
    renderHome();
    expect(screen.getByText('Review before posting')).toBeInTheDocument();
  });

  it('renders problem-to-outcome content', () => {
    renderHome();
    expect(screen.getByText(/Business happens quickly/i)).toBeInTheDocument();
    expect(screen.getByText(/Traditional accounting software feels technical and rigid/i)).toBeInTheDocument();
    expect(screen.getByText(/Review a structured interpretation you can easily understand/i)).toBeInTheDocument();
  });

  it('renders the three-step workflow', () => {
    renderHome();
    expect(screen.getByText('Say or type what happened')).toBeInTheDocument();
    expect(screen.getByText('Review what MokXya understood')).toBeInTheDocument();
    expect(screen.getByText('Confirm before posting')).toBeInTheDocument();
  });

  it('renders product story examples consistently', () => {
    renderHome();
    
    // Check English tab
    const engBtn = screen.getByRole('radio', { name: /English/i });
    fireEvent.click(engBtn);
    expect(screen.getAllByText(/Sold goods worth NPR 10,000 to Ram on credit/i).length).toBeGreaterThan(0);
    
    // Check Roman Nepali tab
    const romanBtn = screen.getByRole('radio', { name: /Romanised Nepali/i });
    fireEvent.click(romanBtn);
    expect(screen.getAllByText(/Ram lai Rs 10,000 ko saman udharo beche/i).length).toBeGreaterThan(0);
    
    // Check Nepali tab
    const nepaliBtn = screen.getByRole('radio', { name: 'Nepali' });
    fireEvent.click(nepaliBtn);
    expect(screen.getAllByText(/रामलाई रु १०,००० को सामान उधारो बिक्री गरियो/i).length).toBeGreaterThan(0);
  });

  it('does not contain prohibited claims', () => {
    renderHome();
    const allText = document.body.textContent || '';
    
    expect(allText).not.toMatch(/Orbix/i);
    expect(allText).not.toMatch(/Chat ERP/i);
    expect(allText).not.toMatch(/replace your accountant/i);
    expect(allText).not.toMatch(/100% accuracy/i);
    expect(allText).not.toMatch(/bank-grade/i);
    expect(allText).not.toMatch(/free forever/i);
  });

  it('renders capabilities with honest status', () => {
    renderHome();
    expect(screen.getByText('Sales')).toBeInTheDocument();
    const pilotBadges = screen.getAllByText('Available in pilot');
    expect(pilotBadges.length).toBeGreaterThan(0);
    const plannedBadges = screen.getAllByText('Planned');
    expect(plannedBadges.length).toBeGreaterThan(0);
    expect(screen.getByText('Illustrative')).toBeInTheDocument();
  });

  it('renders accountant readiness', () => {
    renderHome();
    expect(screen.getByText(/You stay in control of every entry/i)).toBeInTheDocument();
    expect(screen.getByText(/It does not replace professional judgement/i)).toBeInTheDocument();
  });

  it('renders pilot offer without speculative pricing', () => {
    renderHome();
    expect(screen.getByText(/Help shape MokXya with the founding pilot/i)).toBeInTheDocument();
    expect(screen.queryByText(/\$0\/month/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Pilot participants may be asked to provide feedback/i)).toBeInTheDocument();
  });

  it('renders FAQ and allows expansion', () => {
    renderHome();
    const faqBtn = screen.getByRole('button', { name: /What is MokXya Hisab?/i });
    expect(faqBtn).toBeInTheDocument();
    expect(faqBtn).toHaveAttribute('aria-expanded', 'false');
    
    fireEvent.click(faqBtn);
    expect(faqBtn).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByText(/AI-assisted accounting and business-management product/i)).toBeInTheDocument();
  });

  it('renders the final CTA section', () => {
    renderHome();
    expect(screen.getByText(/Ready to test a simpler way to keep business records\?/i)).toBeInTheDocument();
  });
});
