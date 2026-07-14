import React from 'react';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Stack } from '../common/Stack';
import { Cluster } from '../common/Cluster';
import { Card } from '../common/Card';

export const ProblemsSection: React.FC = () => {
  const problems = [
    "Customer dues are difficult to track.",
    "Stock finishes without warning.",
    "Cash, bank and QR records do not match.",
    "Sales happen, but actual profit remains unclear.",
    "Business and personal cash become mixed.",
    "Records are not ready when an accountant needs them."
  ];

  return (
    <Section>
      <Container>
        <Stack align="center" gap="var(--spacing-8)">
          <Stack align="center" style={{ textAlign: 'center' }}>
            <h2 className="t-section-heading">Familiar business problems</h2>
            <p className="t-body" style={{ color: 'var(--color-text-muted)', maxWidth: '600px' }}>
              Small businesses often struggle to maintain clear financial records using traditional methods.
            </p>
          </Stack>

          <Cluster justify="center" gap="var(--spacing-6)">
            {problems.map((problem, idx) => (
              <Card key={idx} style={{ maxWidth: '350px', width: '100%' }}>
                <p className="t-body" style={{ fontWeight: 500 }}>{problem}</p>
              </Card>
            ))}
          </Cluster>
        </Stack>
      </Container>
    </Section>
  );
};
