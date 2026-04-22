'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Mail, Phone, Send, User, Users, CheckCircle2 } from 'lucide-react';
import Button from '@/components/ui/Button';

const services = ['360° Video Booth', 'Photo Booth', 'Both', 'Not sure yet'];

export default function BookingForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-white/10 bg-ink-800/60 p-12 text-center"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neon-magenta/20 ring-1 ring-neon-magenta">
          <CheckCircle2 className="h-8 w-8 text-neon-magenta" />
        </div>
        <h3 className="display text-3xl">Request received.</h3>
        <p className="max-w-md text-white/70">
          We'll be in your inbox within 24 hours with availability, packages,
          and next steps. Get ready to light it up.
        </p>
        <Button onClick={() => setSent(false)} variant="ghost">
          Submit another
        </Button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative grid gap-4 rounded-3xl border border-white/10 bg-ink-800/60 p-6 backdrop-blur sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2 [&>*]:min-w-0">
        <Field icon={User} label="Your name" name="name" placeholder="Jamie Carter" required />
        <Field icon={Users} label="Event type" name="event" placeholder="Wedding, gala, launch…" required />
        <Field icon={Mail} label="Email" name="email" type="email" placeholder="you@brand.com" required />
        <Field icon={Phone} label="Phone" name="phone" type="tel" placeholder="(555) 555-0134" />
        <Field icon={Calendar} label="Event date" name="date" type="date" required />
        <Select label="Service" name="service" options={services} />
      </div>

      <label className="block">
        <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-white/60">
          Tell us the vibe
        </span>
        <textarea
          name="message"
          rows={4}
          required
          placeholder="Venue, guest count, hours, dress code, anything special…"
          className="w-full resize-none rounded-2xl border border-white/10 bg-ink-900/80 px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-white/30 focus:border-neon-magenta focus:shadow-[0_0_0_4px_rgba(255,45,149,0.15)]"
        />
      </label>

      <div className="flex flex-col-reverse items-start justify-between gap-4 pt-2 sm:flex-row sm:items-center">
        <p className="text-xs text-white/50">
          We reply within 24h. No spam. Ever.
        </p>
        <Button type="submit" size="lg" withArrow>
          <Send className="h-4 w-4" /> Send request
        </Button>
      </div>
    </form>
  );
}

function Field({
  icon: Icon,
  label,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-white/60">
        {label}
      </span>
      <div className="group relative w-full min-w-0">
        <Icon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40 transition-colors group-focus-within:text-neon-magenta" />
        <input
          {...rest}
          className="block w-full min-w-0 appearance-none rounded-2xl border border-white/10 bg-ink-900/80 px-10 py-3 text-sm text-white outline-none transition-all placeholder:text-white/30 focus:border-neon-magenta focus:shadow-[0_0_0_4px_rgba(255,45,149,0.15)]"
        />
      </div>
    </label>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: readonly string[];
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-white/60">
        {label}
      </span>
      <select
        name={name}
        defaultValue={options[0]}
        className="w-full cursor-pointer appearance-none rounded-2xl border border-white/10 bg-ink-900/80 px-4 py-3 text-sm text-white outline-none transition-all focus:border-neon-magenta focus:shadow-[0_0_0_4px_rgba(255,45,149,0.15)]"
      >
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-ink-900">
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
}
