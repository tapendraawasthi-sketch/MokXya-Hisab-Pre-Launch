import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import About from '../pages/About';
import Privacy from '../pages/Privacy';
import Terms from '../pages/Terms';
import NotFound from '../pages/NotFound';

describe('Legal and Informational Pages', () => {
  const renderPage = (Component: React.FC) => render(
    <HelmetProvider>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </HelmetProvider>
  );

  it('renders About page with correct semantics', () => {
    renderPage(About);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('About MokXya');
    expect(screen.getByText(/Language-First Approach/i)).toBeInTheDocument();
  });

  it('renders Privacy page', () => {
    renderPage(Privacy);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Privacy Policy');
    expect(screen.getByText(/Marketing Site Collection/i)).toBeInTheDocument();
  });

  it('renders Terms page', () => {
    renderPage(Terms);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Terms of Service');
    expect(screen.getByText(/No Professional Advice/i)).toBeInTheDocument();
  });

  it('renders NotFound page', () => {
    renderPage(NotFound);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('404');
    expect(screen.getByText('Return to Homepage')).toBeInTheDocument();
  });
});
