import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { SkipLink } from '../common/SkipLink';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content" tabIndex={-1} style={{ outline: 'none' }}>
        {children}
      </main>
      <Footer />
    </>
  );
};
