import React from 'react';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Stack } from '../common/Stack';
import { Cluster } from '../common/Cluster';

export const WorkflowSection: React.FC = () => {
  const steps = [
    {
      num: 1,
      title: 'Say or type the transaction',
      desc: 'Use everyday language to describe what happened in your business.'
    },
    {
      num: 2,
      title: 'Review what MokXya understood',
      desc: 'MokXya translates your words into an accounting preview.'
    },
    {
      num: 3,
      title: 'Confirm before it is recorded',
      desc: 'Check the financial effects. Nothing is saved until you approve.'
    }
  ];

  return (
    <Section id="how-it-works" style={{ backgroundColor: 'var(--color-surface-subtle)' }}>
      <Container>
        <Stack align="center" gap="var(--spacing-8)">
          <Stack align="center" style={{ textAlign: 'center' }}>
            <h2 className="t-section-heading">How MokXya works</h2>
            <p className="t-body lang-ne" style={{ color: 'var(--color-primary-blue)', fontWeight: 600, fontSize: 'var(--font-size-lg)' }}>
              बोल्नुहोस्। बुझ्नुहोस्। हिसाब राख्नुहोस्।
            </p>
          </Stack>

          <Cluster justify="center" gap="var(--spacing-8)">
            {steps.map(step => (
              <Stack key={step.num} align="center" gap="var(--spacing-4)" style={{ maxWidth: '300px', textAlign: 'center' }}>
                <div style={{
                  width: '3rem', height: '3rem',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--color-primary-blue)',
                  color: 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 'var(--font-size-xl)', fontWeight: 'bold'
                }}>
                  {step.num}
                </div>
                <h3 className="t-body" style={{ fontWeight: 600 }}>{step.title}</h3>
                <p className="t-small">{step.desc}</p>
              </Stack>
            ))}
          </Cluster>
        </Stack>
      </Container>
    </Section>
  );
};
