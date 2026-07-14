import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';
import { Stack } from '../components/common/Stack';
import { Cluster } from '../components/common/Cluster';
import { Button } from '../components/common/Button';
import { Seo } from '../components/seo/Seo';
import { BrandLogo } from '../components/brand/BrandLogo';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Seo title="Page Not Found" noIndex={true} />
      
      <main id="main-content" style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
        <Section style={{ width: '100%', paddingBlock: 'var(--spacing-24)' }}>
          <Container size="small">
            <div style={{
              padding: 'var(--spacing-16) var(--spacing-8)',
              backgroundColor: 'var(--color-surface-elevated)',
              borderRadius: 'var(--radius-xl)',
              textAlign: 'center',
              border: '1px solid var(--color-border)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              <Stack gap="var(--spacing-8)" align="center">
                <BrandLogo variant="mark" style={{ height: '4rem', width: 'auto' }} />
                
                <Stack gap="var(--spacing-4)">
                  <h1 className="t-h2" style={{ color: 'var(--color-brand-navy)' }}>
                    Page Not Found
                  </h1>
                  <p className="t-body" style={{ color: 'var(--color-text-muted)' }}>
                    We can't find the page you're looking for. It might have been moved or doesn't exist yet.
                  </p>
                </Stack>
                
                <Cluster gap="var(--spacing-4)" justify="center" style={{ marginTop: 'var(--spacing-4)' }}>
                  <Button size="large" onClick={() => navigate('/')}>
                    Return Home
                  </Button>
                  <Button size="large" variant="secondary" onClick={() => navigate('/pilot')}>
                    Founding Pilot
                  </Button>
                </Cluster>
              </Stack>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
};

export default NotFound;
