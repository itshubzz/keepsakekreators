import type { Metadata } from 'next';
import Image from 'next/image';
import { Aperture, Camera, Share2, Sparkles, Check } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import CTASection from '@/components/sections/CTASection';
import Button from '@/components/ui/Button';
import { galleryImages, blurDataURL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Services — 360° Booth, Photo Booth, Branding',
  description:
    'Full-service event entertainment: 360° video booths, premium photo booths, custom branding, and instant sharing. Book the experience your guests won\'t stop sharing.',
};

const services = [
  {
    icon: Aperture,
    tag: 'Signature',
    title: '360° Video Booth',
    summary:
      'A rotating camera arm captures you from every angle in cinematic slow-motion. It\'s the moment your guests will post before they even leave the venue.',
    image: galleryImages[11].src,
    features: [
      '4K slow-motion capture',
      'LED-lit platform with branded base',
      'Custom intro, outro, and music',
      'Instant AirDrop, text, and QR share',
      'Dedicated on-site video operator',
    ],
  },
  {
    icon: Camera,
    tag: 'Classic',
    title: 'Premium Photo Booth',
    summary:
      'Open-air and mirror setups with magazine-quality lighting, unlimited prints, GIFs, and boomerangs — plus a prop table curated for your event.',
    image: galleryImages[4].src,
    features: [
      'DSLR quality, 12-second prints',
      'GIFs, boomerangs, and stills',
      'Custom print templates',
      'Pro prop styling',
      'Digital gallery within 48h',
    ],
  },
  {
    icon: Sparkles,
    tag: 'Identity',
    title: 'Custom Branding',
    summary:
      'Your event, your aesthetic. We design every visible surface — overlays, backdrops, microsite, share template — so the content stays on-brand wherever it lands.',
    image: galleryImages[19].src,
    features: [
      'Bespoke overlay + print design',
      'Backdrop + floor decal options',
      'Branded sharing microsite',
      'Logo reveal in every video',
      'Design approval in under 72h',
    ],
  },
  {
    icon: Share2,
    tag: 'Distribution',
    title: 'Instant Sharing & Live Gallery',
    summary:
      'Every photo and reel lands on guests\' phones while they\'re still on the dance floor. Optional live gallery wall turns the room itself into the feed.',
    image: galleryImages[13].src,
    features: [
      'AirDrop, SMS, email, QR delivery',
      'Custom-hashtag live gallery wall',
      'Full event gallery microsite',
      'Shareable guest download link',
      'Optional social-team day-of',
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={
          <>
            Every tool we use to <span className="text-gradient">turn the room up</span>.
          </>
        }
        description="Mix and match. We'll tailor the activation to the venue, the crowd, and the content plan — from an intimate micro-wedding to a 1,000-guest activation."
      />

      <section className="mx-auto max-w-7xl px-4 pb-20 pt-24 sm:px-6 sm:pt-32">
        <div className="space-y-20 lg:space-y-28">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div className="relative">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] ring-1 ring-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.6)]">
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-ink-950/30 via-transparent to-transparent" />
                </div>
                <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/50 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/80 backdrop-blur">
                  {svc.tag}
                </div>
              </div>

              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-neon-magenta to-neon-violet">
                  <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-ink-900 m-[2px]">
                    <svc.icon className="h-6 w-6 text-neon-magenta" />
                  </div>
                </div>
                <h2 className="display mt-6 text-4xl sm:text-5xl">
                  {svc.title}
                </h2>
                <p className="mt-4 max-w-lg text-white/70 sm:text-lg">
                  {svc.summary}
                </p>

                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/80">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-neon-magenta/15 ring-1 ring-neon-magenta/40">
                        <Check className="h-3 w-3 text-neon-magenta" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex gap-3">
                  <Button href="/contact" withArrow className="flex-1 sm:flex-initial">
                    Book this experience
                  </Button>
                  <Button href="/packages" variant="ghost" className="flex-1 sm:flex-initial">
                    See pricing
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
