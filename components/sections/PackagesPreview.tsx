'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Clock, Check } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { galleryImages, blurDataURL } from '@/lib/site';

const tiers = [
  {
    name: 'Premium',
    kind: 'Open Air / 360',
    hours: '3 Hours',
    image: galleryImages[21].src,
  },
  {
    name: 'Luxury',
    kind: 'Open Air / 360',
    hours: '4 Hours',
    image: galleryImages[8].src,
  },
  {
    name: 'Signature',
    kind: 'Open Air & 360',
    hours: '5 Hours',
    image: galleryImages[9].src,
  },
];

const perks = [
  'Unlimited Digital Prints',
  'Instant Sharing',
  'Setup & Break Down',
  'Choice of Backdrop',
  'Red Carpet & Stanchions',
  'Props & Table',
  'Online Gallery',
];

export default function PackagesPreview() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="flex flex-col gap-4">
            {tiers.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative flex items-center gap-4 overflow-hidden rounded-3xl border border-white/10 bg-ink-800/60 p-3 pr-6 transition-[border-color,box-shadow,background-color] duration-500 hover:-translate-y-0.5 hover:border-white/25"
              >
                <div className="relative h-24 w-24 flex-none overflow-hidden rounded-2xl ring-1 ring-white/10 sm:h-28 sm:w-28">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="112px"
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-ink-950/50 via-transparent to-transparent" />
                </div>
                <div className="flex flex-1 flex-col">
                  <div className="eyebrow text-neon-magenta">{t.kind}</div>
                  <div className="display mt-1 text-2xl sm:text-3xl">{t.name}</div>
                </div>
                <div className="flex flex-none items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/85">
                  <Clock className="h-3.5 w-3.5 text-neon-magenta" />
                  {t.hours}
                </div>
              </motion.div>
            ))}
          </div>

          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-neon-magenta/25 blur-3xl"
          />
        </motion.div>

        <div>
          <SectionHeading
            eyebrow="Booth packages"
            title={
              <>
                Pick the vibe. <span className="text-gradient">We scale</span>{' '}
                to the night.
              </>
            }
            description="Three all-in tiers — from intimate 3-hour pop-ups to 5-hour dual-booth takeovers. Every package lands with the full experience."
          />

          <ul className="mt-8 grid gap-2 sm:grid-cols-2">
            {perks.map((perk, i) => (
              <motion.li
                key={perk}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-center gap-2 text-sm text-white/85"
              >
                <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-neon-magenta/15 ring-1 ring-neon-magenta/40">
                  <Check className="h-3 w-3 text-neon-magenta" />
                </span>
                {perk}
              </motion.li>
            ))}
          </ul>

          <p className="mt-6 rounded-2xl border border-white/10 bg-ink-800/60 p-4 text-sm text-white/70">
            <span className="font-semibold text-white">$200 deposit</span> due at booking to lock your date. Add-ons available on request.
          </p>

          <div className="mt-6 flex gap-3">
            <Button href="/packages" size="lg" withArrow className="flex-1 sm:flex-initial">
              See all packages
            </Button>
            <Button href="/contact" size="lg" variant="outline" className="flex-1 sm:flex-initial">
              Check availability
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
