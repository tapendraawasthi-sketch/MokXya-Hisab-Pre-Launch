import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../common/Container';
import { Stack } from '../common/Stack';
import { Cluster } from '../common/Cluster';
import { BrandLogo } from '../brand/BrandLogo';
import { TextLink } from '../common/TextLink';
import { siteConfig } from '../../config/site';

export const Footer: React.FC = () => {
  const hasContact = siteConfig.social.email || siteConfig.social.phone;
  const hasSocial = siteConfig.social.facebook || siteConfig.social.youtube || siteConfig.social.tiktok || siteConfig.social.instagram;
  const hasContactColumn = hasContact || hasSocial;

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-brand-navy)',
        color: 'var(--color-bg-page)',
        paddingBlock: 'var(--spacing-12)',
        marginTop: 'auto',
      }}
    >
      <Container>
        <Stack gap="var(--spacing-8)">
          <Cluster justify="space-between" align="flex-start" style={{ gap: 'var(--spacing-8)' }}>
            <Stack gap="var(--spacing-4)" style={{ maxWidth: '300px' }}>
              <BrandLogo variant="full" surface="dark" style={{ height: '3rem' }} loading="lazy" />
              <p className="t-small" style={{ color: 'var(--color-text-muted)' }}>
                <span>{siteConfig.brand.tagline}</span>
                <br /><br />
                <span>{siteConfig.brand.productName}</span> is currently being developed and evaluated through a controlled founding pilot.
              </p>
            </Stack>

            <Cluster gap="var(--spacing-12)" align="flex-start">
              <Stack gap="var(--spacing-4)">
                <p className="t-label" style={{ color: 'var(--color-bg-page)', opacity: 0.7 }}>Product</p>
                <nav aria-label="Footer Product Links">
                  <Stack gap="var(--spacing-2)">
                    <Link to="/#how-it-works" style={{ color: 'var(--color-brand-teal-soft)', textDecoration: 'none', fontWeight: 500 }}>How It Works</Link>
                    <Link to="/#features" style={{ color: 'var(--color-brand-teal-soft)', textDecoration: 'none', fontWeight: 500 }}>Features</Link>
                    <Link to="/pilot" style={{ color: 'var(--color-brand-teal-soft)', textDecoration: 'none', fontWeight: 500 }}>Founding Pilot</Link>
                    <Link to="/about" style={{ color: 'var(--color-brand-teal-soft)', textDecoration: 'none', fontWeight: 500 }}>About</Link>
                  </Stack>
                </nav>
              </Stack>

              <Stack gap="var(--spacing-4)">
                <p className="t-label" style={{ color: 'var(--color-bg-page)', opacity: 0.7 }}>Legal</p>
                <nav aria-label="Footer Legal Links">
                  <Stack gap="var(--spacing-2)">
                    <Link to="/privacy" style={{ color: 'var(--color-brand-teal-soft)', textDecoration: 'none', fontWeight: 500 }}>Privacy Policy</Link>
                    <Link to="/terms" style={{ color: 'var(--color-brand-teal-soft)', textDecoration: 'none', fontWeight: 500 }}>Terms of Service</Link>
                  </Stack>
                </nav>
              </Stack>

              {hasContactColumn && (
                <Stack gap="var(--spacing-4)">
                  <p className="t-label" style={{ color: 'var(--color-bg-page)', opacity: 0.7 }}>Contact</p>
                  <address style={{ fontStyle: 'normal' }}>
                    <Stack gap="var(--spacing-2)">
                      {siteConfig.social.email && <a href={`mailto:${siteConfig.social.email}`} className="t-small" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>{siteConfig.social.email}</a>}
                      {siteConfig.social.phone && <a href={`tel:${siteConfig.social.phone}`} className="t-small" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>{siteConfig.social.phone}</a>}
                      {hasSocial && (
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                          {siteConfig.social.facebook && <TextLink href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer">Facebook</TextLink>}
                          {siteConfig.social.youtube && <TextLink href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer">YouTube</TextLink>}
                          {siteConfig.social.tiktok && <TextLink href={siteConfig.social.tiktok} target="_blank" rel="noopener noreferrer">TikTok</TextLink>}
                          {siteConfig.social.instagram && <TextLink href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</TextLink>}
                        </div>
                      )}
                    </Stack>
                  </address>
                </Stack>
              )}
            </Cluster>
          </Cluster>

          <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: 'var(--spacing-6)' }}>
            <Cluster justify="space-between" className="t-small" style={{ color: 'var(--color-text-muted)' }}>
              <p>&copy; {new Date().getFullYear()} {siteConfig.brand.name}. All rights reserved.</p>
              <p>MokXya provides software tools and does not replace independent professional accounting or tax advice.</p>
            </Cluster>
          </div>
        </Stack>
      </Container>
    </footer>
  );
};
