import React from 'react';

export const SkipLink: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="skip-link focus-visible-outline"
      style={{
        padding: '1rem',
        backgroundColor: 'var(--color-brand-navy)',
        color: '#ffffff',
        fontWeight: 'bold',
        textDecoration: 'none',
        borderRadius: 'var(--radius-md)',
      }}
    >
      Skip to main content
      <style>{`
        .skip-link {
          position: absolute;
          top: -100px;
          left: 1rem;
          z-index: 9999;
        }
        .skip-link:focus {
          top: 1rem;
        }
      `}</style>
    </a>
  );
};
