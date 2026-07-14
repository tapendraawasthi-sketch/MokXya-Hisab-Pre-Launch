import React, { useState } from 'react';
import { Container } from '../common/Container';
import { Stack } from '../common/Stack';
import { faqContent } from '../../content/home';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleOpen = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section 
      id="faq"
      style={{
        paddingBlock: 'var(--spacing-24)',
        backgroundColor: 'var(--color-surface-sunken)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <Container>
        <Stack gap="var(--spacing-12)" align="center">
          <h2 className="t-h2" style={{ color: 'var(--color-text-main)', textAlign: 'center' }}>
            {faqContent.heading}
          </h2>
          
          <Stack gap="var(--spacing-4)" style={{ width: '100%', maxWidth: '800px' }}>
            {faqContent.questions.map((item) => {
              const isOpen = openId === item.id;
              
              return (
                <div 
                  key={item.id}
                  style={{
                    backgroundColor: 'var(--color-surface-elevated)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden'
                  }}
                >
                  <button
                    onClick={() => toggleOpen(item.id)}
                    aria-expanded={isOpen}
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: 'var(--spacing-6)',
                      backgroundColor: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    <span className="t-base" style={{ fontWeight: 600, color: 'var(--color-text-main)' }}>
                      {item.question}
                    </span>
                    <span style={{ color: 'var(--color-text-muted)' }}>
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </span>
                  </button>
                  
                  {isOpen && (
                    <div style={{ padding: '0 var(--spacing-6) var(--spacing-6) var(--spacing-6)' }}>
                      <p className="t-base" style={{ color: 'var(--color-text-muted)' }}>
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </Stack>
        </Stack>
      </Container>
    </section>
  );
};
