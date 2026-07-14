import React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string; // Required for accessibility
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className = '', label, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        aria-label={label}
        className={`focus-visible-outline ${className}`}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0.5rem',
          borderRadius: 'var(--radius-md)',
          backgroundColor: 'transparent',
          border: 'none',
          color: 'var(--color-text-main)',
          cursor: 'pointer',
          transition: 'background-color 0.2s',
        }}
        {...props}
      >
        {children}
      </button>
    );
  }
);
IconButton.displayName = 'IconButton';
