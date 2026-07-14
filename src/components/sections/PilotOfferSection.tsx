import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../common/Container';
import { Stack } from '../common/Stack';
import { Button } from '../common/Button';
import { pilotOfferContent } from '../../content/home';
import { Check } from 'lucide-react';

export const PilotOfferSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section 
      id="founding-pilot"
      style={{
        paddingBlock: 'var(--spacing-24)',
        backgroundColor: 'var(--color-bg-page)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <Container>
        <Stack gap="var(--spacing-12)" align="center">
          <h2 className="t-h2" style={{ color: 'var(--color-text-main)', textAlign: 'center' }}>
            {pilotOfferContent.heading}
          </h2>
          
          <div style={{
            maxWidth: '600px',
            width: '100%',
            padding: 'var(--spacing-8)',
            backgroundColor: 'var(--color-surface-elevated)',
            border: '2px solid var(--color-brand-teal)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.1)'
          }}>
            <Stack gap="var(--spacing-8)">
              <ul style={{ 
                listStyle: 'none', 
                padding: 0, 
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--spacing-4)'
              }}>
                {pilotOfferContent.points.map((point, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-4)' }}>
                    <div style={{ 
                      marginTop: '2px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      backgroundColor: 'var(--color-brand-teal)',
                      borderRadius: '50%',
                      padding: '4px'
                    }}>
                      <Check size={12} color="var(--color-surface-sunken)" />
                    </div>
                    <span className="t-base" style={{ color: 'var(--color-text-main)' }}>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Button size="large" onClick={() => navigate('/pilot')} style={{ width: '100%', justifyContent: 'center' }}>
                {pilotOfferContent.primaryCta}
              </Button>
            </Stack>
          </div>
          
        </Stack>
      </Container>
    </section>
  );
};
