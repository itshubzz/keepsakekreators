import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Mail, MapPin } from 'lucide-react';
import { navLinks, site } from '@/lib/site';
import TikTokIcon from '@/components/ui/TikTokIcon';

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-white/10 bg-ink-900/60">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-full bg-neon-magenta/10 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-3">
            <span className="relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full ring-1 ring-white/20">
              <Image
                src="/logo/logo.jpg"
                alt={site.name}
                fill
                sizes="48px"
                className="object-cover"
              />
            </span>
            <span className="display text-xl uppercase tracking-widest">
              Keepsake<span className="text-neon-magenta">.</span>Kreators
            </span>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/60">
            We build moments you can't scroll past. 360° video booths, photo
            booths, and event entertainment that turn any night into a
            highlight reel.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <a
              href={site.tiktok}
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 transition-all hover:-translate-y-0.5 hover:border-neon-magenta hover:text-white hover:shadow-neon-pink"
            >
              <TikTokIcon className="h-4 w-4" />
              TikTok
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 transition-all hover:-translate-y-0.5 hover:border-neon-violet hover:text-white hover:shadow-neon-violet"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 transition-all hover:-translate-y-0.5 hover:border-neon-cyan hover:text-white hover:shadow-neon-cyan"
            >
              <Facebook className="h-4 w-4" />
              Facebook
            </a>
          </div>
        </div>

        <div>
          <h4 className="eyebrow text-white/60">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/75 transition-colors hover:text-neon-magenta"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="eyebrow text-white/60">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-neon-magenta" />
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-neon-magenta" />
              {site.location}
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 text-xs text-white/50 sm:flex-row sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.name}. All the memories, made
            loud.
          </p>
          <p className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-neon-magenta animate-glow-pulse" />
            {site.hours}
          </p>
        </div>
      </div>
    </footer>
  );
}
