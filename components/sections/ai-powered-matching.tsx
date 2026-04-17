import { Card, CardContent } from '@/components/ui/card';
import { PageSection } from '@/components/ui/page-section';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { SECTION_BG } from '@/lib/constants/media';

const matchingStages = [
  {
    step: '01',
    title: 'Smart matching — live at launch',
    body: 'Rule-based algorithm using your onboarding profile. Anxious? You see patient instructors first. Need to pass fast? High pass-rate instructors surface at the top.',
    timeframe: 'MVP — 2026',
  },
  {
    step: '02',
    title: 'Collaborative filtering',
    body: 'Learners like you had the best outcomes with instructors like this. The same technology Netflix uses to recommend your next show — applied to driving tuition.',
    timeframe: 'Year 1–2',
  },
  {
    step: '03',
    title: 'Predictive pass rate model',
    body: 'A trained ML model that predicts your first-time pass probability for any instructor pairing — before your first lesson. Gets smarter with every lesson on the platform.',
    timeframe: 'Year 2–3',
  },
] as const;

const instructorCards = [
  {
    initials: 'DK',
    name: 'David K.',
    meta: 'Manchester • 8 yrs • ★ 4.9 (127 reviews)',
    price: '£38/hr',
    compatibility: 96,
    tags: ['Patient', 'Calm', 'Anxiety-friendly', 'Manual'],
    featured: true,
    avatarClass: 'bg-emerald-500/20 text-emerald-300',
  },
  {
    initials: 'SR',
    name: 'Sarah R.',
    meta: 'Manchester • 5 yrs • ★ 4.8 (89 reviews)',
    price: '£36/hr',
    compatibility: 88,
    tags: ['Structured', 'Automatic', 'Evenings'],
    featured: false,
    avatarClass: 'bg-indigo-500/20 text-indigo-300',
  },
  {
    initials: 'MT',
    name: 'Marcus T.',
    meta: 'Manchester • 12 yrs • ★ 4.7 (203 reviews)',
    price: '£40/hr',
    compatibility: 82,
    tags: ['High pass rate', 'Fast-track'],
    featured: false,
    avatarClass: 'bg-amber-500/20 text-amber-300',
  },
] as const;

export function AiPoweredMatchingSection() {
  return (
    <PageSection
      id="ai-matching"
      bgImage={SECTION_BG.how}
      containerClassName="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
      <div className="grid gap-6">
        <Reveal>
          <SectionHeading
            caption="🧠 AI-POWERED MATCHING — FIRST IN THE UK"
            heading={
              <>
                Not just nearby.
                <br />
                Right for you.
              </>
            }
            subtext="Every learner is different. A nervous first-timer needs a patient, calm instructor. A fast-tracker needs someone with an exceptional pass rate. Our AI analyses your behaviour, preferences, and goals to find the instructor most likely to get you through your test."
          />
        </Reveal>

        <div className="grid gap-4">
          {matchingStages.map((stage, index) => (
            <Reveal key={stage.step} delay={index * 100 + 80}>
              <Card className="rounded-[24px]">
                <CardContent className="grid gap-5 p-6 sm:gap-6">
                  <div className="shrink-0">
                    <p className="font-heading text-2xl leading-none font-semibold tracking-tight text-primary/70">
                      {stage.step}
                    </p>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      {stage.title}
                    </h3>
                    <p className="body-copy mt-2 text-pretty">{stage.body}</p>
                    <p className="mt-3 text-xs font-semibold tracking-[0.12em] text-primary uppercase">
                      {stage.timeframe}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={180} className="hidden lg:block relative lg:sticky lg:top-28">
        <div className="absolute -top-8 right-4 z-20 rounded-2xl border border-accent-foreground/25 bg-accent px-4 py-2 shadow-[0_16px_40px_rgba(32,48,110,0.14)] lg:-right-6">
          <div className="flex items-center gap-2">
            <p>🧠</p>
            <div className="grid gap-1">
              <p className="text-sm font-semibold text-foreground">AI matching active</p>
              <p className="text-xs text-muted-foreground">Ranked by compatibility</p>
            </div>
          </div>
        </div>

        <div className="relative overflow-visible rounded-[34px] border border-foreground/10 bg-[linear-gradient(120deg,rgba(255,255,255,0.95),rgba(245,251,247,0.98)_42%,rgba(243,247,255,0.98))] p-6 shadow-[0_24px_70px_rgba(16,32,26,0.12)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(16,185,129,0.12),transparent_55%),radial-gradient(circle_at_85%_20%,rgba(99,102,241,0.12),transparent_48%)]" />
          <div className="relative">
            <div className="mb-4 flex items-start justify-between gap-4">
              <p className="pt-3 text-sm font-semibold text-foreground/90">Instructors near you</p>
              <span
                className={`rounded-full px-2.5 py-1 text-xs font-semibold bg-primary/20 text-primary uppercase`}>
                AI Ranked
              </span>
            </div>

            <div className="grid gap-3.5">
              {instructorCards.map(card => (
                <div
                  key={card.name}
                  className={`rounded-3xl border p-4 ${
                    card.featured
                      ? 'border-primary/35 bg-primary/[0.07] shadow-[0_0_0_1px_rgba(16,185,129,0.06)]'
                      : 'border-foreground/10 bg-white/75'
                  }`}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-3">
                      <div
                        className={`flex size-11 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${card.avatarClass}`}>
                        {card.initials}
                      </div>
                      <div className="min-w-0">
                        <p className="truncate font-heading text-xl font-semibold text-foreground">
                          {card.name}
                        </p>
                        <p className="truncate text-sm text-muted-foreground">{card.meta}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      {card.featured ? (
                        <p className="mb-1 inline-flex rounded-full bg-primary/20 px-2 py-0.5 text-[11px] font-semibold text-primary">
                          Best match
                        </p>
                      ) : null}
                      <p className="text-2xl font-semibold text-foreground">{card.price}</p>
                    </div>
                  </div>

                  <div className="mt-3">
                    <div className="mb-1.5 flex items-center justify-between text-sm text-muted-foreground">
                      <span>Compatibility</span>
                      <span className="font-semibold text-primary">{card.compatibility}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-foreground/10">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: `${card.compatibility}%` }}
                      />
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {card.tags.map((tag, index) => (
                      <span
                        key={tag}
                        className={`rounded-full px-2.5 py-1 text-xs ${
                          index === 0
                            ? 'bg-primary/15 text-primary'
                            : 'bg-accent text-accent-foreground'
                        }`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </PageSection>
  );
}
