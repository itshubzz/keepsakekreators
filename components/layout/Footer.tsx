import Link from 'next/link';
import Image from 'next/image';
import {
  Instagram,
  Facebook,
  Mail,
  MapPin,
  ArrowUpRight,
  Sparkles,
  Clock,
} from 'lucide-react';
import { navLinks, site } from '@/lib/site';
import TikTokIcon from '@/components/ui/TikTokIcon';

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-white/10 bg-ink-900/60">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-magenta/70 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-72 w-[120%] -translate-x-1/2 rounded-full bg-neon-magenta/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 pt-12 sm:px-6 sm:pt-16">
        <a
          href={`mailto:${site.email}?subject=${encodeURIComponent(
            'Booking inquiry'
          )}`}
          className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-ink-800/70 p-6 transition-all duration-500 hover:-translate-y-0.5 hover:border-neon-magenta/60 hover:shadow-neon-pink sm:p-8"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,45,149,0.25),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(34,211,238,0.18),transparent_55%)]"
          />
          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/80 backdrop-blur">
                <Sparkles className="h-3 w-3 text-neon-magenta" />
                Book the vibe
              </div>
              <h3 className="display mt-3 text-2xl leading-tight sm:text-3xl md:text-4xl">
                Ready to make <span className="text-gradient">memories</span>?
              </h3>
              <p className="mt-2 max-w-md text-sm text-white/65">
                Tap below to email us — we reply within 24 hours with
                availability and a custom quote.
              </p>
            </div>
            <div className="flex items-center gap-3 self-start sm:self-auto">
              <span className="inline-flex items-center gap-2 rounded-full bg-neon-magenta px-5 py-3 text-sm font-semibold text-white shadow-neon-pink transition-all duration-500 group-hover:-translate-y-0.5">
                <Mail className="h-4 w-4" />
                Email us
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </div>
        </a>
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-10 pt-12 sm:px-6 sm:pb-14 sm:pt-16 md:grid-cols-[1.4fr_1fr_1fr] md:gap-12">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full ring-1 ring-white/20">
              <Image
                src="/logo/logo.webp"
                alt={site.name}
                fill
                sizes="44px"
                className="object-cover"
              />
            </span>
            <span className="display text-lg uppercase tracking-widest sm:text-xl">
              Keepsake<span className="text-neon-magenta">.</span>Kreators
            </span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
            We build moments you can't scroll past. 360° video booths, photo
            booths, and event entertainment that turn any night into a
            highlight reel.
          </p>

          <div className="mt-5 flex items-center gap-2">
            <SocialPill
              href={site.tiktok}
              label="TikTok"
              icon={<TikTokIcon className="h-4 w-4" />}
              accent="hover:border-neon-magenta hover:text-neon-magenta"
            />
            <SocialPill
              href={site.instagram}
              label="Instagram"
              icon={<Instagram className="h-4 w-4" />}
              accent="hover:border-neon-violet hover:text-neon-violet"
            />
            <SocialPill
              href={site.facebook}
              label="Facebook"
              icon={<Facebook className="h-4 w-4" />}
              accent="hover:border-neon-cyan hover:text-neon-cyan"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-2">
          <div>
            <h4 className="eyebrow text-white/60">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-white/75 transition-colors hover:text-neon-magenta"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow text-white/60">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-start gap-2 text-white/80 transition-colors hover:text-neon-magenta"
                >
                  <Mail className="mt-0.5 h-4 w-4 flex-none text-neon-magenta" />
                  <span className="break-all">{site.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/80">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-neon-magenta" />
                {site.location}
              </li>
              <li className="flex items-start gap-2 text-white/80">
                <Clock className="mt-0.5 h-4 w-4 flex-none text-neon-magenta" />
                {site.hours}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-16 flex select-none items-center justify-center overflow-hidden sm:bottom-20"
      >
        <span className="display whitespace-nowrap text-[18vw] uppercase leading-none tracking-tighter text-white/[0.025] sm:text-[15vw] md:text-[12vw]">
          Keepsake
        </span>
      </div>

      <div className="relative border-t border-white/10 bg-ink-950/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-white/50 sm:flex-row sm:px-6">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} {site.name}. All the memories, made
            loud.
          </p>
          <p className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 animate-glow-pulse rounded-full bg-neon-magenta" />
            {site.hours}
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialPill({
  href,
  label,
  icon,
  accent,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  accent: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className={`group inline-flex h-10 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 text-sm text-white/80 transition-all duration-300 hover:-translate-y-0.5 ${accent}`}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </a>
  );
}
