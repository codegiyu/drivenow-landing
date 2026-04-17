'use client';

import { Toaster } from 'sonner';

export function DriveNowToaster() {
  return (
    <Toaster
      theme="light"
      position="top-right"
      richColors={false}
      closeButton
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            'rounded-[24px] border border-foreground/10 bg-white/90 backdrop-blur-xl shadow-[0_20px_56px_rgba(16,32,26,0.12)] text-foreground',
          title: 'text-sm font-semibold tracking-tight text-foreground',
          description: 'mt-1 text-sm leading-6 text-muted-foreground',
          closeButton:
            'top-4 right-4 text-muted-foreground hover:text-foreground focus-visible:ring-primary/25',
          success: 'border-primary/30',
          error: 'border-rose-500/30',
        },
      }}
    />
  );
}
