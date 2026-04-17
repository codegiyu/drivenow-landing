import { Reveal } from '@/components/ui/reveal';
import { SectionBackdrop } from '../ui/section-backdrop';

const marqueeTop = [
  'Learner and instructor account entry points',
  'Instructor profiles with pricing and location',
  'Postcode and availability filters',
  'Automatic and manual car filter',
  'Vehicle details and safety visibility',
];

const marqueeBottom = [
  'Booking flow with availability-first scheduling',
  'Basic in-app messaging',
  'Reviews and ratings after lessons',
  'Secure in-app payments in roadmap',
  'Built for fast MVP validation',
];

export function WhyDriveNowSection() {
  const topTrack = [...marqueeTop, ...marqueeTop];
  const bottomTrack = [...marqueeBottom, ...marqueeBottom];

  return (
    // <PageSection bgImage={SECTION_BG.mvp} containerClassName="grid gap-10">
    //   <Reveal>
    //     <SectionHeading
    //       caption="MVP scope"
    //       heading="Clarity, trust, and rapid validation."
    //       subtext="The immediate goal is to show what DriveNow is building, attract early users, and validate interest before the full product grows into a richer marketplace app experience."
    //     />
    //   </Reveal>

    // </PageSection>
    <SectionBackdrop id="mvp-scope">
      <Reveal>
        <div className="py-12 md:py-16">
          <div className="relative overflow-hidden py-6">
            <Reveal delay={120}>
              <div className="relative z-20 origin-center -rotate-[2deg] overflow-hidden border border-primary/20 bg-primary text-primary-foreground shadow-[0_12px_30px_rgba(8,30,18,0.18)]">
                <div className="marquee-track-left flex w-max items-center gap-10 px-6 py-3 whitespace-nowrap sm:py-3.5">
                  {topTrack.map((item, index) => (
                    <span
                      key={`top-${item}-${index}`}
                      className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.18em] uppercase sm:text-sm">
                      <span className="text-primary-foreground/75" aria-hidden>
                        +
                      </span>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="relative z-10 origin-center -mt-2 rotate-[2deg] overflow-hidden border border-primary/20 bg-primary text-primary-foreground shadow-[0_12px_30px_rgba(8,30,18,0.18)]">
                <div className="marquee-track-right flex w-max items-center gap-10 px-6 py-3 whitespace-nowrap sm:py-3.5">
                  {bottomTrack.map((item, index) => (
                    <span
                      key={`bottom-${item}-${index}`}
                      className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.18em] uppercase sm:text-sm">
                      <span className="text-primary-foreground/75" aria-hidden>
                        +
                      </span>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Reveal>
    </SectionBackdrop>
  );
}
