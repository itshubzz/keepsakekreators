import type { Metadata } from 'next';
import { Instagram, Facebook, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import BookingForm from '@/components/sections/BookingForm';
import TikTokIcon from '@/components/ui/TikTokIcon';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact & Booking',
  description:
    'Check availability, request a quote, or just say hi. We reply to every inquiry within 24 hours.',
};

const contactDetails = [
  { Icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { Icon: MapPin, label: 'Location', value: site.location },
  { Icon: Clock, label: 'Hours', value: site.hours },
  { Icon: TikTokIcon, label: 'TikTok', value: site.tiktokHandle, href: site.tiktok },
  { Icon: Instagram, label: 'Instagram', value: site.instagramHandle, href: site.instagram },
  { Icon: Facebook, label: 'Facebook', value: site.facebookHandle, href: site.facebook },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Check Availability"
        title={
          <>
            Let's build your <span className="text-gradient">moment</span>.
          </>
        }
        description="Drop the details below. Your dedicated producer replies within 24 hours with quote, options, and next steps."
      />

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <BookingForm />

          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-ink-800/60 p-8">
              <h3 className="display text-2xl">Prefer old-school?</h3>
              <p className="mt-2 text-sm text-white/65">
                Reach us the direct way — we check everything.
              </p>
              <ul className="mt-6 space-y-5">
                {contactDetails.map((d) => {
                  const body = (
                    <>
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-neon-magenta/15 ring-1 ring-neon-magenta/40">
                        <d.Icon className="h-4 w-4 text-neon-magenta" />
                      </span>
                      <span>
                        <span className="block text-xs uppercase tracking-[0.25em] text-white/50">
                          {d.label}
                        </span>
                        <span className="mt-0.5 block break-all text-sm text-white">
                          {d.value}
                        </span>
                      </span>
                    </>
                  );
                  return (
                    <li key={d.label}>
                      {d.href ? (
                        <a
                          href={d.href}
                          target={d.href.startsWith('http') ? '_blank' : undefined}
                          rel="noreferrer"
                          className="flex items-center gap-4 transition-colors hover:text-neon-magenta"
                        >
                          {body}
                        </a>
                      ) : (
                        <div className="flex items-center gap-4">{body}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-neon-magenta/15 via-ink-800/80 to-neon-violet/15 p-8">
              <div className="eyebrow text-neon-magenta">Pro tip</div>
              <p className="display mt-3 text-2xl leading-tight">
                Lock popular weekends 60–90 days out.
              </p>
              <p className="mt-3 text-sm text-white/70">
                Saturdays in May, June, September, and December tend to book out first. If you have flexibility, mention it in the form — we'll suggest alternate dates.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
        <a
          href={`mailto:${site.email}?subject=${encodeURIComponent(
            'Follow-up on my booking inquiry'
          )}&body=${encodeURIComponent(
            "Hi Keepsake Kreators team,\n\nI submitted the booking form on your site and wanted to follow up. Here are the details of my event:\n\n— Event type:\n— Date:\n— Venue / location:\n— Guest count:\n\nLooking forward to hearing from you.\n\nThanks!"
          )}`}
          className="group relative block overflow-hidden rounded-[2rem] border border-white/10 bg-ink-800/60 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-neon-magenta/60 hover:shadow-neon-pink sm:p-12"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,45,149,0.25),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(34,211,238,0.18),transparent_55%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)',
              backgroundSize: '52px 52px',
              maskImage:
                'radial-gradient(ellipse at center, black 35%, transparent 80%)',
            }}
          />

          <div className="relative grid items-center gap-8 lg:grid-cols-[auto_1fr_auto]">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-neon-magenta via-neon-violet to-neon-cyan shadow-neon-pink transition-transform duration-500 group-hover:scale-110 sm:h-20 sm:w-20">
              <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-ink-900 m-[2px]">
                <Mail className="h-7 w-7 text-neon-magenta sm:h-8 sm:w-8" />
              </div>
            </div>

            <div>
              <div className="eyebrow text-neon-magenta">
                Didn't hear back yet?
              </div>
              <h3 className="display mt-2 text-3xl sm:text-4xl md:text-5xl">
                Email us directly at <br className="hidden sm:block" />
                <span className="text-gradient break-all">
                  {site.email}
                </span>
              </h3>
              <p className="mt-4 max-w-2xl text-sm text-white/70 sm:text-base">
                If we haven't replied to your form submission within 24 hours,
                send us an email straight to the inbox. Click anywhere on this
                card — it'll open your mail app with a pre-filled draft ready
                to send.
              </p>
            </div>

            <div className="flex items-center gap-3 lg:justify-end">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all duration-500 group-hover:border-neon-magenta group-hover:bg-neon-magenta group-hover:text-white group-hover:shadow-neon-pink">
                Open mail app
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </div>
        </a>
      </section>
    </>
  );
}
