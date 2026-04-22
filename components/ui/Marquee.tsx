import { cn } from '@/lib/cn';

interface MarqueeProps {
  items: string[];
  className?: string;
}

export default function Marquee({ items, className }: MarqueeProps) {
  const doubled = [...items, ...items];
  return (
    <div
      className={cn(
        'relative overflow-hidden border-y border-white/10 bg-ink-900/60 py-5',
        className
      )}
    >
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="display flex items-center gap-12 text-3xl sm:text-4xl md:text-5xl text-white/90"
          >
            {item}
            <span
              aria-hidden
              className="inline-block h-2 w-2 rounded-full bg-neon-magenta shadow-neon-pink"
            />
          </span>
        ))}
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-950 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-950 to-transparent"
      />
    </div>
  );
}
