import { Card, CardContent } from '@/components/ui/card';
import { PageSection } from '@/components/ui/page-section';
import { SectionHeading } from '@/components/ui/section-heading';
import { SectionIllustration } from '@/components/ui/section-illustration';
import { Reveal } from '@/components/ui/reveal';
import { SECTION_BG, SECTION_ILLUS } from '@/lib/constants/media';

const steps = [
  {
    step: '01',
    title: 'Search and compare',
    body: 'Learners browse verified instructors by postcode, pricing, reviews, and availability.',
  },
  {
    step: '02',
    title: 'Choose the right fit',
    body: 'Profiles make it easier to compare instructor style, experience, and car details before committing.',
  },
  {
    step: '03',
    title: 'Book with confidence',
    body: 'The MVP direction includes secure booking, messaging, and payment flow readiness with Stripe in mind.',
  },
];

export function HowItWorksSection() {
  return (
    <PageSection
      bgImage={SECTION_BG.how}
      containerClassName="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
      <div className="grid min-w-0 gap-6">
        <Reveal>
          <SectionHeading
            caption="How it works"
            heading="Simple as booking a ride."
            subtext="Designed to feel as simple as booking a ride, without the extra marketplace complexity."
            headingClassName="max-w-[20ch]"
          />
        </Reveal>

        <div className="grid gap-4">
          {steps.map((step, index) => (
            <Reveal key={step.step} delay={index * 120}>
              <Card className="rounded-[24px]">
                <CardContent className="flex gap-5 p-6 sm:gap-6">
                  <span
                    className="font-heading text-2xl font-semibold leading-none tracking-tight text-emerald-500/25 sm:text-3xl"
                    aria-hidden>
                    {step.step}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-heading text-xl font-semibold text-white">{step.title}</h3>
                    <p className="body-copy mt-2 text-pretty">{step.body}</p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>

      <SectionIllustration
        src={SECTION_ILLUS.how}
        alt=""
        className="lg:max-w-[520px] lg:justify-self-end"
      />
    </PageSection>
  );
}
