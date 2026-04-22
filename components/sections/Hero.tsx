'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, Play } from 'lucide-react';
import Button from '@/components/ui/Button';
import GlowOrb from '@/components/ui/GlowOrb';
import { galleryImages, blurDataURL } from '@/lib/site';

export default function Hero() {
  const highlightImages = [
    galleryImages[2],
    galleryImages[5],
    galleryImages[9],
  ];

  return (
    <section className="relative isolate min-h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/gallery/image1.webp"
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          priority
          placeholder="blur"
          blurDataURL={blurDataURL}
          className="object-cover"
        />
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/gallery/image1.webp"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/video/videokeeps2.mp4" type="video/mp4" />
        </video>
      </div>

      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-ink-950/80 mix-blend-multiply sm:bg-ink-950/70"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(5,1,10,0.95)_90%)]"
      />
      <GlowOrb
        className="!opacity-20 -left-40 top-20 hidden sm:block sm:!opacity-25 lg:!opacity-30"
        color="magenta"
        size={420}
      />
      <GlowOrb
        className="!opacity-15 -right-24 bottom-10 hidden sm:block sm:!opacity-20 lg:!opacity-25"
        color="violet"
        size={420}
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-between px-4 pb-10 pt-28 sm:px-6 sm:pt-32 lg:grid lg:grid-cols-12 lg:items-center lg:gap-10 lg:pb-20 lg:pt-24">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.28em] text-white/80 backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5 text-neon-magenta" />
            360° · Photo Booth · Event Experiences
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="display mt-6 text-5xl sm:text-7xl lg:text-[5.25rem] xl:text-[6.5rem] 2xl:text-[7.25rem]"
          >
            <span className="block">Make Your</span>
            <span className="block text-gradient">Event</span>
            <span className="block">
              <span className="text-stroke">Unforgett</span>
              <span className="text-neon-magenta">able.</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-base text-white/75 sm:text-lg"
          >
            Keepsake Kreators turns weddings, corporate nights, and parties into
            highlight reels. Step into the booth, strike your pose, walk away
            with memories your guests can't stop sharing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button href="/contact" size="lg" withArrow>
              Book Now
            </Button>
            <Button href="/gallery" size="lg" variant="ghost">
              <Play className="h-4 w-4" /> Watch the Reel
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-6 text-left"
          >
            {[
              { k: '500+', v: 'Events lit up' },
              { k: '4.9★', v: 'Client rating' },
              { k: '60s', v: 'To go viral' },
            ].map((s) => (
              <div key={s.v}>
                <div className="display text-3xl text-white sm:text-4xl">
                  {s.k}
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest text-white/50">
                  {s.v}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="hidden lg:col-span-5 lg:flex lg:justify-end"
        >
          <div className="relative h-[520px] w-full max-w-md">
            {highlightImages.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ y: 0 }}
                animate={{ y: [-8, 8, -8] }}
                transition={{
                  duration: 6 + i * 0.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.4,
                }}
                className="absolute"
                style={{
                  top: `${i * 28}%`,
                  left: `${(i % 2) * 30}%`,
                  width: '62%',
                  transform: `rotate(${i % 2 === 0 ? -4 : 6}deg)`,
                }}
              >
                <div className="group relative aspect-[3/4] overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 1024px) 0vw, 280px"
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
              </motion.div>
            ))}

            <div className="absolute -bottom-4 right-4 rounded-full bg-ink-800/90 px-4 py-2 text-xs font-medium ring-1 ring-white/10 backdrop-blur">
              <span className="mr-2 inline-block h-2 w-2 animate-glow-pulse rounded-full bg-neon-magenta" />
              Live from last night
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
