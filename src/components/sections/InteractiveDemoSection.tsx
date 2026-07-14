import React, { useState, useEffect } from 'react';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Stack } from '../common/Stack';
import { Cluster } from '../common/Cluster';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';

type DemoState = 'initial' | 'interpreting' | 'preview' | 'confirmed';

interface DemoExample {
  id: string;
  prompt: string;
  customer?: string;
  transactionType: string;
  total: string;
  effects: string[];
}

const DEMO_EXAMPLES: DemoExample[] = [
  {
    id: '1',
    prompt: 'Ram lai NPR 10,000 ko saman udharo beche.',
    customer: 'Ram',
    transactionType: 'Credit Sale',
    total: 'NPR 10,000',
    effects: ['Stock quantity decreases', 'Receivables increase by NPR 10,000', 'Sales revenue increases']
  },
  {
    id: '2',
    prompt: 'Aaja shop ko rent NPR 25,000 tiriyo.',
    transactionType: 'Expense Payment',
    total: 'NPR 25,000',
    effects: ['Cash/Bank decreases by NPR 25,000', 'Rent expense increases']
  },
  {
    id: '3',
    prompt: 'Sita le NPR 5,000 baki tirin.',
    customer: 'Sita',
    transactionType: 'Payment Received',
    total: 'NPR 5,000',
    effects: ['Cash/Bank increases by NPR 5,000', 'Receivables decrease for Sita']
  }
];

export const InteractiveDemoSection: React.FC = () => {
  const [demoState, setDemoState] = useState<DemoState>('initial');
  const [selectedExample, setSelectedExample] = useState<DemoExample | null>(null);

  const handleSelect = (example: DemoExample) => {
    setSelectedExample(example);
    setDemoState('interpreting');
  };

  const handleConfirm = () => {
    setDemoState('confirmed');
  };

  const handleReset = () => {
    setDemoState('initial');
    setSelectedExample(null);
  };

  useEffect(() => {
    let timer: number;
    if (demoState === 'interpreting') {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const delay = prefersReducedMotion ? 100 : 1200; // Simulated delay
      timer = window.setTimeout(() => {
        setDemoState('preview');
      }, delay);
    }
    return () => clearTimeout(timer);
  }, [demoState]);

  return (
    <Section>
      <Container>
        <Stack align="center" gap="var(--spacing-8)">
          <Stack align="center" style={{ textAlign: 'center' }}>
            <h2 className="t-section-heading">Interactive product concept</h2>
            <p className="t-body" style={{ color: 'var(--color-text-muted)' }}>
              See how natural language translates to structured accounting.
            </p>
          </Stack>

          <Card elevated style={{ maxWidth: '700px', width: '100%', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-0.75rem', right: '1rem' }}>
              <Badge variant="warning">Development Demonstration</Badge>
            </div>

            <Stack gap="var(--spacing-6)">
              {/* State Announcement for Screen Readers */}
              <div aria-live="polite" className="visually-hidden" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>
                {demoState === 'initial' && 'Select an example to start.'}
                {demoState === 'interpreting' && 'Interpreting transaction...'}
                {demoState === 'preview' && 'Review the structured transaction preview. Awaiting your confirmation.'}
                {demoState === 'confirmed' && 'Transaction confirmed and recorded.'}
              </div>

              {demoState === 'initial' && (
                <Stack gap="var(--spacing-4)">
                  <p className="t-body" style={{ fontWeight: 600 }}>Select an example:</p>
                  <Stack gap="var(--spacing-2)">
                    {DEMO_EXAMPLES.map((ex) => (
                      <button
                        key={ex.id}
                        className="focus-visible-outline"
                        onClick={() => handleSelect(ex)}
                        style={{
                          textAlign: 'left',
                          padding: 'var(--spacing-3)',
                          backgroundColor: 'var(--color-surface-subtle)',
                          border: '1px solid var(--color-border)',
                          borderRadius: 'var(--radius-md)',
                          cursor: 'pointer',
                          fontFamily: 'monospace',
                          fontSize: 'var(--font-size-base)',
                          color: 'var(--color-text-main)'
                        }}
                      >
                        {ex.prompt}
                      </button>
                    ))}
                  </Stack>
                </Stack>
              )}

              {demoState !== 'initial' && selectedExample && (
                <Stack gap="var(--spacing-6)">
                  <Stack gap="var(--spacing-2)">
                    <p className="t-small">Your Input:</p>
                    <div style={{ padding: 'var(--spacing-3)', backgroundColor: 'var(--color-surface-subtle)', borderRadius: 'var(--radius-md)' }}>
                      <code style={{ fontSize: 'var(--font-size-base)', fontFamily: 'monospace' }}>
                        {selectedExample.prompt}
                      </code>
                    </div>
                  </Stack>

                  {demoState === 'interpreting' && (
                    <div style={{ textAlign: 'center', padding: 'var(--spacing-8) 0', color: 'var(--color-text-muted)' }}>
                      Interpreting...
                    </div>
                  )}

                  {(demoState === 'preview' || demoState === 'confirmed') && (
                    <Stack gap="var(--spacing-4)">
                      <p className="t-small">MokXya's Understanding:</p>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-4)' }}>
                        {selectedExample.customer && (
                          <div>
                            <span className="t-small" style={{ display: 'block' }}>Party:</span>
                            <strong className="t-body">{selectedExample.customer}</strong>
                          </div>
                        )}
                        <div>
                          <span className="t-small" style={{ display: 'block' }}>Transaction:</span>
                          <strong className="t-body">{selectedExample.transactionType}</strong>
                        </div>
                        <div>
                          <span className="t-small" style={{ display: 'block' }}>Total Amount:</span>
                          <strong className="t-financial">{selectedExample.total}</strong>
                        </div>
                        <div>
                          <span className="t-small" style={{ display: 'block' }}>Status:</span>
                          <Badge variant={demoState === 'confirmed' ? 'success' : 'warning'}>
                            {demoState === 'confirmed' ? 'Confirmed & Recorded' : 'Awaiting confirmation'}
                          </Badge>
                        </div>
                      </div>

                      <Stack gap="var(--spacing-2)" style={{ borderTop: '1px solid var(--color-border)', paddingTop: 'var(--spacing-4)' }}>
                        <p className="t-small">Effects:</p>
                        <ul className="t-small" style={{ paddingLeft: '1.25rem', color: 'var(--color-text-muted)' }}>
                          {selectedExample.effects.map((effect, idx) => (
                            <li key={idx}>{effect}</li>
                          ))}
                        </ul>
                      </Stack>

                      {demoState === 'preview' && (
                        <Cluster gap="var(--spacing-4)" style={{ marginTop: 'var(--spacing-4)' }}>
                          <Button onClick={handleConfirm}>Confirm Transaction</Button>
                          <Button variant="ghost" onClick={handleReset}>Cancel</Button>
                        </Cluster>
                      )}

                      {demoState === 'confirmed' && (
                        <Cluster gap="var(--spacing-4)" style={{ marginTop: 'var(--spacing-4)' }}>
                          <Button variant="outline" onClick={handleReset}>Try Another Example</Button>
                        </Cluster>
                      )}
                    </Stack>
                  )}
                </Stack>
              )}
            </Stack>
          </Card>

          <p className="t-small" style={{ color: 'var(--color-text-muted)', maxWidth: '600px', textAlign: 'center' }}>
            This demonstration uses predefined examples. Production transactions will be validated through MokXya’s accounting rules and user confirmation.
          </p>
        </Stack>
      </Container>
    </Section>
  );
};
