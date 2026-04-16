export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://drivenow.example';

export const SEO_DETAILS = {
  title: {
    default: 'DriveNow | AI-powered driving lesson marketplace',
    template: '%s | DriveNow',
  },
  description:
    'DriveNow connects learner drivers with verified instructors through a modern, AI-assisted marketplace built for faster discovery and smoother booking.',
  ogDesc: 'The intelligent way to connect learner drivers with verified instructors.',
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  image: `https://pub-81e4b3ca714e4c05870968970387b297.r2.dev/site-preview.png`,
  icons: `https://pub-81e4b3ca714e4c05870968970387b297.r2.dev/favicon.png`,
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
    },
  },
  authors: [{ name: 'Edward-Precious Omegbu', url: 'https://portfolio-codegiyu.vercel.app' }],
  keywords: [
    'DriveNow',
    'driving instructors',
    'learner drivers',
    'driving lesson marketplace',
    'learn to drive',
    'AI instructor matching',
    'UK driving lessons',
    'verified driving instructors',
    'driving lesson booking',
  ],
  generator: 'Next.js',
  publisher: 'DriveNow',
  category: 'Driving education marketplace',
  classification: 'AI-assisted instructor and learner marketplace',
};

export const DRIVE_NOW_TAGLINE = 'The intelligent way to learn to drive.';
