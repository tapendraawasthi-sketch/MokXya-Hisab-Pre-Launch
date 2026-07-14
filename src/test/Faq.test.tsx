import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FaqSection } from '../components/sections/FaqSection';

describe('FAQ Section', () => {
  it('renders honestly answered FAQ questions', () => {
    render(<FaqSection />);
    
    // Check that it admits the product isn't launched yet
    expect(screen.getByText('Is MokXya already launched?')).toBeInTheDocument();
    expect(screen.getByText(/Not yet/i)).toBeInTheDocument();
    
    // Check that it does not claim to replace accountant
    expect(screen.getByText('Does it completely replace an accountant?')).toBeInTheDocument();
    expect(screen.getByText(/No. MokXya helps you keep daily records organized/i)).toBeInTheDocument();

    // Check language support
    expect(screen.getByText('Can I use Nepali or Roman Nepali?')).toBeInTheDocument();
  });
});
