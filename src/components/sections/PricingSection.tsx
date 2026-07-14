import React from 'react';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Stack } from '../common/Stack';
import { Cluster } from '../common/Cluster';
import { Card } from '../common/Card';
import { siteConfig } from '../../config/site';

export const PricingSection: React.FC = () => {
  return (
    <Section id="pricing" style={{ backgroundColor: 'var(--color-surface-subtle)' }}>
      <Container>
        <Stack align="center" gap="var(--spacing-8)">
          <Stack align="center" style={{ textAlign: 'center' }}>
            <h2 className="t-section-heading">Transparent Pricing</h2>
            <p className="t-body" style={{ color: 'var(--color-text-muted)', maxWidth: '600px' }}>
              We believe in clear costs. You will always know what you pay before you activate a paid tier.
            </p>
          </Stack>

          <Cluster justify="center" gap="var(--spacing-6)" style={{ alignItems: 'stretch' }}>
            
            <Card elevated style={{ flex: '1 1 300px', maxWidth: '350px', border: '2px solid var(--color-primary-blue)' }}>
              <Stack gap="var(--spacing-4)">
                <h3 className="t-body" style={{ fontWeight: 'bold' }}>Founding Pilot</h3>
                <div className="t-section-heading">{siteConfig.pricing.founding}</div>
                <p className="t-small" style={{ color: 'var(--color-text-muted)' }}>
                  During the controlled pilot period for selected businesses.
                </p>
              </Stack>
            </Card>

            <Card style={{ flex: '1 1 300px', maxWidth: '350px' }}>
              <Stack gap="var(--spacing-4)">
                <h3 className="t-body" style={{ fontWeight: 'bold' }}>Future Starter</h3>
                <div className="t-section-heading" style={{ fontSize: 'var(--font-size-xl)' }}>
                  {siteConfig.pricing.starter || 'To be announced'}
                </div>
                <p className="t-small" style={{ color: 'var(--color-text-muted)' }}>
                  Affordable annual pricing, announced before paid activation.
                </p>
              </Stack>
            </Card>

            <Card style={{ flex: '1 1 300px', maxWidth: '350px' }}>
              <Stack gap="var(--spacing-4)">
                <h3 className="t-body" style={{ fontWeight: 'bold' }}>Future Business</h3>
                <div className="t-section-heading" style={{ fontSize: 'var(--font-size-xl)' }}>
                  {siteConfig.pricing.business || 'To be announced'}
                </div>
                <p className="t-small" style={{ color: 'var(--color-text-muted)' }}>
                  Advanced users, permissions, reporting and priority support.
                </p>
              </Stack>
            </Card>

          </Cluster>
        </Stack>
      </Container>
    </Section>
  );
};
