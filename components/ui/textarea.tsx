import * as React from 'react';

import { cn } from '@/lib/utils';

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'flex min-h-28 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white outline-none transition-all placeholder:text-muted-foreground focus-visible:border-emerald-400/60 focus-visible:ring-[3px] focus-visible:ring-emerald-400/15 sm:text-lg',
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
