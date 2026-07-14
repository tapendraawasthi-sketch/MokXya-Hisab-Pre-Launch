import React from 'react';
import { BrandLogo } from '../../brand/BrandLogo';
import { Button } from '../../common/Button';
import './hero.css';

export const HeroProductPreview: React.FC = () => {
  return (
    <div className="hero-product-container" aria-label="Product Interface Preview" role="region">
      <div className="hero-preview-panel">
        {/* A. Compact product header */}
        <div className="hero-preview-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
            <BrandLogo />
            <span style={{ fontWeight: 600, color: 'var(--color-text-main)' }}>Ask MokXya</span>
          </div>
          <span 
            className="t-small" 
            style={{ 
              backgroundColor: 'var(--color-surface-elevated)', 
              padding: '2px 8px', 
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--color-border)'
            }}
          >
            Illustrative workflow
          </span>
        </div>

        {/* B & C & D & E */}
        <div className="hero-preview-body">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
            <span className="t-small" style={{ fontWeight: 600, color: 'var(--color-text-muted)' }}>Romanised Nepali</span>
            <div style={{ 
              backgroundColor: 'var(--color-brand-navy)', 
              color: 'white', 
              padding: 'var(--spacing-3) var(--spacing-4)', 
              borderRadius: 'var(--radius-lg)', 
              borderBottomLeftRadius: '2px',
              maxWidth: '90%'
            }}>
              Ram lai Rs 10,000 ko saman udharo beche.
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
            <span className="t-small" style={{ color: 'var(--color-text-muted)' }}>
              MokXya understood this as a credit sale.
            </span>
            
            <div className="hero-preview-box">
              <div className="hero-preview-row">
                <span className="t-small">Party</span>
                <span style={{ fontWeight: 600 }}>Ram</span>
              </div>
              <div className="hero-preview-row">
                <span className="t-small">Transaction</span>
                <span style={{ fontWeight: 600 }}>Credit sale</span>
              </div>
              <div className="hero-preview-row">
                <span className="t-small">Amount</span>
                <span className="t-financial" style={{ fontWeight: 600 }}>NPR 10,000</span>
              </div>
              <div className="hero-preview-row">
                <span className="t-small">Payment status</span>
                <span style={{ fontWeight: 600, color: 'var(--color-warning)' }}>Due</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-1)', paddingLeft: 'var(--spacing-2)', borderLeft: '2px solid var(--color-border)' }}>
              <span className="t-small" style={{ color: 'var(--color-success)' }}>+ Sales increase</span>
              <span className="t-small" style={{ color: 'var(--color-success)' }}>+ Customer amount due increases</span>
              <span className="t-small" style={{ color: 'var(--color-text-muted)' }}>- Stock decreases (if tracked)</span>
            </div>
          </div>
        </div>

        {/* F & G */}
        <div className="hero-preview-footer">
          <div className="hero-preview-controls">
            <Button variant="outline" size="small" type="button" aria-label="Illustrative edit button">
              Edit
            </Button>
            <Button variant="primary" size="small" type="button" aria-label="Illustrative confirm button">
              Confirm
            </Button>
          </div>
          <span className="t-small" style={{ textAlign: 'center', color: 'var(--color-text-muted)' }}>
            Nothing is recorded until you confirm.
          </span>
        </div>
      </div>
    </div>
  );
};
