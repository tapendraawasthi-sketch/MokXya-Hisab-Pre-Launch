import React, { useState } from 'react';

export const SkipLink: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <a
      href="#main-content"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      style={{
        position: isFocused ? 'absolute' : 'absolute',
        top: isFocused ? '1rem' : '-100px',
        left: '1rem',
        zIndex: 9999,
        padding: '1rem',
        backgroundColor: 'var(--color-primary-blue)',
        color: '#ffffff',
        fontWeight: 'bold',
        textDecoration: 'none',
        borderRadius: 'var(--radius-md)',
      }}
    >
      Skip to main content
    </a>
  );
};
