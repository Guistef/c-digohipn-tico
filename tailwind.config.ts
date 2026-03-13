import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border:     'hsl(var(--border))',
        input:      'hsl(var(--input))',
        ring:       'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT:    'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT:    'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT:    'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT:    'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        card: {
          DEFAULT:    'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        scroll: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.33%)' },
        },
        'scroll-reverse': {
          '0%':   { transform: 'translateX(-33.33%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px hsl(330 90% 55% / 0.3)' },
          '50%':      { boxShadow: '0 0 40px hsl(330 90% 55% / 0.6)' },
        },
        shine: {
          '0%':        { left: '-100%' },
          '50%, 100%': { left: '100%' },
        },
      },
      animation: {
        float:          'float 3s ease-in-out infinite',
        scroll:         'scroll 20s linear infinite',
        'scroll-reverse': 'scroll-reverse 20s linear infinite',
        fadeInUp:       'fadeInUp 0.6s ease-out forwards',
        'pulse-glow':   'pulse-glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
