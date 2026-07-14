import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../common/Container';
import { Stack } from '../common/Stack';
import { Cluster } from '../common/Cluster';
import { Button } from '../common/Button';
import { finalCtaContent } from '../../content/home';

export const CtaSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section 
      style={{
        paddingBlock: 'var(--spacing-24)',
        backgroundColor: 'var(--color-bg-page)',
      }}
    >
      <Container>
        <div style={{
          padding: 'var(--spacing-16) var(--spacing-8)',
          backgroundColor: 'var(--color-brand-teal)',
          borderRadius: 'var(--radius-xl)',
          textAlign: 'center',
          color: 'var(--color-surface-sunken)'
        }}>
          <Stack gap="var(--spacing-8)" align="center">
            
            <Stack gap="var(--spacing-4)" align="center" style={{ maxWidth: '600px' }}>
              <h2 className="t-h2" style={{ color: 'var(--color-surface-sunken)' }}>
                {finalCtaContent.heading}
              </h2>
              <p className="t-large" style={{ opacity: 0.9 }}>
                {finalCtaContent.supportingText}
              </p>
            </Stack>

            <Cluster gap="var(--spacing-4)" justify="center" style={{ flexWrap: 'wrap' }}>
              <Button size="large" onClick={() => navigate('/pilot')} style={{ backgroundColor: 'var(--color-surface-sunken)', color: 'var(--color-brand-teal)' }}>
                {finalCtaContent.primaryCta}
              </Button>
              <Button size="large" as="a" href={finalCtaContent.secondaryHref} style={{ backgroundColor: 'transparent', color: 'var(--color-surface-sunken)', border: '1px solid var(--color-surface-sunken)' }}>
                {finalCtaContent.secondaryCta}
              </Button>
            </Cluster>

          </Stack>
        </div>
      </Container>
    </section>
  );
};
