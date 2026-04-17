import Link from 'next/link';

import { MainLayout } from '@/components/layout/main-layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function NotFound() {
  return (
    <MainLayout>
      <section className="flex min-h-[calc(100vh-220px)] items-center justify-center px-4 py-10">
        <div className="site-container">
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(47,196,141,0.18),transparent_24%)]" />
            <CardContent className="relative z-10 grid gap-6 px-6 py-12 text-center sm:px-10">
              <div className="flex justify-center">
                <Badge>404 • Route not found</Badge>
              </div>
              <div className="grid gap-4">
                <p className="font-heading text-6xl font-bold tracking-[-0.05em] text-emerald-300 sm:text-7xl">
                  Lost your lane?
                </p>
                <h1 className="font-heading text-4xl leading-[0.98] font-bold tracking-[-0.04em] text-foreground sm:text-5xl">
                  This page has taken a wrong turn.
                </h1>
                <p className="section-copy mx-auto max-w-2xl text-pretty">
                  The page you were looking for does not exist, may have moved, or is not ready yet.
                  Head back to DriveNow&apos;s main route and continue exploring the launch plan.
                </p>
              </div>
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/">Back to homepage</Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/#waitlist">Join the waitlist</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </MainLayout>
  );
}
