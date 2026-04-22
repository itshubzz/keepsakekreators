import type { Metadata } from 'next';
import Image from 'next/image';
import {
  Check,
  Sparkles,
  Clock,
  ImageIcon,
  Send,
  Wrench,
  Palette,
  Ribbon,
  PartyPopper,
  FolderOpen,
  Mail,
  ShieldCheck,
} from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import CTASection from '@/components/sections/CTASection';
import Button from '@/components/ui/Button';
import { site, galleryImages, blurDataURL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Packages — Booth Experiences',
  description:
    'Premium Open Air, Luxury Open Air, and Combined 360° + Open Air booth packages. Clear pricing, all-in features, $200 deposit to lock your date.',
};

type Feature = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
};

const sharedFeatures: Feature[] = [
  { icon: ImageIcon, label: 'Unlimited Digital Prints' },
  { icon: Send, label: 'Instant Sharing' },
  { icon: Wrench, label: 'Setup & Break Down' },
  { icon: Palette, label: 'Choice of Backdrop' },
  { icon: Ribbon, label: 'Red Carpet & Stanchions' },
  { icon: PartyPopper, label: 'Props & Table' },
  { icon: FolderOpen, label: 'Online Gallery' },
];

const plans = [
  {
    name: 'Premium',
    kind: 'Open Air / 360',
    duration: '3 Hours',
    hours: 3,
    summary:
      'Our signature package. Perfect for intimate weddings, showers, and private parties that still want the full booth experience.',
    image: galleryImages[21].src,
    accent: 'from-neon-cyan/30 to-neon-violet/10',
  },
  {
    name: 'Luxury',
    kind: 'Open Air / 360',
    duration: '4 Hours',
    hours: 4,
    summary:
      'An extra hour of magic for mid-size weddings, sweet sixteens, and galas. Most-booked for 150–300 guest events.',
    image: galleryImages[8].src,
    accent: 'from-neon-magenta/35 to-neon-violet/10',
    featured: true,
  },
  {
    name: 'Signature',
    kind: 'Open Air & 360 Booth',
    duration: '5 Hours',
    hours: 5,
    summary:
      'Both booths running side-by-side, all night. Twice the content, twice the energy — built for galas, corporate nights, and milestone celebrations.',
    image: galleryImages[9].src,
    accent: 'from-neon-violet/35 to-neon-magenta/10',
  },
];

export default function PackagesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Booth Packages"
        title={
          <>
            Pick the booth. <span className="text-gradient">We bring the night.</span>
          </>
        }
        description="Three all-in packages. Open Air, 360°, or both — every tier ships with unlimited prints, instant sharing, and a full pro crew on-site."
      />

      <section className="mx-auto max-w-7xl px-4 pb-24 pt-24 sm:px-6 sm:pt-32">
        <div className="grid gap-6 md:grid-cols-3 md:items-stretch">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`group relative flex flex-col overflow-hidden rounded-3xl border transition-all duration-500 ${
                plan.featured
                  ? 'border-neon-magenta/60 bg-gradient-to-b from-ink-800/90 to-ink-900/80 shadow-neon-pink md:-translate-y-3'
                  : 'border-white/10 bg-ink-800/60 hover:-translate-y-1 hover:border-white/25'
              }`}
            >
              {plan.featured && (
                <div className="absolute left-1/2 top-5 z-10 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-neon-magenta px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-white shadow-neon-pink">
                  <Sparkles className="h-3 w-3" /> Most booked
                </div>
              )}

              <div className="relative aspect-[5/4] w-full overflow-hidden">
                <Image
                  src={plan.image}
                  alt={`${plan.name} package`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className={`absolute inset-0 bg-gradient-to-br ${plan.accent} mix-blend-overlay`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/50 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="eyebrow text-neon-magenta">{plan.kind}</div>
                  <div className="mt-2 flex items-baseline gap-3">
                    <h3 className="display text-4xl">{plan.name}</h3>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                      <Clock className="h-3 w-3 text-neon-magenta" />
                      {plan.duration}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-7">
                <p className="text-sm text-white/70">{plan.summary}</p>

                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-3 text-sm text-white">
                    <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-neon-magenta/15 ring-1 ring-neon-magenta/40">
                      <Clock className="h-3.5 w-3.5 text-neon-magenta" />
                    </span>
                    <span className="font-semibold">{plan.duration} coverage</span>
                  </li>
                  {sharedFeatures.map((f) => (
                    <li key={f.label} className="flex items-start gap-3 text-sm text-white/85">
                      <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
                        <f.icon className="h-3.5 w-3.5 text-neon-magenta" />
                      </span>
                      {f.label}
                    </li>
                  ))}
                </ul>

                <Button
                  href="/contact"
                  className="mt-8 w-full"
                  variant={plan.featured ? 'primary' : 'ghost'}
                  withArrow
                >
                  Book {plan.name}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
        <div className="grid gap-4 md:grid-cols-3">
          <InfoCard
            icon={ShieldCheck}
            title="$200 deposit"
            copy="Due at booking to lock your date and time. The rest is split across two easy installments."
          />
          <InfoCard
            icon={PartyPopper}
            title="Add-ons available"
            copy="Extra hours, custom backdrops, print design, brand overlays, and more — all priced à la carte on request."
          />
          <InfoCard
            icon={Mail}
            title="More info?"
            copy={
              <>
                Email us at{' '}
                <a
                  href={`mailto:${site.email}`}
                  className="text-neon-magenta underline-offset-4 hover:underline"
                >
                  {site.email}
                </a>{' '}
                and we'll send a custom quote within 24 hours.
              </>
            }
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink-800/60 p-8 sm:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-neon-violet/25 blur-3xl"
          />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <div className="eyebrow text-neon-magenta">Custom builds</div>
              <h2 className="display mt-3 text-3xl sm:text-4xl">
                Doing something <span className="text-gradient">bigger</span>?
              </h2>
              <p className="mt-4 max-w-md text-white/70">
                Multi-day festivals, brand activations, pop-up tours across venues — we've built it all. Tell us the shape of the event and we'll custom-quote the production.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button href="/contact" size="lg" withArrow>
                Request custom quote
              </Button>
              <Button href="/services" size="lg" variant="outline">
                See services
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function InfoCard({
  icon: Icon,
  title,
  copy,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  copy: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-ink-800/60 p-6 transition-colors hover:border-white/20">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-neon-magenta/15 ring-1 ring-neon-magenta/40">
        <Icon className="h-5 w-5 text-neon-magenta" />
      </div>
      <h3 className="display mt-5 text-xl">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{copy}</p>
    </div>
  );
}
