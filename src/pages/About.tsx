import React from 'react';
import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';
import { Stack } from '../components/common/Stack';
import { Meta } from '../components/seo/Meta';

const About: React.FC = () => {
  return (
    <>
      <Meta title="About Us" description="Learn about MokXya Hisab's mission to simplify accounting for Nepal's small businesses." path="/about" />
      <Section>
        <Container size="small">
          <Stack gap="var(--spacing-8)">
            <Stack gap="var(--spacing-4)" style={{ textAlign: 'center' }}>
              <h1 className="t-page-heading">About MokXya</h1>
              <p className="t-body" style={{ color: 'var(--color-text-muted)' }}>Freedom from Complexity</p>
            </Stack>

            <Stack gap="var(--spacing-6)" className="t-body">
              <p>
                <strong>The Observation</strong>: Running a small business in Nepal is difficult enough without the added burden of complex accounting. Many business owners struggle to track customer dues, manage stock, and reconcile payments because traditional software is built for accountants, not business owners.
              </p>
              
              <p>
                <strong>Our Mission</strong>: To reduce daily accounting complexity for small Nepalese businesses.
              </p>

              <p>
                <strong>Language-First Approach</strong>: We believe you should be able to run your business in your own language. MokXya is built from the ground up to understand Nepali and Romanised Nepali workflows.
              </p>

              <p>
                <strong>User Control</strong>: You always remain in control. MokXya translates your words into structured previews, but nothing is recorded until you explicitly confirm it.
              </p>

              <p>
                <strong>Controlled Pilot</strong>: We are currently in a controlled Founding Pilot phase, working closely with a limited group of businesses to ensure the product solves real problems before a public launch.
              </p>
            </Stack>
          </Stack>
        </Container>
      </Section>
    </>
  );
};

export default About;
