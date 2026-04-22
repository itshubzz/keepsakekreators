'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import { galleryImages, blurDataURL } from '@/lib/site';

const eventTypes = [
  {
    name: 'Weddings',
    subtitle: 'First look to last dance',
    image: galleryImages[6].src,
    accent: 'from-neon-magenta/70 to-neon-violet/40',
  },
  {
    name: 'Sweet 16 & Birthdays',
    subtitle: 'Pink confetti energy',
    image: galleryImages[21].src,
    accent: 'from-neon-magenta/70 to-neon-pink/40',
  },
  {
    name: 'Graduations',
    subtitle: 'Tassels, toss caps, memories',
    image: galleryImages[19].src,
    accent: 'from-neon-cyan/60 to-neon-violet/40',
  },
  {
    name: 'Corporate & Brand',
    subtitle: 'Activations that trend',
    image: galleryImages[3].src,
    accent: 'from-neon-violet/70 to-neon-cyan/40',
  },
  {
    name: 'Galas & Milestones',
    subtitle: 'Black tie · red carpet',
    image: galleryImages[9].src,
    accent: 'from-neon-magenta/60 to-neon-cyan/40',
  },
];

export default function EventTypes() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
      <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="Events we love"
          title={
            <>
              We show up for <span className="text-gradient">every kind of night</span>.
            </>
          }
          description="From 20-person dinners to 1,000-guest galas. Pick the vibe — we'll tailor the booth, branding, and crew to match."
        />
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-neon-magenta"
        >
          Tell us about yours
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
        {eventTypes.map((e, i) => (
          <motion.div
            key={e.name}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-2xl ring-1 ring-white/10"
          >
            <Image
              src={e.image}
              alt={e.name}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              placeholder="blur"
              blurDataURL={blurDataURL}
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div
              aria-hidden
              className={`absolute inset-0 bg-gradient-to-t ${e.accent} opacity-0 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-100`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-4">
              <div className="display text-lg leading-tight sm:text-xl">
                {e.name}
              </div>
              <div className="mt-1 text-xs text-white/70">{e.subtitle}</div>
            </div>

            <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 ring-1 ring-white/20 opacity-0 backdrop-blur transition-all duration-500 group-hover:opacity-100">
              <ArrowUpRight className="h-4 w-4 text-white" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
