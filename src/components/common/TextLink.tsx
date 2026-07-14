import React from 'react';

export interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export const TextLink = React.forwardRef<HTMLAnchorElement, TextLinkProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={`focus-visible-outline ${className}`}
        style={{
          color: 'var(--color-focus)',
          textDecoration: 'none',
          fontWeight: 500,
        }}
        onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
        onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
        {...props}
      >
        {children}
      </a>
    );
  }
);
TextLink.displayName = 'TextLink';
