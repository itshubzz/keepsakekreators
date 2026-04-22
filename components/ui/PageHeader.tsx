'use client';

import { motion } from 'framer-motion';
import GlowOrb from './GlowOrb';

interface PageHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
}

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative isolate overflow-hidden pt-36 pb-16 sm:pt-40 sm:pb-24">
      <GlowOrb className="-left-32 top-10" color="magenta" size={420} />
      <GlowOrb className="-right-32 top-0" color="violet" size={420} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-5"
        >
          {eyebrow && (
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-neon-magenta" />
              <span className="eyebrow text-neon-magenta">{eyebrow}</span>
            </div>
          )}
          <h1 className="display max-w-4xl text-5xl sm:text-6xl md:text-7xl">
            {title}
          </h1>
          {description && (
            <p className="max-w-2xl text-lg text-white/70">{description}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
