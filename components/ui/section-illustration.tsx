import Image from 'next/image';

import { cn } from '@/lib/utils';

type SectionIllustrationProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  /** When the parent already hides on small screens, render the frame at all breakpoints */
  alwaysVisible?: boolean;
};

export function SectionIllustration({
  src,
  alt,
  className,
  priority = false,
  alwaysVisible = false,
}: SectionIllustrationProps) {
  return (
    <div
      className={cn(
        'relative aspect-square w-full max-w-[520px] overflow-hidden rounded-[28px] border border-foreground/10 shadow-[0_20px_56px_rgba(16,32,26,0.1)]',
        alwaysVisible ? 'block' : 'hidden lg:block',
        className
      )}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 42vw, 0px"
        className="object-cover"
      />
    </div>
  );
}
