import React from 'react';
import { Container } from '../../common/Container';
import { Stack } from '../../common/Stack';
import { problemOutcomeContent } from '../../../content/home';
import { ArrowRight } from 'lucide-react';
import './problem.css';

export const ProblemOutcomeSection: React.FC = () => {
  return (
    <section id="why-mokxya" className="problem-section">
      <Container>
        <Stack gap="var(--spacing-16)" align="center">
          <h2 className="t-h2 problem-heading">
            {problemOutcomeContent.heading}
          </h2>
          
          <div className="problem-outcome-list">
            {problemOutcomeContent.pairs.slice(0, 4).map((pair) => (
              <div key={pair.id} className="problem-outcome-row">
                {/* Problem side */}
                <div className="problem-side">
                  <span className="problem-label">Problem</span>
                  <p className="t-base problem-text">{pair.problem}</p>
                </div>
                
                {/* Connector */}
                <div className="problem-connector" aria-hidden="true">
                  <div className="connector-line"></div>
                  <div className="connector-icon-wrapper">
                    <ArrowRight size={20} className="connector-icon" />
                  </div>
                </div>

                {/* Outcome side */}
                <div className="outcome-side">
                  <span className="outcome-label">Outcome</span>
                  <p className="t-base outcome-text">{pair.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </Stack>
      </Container>
    </section>
  );
};
