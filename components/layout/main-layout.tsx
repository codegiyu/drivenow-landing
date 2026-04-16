import type { ReactNode } from 'react';

import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <main className="page-shell">
      <Header />
      <section>{children}</section>
      <Footer />
    </main>
  );
}
