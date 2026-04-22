'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Aperture, Camera, Share2, Sparkles } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { galleryImages } from '@/lib/site';

const experiences = [
  {
    title: '360° Video Booth',
    description:
      'Cinematic slow-mo that spins around you. Guests step up, strike a pose, and walk away with a shareable reel in seconds.',
    icon: Aperture,
    image: galleryImages[0].src,
    tone: 'from-neon-magenta/30 to-neon-violet/10',
    bullets: ['Slow-motion 4K', 'Branded intro/outro', 'Instant phone delivery'],
  },
  {
    title: 'Classic Photo Booth',
    description:
      'High-end mirror and open-air setups with premium props, custom overlays, and prints in under 12 seconds.',
    icon: Camera,
    image: galleryImages[3].src,
    tone: 'from-neon-cyan/25 to-neon-violet/10',
    bullets: ['Unlimited prints', 'GIF + boomerang', 'Curated prop styling'],
  },
  {
    title: 'Custom Branding',
    description:
      'Your logo, your colors, your vibe. We design overlays, backdrops, and sharing templates that match the event.',
    icon: Sparkles,
    image: galleryImages[7].src,
    tone: 'from-neon-violet/30 to-neon-magenta/10',
    bullets: ['Bespoke overlays', 'Backdrop design', 'Event-day setup included'],
  },
  {
    title: 'Instant Sharing',
    description:
      'AirDrop, SMS, QR, email — guests get their content while they\'re still on the dance floor. Your hashtag, trending.',
    icon: Share2,
    image: galleryImages[10].src,
    tone: 'from-neon-magenta/25 to-neon-cyan/10',
    bullets: ['AirDrop + QR', 'Custom microsite', 'Live gallery wall'],
  },
];

export default function Experiences() {
  return (
    <section
      id="experiences"
      className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32"
    >
      <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Experiences that <span className="text-gradient">pop off</span>.
            </>
          }
          description="Every booth is a stage. Every guest becomes a main character. Pick your vibe — we bring the lights, cameras, and content team."
        />
        <Button href="/services" variant="ghost" withArrow>
          All services
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {experiences.map((exp, i) => (
          <motion.article
            key={exp.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-800/60 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_30px_80px_rgba(255,45,149,0.15)] sm:p-8"
          >
            <div
              aria-hidden
              className={`pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gradient-to-br ${exp.tone} blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
            />
            <div className="relative flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 transition-all duration-500 group-hover:bg-neon-magenta/20 group-hover:ring-neon-magenta/40">
                <exp.icon className="h-5 w-5 text-neon-magenta" />
              </div>
              <span className="eyebrow text-white/40">0{i + 1}</span>
            </div>

            <h3 className="display mt-6 text-2xl sm:text-3xl">{exp.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
              {exp.description}
            </p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {exp.bullets.map((b) => (
                <li
                  key={b}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                >
                  {b}
                </li>
              ))}
            </ul>

            <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-white/10">
              <Image
                src={exp.image}
                alt={exp.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent" />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
