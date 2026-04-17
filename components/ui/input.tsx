import * as React from 'react';

import { cn } from '@/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'flex h-12 w-full rounded-[6px] border border-foreground/12 bg-white px-4 py-3 text-base text-foreground outline-none transition-all placeholder:text-muted-foreground focus-visible:border-primary/60 focus-visible:ring-[3px] focus-visible:ring-primary/15 sm:text-lg',
        className
      )}
      {...props}
    />
  );
}

export { Input };
