import { Card, CardContent } from '@/components/ui/card';
import { PageSection } from '@/components/ui/page-section';
import { SectionHeading } from '@/components/ui/section-heading';
import { SectionIllustration } from '@/components/ui/section-illustration';
import { Reveal } from '@/components/ui/reveal';
import { SECTION_BG, SECTION_ILLUS } from '@/lib/constants/media';

const features = [
  'Learner and instructor account entry points',
  'Instructor profiles with pricing, location, and vehicle type',
  'Search and filtering by postcode and availability',
  'Booking flow with availability-first scheduling',
  'Basic in-app messaging for coordination',
  'Reviews and ratings after completed lessons',
  'Stripe-powered payments in the product roadmap',
];

export function WhyDriveNowSection() {
  return (
    <PageSection
      bgImage={SECTION_BG.mvp}
      containerClassName="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
      <SectionIllustration
        src={SECTION_ILLUS.mvp}
        alt=""
        className="max-w-[480px] lg:justify-self-start"
      />

      <div className="grid min-w-0 gap-10">
        <Reveal>
          <SectionHeading
            caption="MVP scope"
            heading="Clarity, trust, and rapid validation."
            subtext="The immediate goal is to show what DriveNow is building, attract early users, and validate interest before the full product grows into a richer marketplace app experience."
          />
        </Reveal>

        <Reveal delay={120}>
          <Card className="rounded-[28px]">
            <CardContent className="divide-y divide-white/8 p-6 pt-4">
              {features.map((feature, index) => (
                <Reveal key={feature} delay={index * 70}>
                  <div className="flex items-center gap-3 py-2.5">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-primary" aria-hidden />
                    <p className="body-copy text-pretty">{feature}</p>
                  </div>
                </Reveal>
              ))}
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </PageSection>
  );
}
