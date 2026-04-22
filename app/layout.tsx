import type { Metadata, Viewport } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { site } from '@/lib/site';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description:
    'Photo booths, 360° video experiences, and event entertainment that turn weddings, corporate nights, and parties into shareable, unforgettable moments.',
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description:
      '360° video booths · photo booths · instant sharing · custom branding. Book the experience your guests will talk about for years.',
    type: 'website',
  },
  icons: {
    icon: '/logo/logo.webp',
  },
};

export const viewport: Viewport = {
  themeColor: '#05010A',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="bg-ink-950 text-white">
        <div className="pointer-events-none fixed inset-0 -z-10 bg-grid-fade" aria-hidden />
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
