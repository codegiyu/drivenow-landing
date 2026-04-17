import { Mail } from 'lucide-react';

import { BrandWordmark } from '@/components/ui/brand-wordmark';
import { Separator } from '@/components/ui/separator';
import { FOOTER_NAV_LINKS } from '@/lib/constants/navigation';

export function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-white/75 px-0 pb-14 pt-8">
      <div className="site-container">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <BrandWordmark />
            <p className="section-copy mt-2 text-pretty">
              Building a smarter way for learner drivers and instructors to connect across the UK.
            </p>
            <a
              href="mailto:hello@drivenow.uk"
              className="mt-5 inline-flex items-center gap-2 text-base font-medium text-accent-foreground transition-colors hover:text-accent-foreground/75">
              <Mail className="size-5 shrink-0" aria-hidden />
              hello@drivenow.uk
            </a>
          </div>

          <nav
            className="grid min-w-0 gap-x-10 gap-y-3 sm:grid-cols-2 lg:px-16 lg:gap-x-40"
            aria-label="On this page">
            {FOOTER_NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-base text-muted-foreground transition-colors hover:text-foreground">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col gap-2 text-center text-sm text-muted sm:text-base sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>&copy; {new Date().getFullYear()} DriveNow. All rights reserved.</p>
          <p>Empowering instructors. Enabling learners.</p>
        </div>
      </div>
    </footer>
  );
}
