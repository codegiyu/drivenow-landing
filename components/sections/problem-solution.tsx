import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { PageSection } from '@/components/ui/page-section';
import { SectionHeading } from '@/components/ui/section-heading';
import { SectionIllustration } from '@/components/ui/section-illustration';
import { Reveal } from '@/components/ui/reveal';
import { SECTION_BG, SECTION_ILLUS } from '@/lib/constants/media';

const pillars = [
  {
    title: 'For learners',
    body: 'Search by postcode, compare instructors by pricing, car type, reviews, and availability, then book the best fit with less friction.',
  },
  {
    title: 'For instructors',
    body: 'Showcase experience, location, pricing, and schedule availability in one profile built to attract serious learners.',
  },
  {
    title: 'For the platform',
    body: 'Use AI-assisted matching to rank instructors by compatibility signals so discovery feels more relevant from the first search.',
  },
];

export function ProblemSolutionSection() {
  return (
    <PageSection
      bgImage={SECTION_BG.why}
      containerClassName="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
      <SectionIllustration
        src={SECTION_ILLUS.why}
        alt=""
        className="max-w-[480px] lg:justify-self-start"
      />

      <div className="grid min-w-0 gap-10">
        <Reveal>
          <SectionHeading
            caption="Why DriveNow"
            heading="A modern marketplace for a fragmented experience."
            subtext="Today, learner drivers often rely on scattered recommendations or limited local listings. DriveNow brings discovery, comparison, and booking into one premium experience while giving instructors a more direct route to qualified demand."
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-1">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 100}>
              <Card className="h-full rounded-[24px]">
                <CardContent className="p-6">
                  <CardTitle className="mb-3 text-primary">{pillar.title}</CardTitle>
                  <p className="body-copy text-pretty">{pillar.body}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </PageSection>
  );
}
