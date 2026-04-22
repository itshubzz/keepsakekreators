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
        className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-ink-800/60 p-6 sm:p-12 lg:p-16"
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

        <div className="relative flex flex-col items-center gap-8 text-center">
          <div>
            <div className="eyebrow text-neon-magenta">Ready when you are</div>
            <h2 className="display mt-4 text-4xl sm:text-5xl md:text-6xl">
              Your next event <br />
              <span className="text-gradient">deserves a reel</span>.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/75 sm:text-lg">
              Tell us the date, the vibe, and the venue — we'll send you a
              quote in under 24 hours and lock in dates that actually fit your
              production.
            </p>
          </div>
          <div className="flex w-full max-w-md gap-3 sm:w-auto">
            <Button
              href="/contact"
              withArrow
              className="min-w-0 flex-1 sm:flex-initial sm:px-8 sm:py-4 sm:text-base"
            >
              <span className="sm:hidden">Book</span>
              <span className="hidden sm:inline">Check Availability</span>
            </Button>
            <Button
              href="/packages"
              variant="outline"
              className="min-w-0 flex-1 sm:flex-initial sm:px-8 sm:py-4 sm:text-base"
            >
              <span className="sm:hidden">Packages</span>
              <span className="hidden sm:inline">View Packages</span>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
