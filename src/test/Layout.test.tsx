import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '../app/ThemeProvider';
import { Layout } from '../components/layout/Layout';

describe('Layout component', () => {
  it('renders skip link, header, main, and footer', () => {
    render(
      <ThemeProvider>
        <BrowserRouter>
          <Layout>
            <div data-testid="main-content">Hello World</div>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    );
    
    // Check for Skip Link
    expect(screen.getByText(/Skip to main content/i)).toBeInTheDocument();
    
    // Check for Header (Brand Mark should be visible)
    expect(screen.getAllByText('MokXya').length).toBeGreaterThan(0);
    
    // Check for Main content
    expect(screen.getByTestId('main-content')).toBeInTheDocument();
    
    // Check for Footer
    expect(screen.getByText(/Privacy Policy/i)).toBeInTheDocument();
  });
});
