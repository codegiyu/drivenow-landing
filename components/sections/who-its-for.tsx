'use client';

import { useState } from 'react';

import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { PageSection } from '@/components/ui/page-section';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { SECTION_BG } from '@/lib/constants/media';
import { cn } from '@/lib/utils';

const audienceContent = {
  learners: {
    chip: 'FOR LEARNERS',
    title: 'Learning to drive should feel simple.',
    body: 'Stop scrolling through Facebook groups and calling dozens of instructors. DriveNow puts AI-matched, verified instructors, real reviews, and instant booking in one place.',
    points: [
      'AI matches you with the right instructor for your personality and goals',
      'Browse verified ADI profiles with real learner reviews',
      'Book and pay securely in-app — no cash, no phone calls',
      'Flexible scheduling around your life, not a school’s timetable',
      'Cancel or reschedule without the hassle',
      'Track your progress toward your test',
    ],
  },
  instructors: {
    chip: 'FOR INSTRUCTORS',
    title: 'Earn more. Teach on your schedule.',
    body: 'DriveNow gives independent ADIs a steady pipeline of well-matched students without giving up most of your earnings to a driving school.',
    points: [
      'Keep 80% of every lesson fee — we take 20% flat, no hidden fees',
      'Zero commission for your first 3 months on the platform',
      'Set your own rates, hours, and coverage area',
      'AI brings you learners who match your teaching style',
      'Get paid automatically within 24 hours of every lesson',
      'Build a public verified profile and reputation',
    ],
  },
} as const;

type AudienceTab = keyof typeof audienceContent;

const pointIcons: Record<AudienceTab, string[]> = {
  learners: ['🧠', '✅', '🔐', '📅', '🔁', '📈'],
  instructors: ['💷', '🚀', '⚙️', '🎯', '💸', '⭐'],
};

// const pointIconStyles = [
//   'bg-emerald-500/18 text-emerald-300',
//   'bg-sky-500/18 text-sky-300',
//   'bg-indigo-500/18 text-indigo-300',
//   'bg-amber-500/18 text-amber-300',
//   'bg-fuchsia-500/18 text-fuchsia-300',
//   'bg-teal-500/18 text-teal-300',
// ];

export function WhoItsForSection() {
  const [activeTab, setActiveTab] = useState<AudienceTab>('learners');
  const active = audienceContent[activeTab];

  return (
    <PageSection id="who-its-for" bgImage={SECTION_BG.why} containerClassName="grid gap-8">
      <Reveal>
        <SectionHeading
          caption="Who it’s for"
          heading={
            <>
              Built for both sides
              <br />
              of the market.
            </>
          }
        />
      </Reveal>

      <Reveal delay={100}>
        <Card className="rounded-[28px]">
          <CardContent className="p-6 sm:p-8">
            <div className="mb-6 inline-flex rounded-full border border-foreground/10 bg-white/70 p-1">
              <button
                type="button"
                onClick={() => setActiveTab('learners')}
                className={cn(
                  'rounded-full px-4 py-2 text-xs font-semibold tracking-wide uppercase transition-colors sm:px-5',
                  activeTab === 'learners'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                )}>
                Learners
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('instructors')}
                className={cn(
                  'rounded-full px-4 py-2 text-xs font-semibold tracking-wide uppercase transition-colors sm:px-5',
                  activeTab === 'instructors'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                )}>
                Instructors
              </button>
            </div>

            <div className="grid gap-5">
              <div className="grid gap-2">
                <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                  {active.chip}
                </p>
                <CardTitle className="text-2xl sm:text-3xl">{active.title}</CardTitle>
              </div>
              <p className="body-copy max-w-3xl text-pretty">{active.body}</p>

              <div className="grid gap-3 pt-6 md:grid-cols-2 xl:grid-cols-3">
                {active.points.map((point, index) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-foreground/10 bg-white/70 px-4 py-8 transition-colors hover:border-primary/35 hover:bg-primary/[0.06]">
                    <div className="grid gap-8">
                      <span
                        className={cn(
                          'inline-flex size-14 shrink-0 items-center justify-center rounded-xl text-4xl',
                          ''
                          // pointIconStyles[index % pointIconStyles.length]
                        )}
                        aria-hidden>
                        {pointIcons[activeTab][index] ?? '•'}
                      </span>
                      <p className="body-copy text-pretty">{point}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </Reveal>
    </PageSection>
  );
}
