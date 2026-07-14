import React from 'react';

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: string;
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between';
}

export const Stack: React.FC<StackProps> = ({ 
  gap = 'var(--spacing-4)', 
  align = 'stretch',
  justify = 'flex-start',
  className = '', 
  children, 
  ...props 
}) => {
  return (
    <div 
      className={className} 
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap,
        alignItems: align,
        justifyContent: justify,
      }}
      {...props}
    >
      {children}
    </div>
  );
};
