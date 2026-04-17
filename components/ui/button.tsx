import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-[3px] focus-visible:ring-emerald-400/25 [&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 shrink-0 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-emerald-400 text-emerald-950 shadow-[0_16px_40px_rgba(47,196,141,0.25)] hover:-translate-y-0.5 hover:bg-emerald-300',
        secondary:
          'border border-accent-foreground/20 bg-accent text-accent-foreground hover:-translate-y-0.5 hover:bg-accent/75',
        ghost: 'text-muted-foreground hover:text-foreground',
      },
      size: {
        default: 'px-6 py-3',
        sm: 'px-4 py-2 text-sm',
        lg: 'px-7 py-5 text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

type ButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant, size, asChild = false, ...props },
  ref
) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});

export { Button, buttonVariants };
