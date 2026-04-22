'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { galleryImages } from '@/lib/site';

export default function GalleryPreview() {
  const tiles = galleryImages.slice(0, 10);
  const spans = [
    'col-span-2 row-span-2',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 row-span-2',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-2 row-span-1',
    'col-span-1 row-span-1',
    'col-span-1 row-span-1',
    'col-span-2 row-span-1',
  ];

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
      <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="The highlight reel"
          title={
            <>
              Real nights, <span className="text-gradient">real energy</span>.
            </>
          }
          description="Every frame below came from a real Keepsake Kreators event. No stock, no filler — just the kind of moments your phone was made for."
        />
        <Button href="/gallery" withArrow>
          Open full gallery
        </Button>
      </div>

      <div className="grid auto-rows-[140px] grid-cols-3 gap-3 sm:auto-rows-[180px] sm:gap-4 md:grid-cols-4">
        {tiles.map((img, i) => (
          <motion.div
            key={img.src}
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: (i % 6) * 0.05 }}
            className={`group relative overflow-hidden rounded-2xl ring-1 ring-white/10 ${spans[i % spans.length]}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-40" />
            <div className="absolute inset-x-0 bottom-0 translate-y-2 p-3 text-xs text-white/80 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <span className="inline-flex items-center gap-2 rounded-full bg-black/50 px-2.5 py-1 ring-1 ring-white/15 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-neon-magenta" />
                Keepsake · {String(i + 1).padStart(2, '0')}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
