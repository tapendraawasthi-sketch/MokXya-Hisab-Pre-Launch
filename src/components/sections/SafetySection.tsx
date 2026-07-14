import React from 'react';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Stack } from '../common/Stack';

export const SafetySection: React.FC = () => {
  return (
    <Section>
      <Container size="small">
        <Stack gap="var(--spacing-6)" style={{ textAlign: 'center' }}>
          <h2 className="t-section-heading">Safety and Control</h2>
          <p className="t-body">
            MokXya prepares a preview based on your input. You review it, and the accounting effects are explained clearly. <strong>Nothing is recorded until your explicit confirmation.</strong>
          </p>
          <p className="t-small" style={{ color: 'var(--color-text-muted)' }}>
            Note: While MokXya helps keep your records organized and ready for professional review, complex tax or year-end matters may still require a certified accountant.
          </p>
        </Stack>
      </Container>
    </Section>
  );
};
