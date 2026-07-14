import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { Section } from '../components/common/Section';
import { Stack } from '../components/common/Stack';
import { Cluster } from '../components/common/Cluster';
import { Button } from '../components/common/Button';
import { Seo } from '../components/seo/Seo';
import { aboutContent } from '../content/about';
import { siteConfig } from '../config/site';

const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Seo 
        title="About MokXya Hisab" 
        description="Learn why MokXya Hisab is being designed as a Nepal-first, language-friendly accounting experience for small retail and trading businesses."
        path="/about" 
      />
      
      <main id="main-content">
        {/* Compact Page Hero */}
        <Section 
          style={{ 
            backgroundColor: 'var(--color-bg-page)', 
            paddingTop: 'var(--spacing-16)', 
            paddingBottom: 'var(--spacing-12)',
            borderBottom: '1px solid var(--color-border)'
          }}
        >
          <Container size="small">
            <Stack gap="var(--spacing-6)" align="center" style={{ textAlign: 'center' }}>
              <p className="t-label" style={{ color: 'var(--color-brand-teal)' }}>
                {aboutContent.hero.eyebrow}
              </p>
              <h1 className="t-page-heading" style={{ color: 'var(--color-text-main)' }}>
                {aboutContent.hero.heading}
              </h1>
              <p className="t-large" style={{ color: 'var(--color-text-muted)', maxWidth: '800px' }}>
                {aboutContent.hero.supportingText}
              </p>
            </Stack>
          </Container>
        </Section>

        {/* Why MokXya Exists */}
        <Section style={{ paddingBlock: 'var(--spacing-16)' }}>
          <Container size="small">
            <Stack gap="var(--spacing-6)">
              <h2 className="t-section-heading" style={{ color: 'var(--color-brand-navy)' }}>
                {aboutContent.whyItExists.title}
              </h2>
              <Stack gap="var(--spacing-4)" className="t-body">
                {aboutContent.whyItExists.content.map((paragraph, index) => (
                  <p key={index} style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                    {paragraph}
                  </p>
                ))}
              </Stack>
            </Stack>
          </Container>
        </Section>

        {/* Core Principles */}
        <Section style={{ paddingBlock: 'var(--spacing-16)', backgroundColor: 'var(--color-surface-sunken)' }}>
          <Container size="small">
            <Stack gap="var(--spacing-12)">
              <h2 className="t-section-heading" style={{ color: 'var(--color-brand-navy)' }}>
                {aboutContent.principles.title}
              </h2>
              
              <Stack gap="var(--spacing-8)">
                {aboutContent.principles.items.map((principle) => (
                  <div key={principle.number} style={{ display: 'flex', gap: 'var(--spacing-6)', alignItems: 'flex-start' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-brand-teal)',
                      color: 'var(--color-surface-sunken)',
                      flexShrink: 0,
                      fontWeight: 700
                    }}>
                      {principle.number}
                    </div>
                    <Stack gap="var(--spacing-2)">
                      <h3 className="t-h3" style={{ color: 'var(--color-text-main)', marginTop: '2px' }}>
                        {principle.title}
                      </h3>
                      <p className="t-body" style={{ color: 'var(--color-text-muted)' }}>
                        {principle.description}
                      </p>
                    </Stack>
                  </div>
                ))}
              </Stack>
            </Stack>
          </Container>
        </Section>

        {/* Relationship with Accountants */}
        <Section style={{ paddingBlock: 'var(--spacing-16)' }}>
          <Container size="small">
            <Stack gap="var(--spacing-6)">
              <h2 className="t-section-heading" style={{ color: 'var(--color-brand-navy)' }}>
                {aboutContent.accountantRelationship.title}
              </h2>
              <Stack gap="var(--spacing-4)" className="t-body">
                {aboutContent.accountantRelationship.content.map((paragraph, index) => (
                  <p key={index} style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                    {paragraph}
                  </p>
                ))}
              </Stack>
            </Stack>
          </Container>
        </Section>

        {/* Controlled Pilot & Limitations */}
        <Section style={{ paddingBlock: 'var(--spacing-16)', backgroundColor: 'var(--color-brand-navy)', color: 'var(--color-surface-sunken)' }}>
          <Container size="small">
            <Stack gap="var(--spacing-8)">
              <h2 className="t-section-heading" style={{ color: 'var(--color-surface-sunken)' }}>
                {aboutContent.controlledPilot.title}
              </h2>
              
              <Stack gap="var(--spacing-4)" className="t-body">
                {aboutContent.controlledPilot.content.map((paragraph, index) => (
                  <p key={index} style={{ opacity: 0.9, lineHeight: 1.6 }}>
                    {paragraph}
                  </p>
                ))}
              </Stack>

              <Cluster align="flex-start" justify="space-between" style={{ gap: 'var(--spacing-8)', marginTop: 'var(--spacing-4)' }}>
                <Stack gap="var(--spacing-4)" style={{ flex: 1, minWidth: '250px' }}>
                  <h3 className="t-h3" style={{ color: 'var(--color-brand-teal)' }}>Initial Scope</h3>
                  <ul style={{ paddingLeft: '1.5rem', opacity: 0.9, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
                    {aboutContent.controlledPilot.initialScope.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </Stack>
                <Stack gap="var(--spacing-4)" style={{ flex: 1, minWidth: '250px' }}>
                  <h3 className="t-h3" style={{ color: 'var(--color-brand-teal)' }}>Not Initial Focus</h3>
                  <ul style={{ paddingLeft: '1.5rem', opacity: 0.9, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
                    {aboutContent.controlledPilot.notInitialFocus.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </Stack>
              </Cluster>
              
            </Stack>
          </Container>
        </Section>

        {/* Optional Founder Information */}
        {siteConfig.contact.founder && siteConfig.social.email && (
           <Section style={{ paddingBlock: 'var(--spacing-16)', borderBottom: '1px solid var(--color-border)' }}>
             <Container size="small">
               <Stack gap="var(--spacing-6)" align="center" style={{ textAlign: 'center' }}>
                  <h2 className="t-section-heading" style={{ color: 'var(--color-brand-navy)' }}>
                    Contact
                  </h2>
                  <p className="t-body" style={{ color: 'var(--color-text-muted)' }}>
                    Reach out to the team at <a href={`mailto:${siteConfig.social.email}`} style={{ color: 'var(--color-brand-teal)', textDecoration: 'none' }}>{siteConfig.social.email}</a>.
                  </p>
               </Stack>
             </Container>
           </Section>
        )}

        {/* Pilot CTA */}
        <Section style={{ paddingBlock: 'var(--spacing-16)', backgroundColor: 'var(--color-bg-page)' }}>
          <Container size="small">
            <div style={{
              padding: 'var(--spacing-12) var(--spacing-8)',
              backgroundColor: 'var(--color-surface-elevated)',
              borderRadius: 'var(--radius-xl)',
              textAlign: 'center',
              border: '1px solid var(--color-border)'
            }}>
              <Stack gap="var(--spacing-6)" align="center">
                <h2 className="t-h2" style={{ color: 'var(--color-brand-navy)' }}>
                  Help shape MokXya with the founding pilot.
                </h2>
                <Button size="large" onClick={() => navigate('/pilot')}>
                  Apply for the Founding Pilot
                </Button>
              </Stack>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
};

export default About;
