import React from 'react';

interface ClusterProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: string;
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between';
}

export const Cluster: React.FC<ClusterProps> = ({ 
  gap = 'var(--spacing-4)', 
  align = 'center',
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
        flexWrap: 'wrap',
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
