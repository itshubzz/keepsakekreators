'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function CTASection() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-28">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-ink-800/60 p-10 sm:p-16"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,45,149,0.35),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(34,211,238,0.25),transparent_55%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            maskImage:
              'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          }}
        />

        <div className="relative grid items-center gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <div className="eyebrow text-neon-magenta">Ready when you are</div>
            <h2 className="display mt-4 text-4xl sm:text-5xl md:text-6xl">
              Your next event <br />
              <span className="text-gradient">deserves a reel</span>.
            </h2>
            <p className="mt-5 max-w-xl text-white/75 sm:text-lg">
              Tell us the date, the vibe, and the venue — we'll send you a
              quote in under 24 hours and lock in dates that actually fit your
              production.
            </p>
          </div>
          <div className="flex gap-3 sm:items-center lg:justify-end">
            <Button href="/contact" size="lg" withArrow className="flex-1 sm:flex-initial">
              Check Availability
            </Button>
            <Button href="/packages" size="lg" variant="outline" className="flex-1 sm:flex-initial">
              View Packages
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
