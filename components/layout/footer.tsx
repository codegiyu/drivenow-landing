import { BrandWordmark } from '@/components/ui/brand-wordmark';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="bg-[#0a0d0a] px-0 pb-14 pt-8">
      <div className="site-container">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <BrandWordmark />
            <p className="section-copy mt-2 max-w-md text-pretty">
              Building a smarter way for learner drivers and instructors to connect across the UK.
            </p>
          </div>
          <a
            href="mailto:hello@drivenow.uk"
            className="text-base font-medium text-emerald-300 transition-colors hover:text-emerald-200">
            hello@drivenow.uk
          </a>
        </div>

        <Separator className="my-6" />

        <div className="text-sm text-muted sm:text-base text-center sm:text-left flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} DriveNow. All rights reserved.</p>
          <p>Built for smarter learner and instructor matching.</p>
        </div>
      </div>
    </footer>
  );
}
