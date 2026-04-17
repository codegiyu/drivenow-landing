'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { DM_Sans, Space_Grotesk } from 'next/font/google';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

import './globals.css';

const sans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body
        className={`${sans.variable} ${spaceGrotesk.variable} min-w-80 bg-background text-foreground antialiased`}>
        <main className="page-shell flex min-h-screen items-center justify-center px-4 py-10">
          <div className="site-container">
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(47,196,141,0.15),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_18%)]" />
              <CardContent className="relative z-10 grid gap-6 px-6 py-12 text-center sm:px-10">
                <div className="flex justify-center">
                  <Badge variant="secondary">Something went wrong</Badge>
                </div>
                <div className="grid gap-4">
                  <p className="font-heading text-6xl font-bold tracking-[-0.05em] text-emerald-300 sm:text-7xl">
                    Error
                  </p>
                  <h1 className="font-heading text-4xl leading-[0.98] font-bold tracking-[-0.04em] text-foreground sm:text-5xl">
                    The journey hit an unexpected roadblock.
                  </h1>
                  <p className="section-copy mx-auto max-w-2xl text-pretty">
                    A page or request failed unexpectedly. Try again, or return to the main DriveNow
                    landing page and continue from there.
                  </p>
                </div>
                <div className="flex flex-col justify-center gap-3 sm:flex-row">
                  <Button size="lg" onClick={reset}>
                    Try again
                  </Button>
                  <Button asChild variant="secondary" size="lg">
                    <Link href="/">Back to homepage</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </body>
    </html>
  );
}
