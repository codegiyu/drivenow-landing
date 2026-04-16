import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { DM_Sans, Playfair_Display, Space_Grotesk } from 'next/font/google';

import './globals.css';
import 'sonner/dist/styles.css';

import { SEO_DETAILS } from '@/lib/constants/texts';
import { DriveNowToaster } from '@/components/ui/sonner-toaster';

const sans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  metadataBase: SEO_DETAILS.metadataBase,
  title: SEO_DETAILS.title,
  description: SEO_DETAILS.description,
  alternates: SEO_DETAILS.alternates,
  robots: SEO_DETAILS.robots,
  keywords: SEO_DETAILS.keywords,
  generator: SEO_DETAILS.generator,
  publisher: SEO_DETAILS.publisher,
  category: SEO_DETAILS.category,
  openGraph: {
    title: 'DriveNow',
    description: SEO_DETAILS.ogDesc,
    url: SEO_DETAILS.metadataBase,
    siteName: 'DriveNow',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DriveNow',
    description: SEO_DETAILS.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${spaceGrotesk.variable} ${playfair.variable}`}>
        {children}
        <DriveNowToaster />
      </body>
    </html>
  );
}
