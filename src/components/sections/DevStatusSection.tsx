import React from 'react';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Stack } from '../common/Stack';
import { Badge } from '../common/Badge';

export const DevStatusSection: React.FC = () => {
  return (
    <Section>
      <Container size="small">
        <Stack gap="var(--spacing-6)" style={{ textAlign: 'center', backgroundColor: 'var(--color-surface-elevated)', padding: 'var(--spacing-8)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
          <Badge variant="warning" style={{ alignSelf: 'center' }}>Under Development</Badge>
          <h2 className="t-section-heading">Product Status</h2>
          <ul className="t-body" style={{ textAlign: 'left', display: 'inline-block', margin: '0 auto', color: 'var(--color-text-main)' }}>
            <li>Currently under development.</li>
            <li>Founding pilot opening in limited groups.</li>
            <li>Not yet a public production release.</li>
            <li>Pilot participants may encounter changes.</li>
          </ul>
          <p className="t-small" style={{ color: 'var(--color-danger)', fontWeight: 500 }}>
            Important: No sensitive business data should be submitted through the public enquiry form.
          </p>
        </Stack>
      </Container>
    </Section>
  );
};
