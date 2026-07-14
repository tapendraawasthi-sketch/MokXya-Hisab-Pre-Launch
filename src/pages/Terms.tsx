import React from 'react';
import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';
import { Stack } from '../components/common/Stack';
import { Meta } from '../components/seo/Meta';

const Terms: React.FC = () => {
  return (
    <>
      <Meta title="Terms of Service" description="Terms of service for the MokXya Hisab website." path="/terms" />
      <Section>
        <Container size="small">
          <Stack gap="var(--spacing-6)">
            <h1 className="t-page-heading">Terms of Service</h1>
            <p className="t-small" style={{ color: 'var(--color-text-muted)' }}>Last Updated: Just now</p>

            <Stack gap="var(--spacing-4)" className="t-body">
              <p>
                <strong>Informational Status</strong>: This website is for informational purposes only. The MokXya Hisab product is currently under development.
              </p>

              <p>
                <strong>No Guarantees</strong>: Applying for the Founding Pilot does not guarantee acceptance. Participation may be limited.
              </p>

              <p>
                <strong>No Professional Advice</strong>: We do not provide accounting, tax, or legal advice. The interactive demonstrations on this website use predefined examples and should not be relied upon as production accounting tools.
              </p>

              <p>
                <strong>Acceptable Use & IP</strong>: All content, designs, and branding on this website are the intellectual property of MokXya. You may not reproduce them without permission.
              </p>

              <p>
                <strong>External Links</strong>: We are not responsible for the content of external websites linked from this site.
              </p>
            </Stack>
          </Stack>
        </Container>
      </Section>
    </>
  );
};

export default Terms;
