import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import { cn } from '@/lib/utils';

export type SectionHeadingProps = {
  caption: ReactNode;
  heading: ReactNode;
  subtext?: ReactNode;
  as?: 'h2' | 'h3';
  align?: 'left' | 'center';
  className?: string;
  headingClassName?: string;
  subtextClassName?: string;
} & Omit<ComponentPropsWithoutRef<'div'>, 'children'>;

function renderCaption(caption: ReactNode) {
  if (typeof caption === 'string' || typeof caption === 'number') {
    return <p className="text-xs font-medium tracking-wider uppercase text-primary">{caption}</p>;
  }
  return caption;
}

export function SectionHeading({
  caption,
  heading,
  subtext,
  as: HeadingTag = 'h2',
  align = 'left',
  className,
  headingClassName,
  subtextClassName,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'grid gap-5',
        align === 'center' && 'text-center [&_.section-copy]:mx-auto',
        className
      )}
      {...props}>
      <div className="grid gap-3">
        {renderCaption(caption)}
        <HeadingTag className={cn('section-title', headingClassName)}>{heading}</HeadingTag>
      </div>
      {subtext != null ? (
        typeof subtext === 'string' ? (
          <p
            className={cn(
              'section-copy max-w-3xl text-pretty',
              align === 'center' && 'mx-auto max-w-2xl',
              subtextClassName
            )}>
            {subtext}
          </p>
        ) : (
          <div
            className={cn(
              'section-copy max-w-3xl text-pretty [&>p+p]:mt-4',
              align === 'center' && 'mx-auto max-w-2xl',
              subtextClassName
            )}>
            {subtext}
          </div>
        )
      ) : null}
    </div>
  );
}
