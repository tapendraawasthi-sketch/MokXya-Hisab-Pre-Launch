import React from 'react';
import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';
import { Stack } from '../components/common/Stack';
import { Button } from '../components/common/Button';
import { Meta } from '../components/seo/Meta';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Meta title="Page Not Found" description="The requested page could not be found." />
      <Section>
        <Container size="small">
          <Stack gap="var(--spacing-8)" align="center" style={{ textAlign: 'center', padding: 'var(--spacing-16) 0' }}>
            <h1 className="t-page-heading" style={{ fontSize: '4rem', color: 'var(--color-primary-blue)' }}>404</h1>
            <h2 className="t-section-heading">Page Not Found</h2>
            <p className="t-body" style={{ color: 'var(--color-text-muted)' }}>
              The page you are looking for doesn't exist or has been moved.
            </p>
            <Button size="large" onClick={() => navigate('/')}>
              Return to Homepage
            </Button>
          </Stack>
        </Container>
      </Section>
    </>
  );
};

export default NotFound;
