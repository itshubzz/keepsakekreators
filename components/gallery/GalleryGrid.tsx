'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { galleryImages } from '@/lib/site';

export default function GalleryGrid() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() => {
    setActive((i) => (i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length));
  }, []);
  const next = useCallback(() => {
    setActive((i) => (i === null ? null : (i + 1) % galleryImages.length));
  }, []);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active, close, prev, next]);

  return (
    <>
      <div className="columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4">
        {galleryImages.map((img, i) => (
          <motion.button
            key={img.src}
            type="button"
            onClick={() => setActive(i)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: (i % 6) * 0.04 }}
            className="group relative mb-3 block w-full overflow-hidden rounded-2xl ring-1 ring-white/10 sm:mb-4"
          >
            <div
              className="relative w-full"
              style={{ aspectRatio: i % 3 === 0 ? '3/4' : i % 5 === 0 ? '1' : '4/5' }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-40" />
            <div className="absolute inset-x-0 bottom-0 translate-y-2 p-3 text-xs opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <span className="inline-flex items-center gap-2 rounded-full bg-black/60 px-2.5 py-1 ring-1 ring-white/20 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-neon-magenta" />
                View · {String(i + 1).padStart(2, '0')}
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/90 backdrop-blur-xl"
            onClick={close}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={close}
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur transition-colors hover:border-neon-magenta hover:text-neon-magenta"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              type="button"
              aria-label="Previous"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur transition-colors hover:border-neon-magenta hover:text-neon-magenta sm:left-6"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur transition-colors hover:border-neon-magenta hover:text-neon-magenta sm:right-6"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <motion.div
              key={galleryImages[active].src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="relative mx-4 h-[80vh] w-full max-w-5xl overflow-hidden rounded-2xl ring-1 ring-white/15"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[active].src}
                alt={galleryImages[active].alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </motion.div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-1.5 text-xs text-white/80 ring-1 ring-white/10 backdrop-blur">
              {active + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
