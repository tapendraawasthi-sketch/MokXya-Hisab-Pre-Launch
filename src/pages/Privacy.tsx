import React from 'react';
import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';
import { Stack } from '../components/common/Stack';
import { Seo } from '../components/seo/Seo';
import { legalContent } from '../content/legal';
import { siteConfig } from '../config/site';

const Privacy: React.FC = () => {
  return (
    <>
      <Seo 
        title="Privacy Notice" 
        description="Read how the MokXya Hisab pre-launch website handles founding-pilot application information and public contact channels." 
        path="/privacy" 
      />
      
      <main id="main-content">
        <Section style={{ paddingBlock: 'var(--spacing-16)' }}>
          <Container size="small">
            <Stack gap="var(--spacing-12)" style={{ maxWidth: '720px', margin: '0 auto' }}>
              
              <Stack gap="var(--spacing-4)" style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: 'var(--spacing-8)' }}>
                <h1 className="t-page-heading">{legalContent.privacy.title}</h1>
                <p className="t-small" style={{ color: 'var(--color-text-muted)' }}>
                  Last Updated: {legalContent.lastUpdated}
                </p>
                <div style={{ backgroundColor: 'var(--color-surface-sunken)', padding: 'var(--spacing-4)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--color-brand-teal)' }}>
                  <p className="t-small" style={{ fontStyle: 'italic', color: 'var(--color-text-muted)' }}>
                    {legalContent.privacy.disclaimer}
                  </p>
                </div>
              </Stack>

              <Stack gap="var(--spacing-12)" className="t-body">
                {legalContent.privacy.sections.map((section) => (
                  <Stack key={section.id} id={section.id} gap="var(--spacing-4)">
                    <h2 className="t-section-heading" style={{ color: 'var(--color-text-main)', fontSize: '1.25rem' }}>
                      {section.title}
                    </h2>
                    <Stack gap="var(--spacing-4)">
                      {section.content.map((paragraph, idx) => (
                        <p key={idx} style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                          {paragraph}
                        </p>
                      ))}
                    </Stack>
                  </Stack>
                ))}

                {siteConfig.social.email && (
                  <Stack id="contact" gap="var(--spacing-4)">
                    <h2 className="t-section-heading" style={{ color: 'var(--color-text-main)', fontSize: '1.25rem' }}>
                      Contact
                    </h2>
                    <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                      If you have questions about this notice, please contact us at <a href={`mailto:${siteConfig.social.email}`} style={{ color: 'var(--color-brand-teal)' }}>{siteConfig.social.email}</a>.
                    </p>
                  </Stack>
                )}
              </Stack>
            </Stack>
          </Container>
        </Section>
      </main>
    </>
  );
};

export default Privacy;
