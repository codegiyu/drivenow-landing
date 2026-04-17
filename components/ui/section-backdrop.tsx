import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

type SectionBackdropProps = ComponentPropsWithoutRef<'section'> & {
  bgImage?: string;
};

export function SectionBackdrop({ bgImage, className, children, ...props }: SectionBackdropProps) {
  return (
    <section className={cn('relative isolate overflow-hidden', className)} {...props}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: bgImage ? `url('${bgImage}')` : 'none' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white/78 via-[#fdfffe]/90 to-[#f6fbf8]/95"
      />
      {children}
    </section>
  );
}
