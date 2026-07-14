import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { ProblemsSection } from '../components/sections/ProblemsSection';
import { WorkflowSection } from '../components/sections/WorkflowSection';
import { InteractiveDemoSection } from '../components/sections/InteractiveDemoSection';
import { PreviewGallerySection } from '../components/sections/PreviewGallerySection';
import { BenefitsSection } from '../components/sections/BenefitsSection';
import { SafetySection } from '../components/sections/SafetySection';
import { SuitableBusinessesSection } from '../components/sections/SuitableBusinessesSection';
import { DevStatusSection } from '../components/sections/DevStatusSection';
import { PricingSection } from '../components/sections/PricingSection';
import { FaqSection } from '../components/sections/FaqSection';
import { CtaSection } from '../components/sections/CtaSection';
import { Stack } from '../components/common/Stack';
import { Meta } from '../components/seo/Meta';
import { StructuredData } from '../components/seo/StructuredData';

const Home: React.FC = () => {
  return (
    <>
      <Meta path="/" />
      <StructuredData type="Organization" />
      <StructuredData type="SoftwareApplication" />
      <Stack gap="0">
        <HeroSection />
        <ProblemsSection />
        <WorkflowSection />
        <InteractiveDemoSection />
        <PreviewGallerySection />
        <BenefitsSection />
        <SafetySection />
        <SuitableBusinessesSection />
        <DevStatusSection />
        <PricingSection />
        <FaqSection />
        <div id="contact">
          <CtaSection />
        </div>
      </Stack>
    </>
  );
};

export default Home;
