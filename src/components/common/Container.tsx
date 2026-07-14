import React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'default' | 'small';
}

export const Container: React.FC<ContainerProps> = ({ size = 'default', className = '', children, ...props }) => {
  const maxWidth = size === 'small' ? 'var(--width-container-sm)' : 'var(--width-container)';
  
  return (
    <div 
      className={className} 
      style={{
        width: '100%',
        maxWidth,
        marginInline: 'auto',
        paddingInline: 'var(--spacing-4)',
      }}
      {...props}
    >
      {children}
    </div>
  );
};
