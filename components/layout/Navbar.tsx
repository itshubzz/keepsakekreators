'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Instagram, Facebook } from 'lucide-react';
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

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled ? 'py-2' : 'py-4'
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
        <div
          className={cn(
            'flex w-full items-center justify-between gap-6 rounded-full px-4 py-2 transition-all duration-500 sm:px-5',
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

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const active =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    active
                      ? 'text-white'
                      : 'text-white/70 hover:text-white'
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-white/10 ring-1 ring-white/15"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <div className="mr-1 flex items-center gap-1 border-r border-white/10 pr-2">
              <a
                href={site.tiktok}
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="flex h-8 w-8 items-center justify-center rounded-full text-white/60 transition-all hover:bg-white/5 hover:text-neon-magenta"
              >
                <TikTokIcon className="h-4 w-4" />
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full text-white/60 transition-all hover:bg-white/5 hover:text-neon-violet"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-full text-white/60 transition-all hover:bg-white/5 hover:text-neon-cyan"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
            <Button href="/contact" size="sm" withArrow>
              Book Now
            </Button>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="mx-4 mt-3 md:hidden"
          >
            <div className="glass flex flex-col gap-1 rounded-3xl p-4">
              {navLinks.map((link) => {
                const active =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'rounded-2xl px-4 py-3 text-sm',
                      active
                        ? 'bg-white/10 text-white'
                        : 'text-white/75 hover:bg-white/5'
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Button href="/contact" className="mt-2 w-full" withArrow>
                Book Now
              </Button>
              <div className="mt-3 flex items-center justify-center gap-2 border-t border-white/10 pt-3">
                <a
                  href={site.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="TikTok"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/80 transition-colors hover:text-neon-magenta"
                >
                  <TikTokIcon className="h-4 w-4" />
                </a>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/80 transition-colors hover:text-neon-violet"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/80 transition-colors hover:text-neon-cyan"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
