import { Card, CardContent } from '@/components/ui/card';
import { PageSection } from '@/components/ui/page-section';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/ui/reveal';
import { SECTION_BG } from '@/lib/constants/media';
import { CalendarCheck, GraduationCap, Sparkles, UserCircle2 } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: UserCircle2,
    title: 'Tell us about yourself',
    body: 'Answer a few quick questions — your experience level, learning style, availability, and goals. Our AI uses this to build your learner profile.',
  },
  {
    step: '02',
    icon: Sparkles,
    title: 'Get matched',
    body: 'We surface the most compatible verified instructors near you — ranked by AI compatibility score, not just distance or price.',
  },
  {
    step: '03',
    icon: CalendarCheck,
    title: 'Book instantly',
    body: 'Choose a time, pay securely in-app. No phone calls, no cash, no waiting weeks. Booking confirmed in seconds.',
  },
  {
    step: '04',
    icon: GraduationCap,
    title: 'Learn & pass',
    body: 'Take your lessons. Rate your instructor. The AI gets smarter with every review — helping the next learner find their perfect match even faster.',
  },
];

const stats = [
  { value: '700k', label: 'learner tests taken yearly in the UK' },
  { value: '45hrs', label: 'average lesson time before passing' },
  { value: '20%', label: 'planned platform fee for marketplace bookings' },
];

// /** Straight dashed connector between two cards on the same row (left → right). */
// function ArrowBetweenCards() {
//   return (
//     <svg
//       viewBox="0 0 128 48"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       className="h-11 w-full min-w-[2.75rem] max-w-[5rem] text-primary/70"
//       preserveAspectRatio="xMidYMid meet"
//       aria-hidden>
//       <path
//         d="M8 24 L120 24"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeDasharray="6 5"
//         strokeLinecap="round"
//         fill="none"
//       />
//       <path
//         d="M113 17 L 121 24 L 113 31"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         fill="none"
//       />
//     </svg>
//   );
// }
//
// /**
//  * Broken-line connector: from the end of row 1 (right) down and across to the start of row 2 (left).
//  * Full width between the two card rows.
//  */
// function ArrowRowBreak() {
//   return (
//     <svg
//       viewBox="0 0 520 96"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       className="h-[5rem] w-full text-primary/65"
//       preserveAspectRatio="none"
//       aria-hidden>
//       <path
//         d="M506 12 L506 44 L24 44 L24 84"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeDasharray="6 5"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         fill="none"
//       />
//       <path
//         d="M22 77 L14 84 L22 91"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         fill="none"
//       />
//     </svg>
//   );
// }

type Step = (typeof steps)[number];

function StepCard({ step, delay }: { step: Step; delay: number }) {
  // const Icon = step.icon;
  return (
    <Reveal delay={delay}>
      <Card className="flex h-full min-h-0 flex-col rounded-[24px] border-foreground/12 transition-colors hover:border-primary/35">
        <CardContent className="grid flex-1 gap-4 p-6">
          <div className="flex items-center justify-between">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-transparent text-primary">
              {/* <Icon className="h-6 w-6" /> */}
            </div>
            <span
              className="font-heading text-3xl font-semibold tracking-tight text-primary/35"
              aria-hidden>
              {step.step}
            </span>
          </div>
          <div className="min-w-0">
            <h3 className="font-heading text-xl font-semibold text-foreground">{step.title}</h3>
            <p className="body-copy mt-2 text-pretty !text-base sm:!text-[1.05rem] sm:leading-8">
              {step.body}
            </p>
          </div>
        </CardContent>
      </Card>
    </Reveal>
  );
}

export function HowItWorksSection() {
  return (
    <PageSection
      id="how-it-works"
      bgImage={SECTION_BG.how}
      containerClassName="grid gap-8 md:gap-10">
      <Reveal>
        <SectionHeading
          caption="How it works"
          heading="Simple as booking a ride."
          subtext="Designed to feel as simple as booking a ride, without the extra marketplace complexity."
        />
      </Reveal>

      {/* lg: two rows × two cards; same-row cards stretch to equal height */}
      <div className="hidden lg:flex lg:flex-col lg:gap-2">
        <div className="grid grid-cols-2 items-stretch gap-4">
          <StepCard step={steps[0]} delay={80} />
          {/* <div className="flex w-12 min-w-[2.5rem] max-w-[4rem] shrink-0 items-center justify-center self-center">
            <ArrowBetweenCards />
          </div> */}
          <StepCard step={steps[1]} delay={180} />
        </div>

        {/* <div className="px-1 py-1 sm:px-2">
          <ArrowRowBreak />
        </div> */}

        <div className="grid grid-cols-2 items-stretch gap-4">
          <StepCard step={steps[2]} delay={280} />
          {/* <div className="flex w-12 min-w-[2.5rem] max-w-[4rem] shrink-0 items-center justify-center self-center">
            <ArrowBetweenCards />
          </div> */}
          <StepCard step={steps[3]} delay={380} />
        </div>
      </div>

      <div className="grid gap-4 lg:hidden">
        {steps.map((step, index) => {
          // const Icon = step.icon;

          return (
            <Reveal key={step.step} delay={index * 80 + 80}>
              <Card className="rounded-[24px] border-foreground/12 transition-colors hover:border-primary/35">
                <CardContent className="flex gap-4 p-5">
                  {/* <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-transparent text-primary">
                    <Icon className="h-6 w-6" />
                  </div> */}
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span
                        className="font-heading text-sm font-semibold tracking-tight text-primary/65"
                        aria-hidden>
                        {step.step}
                      </span>
                      <h3 className="font-heading text-base font-semibold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="body-copy mt-2 text-pretty !text-base">{step.body}</p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          );
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 100 + 140}>
            <Card className="rounded-[20px]">
              <CardContent className="p-5">
                <p className="text-center font-serif text-[2rem] font-bold tracking-[-0.04em] text-accent-foreground sm:text-[2.5rem]">
                  {stat.value}
                </p>
                <p className="body-copy mt-2 text-center !text-base">{stat.label}</p>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </PageSection>
  );
}
