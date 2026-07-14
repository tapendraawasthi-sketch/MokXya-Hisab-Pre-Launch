import React from 'react';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Stack } from '../common/Stack';
import { Cluster } from '../common/Cluster';
import { Badge } from '../common/Badge';
import { Card } from '../common/Card';

export const BenefitsSection: React.FC = () => {
  const benefits = [
    { title: "Everyday language", desc: "No need to learn complex accounting terms." },
    { title: "Customer & supplier dues", desc: "Always know exactly who owes you and what you owe." },
    { title: "Sales & Purchases", desc: "Record your core business activities instantly." },
    { title: "Expenses", desc: "Keep track of daily running costs." },
    { title: "Stock management", desc: "Know what's in your store." },
    { title: "Cash, bank & QR", desc: "Track money across all your payment methods." },
    { title: "Understandable confirmation", desc: "See the effect before it is saved." },
    { title: "Accountant-ready reports", desc: "Share structured data with your professional." }
  ];

  const roadmap = [
    "Export and backup features",
    "Role-aware access control"
  ];

  return (
    <Section id="features" style={{ backgroundColor: 'var(--color-surface-subtle)' }}>
      <Container>
        <Stack align="center" gap="var(--spacing-8)">
          <Stack align="center" style={{ textAlign: 'center' }}>
            <h2 className="t-section-heading">Everything you need</h2>
            <p className="t-body" style={{ color: 'var(--color-text-muted)' }}>Core capabilities designed for small businesses.</p>
          </Stack>

          <Cluster justify="center" gap="var(--spacing-4)">
            {benefits.map((benefit, idx) => (
              <Card key={idx} style={{ width: '250px' }}>
                <h3 className="t-body" style={{ fontWeight: 600 }}>{benefit.title}</h3>
                <p className="t-small" style={{ color: 'var(--color-text-muted)', marginTop: 'var(--spacing-2)' }}>{benefit.desc}</p>
              </Card>
            ))}
          </Cluster>

          <Stack align="center" gap="var(--spacing-4)" style={{ marginTop: 'var(--spacing-4)' }}>
            <h3 className="t-body" style={{ fontWeight: 600 }}>Upcoming Roadmap Features <Badge variant="neutral">In Development</Badge></h3>
            <Cluster gap="var(--spacing-4)">
              {roadmap.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: 'var(--font-size-sm)' }}>
                  <span aria-hidden="true" style={{ color: 'var(--color-primary-blue)' }}>→</span> {item}
                </div>
              ))}
            </Cluster>
          </Stack>
        </Stack>
      </Container>
    </Section>
  );
};
