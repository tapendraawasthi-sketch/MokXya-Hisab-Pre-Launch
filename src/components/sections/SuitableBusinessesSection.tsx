import React from 'react';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Stack } from '../common/Stack';
import { Cluster } from '../common/Cluster';
import { Card } from '../common/Card';

export const SuitableBusinessesSection: React.FC = () => {
  const categories = [
    "Garments", "Footwear", "Cosmetics", "Stationery", "Electrical", "Hardware", "Mobile accessories", "Household goods", "Small wholesalers", "General traders"
  ];

  return (
    <Section style={{ backgroundColor: 'var(--color-surface-subtle)' }}>
      <Container>
        <Stack align="center" gap="var(--spacing-8)">
          <Stack align="center" style={{ textAlign: 'center' }}>
            <h2 className="t-section-heading">Who is this for?</h2>
            <p className="t-body" style={{ color: 'var(--color-text-muted)' }}>Initial categories supported during the pilot phase.</p>
          </Stack>

          <Cluster justify="center" gap="var(--spacing-4)" style={{ maxWidth: '800px' }}>
            {categories.map((cat, idx) => (
              <Card key={idx} style={{ padding: 'var(--spacing-3) var(--spacing-4)' }}>
                <span className="t-small" style={{ fontWeight: 600 }}>{cat}</span>
              </Card>
            ))}
          </Cluster>

          <p className="t-small" style={{ color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
            Other business categories will be introduced gradually after pilot validation.
          </p>
        </Stack>
      </Container>
    </Section>
  );
};
