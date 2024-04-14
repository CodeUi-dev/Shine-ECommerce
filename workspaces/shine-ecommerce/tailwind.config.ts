import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
        'mb': '400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        'yellow-50': 'hsl(var(--yellow-50))',
        'yellow-55': 'hsl(var(--yellow-55))',
        'yellow-70': 'hsl(var(--yellow-70))',
        'yellow-80': 'hsl(var(--yellow-80))',
        'yellow-90': 'hsl(var(--yellow-90))',
        'yellow-95': 'hsl(var(--yellow-95))',
        'yellow-97': 'hsl(var(--yellow-97))',
        'yellow-99': 'hsl(var(--yellow-99))',
        'white-95': 'hsl(var(--white-95))',
        'white-90': 'hsl(var(--white-90))',
        'white-97': 'hsl(var(--white-97))',
        'white-99': 'hsl(var(--white-99))',
        'gray-70': 'hsl(var(--gray70))',
        'gray-60': 'hsl(var(--gray60))',
        'gray-40': 'hsl(var(--gray40))',
        'gray-35': 'hsl(var(--gray35))',
        'gray-30': 'hsl(var(--gray30))',
        'gray-20': 'hsl(var(--gray20))',
        'gray-15': 'hsl(var(--gray15))',
        'gray-10': 'hsl(var(--gray10))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
