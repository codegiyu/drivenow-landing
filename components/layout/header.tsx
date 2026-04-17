'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useCallback, useId, useState } from 'react';

import { BrandWordmark } from '@/components/ui/brand-wordmark';
import { Button } from '@/components/ui/button';
import { HEADER_NAV_LINKS } from '@/lib/constants/navigation';

const menuMotion = {
  initial: { height: 0, opacity: 0 },
  animate: { height: 'auto', opacity: 1 },
  exit: { height: 0, opacity: 0 },
  transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
} as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header className="sticky top-0 z-20 border-b border-foreground/10 bg-white/80 backdrop-blur-xl">
      <div className="site-container flex items-center justify-between gap-4 py-4">
        <Link href="/" className="inline-flex" aria-label="DriveNow homepage">
          <BrandWordmark />
        </Link>
        <nav
          className="hidden items-center gap-3 text-base text-muted-foreground md:flex md:flex-wrap md:justify-end md:gap-8"
          aria-label="Primary">
          {HEADER_NAV_LINKS.map(link => (
            <a
              key={link.href}
              className="transition-colors hover:text-primary hover:font-semibold"
              href={link.href}>
              {link.label}
            </a>
          ))}
          <Button asChild className="hidden sm:inline-flex">
            <a href="#waitlist">Join the waitlist</a>
          </Button>
        </nav>

        <button
          type="button"
          className="grouprelative flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-[6px] p-2 text-foreground transition-colors hover:bg-primary/5 hover:text-primary md:hidden"
          onClick={() => setMenuOpen(open => !open)}
          aria-expanded={menuOpen}
          aria-controls={menuId}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          <span
            className={`block h-0.5 w-5 origin-center rounded-full bg-current transition-transform duration-300 ease-out ${
              menuOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-5 rounded-full bg-current transition-opacity duration-200 ease-out ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block h-0.5 w-5 origin-center rounded-full bg-current transition-transform duration-300 ease-out ${
              menuOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {menuOpen ? (
          <motion.div
            id={menuId}
            key="mobile-menu"
            role="region"
            aria-label="Mobile navigation"
            initial={menuMotion.initial}
            animate={menuMotion.animate}
            exit={menuMotion.exit}
            transition={menuMotion.transition}
            className="overflow-hidden border-t border-foreground/10 bg-white/90 backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-1.5 py-4">
              {HEADER_NAV_LINKS.map(link => (
                <a
                  key={link.href}
                  className="text-base font-medium text-muted-foreground transition-colors hover:bg-primary/15 hover:text-primary hover:font-semibold px-4 py-3"
                  href={link.href}
                  onClick={closeMenu}>
                  {link.label}
                </a>
              ))}
              <div className="site-container">
                <Button asChild size="lg" className="mt-1 w-full">
                  <a href="#waitlist" onClick={closeMenu} className="w-full">
                    Join the waitlist
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
