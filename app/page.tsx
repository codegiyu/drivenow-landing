import { MainLayout } from '@/components/layout/main-layout';
import { FaqSection } from '@/components/sections/faq';
import { HeroSection } from '@/components/sections/hero';
import { HowItWorksSection } from '@/components/sections/how-it-works';
import { ProblemSolutionSection } from '@/components/sections/problem-solution';
import { WaitlistSection } from '@/components/sections/waitlist';
import { WhyDriveNowSection } from '@/components/sections/why-drivenow';

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <WhyDriveNowSection />
      <FaqSection />
      <WaitlistSection />
    </MainLayout>
  );
}
