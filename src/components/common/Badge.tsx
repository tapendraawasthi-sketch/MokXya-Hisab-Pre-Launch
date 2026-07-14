import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'neutral' | 'success' | 'warning' | 'danger';
}

export const Badge: React.FC<BadgeProps> = ({ variant = 'neutral', className = '', children, ...props }) => {
  const bgColors = {
    neutral: 'var(--color-surface-subtle)',
    success: 'var(--color-success)',
    warning: 'var(--color-warning)',
    danger: 'var(--color-danger)',
  };

  const textColors = {
    neutral: 'var(--color-text-main)',
    success: '#ffffff',
    warning: '#ffffff',
    danger: '#ffffff',
  };

  return (
    <span
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '0.125rem 0.5rem',
        borderRadius: 'var(--radius-full)',
        fontSize: 'var(--font-size-xs)',
        fontWeight: 600,
        backgroundColor: bgColors[variant],
        color: textColors[variant],
      }}
      {...props}
    >
      {children}
    </span>
  );
};
