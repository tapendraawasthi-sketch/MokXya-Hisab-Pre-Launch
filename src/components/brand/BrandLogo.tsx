import React from 'react';
import mokxyaMark from '../../assets/brand/mokxya-mark.png';
import mokxyaLockupLight from '../../assets/brand/mokxya-lockup-light.png';
import mokxyaLockupDark from '../../assets/brand/mokxya-lockup-dark.png';

export type BrandLogoVariant = 'mark' | 'full' | 'compact';
export type BrandLogoSurface = 'light' | 'dark';

export interface BrandLogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  variant?: BrandLogoVariant;
  surface?: BrandLogoSurface;
  decorative?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'mark',
  surface = 'light',
  decorative = false,
  alt,
  style,
  className = '',
  ...props
}) => {
  let src = mokxyaMark;
  
  if (variant === 'full' || variant === 'compact') {
    src = surface === 'dark' ? mokxyaLockupDark : mokxyaLockupLight;
  }

  // Ensure accessible name if not decorative
  const accessibleAlt = decorative ? '' : (alt || 'MokXya');

  // Set aspect ratios based on known source crop dimensions to prevent CLS
  const aspectRatio = variant === 'mark' ? '350/370' : 
                      (surface === 'dark' ? '661/233' : '730/645');

  const baseStyle: React.CSSProperties = {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
    aspectRatio,
    objectFit: 'contain',
    ...style,
  };

  return (
    <img 
      src={src}
      alt={accessibleAlt}
      aria-hidden={decorative ? 'true' : undefined}
      style={baseStyle}
      className={className}
      {...props}
    />
  );
};
