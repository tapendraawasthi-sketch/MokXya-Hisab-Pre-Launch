import React from 'react';
import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';
import { Stack } from '../components/common/Stack';
import { Meta } from '../components/seo/Meta';

const Privacy: React.FC = () => {
  return (
    <>
      <Meta title="Privacy Policy" description="Privacy policy for the MokXya Hisab marketing website." path="/privacy" />
      <Section>
        <Container size="small">
          <Stack gap="var(--spacing-6)">
            <h1 className="t-page-heading">Privacy Policy</h1>
            <p className="t-small" style={{ color: 'var(--color-text-muted)' }}>Last Updated: Just now</p>

            <Stack gap="var(--spacing-4)" className="t-body">
              <p>
                <strong>Marketing Site Collection</strong>: This website serves as an informational marketing portal. We collect minimal data necessary for functionality. We may use privacy-conscious analytics to understand how visitors interact with our site.
              </p>

              <p>
                <strong>Pilot Form Data</strong>: If you apply for the Founding Pilot, we collect contact and basic business qualification information. We explicitly ask you not to submit sensitive financial data through these public forms.
              </p>

              <p>
                <strong>External Services</strong>: We may utilize external services (such as Google Forms) to handle pilot applications. Please review their respective privacy policies.
              </p>

              <p>
                <strong>Cookies</strong>: We use essential cookies to maintain site functionality.
              </p>

              <p>
                <strong>Important Distinction</strong>: The privacy practices described here apply to this marketing website. The actual MokXya Hisab application will have its own stringent data protection policies governing your accounting data.
              </p>

              <p className="t-small" style={{ fontStyle: 'italic', color: 'var(--color-text-muted)' }}>
                Disclaimer: This page is for informational transparency and does not constitute legal advice.
              </p>
            </Stack>
          </Stack>
        </Container>
      </Section>
    </>
  );
};

export default Privacy;
