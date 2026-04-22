'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Play, ArrowUpRight } from 'lucide-react';
import { galleryImages, site, blurDataURL } from '@/lib/site';
import TikTokIcon from '@/components/ui/TikTokIcon';
import SectionHeading from '@/components/ui/SectionHeading';

const platforms = [
  {
    name: 'TikTok',
    handle: site.tiktokHandle,
    href: site.tiktok,
    hook: 'Slow-mo reels drop every weekend',
    Icon: TikTokIcon,
    glow: 'shadow-neon-pink',
    border: 'border-neon-magenta/40 hover:border-neon-magenta',
    iconBg: 'bg-neon-magenta',
  },
  {
    name: 'Instagram',
    handle: site.instagramHandle,
    href: site.instagram,
    hook: 'Behind-the-scenes + real client tags',
    Icon: Instagram,
    glow: 'shadow-neon-violet',
    border: 'border-neon-violet/40 hover:border-neon-violet',
    iconBg: 'bg-gradient-to-br from-neon-magenta via-neon-violet to-neon-cyan',
  },
  {
    name: 'Facebook',
    handle: site.facebookHandle,
    href: site.facebook,
    hook: 'Event recaps + verified reviews',
    Icon: Facebook,
    glow: 'shadow-neon-cyan',
    border: 'border-neon-cyan/40 hover:border-neon-cyan',
    iconBg: 'bg-neon-cyan',
  },
];

export default function SocialSection() {
  const feedTiles = galleryImages.slice(4, 10);

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-ink-900/40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,45,149,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(34,211,238,0.15),transparent_55%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
        <SectionHeading
          align="center"
          eyebrow="Live on the feed"
          title={
            <>
              The real work? <br />
              <span className="text-gradient">It's on social.</span>
            </>
          }
          description="New booth reels every single weekend. Our feeds are the real portfolio — click through to see the last 500+ events in motion."
        />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
          <div className="order-2 lg:order-1">
            <div className="flex flex-col gap-3">
              {platforms.map((p, i) => (
                <motion.a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`group relative flex items-center gap-4 overflow-hidden rounded-2xl border bg-ink-800/70 p-4 pr-5 transition-all duration-500 hover:-translate-y-0.5 hover:bg-ink-800 sm:p-5 ${p.border}`}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-10 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-white/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div
                    className={`flex h-12 w-12 flex-none items-center justify-center rounded-2xl text-white transition-transform duration-500 group-hover:scale-110 ${p.iconBg} ${p.glow}`}
                  >
                    <p.Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="display text-xl sm:text-2xl">{p.name}</span>
                      <span className="text-xs text-white/60">{p.handle}</span>
                    </div>
                    <p className="mt-0.5 text-sm text-white/65">{p.hook}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 flex-none text-white/50 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neon-magenta" />
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-6 flex items-center gap-5 rounded-2xl border border-white/10 bg-ink-800/60 p-4"
            >
              <div className="relative rounded-xl border border-white/15 bg-white p-2 shadow-[0_15px_50px_rgba(139,92,246,0.35)]">
                <div className="relative h-20 w-20 overflow-hidden rounded-lg sm:h-24 sm:w-24">
                  <Image
                    src="/qr.webp"
                    alt="Instagram QR code"
                    fill
                    sizes="96px"
                    className="object-contain"
                  />
                </div>
              </div>
              <div>
                <div className="eyebrow text-neon-magenta">Scan on the fly</div>
                <div className="display mt-1 text-xl sm:text-2xl">
                  Instagram QR
                </div>
                <p className="mt-1 text-xs text-white/60 sm:text-sm">
                  Point your camera → straight to the feed.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative order-1 mx-auto w-full max-w-[320px] lg:order-2"
          >
            <div className="relative">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-neon-magenta via-neon-violet to-neon-cyan opacity-60 blur-2xl"
              />
              <div className="relative aspect-[9/19] w-full rounded-[2.75rem] border-[10px] border-ink-700 bg-ink-950 shadow-[0_40px_100px_rgba(0,0,0,0.7)]">
                <div className="absolute left-1/2 top-2 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-ink-950 ring-1 ring-ink-700" />
                <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="/gallery/image7.webp"
                    className="h-full w-full object-cover"
                  >
                    <source src="/video/videokeeps3.mp4" type="video/mp4" />
                  </video>

                  <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/60 to-transparent" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                  <div className="absolute left-3 top-10 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">
                      <span className="h-1.5 w-1.5 animate-glow-pulse rounded-full bg-white" />
                      Live
                    </span>
                    <span className="rounded-full bg-black/40 px-2 py-0.5 text-[10px] font-medium text-white/90 backdrop-blur">
                      {site.tiktokHandle}
                    </span>
                  </div>

                  <div className="absolute right-3 top-1/2 flex -translate-y-1/2 flex-col items-center gap-4 text-white">
                    <SocialAction label="87K" icon="heart" />
                    <SocialAction label="2.1K" icon="comment" />
                    <SocialAction label="Share" icon="share" />
                  </div>

                  <div className="absolute inset-x-3 bottom-4 text-white">
                    <p className="text-[13px] font-semibold">
                      {site.instagramHandle}
                    </p>
                    <p className="mt-1 text-[11px] leading-snug text-white/85">
                      360° magic from last night's wedding ✨ <br />
                      <span className="text-neon-magenta">#KeepsakeKreators</span>{' '}
                      <span className="text-white/70">#360booth</span>
                    </p>
                  </div>

                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-70 transition-opacity duration-500 group-hover:opacity-0">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/30 backdrop-blur">
                      <Play className="ml-1 h-6 w-6 fill-white text-white" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-6 top-12 hidden h-14 w-[10px] rounded-l-xl bg-ink-700 sm:block" />
              <div className="absolute -right-6 top-20 hidden h-10 w-[10px] rounded-r-xl bg-ink-700 sm:block" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="eyebrow text-white/60">Straight from the grid</div>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs text-white/70 hover:text-neon-magenta"
            >
              See more <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-6 sm:gap-3">
            {feedTiles.map((img, i) => (
              <motion.a
                key={img.src}
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="group relative aspect-square overflow-hidden rounded-xl ring-1 ring-white/10"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 33vw, 16vw"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-ink-950/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <Instagram className="h-6 w-6 text-white drop-shadow-[0_0_18px_rgba(255,45,149,0.8)]" />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialAction({
  label,
  icon,
}: {
  label: string;
  icon: 'heart' | 'comment' | 'share';
}) {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black/40 ring-1 ring-white/20 backdrop-blur">
        {icon === 'heart' && (
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4 text-neon-magenta drop-shadow-[0_0_8px_rgba(255,45,149,0.6)]"
          >
            <path d="M12 21s-7-4.35-9.33-8.68C.97 9.02 2.5 5 6.3 5c2.02 0 3.3 1.3 4.2 2.5C11.4 6.3 12.68 5 14.7 5c3.8 0 5.33 4.02 3.63 7.32C19 16.65 12 21 12 21z" />
          </svg>
        )}
        {icon === 'comment' && (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="h-4 w-4 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
            />
          </svg>
        )}
        {icon === 'share' && (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="h-4 w-4 text-white"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m22 2-4 20-7-9-9-4z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="m22 2-11 11" />
          </svg>
        )}
      </div>
      <span className="text-[10px] font-semibold text-white/90">{label}</span>
    </div>
  );
}
