import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Container } from '../common/Container';
import { Cluster } from '../common/Cluster';
import { BrandLogo } from '../brand/BrandLogo';
import { Button } from '../common/Button';
import { IconButton } from '../common/IconButton';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Product', path: '/#capabilities' },
    { label: 'How It Works', path: '/#how-it-works' },
    { label: 'For Businesses', path: '/#businesses' },
    { label: 'FAQ', path: '/#faq' },
    { label: 'About', path: '/about' }
  ];

  return (
    <header
      role="banner"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: 'var(--color-surface-elevated)',
        borderBottom: '1px solid var(--color-border)',
        height: 'var(--height-header)',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container>
        <Cluster justify="space-between">
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} aria-label="MokXya Home">
            {/* The vertical light lockup doesn't fit a standard header, and we cannot invent a horizontal light lockup. We use the authentic standalone mark. */}
            <BrandLogo variant="mark" style={{ height: '2.5rem' }} fetchPriority="high" />
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary Desktop"
            style={{ display: 'none' }}
            className="desktop-nav"
          >
            <Cluster gap="var(--spacing-6)">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="focus-visible-outline"
                  style={{
                    textDecoration: 'none',
                    color: 'var(--color-text-main)',
                    fontWeight: location.pathname === link.path ? 600 : 400,
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Button onClick={() => navigate('/pilot')}>Apply for the Founding Pilot</Button>
            </Cluster>
          </nav>

          {/* Mobile Navigation Toggle */}
          <Cluster gap="var(--spacing-2)" className="mobile-nav-toggle" style={{ display: 'flex' }}>
            <IconButton
              label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </IconButton>
          </Cluster>
        </Cluster>
      </Container>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          style={{
            position: 'absolute',
            top: 'var(--height-header)',
            left: 0,
            right: 0,
            height: 'calc(100dvh - var(--height-header))',
            backgroundColor: 'var(--color-surface-elevated)',
            borderBottom: '1px solid var(--color-border)',
            padding: 'var(--spacing-6) var(--spacing-4) calc(var(--spacing-8) + var(--height-header)) var(--spacing-4)',
            boxShadow: 'var(--shadow-md)',
            overflowY: 'auto'
          }}
        >
          <nav aria-label="Primary Mobile">
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="focus-visible-outline"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      display: 'block',
                      textDecoration: 'none',
                      color: 'var(--color-text-main)',
                      fontWeight: location.pathname === link.path ? 600 : 400,
                      fontSize: 'var(--font-size-lg)',
                      padding: 'var(--spacing-2) 0',
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li style={{ marginTop: 'var(--spacing-4)' }}>
                <Button size="large" style={{ width: '100%' }} onClick={() => { setMobileMenuOpen(false); navigate('/pilot'); }}>
                  Apply for the Founding Pilot
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {/* Basic responsive styles */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: block !important; }
          .mobile-nav-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
};
