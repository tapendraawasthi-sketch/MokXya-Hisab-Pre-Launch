import React from 'react';
import { Container } from '../../common/Container';
import { Stack } from '../../common/Stack';
import { controlContent } from '../../../content/home';
import { ReviewLedgerPreview } from '../../product/ReviewLedgerPreview';
import { MobileEntryPreview } from '../../product/MobileEntryPreview';
import { ShieldCheck } from 'lucide-react';
import './control.css';

export const ControlSection: React.FC = () => {
  return (
    <section id="control" className="control-section">
      <Container>
        <div className="control-layout">
          
          {/* Left Side: Principles */}
          <div className="control-text-col">
            <Stack gap="var(--spacing-8)">
              <div className="control-icon-wrapper">
                <ShieldCheck size={32} color="var(--color-brand-teal)" />
              </div>

              <h2 className="t-h2" style={{ color: 'var(--color-text-main)' }}>
                {controlContent.heading}
              </h2>
              
              <ul className="control-principles">
                {controlContent.trustConcepts.map((concept, idx) => (
                  <li key={idx} className="control-principle-item">
                    <span className="control-bullet" aria-hidden="true"></span>
                    <span className="t-base font-medium">{concept}</span>
                  </li>
                ))}
              </ul>
              
              <div className="accountant-statement">
                <p className="t-base" style={{ margin: 0, fontWeight: 500, lineHeight: 1.6 }}>
                  {controlContent.accountantStatement}
                </p>
              </div>
            </Stack>
          </div>

          {/* Right Side: Visual Previews */}
          <div className="control-visual-col">
            <Stack gap="var(--spacing-8)">
              <div className="control-preview-wrapper mobile-wrapper">
                <MobileEntryPreview />
              </div>
              <div className="control-preview-wrapper ledger-wrapper">
                <ReviewLedgerPreview />
              </div>
            </Stack>
          </div>

        </div>
      </Container>
    </section>
  );
};
