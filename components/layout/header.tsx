'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useCallback, useId, useState } from 'react';

import { BrandWordmark } from '@/components/ui/brand-wordmark';
import { Button } from '@/components/ui/button';

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
    <header className="sticky top-0 z-20 border-b border-white/5 bg-black/30 backdrop-blur-xl">
      <div className="site-container flex items-center justify-between gap-4 py-4">
        <Link href="/" className="inline-flex" aria-label="DriveNow homepage">
          <BrandWordmark />
        </Link>
        <nav
          className="hidden items-center gap-4 text-base text-muted-foreground sm:flex sm:gap-5"
          aria-label="Primary">
          <a className="transition-colors hover:text-white" href="#faq">
            FAQ
          </a>
          <a className="transition-colors hover:text-white" href="#waitlist">
            Waitlist
          </a>
          <Button asChild className="hidden sm:inline-flex">
            <a href="#waitlist">Get early access</a>
          </Button>
        </nav>

        <button
          type="button"
          className="relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md p-2 text-foreground transition-colors hover:bg-white/5 sm:hidden"
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
            className="overflow-hidden border-t border-white/5 bg-black/20 backdrop-blur-xl sm:hidden">
            <div className="site-container flex flex-col gap-3 py-4">
              <a
                className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                href="#faq"
                onClick={closeMenu}>
                FAQ
              </a>
              <a
                className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                href="#waitlist"
                onClick={closeMenu}>
                Waitlist
              </a>
              <Button asChild size="lg" className="mt-1 w-full">
                <a href="#waitlist" onClick={closeMenu}>
                  Get early access
                </a>
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
