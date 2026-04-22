import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#090320',
          900: '#120830',
          800: '#1C1040',
          700: '#2A1A54',
          600: '#3A2470',
        },
        neon: {
          magenta: '#FF2D95',
          violet: '#8B5CF6',
          cyan: '#22D3EE',
          pink: '#FF6BB5',
        },
      },
      fontFamily: {
        display: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-fade':
          'radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.25), transparent 60%)',
        'neon-gradient':
          'linear-gradient(135deg, #FF2D95 0%, #8B5CF6 50%, #22D3EE 100%)',
        'hero-vignette':
          'radial-gradient(ellipse at center, transparent 40%, rgba(5,1,10,0.85) 100%)',
      },
      boxShadow: {
        'neon-pink': '0 0 40px rgba(255, 45, 149, 0.45), 0 0 80px rgba(255, 45, 149, 0.25)',
        'neon-violet': '0 0 40px rgba(139, 92, 246, 0.45), 0 0 80px rgba(139, 92, 246, 0.25)',
        'neon-cyan': '0 0 40px rgba(34, 211, 238, 0.45), 0 0 80px rgba(34, 211, 238, 0.25)',
        'inner-glow': 'inset 0 0 40px rgba(255, 45, 149, 0.15)',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '0.7', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
