import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DashboardPreview } from '../components/previews/DashboardPreview';
import { MobileEntryPreview } from '../components/previews/MobileEntryPreview';

describe('Product Previews', () => {
  it('labels Dashboard mock data properly', () => {
    render(<DashboardPreview />);
    
    // Essential trust checks: Must indicate it's illustrative
    expect(screen.getByText('Illustrative figures')).toBeInTheDocument();
    expect(screen.getByText(/Sample data/i)).toBeInTheDocument();
  });

  it('labels Mobile preview properly', () => {
    render(<MobileEntryPreview />);
    
    // Essential trust checks: Must indicate it's a preview
    expect(screen.getByText('Interface Preview')).toBeInTheDocument();
  });
});
