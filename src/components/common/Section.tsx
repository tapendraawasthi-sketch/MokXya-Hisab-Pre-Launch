import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: 'default' | 'large' | 'none';
}

export const Section: React.FC<SectionProps> = ({ spacing = 'default', className = '', children, ...props }) => {
  let paddingBlock = 'var(--spacing-16)';
  if (spacing === 'large') paddingBlock = 'var(--spacing-24)';
  if (spacing === 'none') paddingBlock = '0';

  return (
    <section 
      className={className} 
      style={{ paddingBlock }}
      {...props}
    >
      {children}
    </section>
  );
};
