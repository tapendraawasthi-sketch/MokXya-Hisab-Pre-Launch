import React from 'react';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Stack } from '../common/Stack';
import { DashboardPreview } from '../previews/DashboardPreview';
import { MobileEntryPreview } from '../previews/MobileEntryPreview';

export const PreviewGallerySection: React.FC = () => {
  return (
    <Section style={{ backgroundColor: 'var(--color-bg-page)' }}>
      <Container>
        <Stack align="center" gap="var(--spacing-16)">
          
          <Stack align="center" gap="var(--spacing-8)" style={{ width: '100%' }}>
            <Stack align="center" style={{ textAlign: 'center' }}>
              <h2 className="t-section-heading">Your business at a glance</h2>
              <p className="t-body" style={{ color: 'var(--color-text-muted)', maxWidth: '600px' }}>
                Clear dashboards show exactly where your money is, who owes you, and what needs attention.
              </p>
            </Stack>
            
            <DashboardPreview />
          </Stack>

          <Stack align="center" gap="var(--spacing-8)" style={{ width: '100%' }}>
            <Stack align="center" style={{ textAlign: 'center' }}>
              <h2 className="t-section-heading">Accounting in your pocket</h2>
              <p className="t-body" style={{ color: 'var(--color-text-muted)', maxWidth: '600px' }}>
                Simple mobile interfaces designed for quick entries while you run your shop.
              </p>
            </Stack>
            
            <MobileEntryPreview />
          </Stack>

        </Stack>
      </Container>
    </Section>
  );
};
