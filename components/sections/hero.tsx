import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SectionBackdrop } from '@/components/ui/section-backdrop';
import { Reveal } from '@/components/ui/reveal';
import { SECTION_BG, SECTION_ILLUS } from '@/lib/constants/media';

const stats = [
  { value: '700k', label: 'learner tests taken yearly in the UK' },
  { value: '45hrs', label: 'average lesson time before passing' },
  { value: '20%', label: 'planned platform fee for marketplace bookings' },
];

export function HeroSection() {
  return (
    <SectionBackdrop bgImage={SECTION_BG.hero} className="px-0 pb-24 pt-24 md:pt-32">
      <div className="site-container grid items-center gap-7 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.85fr)] lg:gap-10">
        <div>
          <Reveal>
            <Badge className="text-[8px] sm:text-[10px] lg:text-[12px] mb-5">
              Launching UK 2026 • AI-powered matching
            </Badge>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="font-heading text-[3.25rem] leading-[1.06] font-bold tracking-[-0.045em] text-white sm:text-[3rem] md:max-w-[14ch] md:text-[3.75rem] md:leading-[1.05] lg:text-[4.5rem]">
              The <span className="text-primary">intelligent</span> way to learn to drive.
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="section-copy mt-6 max-w-2xl text-pretty">
              DriveNow connects learner drivers with verified instructors, ranked by compatibility,
              not just proximity. Find your perfect instructor in minutes.
            </p>
          </Reveal>
          <Reveal delay={320} className="mt-8 flex flex-wrap gap-3.5">
            <Button asChild size="lg">
              <a href="#waitlist">Join the waitlist</a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="#faq">Explore the plan</a>
            </Button>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative hidden lg:block">
          <div className="relative">
            <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl border border-white/8 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
              <Image
                src={SECTION_ILLUS.hero}
                alt="Abstract emerald crystal"
                fill
                priority
                sizes="(min-width: 1024px) 28rem, 100vw"
                className="object-cover"
              />
            </div>
            <Card className="absolute -bottom-6 -left-6 z-10 max-w-xs rounded-xl border-white/10 p-0 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
              <CardContent className="p-5 pt-5">
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">
                  Built for a faster MVP rollout
                </p>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 shrink-0 text-primary" aria-hidden>
                      •
                    </span>
                    Learners discover nearby, verified instructors
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 shrink-0 text-primary" aria-hidden>
                      •
                    </span>
                    Instructors set availability and pricing
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 shrink-0 text-primary" aria-hidden>
                      •
                    </span>
                    Bookings, messaging, reviews, and Stripe payments follow
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </Reveal>
      </div>

      <div className="site-container mt-24 grid gap-4 md:grid-cols-3">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 100}>
            <Card className="rounded-[24px]">
              <CardContent className="p-6">
                <p className="font-serif text-[2rem] font-bold tracking-[-0.04em] text-emerald-300 sm:text-[2.75rem] text-center">
                  {stat.value}
                </p>
                <p className="body-copy !text-base text-center mt-2">{stat.label}</p>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </SectionBackdrop>
  );
}
