import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import { SectionBackdrop } from '@/components/ui/section-backdrop';
import { cn } from '@/lib/utils';

/** Vertical padding: 4× former `section-padding` (`py-11` → `py-44`). */
const PAGE_SECTION_Y = 'py-28 md:py-36 lg:py-44';

export type PageSectionProps = {
  bgImage: string;
  children: ReactNode;
  /** Classes for the inner `site-container` row */
  containerClassName?: string;
} & Omit<ComponentPropsWithoutRef<'section'>, 'children'>;

export function PageSection({
  bgImage,
  children,
  className,
  containerClassName,
  ...props
}: PageSectionProps) {
  return (
    <SectionBackdrop bgImage={bgImage} className={cn(PAGE_SECTION_Y, className)} {...props}>
      <div className={cn('site-container', containerClassName)}>{children}</div>
    </SectionBackdrop>
  );
}
