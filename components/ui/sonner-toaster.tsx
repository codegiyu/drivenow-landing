'use client';

import { Toaster } from 'sonner';

export function DriveNowToaster() {
  return (
    <Toaster
      theme="dark"
      position="top-right"
      richColors={false}
      closeButton
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            'rounded-[24px] border border-white/10 bg-[rgba(14,28,22,0.88)] backdrop-blur-xl shadow-[0_24px_80px_rgba(0,0,0,0.35)] text-white',
          title: 'text-sm font-semibold tracking-tight text-white',
          description: 'mt-1 text-sm leading-6 text-muted-foreground',
          closeButton:
            'top-4 right-4 text-muted-foreground hover:text-foreground focus-visible:ring-emerald-400/25',
          success: 'border-emerald-400/25',
          error: 'border-rose-400/25',
        },
      }}
    />
  );
}
