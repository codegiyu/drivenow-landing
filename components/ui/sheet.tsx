'use client';

import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

import { cn } from '@/lib/utils';

const Sheet = DialogPrimitive.Root;
const SheetTrigger = DialogPrimitive.Trigger;
const SheetClose = DialogPrimitive.Close;

function SheetPortal({ children }: { children: React.ReactNode }) {
  return <DialogPrimitive.Portal>{children}</DialogPrimitive.Portal>;
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn('fixed inset-0 z-50 bg-foreground/20 backdrop-blur-[2px]', className)}
      {...props}
    />
  );
}

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    data-slot="sheet-title"
    className={cn('text-lg font-semibold text-foreground', className)}
    {...props}
  />
));
SheetTitle.displayName = 'SheetTitle';

function SheetContent({
  side = 'right',
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
  side?: 'left' | 'right';
}) {
  const sideClasses =
    side === 'left'
      ? 'left-0 border-r border-foreground/10'
      : 'right-0 border-l border-foreground/10';

  return (
    <SheetPortal>
      <SheetOverlay />
      <DialogPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          'fixed z-50 mt-0 flex h-[100dvh] w-[92vw] flex-col gap-4 overflow-auto bg-white/90 p-5 shadow-[0_20px_56px_rgba(16,32,26,0.18)] backdrop-blur-xl sm:w-[420px]',
          sideClasses,
          className
        )}
        {...props}>
        {children}
      </DialogPrimitive.Content>
    </SheetPortal>
  );
}

export { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger };
