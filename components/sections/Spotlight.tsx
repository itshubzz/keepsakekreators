'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { UserCheck, Wrench, Zap } from 'lucide-react';
import Button from '@/components/ui/Button';
import { galleryImages, blurDataURL } from '@/lib/site';

const pillars = [
  {
    icon: UserCheck,
    title: 'A real operator, every event',
    copy: 'No self-serve drop-offs. A trained Keepsake attendant runs the booth from setup to last dance.',
  },
  {
    icon: Wrench,
    title: 'We handle the tech',
    copy: 'Lighting, tablets, printers, share microsite — dialed in before guests arrive.',
  },
  {
    icon: Zap,
    title: 'Content lands in seconds',
    copy: 'Shots and 360° reels are in guests\' phones before they\'re back to their seats.',
  },
];

export default function Spotlight() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.15),transparent_60%),radial-gradient(ellipse_at_bottom_left,rgba(255,45,149,0.18),transparent_60%)]"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75 }}
            className="relative"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-neon-magenta/50 via-neon-violet/40 to-neon-cyan/50 opacity-70 blur-2xl"
            />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] ring-1 ring-white/15 shadow-[0_30px_100px_rgba(0,0,0,0.65)] sm:aspect-[5/6]">
              <Image
                src={galleryImages[17].src}
                alt="Keepsake Kreators attendant running the booth"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                placeholder="blur"
                blurDataURL={blurDataURL}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-ink-950/40 via-transparent to-transparent" />

              <div className="absolute left-4 top-4 flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-neon-magenta px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-white shadow-neon-pink">
                  <span className="h-1.5 w-1.5 animate-glow-pulse rounded-full bg-white" />
                  On-site
                </span>
                <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/85 backdrop-blur">
                  Live from the booth
                </span>
              </div>

              <div className="absolute bottom-4 right-4 rounded-2xl border border-white/15 bg-ink-800/80 px-4 py-3 backdrop-blur">
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/60">
                  Avg. share time
                </div>
                <div className="display mt-1 text-2xl leading-none">
                  8<span className="text-neon-magenta">s</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div>
            <div className="eyebrow text-neon-magenta">Behind the booth</div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="display mt-4 text-4xl leading-[0.95] sm:text-5xl md:text-6xl"
            >
              The crew that makes the <span className="text-gradient">magic feel effortless</span>.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 max-w-lg text-white/70 sm:text-lg"
            >
              Every Keepsake booking ships with a trained attendant who owns the
              experience from set-up to the final share. You host. We run the show.
            </motion.p>

            <ul className="mt-8 space-y-5">
              {pillars.map((p, i) => (
                <motion.li
                  key={p.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-neon-magenta/20 to-neon-violet/20 ring-1 ring-neon-magenta/40">
                    <p.icon className="h-5 w-5 text-neon-magenta" />
                  </span>
                  <div>
                    <div className="display text-lg sm:text-xl">{p.title}</div>
                    <p className="mt-1 text-sm text-white/65">{p.copy}</p>
                  </div>
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/services" size="lg" withArrow>
                What we bring
              </Button>
              <Button href="/contact" size="lg" variant="outline">
                Book the crew
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
