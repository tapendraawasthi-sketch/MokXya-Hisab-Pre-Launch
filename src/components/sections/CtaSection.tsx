import React from 'react';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Stack } from '../common/Stack';
import { Cluster } from '../common/Cluster';
import { Button } from '../common/Button';
import { useNavigate } from 'react-router-dom';

export const CtaSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Section style={{ backgroundColor: 'var(--color-primary-blue)', color: 'white' }}>
      <Container>
        <Stack align="center" gap="var(--spacing-8)" style={{ textAlign: 'center', paddingBlock: 'var(--spacing-8)' }}>
          <h2 className="t-page-heading" style={{ color: 'white' }}>
            Help shape accounting for Nepal's small businesses.
          </h2>
          
          <Cluster justify="center" gap="var(--spacing-4)">
            <Button 
              size="large" 
              style={{ backgroundColor: 'white', color: 'var(--color-primary-blue)' }} 
              onClick={() => navigate('/pilot')}
            >
              Join Founding Pilot
            </Button>
            <Button 
              size="large" 
              style={{ backgroundColor: 'transparent', border: '1px solid white', color: 'white' }} 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact the Founder
            </Button>
          </Cluster>
        </Stack>
      </Container>
    </Section>
  );
};
