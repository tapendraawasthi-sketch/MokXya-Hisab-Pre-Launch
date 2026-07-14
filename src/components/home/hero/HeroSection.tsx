import React from 'react';
import { Container } from '../../common/Container';
import { HeroCopy } from './HeroCopy';
import { HeroProductPreview } from './HeroProductPreview';
import './hero.css';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-bg" aria-hidden="true"></div>
      <Container>
        <div className="hero-layout">
          <HeroCopy />
          <HeroProductPreview />
        </div>
      </Container>
    </section>
  );
};
