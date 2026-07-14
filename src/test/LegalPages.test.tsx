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
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Making everyday business records easier to explain, review and organise.');
    expect(screen.getByText(/Familiar language first/i)).toBeInTheDocument();
  });

  it('renders Privacy page', () => {
    renderPage(Privacy);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Privacy Notice');
    expect(screen.getByText(/Information Provided by Visitors/i)).toBeInTheDocument();
  });

  it('renders Terms page', () => {
    renderPage(Terms);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Terms of Use');
    expect(screen.getByText(/Current Product Status/i)).toBeInTheDocument();
  });

  it('renders NotFound page', () => {
    renderPage(NotFound);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Page Not Found');
    expect(screen.getByText('Return Home')).toBeInTheDocument();
  });
});
