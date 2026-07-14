import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevated?: boolean;
}

export const Card: React.FC<CardProps> = ({ elevated = false, className = '', children, ...props }) => {
  return (
    <div
      className={className}
      style={{
        backgroundColor: elevated ? 'var(--color-surface-elevated)' : 'var(--color-surface-subtle)',
        borderRadius: 'var(--radius-lg)',
        border: `1px solid var(--color-border)`,
        padding: 'var(--spacing-6)',
        boxShadow: elevated ? 'var(--shadow-md)' : 'none',
      }}
      {...props}
    >
      {children}
    </div>
  );
};
