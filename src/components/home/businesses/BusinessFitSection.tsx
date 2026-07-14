import React from 'react';
import { Container } from '../../common/Container';
import { Stack } from '../../common/Stack';
import { suitableBusinessesContent } from '../../../content/home';
import './businesses.css';
import { Store } from 'lucide-react';

export const BusinessFitSection: React.FC = () => {
  return (
    <section id="businesses" className="businesses-section">
      <Container>
        <Stack gap="var(--spacing-12)" align="center">
          <div className="businesses-header">
            <h2 className="t-h2" style={{ color: 'var(--color-text-main)' }}>
              {suitableBusinessesContent.heading}
            </h2>
            <p className="t-large" style={{ color: 'var(--color-text-muted)' }}>
              {suitableBusinessesContent.scopeStatement}
            </p>
          </div>

          <div className="businesses-grid">
            {suitableBusinessesContent.types.map((type) => (
              <div key={type.id} className="business-item">
                <Store size={18} className="business-icon" aria-hidden="true" />
                <span className="t-base font-medium">{type.name}</span>
              </div>
            ))}
          </div>
          
          <div className="businesses-limitation">
            <p className="t-small" style={{ margin: 0 }}>
              <strong>Not currently supported:</strong> {suitableBusinessesContent.limitationStatement}
            </p>
          </div>
          
        </Stack>
      </Container>
    </section>
  );
};
