'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'ghost' | 'outline';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: Variant;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit';
  withArrow?: boolean;
}

const base =
  'group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-magenta focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950';

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

const variants: Record<Variant, string> = {
  primary:
    'bg-neon-magenta text-white shadow-neon-pink hover:shadow-[0_0_60px_rgba(255,45,149,0.7)] hover:-translate-y-0.5',
  ghost:
    'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20',
  outline:
    'border-2 border-white/80 text-white hover:bg-white hover:text-ink-950 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]',
};

export default function Button({
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  className,
  type = 'button',
  withArrow,
}: ButtonProps) {
  const classes = cn(base, sizes[size], variants[variant], className);
  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {withArrow && (
        <ArrowRight
          className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          strokeWidth={2.5}
        />
      )}
      {variant === 'primary' && (
        <span
          aria-hidden
          className="absolute inset-0 overflow-hidden rounded-full"
        >
          <span className="absolute inset-y-0 -left-1/3 w-1/3 rotate-12 bg-white/25 blur-md transition-transform duration-700 group-hover:translate-x-[400%]" />
        </span>
      )}
    </>
  );

  if (href) {
    const isExternal = href.startsWith('http');
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className={classes}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
