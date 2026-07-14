import React from 'react';

import { HeroSection } from '../components/home/hero/HeroSection';
import { ProblemOutcomeSection } from '../components/home/problem/ProblemOutcomeSection';
import { WorkflowSection } from '../components/home/workflow/WorkflowSection';
import { InteractiveDemoSection } from '../components/home/demo/InteractiveDemoSection';
import { CapabilitiesSection } from '../components/home/capabilities/CapabilitiesSection';
import { ControlSection } from '../components/home/control/ControlSection';
import { BusinessFitSection } from '../components/home/businesses/BusinessFitSection';
import { TrustStripSection } from '../components/sections/TrustStripSection';
import { PilotOfferSection } from '../components/sections/PilotOfferSection';
import { FaqSection } from '../components/sections/FaqSection';
import { CtaSection } from '../components/sections/CtaSection';
import { Stack } from '../components/common/Stack';
import { Seo } from '../components/seo/Seo';
import { StructuredData } from '../components/seo/StructuredData';

const Home: React.FC = () => {
  return (
    <>
      <Seo path="/" />
      <StructuredData type="Organization" />
      <Stack gap="0">
        <HeroSection />
        <TrustStripSection />
        <ProblemOutcomeSection />
        <WorkflowSection />
        <InteractiveDemoSection />
        <CapabilitiesSection />
        <ControlSection />
        <BusinessFitSection />
        <PilotOfferSection />
        <FaqSection />
        <CtaSection />
      </Stack>
    </>
  );
};

export default Home;
