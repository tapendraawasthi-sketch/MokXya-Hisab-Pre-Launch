import React from 'react';

interface BrandMarkProps extends React.HTMLAttributes<HTMLDivElement> {}

export const BrandMark: React.FC<BrandMarkProps> = ({ className = '', ...props }) => {
  return (
    <div
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
      }}
      {...props}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M3 21L12 6L21 21"
          stroke="var(--color-primary-blue)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 13L16 13"
          stroke="var(--color-teal-accent)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M12 6L12 18"
          stroke="var(--color-teal-accent)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      <span
        style={{
          fontWeight: 700,
          fontSize: '1.25rem',
          letterSpacing: '-0.02em',
          color: 'var(--color-primary-blue)',
        }}
      >
        MokXya
      </span>
    </div>
  );
};
