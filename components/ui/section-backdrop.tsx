import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

type SectionBackdropProps = ComponentPropsWithoutRef<'section'> & {
  bgImage: string;
};

export function SectionBackdrop({
  bgImage,
  className,
  children,
  ...props
}: SectionBackdropProps) {
  return (
    <section className={cn('relative isolate overflow-hidden', className)} {...props}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#07110d]/45 via-[#07110d]/78 to-[#07110d]/96"
      />
      {children}
    </section>
  );
}
