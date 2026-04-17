'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SectionBackdrop } from '@/components/ui/section-backdrop';
import { Reveal } from '@/components/ui/reveal';
import { SECTION_BG, SECTION_ILLUS } from '@/lib/constants/media';

const HERO_WORDS = ['intelligent', 'personalized', 'smarter', 'adaptive'] as const;

function RotatingHeroWord() {
  const [index, setIndex] = useState(0);
  const [stage, setStage] = useState<'idle' | 'exit' | 'enter'>('idle');
  const tickRef = useRef<number | null>(null);
  const swapRef = useRef<number | null>(null);
  const settleRef = useRef<number | null>(null);

  useEffect(() => {
    const runCycle = () => {
      setStage('exit');

      swapRef.current = window.setTimeout(() => {
        setIndex(current => (current + 1) % HERO_WORDS.length);
        setStage('enter');

        settleRef.current = window.setTimeout(() => {
          setStage('idle');
        }, 20);
      }, 280);
    };

    tickRef.current = window.setInterval(runCycle, 2800);

    return () => {
      if (tickRef.current) {
        window.clearInterval(tickRef.current);
      }
      if (swapRef.current) {
        window.clearTimeout(swapRef.current);
      }
      if (settleRef.current) {
        window.clearTimeout(settleRef.current);
      }
    };
  }, []);

  const stateClass =
    stage === 'exit'
      ? '-translate-y-full opacity-0'
      : stage === 'enter'
        ? 'translate-y-full opacity-0'
        : 'translate-y-0 opacity-100';

  return (
    <span className="relative inline-block min-w-[12ch] overflow-hidden align-baseline">
      <span
        className={`inline-block text-primary transition-all duration-300 ease-out ${stateClass}`}>
        {HERO_WORDS[index]}
      </span>
    </span>
  );
}

export function HeroSection() {
  return (
    <SectionBackdrop
      bgImage={SECTION_BG.hero}
      className="px-0 pb-24 pt-24 md:pt-32 md:pb-32 lg:pb-40">
      <div className="site-container grid items-center gap-7 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.85fr)] lg:gap-10">
        <div>
          <Reveal>
            <Badge className="text-[8px] sm:text-[10px] lg:text-[11px] mb-5 font-bold bg-transparent border-none">
              Launching UK 2026 • AI-powered matching
            </Badge>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="font-heading text-[3.25rem] leading-[1.06] font-bold tracking-[-0.045em] text-foreground sm:text-[3rem] md:max-w-[14ch] md:text-[3.75rem] md:leading-[1.05] lg:text-[4.5rem]">
              The <RotatingHeroWord /> way to learn to drive.
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
              <a href="#who-its-for">Explore the plan</a>
            </Button>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative hidden lg:block">
          <div className="relative">
            <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl border border-foreground/10 shadow-[0_20px_56px_rgba(16,32,26,0.1)]">
              <Image
                src={SECTION_ILLUS.hero}
                alt="Abstract emerald crystal"
                fill
                priority
                sizes="(min-width: 1024px) 28rem, 100vw"
                className="object-cover"
              />
            </div>
            <Card className="absolute -bottom-6 -left-6 z-10 max-w-xs rounded-xl border-foreground/10 p-0 shadow-[0_20px_56px_rgba(16,32,26,0.15)]">
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
    </SectionBackdrop>
  );
}
