'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Menu, Instagram, Facebook, Mail, ArrowUpRight, Sparkles } from 'lucide-react';
import { navLinks, site } from '@/lib/site';
import Button from '@/components/ui/Button';
import TikTokIcon from '@/components/ui/TikTokIcon';
import { cn } from '@/lib/cn';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          scrolled ? 'py-2' : 'py-4'
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
          <div
            className={cn(
              'flex w-full items-center justify-between gap-4 rounded-full px-4 py-2 transition-all duration-500 sm:px-5',
              scrolled
                ? 'glass shadow-[0_8px_40px_rgba(0,0,0,0.4)]'
                : 'bg-transparent'
            )}
          >
            <Link href="/" className="group flex items-center gap-3">
              <span className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full ring-1 ring-white/20 transition-all duration-300 group-hover:ring-neon-magenta">
                <Image
                  src="/logo/logo.webp"
                  alt={site.name}
                  fill
                  sizes="40px"
                  className="object-cover"
                  priority
                />
              </span>
              <span className="display text-base uppercase tracking-widest sm:text-lg">
                Keepsake
                <span className="text-neon-magenta">.</span>
              </span>
            </Link>

            <div className="flex items-center gap-2">
              <div className="hidden sm:block">
                <Button href="/contact" size="sm" withArrow>
                  Book Now
                </Button>
              </div>

              <button
                type="button"
                aria-label="Open menu"
                aria-expanded={open}
                onClick={() => setOpen(true)}
                className="group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/5 transition-all duration-300 hover:border-neon-magenta/60 hover:bg-neon-magenta/10 hover:shadow-neon-pink"
              >
                <span className="sr-only">Menu</span>
                <div className="flex flex-col items-end gap-[5px]">
                  <span className="h-[2px] w-5 rounded-full bg-white transition-all duration-300 group-hover:bg-neon-magenta" />
                  <span className="h-[2px] w-3.5 rounded-full bg-white transition-all duration-300 group-hover:w-5 group-hover:bg-neon-magenta" />
                  <span className="h-[2px] w-5 rounded-full bg-white transition-all duration-300 group-hover:bg-neon-magenta" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      <SidebarMenu open={open} onClose={() => setOpen(false)} pathname={pathname} />
    </>
  );
}

function SidebarMenu({
  open,
  onClose,
  pathname,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-ink-950/75 backdrop-blur-md"
          />

          <motion.aside
            role="dialog"
            aria-modal="true"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 260, damping: 32 }}
            className="fixed inset-y-0 right-0 z-[70] flex w-[85%] max-w-md flex-col overflow-hidden border-l border-white/10 bg-ink-900/95 backdrop-blur-xl sm:w-[70%] lg:w-[42%] lg:max-w-lg"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,45,149,0.22),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(34,211,238,0.15),transparent_55%)]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-neon-magenta/60 to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-neon-magenta/20 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-neon-violet/20 blur-3xl"
            />

            <div className="relative flex items-center justify-between border-b border-white/10 px-6 py-5 sm:px-8">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-white/80 backdrop-blur">
                  <Sparkles className="h-3 w-3 text-neon-magenta" />
                  Menu
                </span>
              </div>
              <button
                type="button"
                aria-label="Close menu"
                onClick={onClose}
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-all duration-300 hover:rotate-90 hover:border-neon-magenta hover:bg-neon-magenta/10 hover:text-neon-magenta"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="relative flex-1 overflow-y-auto px-6 py-8 sm:px-8">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, i) => {
                  const active =
                    link.href === '/'
                      ? pathname === '/'
                      : pathname.startsWith(link.href);
                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 32 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.45,
                        delay: 0.1 + i * 0.06,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className={cn(
                          'group relative flex items-center justify-between rounded-2xl border px-5 py-4 transition-all duration-300',
                          active
                            ? 'border-neon-magenta/60 bg-neon-magenta/10 shadow-neon-pink'
                            : 'border-white/5 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05]'
                        )}
                      >
                        <span className="flex items-baseline gap-3">
                          <span className="eyebrow text-white/35">
                            0{i + 1}
                          </span>
                          <span
                            className={cn(
                              'display text-2xl uppercase tracking-wider sm:text-3xl',
                              active ? 'text-gradient' : 'text-white'
                            )}
                          >
                            {link.label}
                          </span>
                        </span>
                        <ArrowUpRight
                          className={cn(
                            'h-5 w-5 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5',
                            active
                              ? 'text-neon-magenta'
                              : 'text-white/40 group-hover:text-neon-magenta'
                          )}
                        />
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="mt-8"
              >
                <a
                  href={`mailto:${site.email}?subject=${encodeURIComponent(
                    'Booking inquiry'
                  )}`}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-neon-magenta/15 via-ink-800 to-neon-violet/15 p-5 transition-all duration-300 hover:border-neon-magenta/60 hover:shadow-neon-pink"
                >
                  <div className="min-w-0">
                    <div className="eyebrow text-neon-magenta">
                      Ready when you are
                    </div>
                    <div className="display mt-1 text-lg text-white">
                      Email us directly
                    </div>
                    <div className="mt-1 truncate text-xs text-white/60">
                      {site.email}
                    </div>
                  </div>
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-neon-magenta text-white shadow-neon-pink transition-transform duration-300 group-hover:-translate-y-0.5">
                    <Mail className="h-5 w-5" />
                  </span>
                </a>
              </motion.div>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="relative border-t border-white/10 px-6 py-5 sm:px-8"
            >
              <div className="eyebrow mb-3 text-white/50">Follow the night</div>
              <div className="flex items-center gap-2">
                <SocialLink
                  href={site.tiktok}
                  label="TikTok"
                  icon={<TikTokIcon className="h-4 w-4" />}
                  hover="hover:border-neon-magenta hover:text-neon-magenta"
                />
                <SocialLink
                  href={site.instagram}
                  label="Instagram"
                  icon={<Instagram className="h-4 w-4" />}
                  hover="hover:border-neon-violet hover:text-neon-violet"
                />
                <SocialLink
                  href={site.facebook}
                  label="Facebook"
                  icon={<Facebook className="h-4 w-4" />}
                  hover="hover:border-neon-cyan hover:text-neon-cyan"
                />
              </div>
              <p className="mt-4 flex items-center gap-2 text-xs text-white/50">
                <span className="inline-block h-1.5 w-1.5 animate-glow-pulse rounded-full bg-neon-magenta" />
                {site.hours}
              </p>
            </motion.div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

function SocialLink({
  href,
  label,
  icon,
  hover,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  hover: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className={cn(
        'group inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 text-sm text-white/85 transition-all duration-300 hover:-translate-y-0.5',
        hover
      )}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </a>
  );
}
