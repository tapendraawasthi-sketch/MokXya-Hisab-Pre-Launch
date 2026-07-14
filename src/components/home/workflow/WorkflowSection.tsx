import React from 'react';
import { Container } from '../../common/Container';
import { Stack } from '../../common/Stack';
import { workflowContent } from '../../../content/home';
import './workflow.css';
import { Mic, Eye, CheckCircle2 } from 'lucide-react';

export const WorkflowSection: React.FC = () => {
  const icons = [Mic, Eye, CheckCircle2];

  return (
    <section id="how-it-works" className="workflow-section">
      <Container>
        <Stack gap="var(--spacing-16)" align="center">
          <h2 className="t-h2" style={{ color: 'var(--color-text-main)', textAlign: 'center' }}>
            {workflowContent.heading}
          </h2>
          
          <ol className="workflow-list">
            {workflowContent.steps.slice(0, 3).map((step, index) => {
              const Icon = icons[index % icons.length];
              return (
                <li key={step.id} className="workflow-step">
                  <div className="workflow-node-container">
                    <div className="workflow-node">
                      <Icon size={24} className="workflow-icon" aria-hidden="true" />
                    </div>
                    {index < 2 && <div className="workflow-connector" aria-hidden="true"></div>}
                  </div>
                  
                  <div className="workflow-content">
                    <h3 className="t-h3 workflow-title">
                      <span className="sr-only">Step {step.stepNumber}: </span>
                      {step.title}
                    </h3>
                    <p className="t-base workflow-desc">
                      {step.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </Stack>
      </Container>
    </section>
  );
};
