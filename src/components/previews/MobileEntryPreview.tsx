import React from 'react';
import { Stack } from '../common/Stack';
import { Badge } from '../common/Badge';

export const MobileEntryPreview: React.FC = () => {
  const mobileButtons = [
    { icon: '💰', label: 'बिक्री', sub: 'Sales' },
    { icon: '📦', label: 'खरिद', sub: 'Purchases' },
    { icon: '💸', label: 'खर्च', sub: 'Expenses' },
    { icon: '📥', label: 'पैसा आयो', sub: 'Money In' },
    { icon: '📤', label: 'पैसा गयो', sub: 'Money Out' },
  ];

  return (
    <div style={{
      width: '100%',
      maxWidth: '320px',
      margin: '0 auto',
      backgroundColor: 'var(--color-surface-elevated)',
      borderRadius: '2rem', // mock phone corners
      border: '8px solid var(--color-border)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)',
      height: '600px',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Mock Status Bar */}
      <div style={{ height: '24px', backgroundColor: 'var(--color-bg-page)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: '40px', height: '4px', backgroundColor: 'var(--color-border)', borderRadius: '4px' }}></div>
      </div>

      {/* Mock Header */}
      <div style={{ padding: 'var(--spacing-4)', borderBottom: '1px solid var(--color-border)', textAlign: 'center' }}>
        <h3 className="t-body" style={{ fontWeight: 'bold' }}>MokXya Hisab</h3>
        <Badge variant="neutral" style={{ marginTop: 'var(--spacing-1)' }}>Interface Preview</Badge>
      </div>

      {/* Mock Body */}
      <div style={{ padding: 'var(--spacing-4)', flex: 1, backgroundColor: 'var(--color-surface-subtle)', overflowY: 'auto' }}>
        <Stack gap="var(--spacing-4)">
          
          <div style={{ backgroundColor: 'var(--color-primary-blue)', color: 'white', padding: 'var(--spacing-4)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
            <p className="t-small" style={{ opacity: 0.8 }}>Today's Balance</p>
            <p className="t-section-heading t-financial" style={{ margin: 'var(--spacing-2) 0' }}>NPR 8,500</p>
          </div>

          <p className="t-label">Quick Entry</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-3)' }}>
            {mobileButtons.map((btn, i) => (
              <div key={i} style={{ 
                backgroundColor: 'var(--color-surface-elevated)', 
                padding: 'var(--spacing-3)', 
                borderRadius: 'var(--radius-md)', 
                textAlign: 'center',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid var(--color-border)'
              }}>
                <div style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-2)' }}>{btn.icon}</div>
                <div className="t-body lang-ne" style={{ fontWeight: 600 }}>{btn.label}</div>
                <div className="t-small" style={{ color: 'var(--color-text-muted)' }}>{btn.sub}</div>
              </div>
            ))}
          </div>

        </Stack>
      </div>

      {/* Mock Footer / Ask MokXya Button */}
      <div style={{ padding: 'var(--spacing-4)', backgroundColor: 'var(--color-surface-elevated)', borderTop: '1px solid var(--color-border)' }}>
        <button style={{
          width: '100%',
          backgroundColor: 'var(--color-teal-accent)',
          color: 'white',
          border: 'none',
          padding: 'var(--spacing-3)',
          borderRadius: 'var(--radius-full)',
          fontWeight: 'bold',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 'var(--spacing-2)'
        }}>
          <span>🎤</span> Ask MokXya
        </button>
      </div>
    </div>
  );
};
