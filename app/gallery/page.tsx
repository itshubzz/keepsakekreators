import type { Metadata } from 'next';
import PageHeader from '@/components/ui/PageHeader';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Gallery — Real Events, Real Energy',
  description:
    'Every frame is from a real Keepsake Kreators event. Browse the full gallery — click any tile to open the lightbox.',
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Gallery"
        title={
          <>
            Real events. <span className="text-gradient">Real energy.</span>
          </>
        }
        description="Click any tile to enlarge. Arrow keys to browse. Every moment captured on-site, shared within seconds."
      />

      <section className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 sm:pt-16">
        <GalleryGrid />
      </section>

      <CTASection />
    </>
  );
}
