import { cn } from '@/lib/utils';

type BrandWordmarkProps = {
  className?: string;
};

export function BrandWordmark({ className }: BrandWordmarkProps) {
  return (
    <span className={cn('font-heading text-2xl font-bold tracking-[-0.03em]', className)}>
      <span className="text-foreground">Drive</span>
      <span className="text-primary">Now</span>
    </span>
  );
}
