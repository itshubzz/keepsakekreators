'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const testimonials = [
  {
    quote:
      "The 360° booth was the talk of the wedding. Three months later guests are still DMing me their slow-mos.",
    name: 'Jasmine & Malik',
    event: 'Wedding · 220 guests',
    image: '/gallery/image4.webp',
  },
  {
    quote:
      "Keepsake made our launch party feel like a premiere. The branding was on-point and the team ran everything flawlessly.",
    name: 'Carla R.',
    event: 'Brand Launch · Nike Collab',
    image: '/gallery/image17.webp',
  },
  {
    quote:
      "Our sweet 16 trended on TikTok because of that booth. The line was longer than the dance floor — in the best way.",
    name: 'Sasha M.',
    event: 'Sweet 16 · NYC',
    image: '/gallery/image11.webp',
  },
  {
    quote:
      "Zero stress day-of. They showed up early, dressed sharp, and every guest walked away with a keeper.",
    name: 'Elena D.',
    event: 'Corporate Gala · 500 guests',
    image: '/gallery/image14.webp',
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIdx((v) => (v + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  const prev = () =>
    setIdx((v) => (v - 1 + testimonials.length) % testimonials.length);
  const next = () => setIdx((v) => (v + 1) % testimonials.length);

  const t = testimonials[idx];

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,45,149,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
        <SectionHeading
          align="center"
          eyebrow="What clients say"
          title={
            <>
              Loud reviews, <span className="text-gradient">louder nights</span>.
            </>
          }
        />

        <div className="relative mt-14 grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr]">
          <div className="relative mx-auto hidden aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] ring-1 ring-white/10 lg:block">
            <AnimatePresence mode="wait">
              <motion.img
                key={t.image}
                src={t.image}
                alt={t.name}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.6 }}
                className="h-full w-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
          </div>

          <div className="relative mx-auto max-w-2xl lg:max-w-lg">
            <Quote className="h-10 w-10 text-neon-magenta" />
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={t.quote}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="display mt-4 text-2xl leading-tight sm:text-3xl md:text-4xl"
              >
                “{t.quote}”
              </motion.blockquote>
            </AnimatePresence>

            <div className="mt-6 flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-neon-magenta text-neon-magenta"
                />
              ))}
            </div>
            <div className="mt-3 text-sm text-white/70">
              <span className="font-semibold text-white">{t.name}</span> ·{' '}
              {t.event}
            </div>

            <div className="mt-8 flex items-center gap-3">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-colors hover:border-neon-magenta hover:text-neon-magenta"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-colors hover:border-neon-magenta hover:text-neon-magenta"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <div className="ml-4 flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to testimonial ${i + 1}`}
                    onClick={() => setIdx(i)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      i === idx
                        ? 'w-8 bg-neon-magenta'
                        : 'w-2 bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
