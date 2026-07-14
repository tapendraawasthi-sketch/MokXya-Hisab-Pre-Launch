import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'default' | 'large';
  href?: string;
  as?: string | React.ElementType;
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'default', as, ...props }, ref) => {
    
    // In a real app we'd use a CSS module or styled-components, but inline styles or utility classes work here.
    // For simplicity, we'll map variants to style objects or class names.
    const baseStyle: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      fontWeight: 600,
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      transition: 'background-color 0.2s, color 0.2s, border-color 0.2s',
      border: '1px solid transparent',
      textDecoration: 'none',
    };

    const sizeStyles = {
      small: { padding: '0.25rem 0.75rem', fontSize: 'var(--font-size-sm)' },
      default: { padding: '0.5rem 1rem', fontSize: 'var(--font-size-base)' },
      large: { padding: '0.75rem 1.5rem', fontSize: 'var(--font-size-lg)' },
    };

    const variantStyles = {
      primary: {
        backgroundColor: 'var(--color-brand-navy)',
        color: '#ffffff',
      },
      secondary: {
        backgroundColor: 'var(--color-brand-teal)',
        color: '#ffffff',
      },
      outline: {
        backgroundColor: 'transparent',
        borderColor: 'var(--color-border)',
        color: 'var(--color-text-main)',
      },
      ghost: {
        backgroundColor: 'transparent',
        color: 'var(--color-text-main)',
      }
    };

    const style = { ...baseStyle, ...sizeStyles[size], ...variantStyles[variant], ...props.style };

    const Component = as || ((props as any).href ? 'a' : 'button');

    return (
      <Component 
        ref={ref as any}
        className={`focus-visible-outline ${className}`}
        style={style}
        {...(props as any)}
      />
    );
  }
);
Button.displayName = 'Button';
