'use client';

import { motion } from 'framer-motion';
import { CalendarCheck, Sparkles, Send, PartyPopper } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const steps = [
  {
    icon: CalendarCheck,
    title: 'Lock the date',
    copy: 'Tell us the vibe, the venue, and the hours. We confirm availability in under 24 hours.',
  },
  {
    icon: Sparkles,
    title: 'Design the experience',
    copy: 'Pick your booth, custom overlays, props, and backdrop. We handle the creative direction.',
  },
  {
    icon: PartyPopper,
    title: 'We bring the party',
    copy: 'Our crew arrives, sets up, and runs the whole activation. You just show up and shine.',
  },
  {
    icon: Send,
    title: 'Share instantly',
    copy: 'Guests AirDrop, text, or QR their content. Your hashtag trends before last call.',
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-ink-900/40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
        <SectionHeading
          align="center"
          eyebrow="How it works"
          title={
            <>
              Four steps from <span className="text-gradient">idea</span> to
              unforgettable.
            </>
          }
          description="No guesswork, no ghosting. A dedicated producer walks you from first DM to the final edit drop."
        />

        <div className="relative mt-16 grid gap-6 md:grid-cols-4">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-neon-magenta/60 to-transparent md:block"
          />
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="relative flex flex-col items-start gap-4 rounded-3xl border border-white/10 bg-ink-800/60 p-6 backdrop-blur transition-colors hover:border-neon-magenta/40"
            >
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-neon-magenta via-neon-violet to-neon-cyan">
                <div className="absolute inset-[2px] rounded-[14px] bg-ink-900" />
                <step.icon className="relative h-6 w-6 text-white" />
              </div>
              <span className="eyebrow text-white/40">Step 0{i + 1}</span>
              <h3 className="display text-xl sm:text-2xl">{step.title}</h3>
              <p className="text-sm text-white/65 leading-relaxed">
                {step.copy}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
