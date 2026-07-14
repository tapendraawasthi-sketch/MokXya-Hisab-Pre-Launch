import React from 'react';
import { Container } from '../common/Container';
import { Cluster } from '../common/Cluster';
import { CheckCircle2 } from 'lucide-react';
import { trustStrip } from '../../content/home';

export const TrustStripSection: React.FC = () => {
  return (
    <section 
      id="trust"
      aria-label="Capabilities Overview"
      style={{
        paddingBlock: 'var(--spacing-6)',
        backgroundColor: 'var(--color-surface-sunken)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <Container>
        <Cluster 
          gap="var(--spacing-6)" 
          justify="center" 
          align="center" 
          style={{ flexWrap: 'wrap' }}
        >
          {trustStrip.map((item) => (
            <Cluster key={item.id} gap="var(--spacing-2)" align="center">
              <CheckCircle2 size={18} color="var(--color-brand-teal)" aria-hidden="true" />
              <span className="t-small" style={{ color: 'var(--color-text-main)', fontWeight: 500 }}>
                {item.text}
              </span>
            </Cluster>
          ))}
        </Cluster>
      </Container>
    </section>
  );
};
