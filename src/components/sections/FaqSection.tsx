import React from 'react';
import { Container } from '../common/Container';
import { Section } from '../common/Section';
import { Stack } from '../common/Stack';

export const FaqSection: React.FC = () => {
  const faqs = [
    {
      q: 'Is MokXya already launched?',
      a: 'Not yet. We are currently developing the product and opening a limited Founding Pilot for testing.'
    },
    {
      q: 'Is the founding pilot free?',
      a: 'Yes, it is free during the controlled pilot period for selected businesses.'
    },
    {
      q: 'Will it always be free?',
      a: 'No. Future tiers will be paid, but pricing will be explicitly announced before any paid activation.'
    },
    {
      q: 'Does it completely replace an accountant?',
      a: 'No. MokXya helps you keep daily records organized. Complex tax or year-end matters still require professional review.'
    },
    {
      q: 'Can I use Nepali or Roman Nepali?',
      a: 'Yes. It is built for Nepali, Romanised Nepali, and English workflows.'
    },
    {
      q: 'Can I export my records?',
      a: 'Export and backup features are currently on our immediate development roadmap.'
    },
    {
      q: 'Is my business automatically accepted into the pilot?',
      a: 'No, participation is limited. We prioritize business types that fit our current testing goals.'
    },
    {
      q: 'Does MokXya automatically record entries?',
      a: 'No. It prepares a preview, but nothing is recorded until you explicitly confirm.'
    },
    {
      q: 'Which businesses are currently suitable?',
      a: 'Garments, footwear, cosmetics, stationery, electrical, hardware, and similar small retailers and traders.'
    },
    {
      q: 'How will future pricing be communicated?',
      a: 'Directly and transparently, well before the pilot ends.'
    }
  ];

  return (
    <Section id="faq">
      <Container size="small">
        <Stack gap="var(--spacing-8)">
          <h2 className="t-section-heading" style={{ textAlign: 'center' }}>Frequently Asked Questions</h2>
          
          <Stack gap="var(--spacing-6)">
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: 'var(--spacing-4)' }}>
                <h3 className="t-body" style={{ fontWeight: 'bold', marginBottom: 'var(--spacing-2)' }}>{faq.q}</h3>
                <p className="t-body" style={{ color: 'var(--color-text-muted)' }}>{faq.a}</p>
              </div>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Section>
  );
};
