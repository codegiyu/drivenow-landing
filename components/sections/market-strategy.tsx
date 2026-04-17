import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { PageSection } from '@/components/ui/page-section';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/ui/reveal';
import { SECTION_BG } from '@/lib/constants/media';

const pilotCities = [
  {
    city: 'Manchester',
    reason: 'Large student population with strong learner demand.',
  },
  {
    city: 'Birmingham',
    reason: 'Young demographic and high market volume.',
  },
  {
    city: 'London',
    reason: 'Included as a strategic city with substantial long-term demand.',
  },
];

const rolloutPlan = [
  'Start in one UK city, then expand once operations are stable.',
  'Prioritize instructor supply first to ensure learner demand can be served quickly.',
  'Use early waitlist demand and booking activity to guide expansion sequencing.',
];

export function MarketStrategySection() {
  return (
    <PageSection
      id="strategy"
      bgImage={SECTION_BG.faq}
      containerClassName="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
      <div className="min-w-0">
        <Reveal>
          <SectionHeading
            caption="Go-to-market"
            heading="Pilot city first, then scale with confidence."
            subtext="DriveNow launches city by city, balancing learner growth with instructor readiness so quality does not drop as demand increases."
          />
        </Reveal>
      </div>

      <div className="grid min-w-0 gap-4">
        <Reveal delay={60}>
          <Card className="rounded-[24px]">
            <CardContent className="p-6">
              <CardTitle className="mb-4 text-primary">Pilot city options</CardTitle>
              <div className="grid gap-3">
                {pilotCities.map(({ city, reason }) => (
                  <div
                    key={city}
                    className="rounded-xl border border-foreground/10 bg-white/72 p-4">
                    <p className="font-heading text-lg font-semibold text-foreground">{city}</p>
                    <p className="body-copy mt-1">{reason}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </Reveal>

        <Reveal delay={140}>
          <Card className="rounded-[24px]">
            <CardContent className="p-6">
              <CardTitle className="mb-4 text-primary">
                Core strategy: supply first, then demand
              </CardTitle>
              <div className="grid gap-3">
                {rolloutPlan.map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-primary" aria-hidden />
                    <p className="body-copy text-pretty">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </PageSection>
  );
}
