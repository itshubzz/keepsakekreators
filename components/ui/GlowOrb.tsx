import { cn } from '@/lib/cn';

interface GlowOrbProps {
  className?: string;
  color?: 'magenta' | 'violet' | 'cyan';
  size?: number;
}

const colors = {
  magenta: 'bg-neon-magenta',
  violet: 'bg-neon-violet',
  cyan: 'bg-neon-cyan',
};

export default function GlowOrb({
  className,
  color = 'magenta',
  size = 400,
}: GlowOrbProps) {
  return (
    <div
      aria-hidden
      style={{ width: size, height: size }}
      className={cn(
        'pointer-events-none absolute rounded-full opacity-40 blur-3xl animate-glow-pulse',
        colors[color],
        className
      )}
    />
  );
}
