import { AiPoweredMatchingSection } from '@/components/sections/ai-powered-matching';
import { ComparisonSection } from '@/components/sections/comparison';
import { MainLayout } from '@/components/layout/main-layout';
import { FaqSection } from '@/components/sections/faq';
import { HeroSection } from '@/components/sections/hero';
import { HowItWorksSection } from '@/components/sections/how-it-works';
// import { MarketStrategySection } from '@/components/sections/market-strategy';
import { ProblemSolutionSection } from '@/components/sections/problem-solution';
import { WaitlistSection } from '@/components/sections/waitlist';
import { WhoItsForSection } from '@/components/sections/who-its-for';
import { WhyDriveNowSection } from '@/components/sections/why-drivenow';

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <AiPoweredMatchingSection />
      <WhyDriveNowSection />
      <WhoItsForSection />
      {/* <MarketStrategySection /> */}
      <ComparisonSection />
      <FaqSection />
      <WaitlistSection />
    </MainLayout>
  );
}
