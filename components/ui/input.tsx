import * as React from 'react';

import { cn } from '@/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'flex h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white outline-none transition-all placeholder:text-muted-foreground focus-visible:border-emerald-400/60 focus-visible:ring-[3px] focus-visible:ring-emerald-400/15 sm:text-lg',
        className
      )}
      {...props}
    />
  );
}

export { Input };
