import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../common/Container';
import { Stack } from '../common/Stack';
import { Cluster } from '../common/Cluster';
import { BrandMark } from '../common/BrandMark';
import { TextLink } from '../common/TextLink';
import { siteConfig } from '../../config/site';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: 'var(--color-surface-subtle)',
        borderTop: '1px solid var(--color-border)',
        paddingBlock: 'var(--spacing-12)',
        marginTop: 'auto',
      }}
    >
      <Container>
        <Stack gap="var(--spacing-8)">
          <Cluster justify="space-between" align="flex-start" style={{ gap: 'var(--spacing-8)' }}>
            <Stack gap="var(--spacing-4)" style={{ maxWidth: '300px' }}>
              <BrandMark />
              <p className="t-small">
                <strong>{siteConfig.brand.productName}</strong><br />
                {siteConfig.brand.tagline}
              </p>
              <p className="t-small" style={{ color: 'var(--color-warning)' }}>
                Product under development. Not yet a public release.
              </p>
            </Stack>

            <Cluster gap="var(--spacing-12)" align="flex-start">
              <Stack gap="var(--spacing-4)">
                <p className="t-label">Product</p>
                <nav aria-label="Footer Product Links">
                  <Stack gap="var(--spacing-2)">
                    <Link to="/#how-it-works" style={{ color: 'var(--color-focus)', textDecoration: 'none', fontWeight: 500 }}>How It Works</Link>
                    <Link to="/#features" style={{ color: 'var(--color-focus)', textDecoration: 'none', fontWeight: 500 }}>Features</Link>
                    <Link to="/pilot" style={{ color: 'var(--color-focus)', textDecoration: 'none', fontWeight: 500 }}>Founding Pilot</Link>
                    <Link to="/about" style={{ color: 'var(--color-focus)', textDecoration: 'none', fontWeight: 500 }}>About</Link>
                  </Stack>
                </nav>
              </Stack>

              <Stack gap="var(--spacing-4)">
                <p className="t-label">Legal</p>
                <nav aria-label="Footer Legal Links">
                  <Stack gap="var(--spacing-2)">
                    <Link to="/privacy" style={{ color: 'var(--color-focus)', textDecoration: 'none', fontWeight: 500 }}>Privacy Policy</Link>
                    <Link to="/terms" style={{ color: 'var(--color-focus)', textDecoration: 'none', fontWeight: 500 }}>Terms of Service</Link>
                  </Stack>
                </nav>
              </Stack>

              <Stack gap="var(--spacing-4)">
                <p className="t-label">Contact</p>
                <address style={{ fontStyle: 'normal' }}>
                  <Stack gap="var(--spacing-2)">
                    {siteConfig.social.email && <a href={`mailto:${siteConfig.social.email}`} className="t-small" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>{siteConfig.social.email}</a>}
                    {siteConfig.social.phone && <a href={`tel:${siteConfig.social.phone}`} className="t-small" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>{siteConfig.social.phone}</a>}
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {siteConfig.social.facebook && <TextLink href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer">Facebook</TextLink>}
                      {siteConfig.social.youtube && <TextLink href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer">YouTube</TextLink>}
                      {siteConfig.social.tiktok && <TextLink href={siteConfig.social.tiktok} target="_blank" rel="noopener noreferrer">TikTok</TextLink>}
                      {siteConfig.social.instagram && <TextLink href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</TextLink>}
                    </div>
                  </Stack>
                </address>
              </Stack>
            </Cluster>
          </Cluster>

          <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: 'var(--spacing-6)' }}>
            <Cluster justify="space-between" className="t-small">
              <p>&copy; {new Date().getFullYear()} {siteConfig.brand.name}. All rights reserved.</p>
              <p>MokXya provides software tools and does not replace independent professional accounting or tax advice.</p>
            </Cluster>
          </div>
        </Stack>
      </Container>
    </footer>
  );
};
