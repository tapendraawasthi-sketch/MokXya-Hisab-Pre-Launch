import React, { useState, useEffect, useRef } from 'react';
import { Container } from '../../common/Container';
import { Stack } from '../../common/Stack';
import { Cluster } from '../../common/Cluster';
import { Button } from '../../common/Button';
import { DemoLanguageSelector } from './DemoLanguageSelector';
import { DemoExampleSelector } from './DemoExampleSelector';
import { DemoPreviewPanel } from './DemoPreviewPanel';
import { demoExamples, type LanguageVariant, type DemoState } from '../../../content/demoData';
import { CheckCircle2, RotateCcw, PenSquare } from 'lucide-react';
import './demo.css';

export const InteractiveDemoSection: React.FC = () => {
  const [selectedExampleId, setSelectedExampleId] = useState<string>(demoExamples[0].id);
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageVariant>('Romanised Nepali');
  const [demoState, setDemoState] = useState<DemoState>('ready');
  const [announcement, setAnnouncement] = useState<string>('');
  
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const activeExample = demoExamples.find(e => e.id === selectedExampleId) || demoExamples[0];

  // Announce state changes to screen readers
  useEffect(() => {
    if (demoState === 'interpreting') {
      setAnnouncement('Preparing illustrative preview...');
    } else if (demoState === 'preview') {
      setAnnouncement('Preview ready for review.');
    } else if (demoState === 'confirmed') {
      setAnnouncement('Illustrative example confirmed.');
    } else if (demoState === 'reset') {
      setAnnouncement('Demonstration reset. Example selected.');
    }
  }, [demoState]);

  // Handle interpreting -> preview transition
  useEffect(() => {
    if (demoState === 'interpreting') {
      // Deterministic short delay, no network call
      timerRef.current = setTimeout(() => {
        setDemoState('preview');
      }, 1200);
    }
    return () => clearTimeout(timerRef.current);
  }, [demoState]);

  const handleStart = () => setDemoState('interpreting');
  const handleEdit = () => setDemoState('ready');
  const handleConfirm = () => setDemoState('confirmed');
  const handleReset = () => {
    setDemoState('ready');
    setAnnouncement('Demonstration reset.');
  };

  const handleExampleChange = (id: string) => {
    setSelectedExampleId(id);
    if (demoState !== 'ready') setDemoState('ready');
    setAnnouncement('Example selected.');
  };

  const handleLanguageChange = (lang: LanguageVariant) => {
    setSelectedLanguage(lang);
    if (demoState !== 'ready') setDemoState('ready');
  };

  return (
    <section id="demo" className="demo-section">
      <Container>
        <Stack gap="var(--spacing-12)" align="center">
          <div className="demo-header-text">
            <h2 className="t-h2" style={{ color: 'var(--color-text-main)' }}>
              See how MokXya turns everyday language into a reviewable entry.
            </h2>
            <p className="t-large" style={{ color: 'var(--color-text-muted)' }}>
              This demonstration uses prepared examples to show the intended review flow. It is not connected to a live accounting account.
            </p>
          </div>

          {/* ARIA Live Region for Announcements */}
          <div aria-live="polite" className="sr-only">
            {announcement}
          </div>
          
          <div className="demo-workspace">
            {/* Input Selection Panel */}
            <div className="demo-panel">
              <Stack gap="var(--spacing-6)">
                <div className="demo-controls">
                  <div className="demo-control-group">
                    <span className="demo-label" id="language-label">1. Choose language</span>
                    <div aria-labelledby="language-label">
                      <DemoLanguageSelector 
                        selected={selectedLanguage} 
                        onChange={handleLanguageChange}
                        disabled={demoState === 'interpreting' || demoState === 'confirmed'}
                      />
                    </div>
                  </div>
                  <div className="demo-control-group">
                    <span className="demo-label" id="example-label">2. Choose example</span>
                    <div aria-labelledby="example-label">
                      <DemoExampleSelector 
                        selectedId={selectedExampleId} 
                        onChange={handleExampleChange}
                        disabled={demoState === 'interpreting' || demoState === 'confirmed'}
                      />
                    </div>
                  </div>
                </div>

                <div className="demo-input-area">
                  <span className="demo-label">You say or type:</span>
                  <div className={`demo-text-box ${selectedLanguage === 'Nepali' ? 'font-devanagari' : ''}`}>
                    "{activeExample.inputs[selectedLanguage]}"
                  </div>
                </div>

                {demoState === 'ready' && (
                  <Button onClick={handleStart} variant="primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Process Example
                  </Button>
                )}
              </Stack>
            </div>

            {/* Output / Preview Panel */}
            <div className="demo-panel demo-output-panel">
              {demoState === 'ready' && (
                <div className="demo-empty-state">
                  <p>Select an example and process it to see the structured preview.</p>
                </div>
              )}

              {demoState === 'interpreting' && (
                <div className="demo-interpreting-state">
                  <div className="demo-spinner" aria-hidden="true"></div>
                  <p>Interpreting business event...</p>
                </div>
              )}

              {(demoState === 'preview' || demoState === 'confirmed') && (
                <Stack gap="var(--spacing-6)" className="demo-fade-in">
                  <DemoPreviewPanel interpretation={activeExample.interpretation} />
                  
                  {demoState === 'preview' && (
                    <Cluster gap="var(--spacing-4)">
                      <Button onClick={handleEdit} variant="outline" style={{ flex: 1, justifyContent: 'center' }}>
                        <PenSquare size={18} style={{ marginRight: '8px' }} />
                        Edit
                      </Button>
                      <Button onClick={handleConfirm} variant="primary" style={{ flex: 2, justifyContent: 'center' }}>
                        Confirm Illustrative Entry
                      </Button>
                    </Cluster>
                  )}

                  {demoState === 'confirmed' && (
                    <div className="demo-confirmation-state demo-fade-in">
                      <CheckCircle2 size={24} color="var(--color-success)" />
                      <Stack gap="var(--spacing-2)">
                        <h4 style={{ margin: 0, color: 'var(--color-success-dark)' }}>Example confirmed</h4>
                        <p className="t-small" style={{ margin: 0, color: 'var(--color-text-main)' }}>
                          In the intended MokXya workflow, the entry would be recorded only after your confirmation.
                        </p>
                      </Stack>
                      <Button onClick={handleReset} variant="outline" size="small" style={{ marginTop: 'var(--spacing-2)' }}>
                        <RotateCcw size={16} style={{ marginRight: '8px' }} />
                        Reset
                      </Button>
                    </div>
                  )}
                  
                  <div className="demo-assurance">
                    <p className="t-small" style={{ margin: 0 }}>
                      <strong>Assurance:</strong> Nothing is recorded until you confirm.
                    </p>
                  </div>
                </Stack>
              )}
            </div>
          </div>
          
          <p className="t-small" style={{ color: 'var(--color-text-muted)' }}>
            No real business data is stored by this demonstration. Arbitrary interpretation is not active.
          </p>
        </Stack>
      </Container>
    </section>
  );
};
