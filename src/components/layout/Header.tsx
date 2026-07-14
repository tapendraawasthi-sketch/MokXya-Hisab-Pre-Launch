import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Container } from '../common/Container';
import { Cluster } from '../common/Cluster';
import { BrandMark } from '../common/BrandMark';
import { ThemeToggle } from '../common/ThemeToggle';
import { Button } from '../common/Button';
import { IconButton } from '../common/IconButton';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'How It Works', path: '/#how-it-works' },
    { label: 'Pricing', path: '/#pricing' },
    { label: 'FAQ', path: '/#faq' },
    { label: 'About', path: '/about' },
    { label: 'Founding Pilot', path: '/pilot' },
  ];

  const navigate = useNavigate();

  return (
    <header
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
          <Link to="/" style={{ textDecoration: 'none' }} aria-label="MokXya Home">
            <BrandMark />
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
              <ThemeToggle />
              <Button onClick={() => navigate('/pilot')}>Join the Founding Pilot</Button>
            </Cluster>
          </nav>

          {/* Mobile Navigation Toggle */}
          <Cluster gap="var(--spacing-2)" className="mobile-nav-toggle" style={{ display: 'flex' }}>
            <ThemeToggle />
            <IconButton
              label="Toggle mobile menu"
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
          style={{
            position: 'absolute',
            top: 'var(--height-header)',
            left: 0,
            right: 0,
            backgroundColor: 'var(--color-surface-elevated)',
            borderBottom: '1px solid var(--color-border)',
            padding: 'var(--spacing-4)',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <nav aria-label="Primary Mobile">
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
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
                      padding: 'var(--spacing-2) 0',
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Button style={{ width: '100%' }} onClick={() => { setMobileMenuOpen(false); navigate('/pilot'); }}>
                  Join the Founding Pilot
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {/* Basic responsive styles via injected style tag for simplicity. Ideally done in a CSS module. */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: block !important; }
          .mobile-nav-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
};
