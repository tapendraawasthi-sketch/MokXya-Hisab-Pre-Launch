import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../common/Button';
import { Check } from 'lucide-react';
import { heroContent } from '../../../content/home';
import './hero.css';

export const HeroCopy: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="hero-copy">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
        <span 
          className="t-small"
          style={{ 
            color: 'var(--color-brand-teal)', 
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}
        >
          {heroContent.eyebrow}
        </span>
        <p 
          className="t-large lang-ne"
          style={{ 
            color: 'var(--color-brand-navy)', 
            fontWeight: 600,
          }}
        >
          {heroContent.nepaliLead}
        </p>
        <h1 className="t-h1" id="hero-heading" style={{ color: 'var(--color-text-main)' }}>
          {heroContent.headline}
        </h1>
        <p 
          className="t-large" 
          style={{ 
            color: 'var(--color-text-muted)',
            maxWidth: '600px'
          }}
        >
          {heroContent.support}
        </p>
      </div>

      <div className="hero-actions">
        <Button size="large" onClick={() => navigate('/pilot')}>
          {heroContent.primaryCta}
        </Button>
        <Button size="large" variant="secondary" as="a" href="#how-it-works">
          {heroContent.secondaryCta}
        </Button>
      </div>

      <div className="hero-trust-list">
        {heroContent.trustPoints.map((point, index) => (
          <div key={index} style={{ display: 'flex', gap: 'var(--spacing-2)', alignItems: 'center' }}>
            <Check size={16} color="var(--color-success)" aria-hidden="true" />
            <span className="t-small" style={{ color: 'var(--color-text-muted)' }}>
              {point}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
