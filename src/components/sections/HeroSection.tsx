import React from 'react';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Stack } from '../common/Stack';
import { Cluster } from '../common/Cluster';
import { Button } from '../common/Button';
import { useNavigate } from 'react-router-dom';

export const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Section spacing="large" style={{ backgroundColor: 'var(--color-surface-subtle)', textAlign: 'center' }}>
      <Container>
        <Stack align="center" gap="var(--spacing-8)">
          <Stack gap="var(--spacing-4)" align="center" style={{ maxWidth: '800px' }}>
            <h1 className="t-page-heading lang-ne" style={{ color: 'var(--color-primary-blue)' }}>
              आफ्नै भाषामा आफ्नो व्यवसायको हिसाब राख्नुहोस्।
            </h1>
            <h2 className="t-section-heading" style={{ color: 'var(--color-text-main)' }}>
              Run your business accounts in your own language.
            </h2>
            <p className="t-body" style={{ color: 'var(--color-text-muted)', maxWidth: '600px' }}>
              Record Sales, Purchases, expenses, stock and customer dues by typing or speaking naturally. MokXya prepares the accounting effect, explains it clearly and records it only after you confirm.
            </p>
          </Stack>

          <Cluster justify="center" gap="var(--spacing-4)">
            <Button size="large" onClick={() => navigate('/pilot')}>
              Join the Founding Pilot
            </Button>
            <Button size="large" variant="outline" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>
              See How It Works
            </Button>
          </Cluster>

          <Cluster justify="center" gap="var(--spacing-6)" style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <span aria-hidden="true">✓</span> You remain in control.
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <span aria-hidden="true">✓</span> Entries are reviewed before confirmation.
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <span aria-hidden="true">✓</span> Built for Nepali, Romanised Nepali and English workflows.
            </div>
          </Cluster>
        </Stack>
      </Container>
    </Section>
  );
};
