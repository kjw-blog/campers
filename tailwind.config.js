/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      gridTemplateAreas: {
        room: [
          'graph graph graph graph graph graph graph graph picture picture picture picture',
          'graph graph graph graph graph graph graph graph service service service service',
          'reservation reservation reservation reservation reservation review review review review review options options ',
          'reservation reservation reservation reservation reservation review review review review review options options ',
        ],
        roomMd: [
          'graph graph graph graph',
          'graph graph graph graph',
          'picture picture service service',
          'picture picture service service',
          'reservation reservation review review',
          'reservation reservation options options',
        ],
        roomXl: [
          'graph graph graph graph',
          'graph graph graph graph',
          'picture picture service service',
          'picture picture service service',
          'reservation reservation options review',
          'reservation reservation options review',
        ],
        roomMobile: [
          'graph',
          'graph',
          'reservation',
          'picture',
          'service',
          'options',
          'review',
        ],
      },
      boxShadow: {
        dark_md: '0px 15px 15px rgba(255, 255, 255, 0.3)',
      },
      colors: {
        dark: {
          100: '#bdbdbd',
          200: '#313338',
          300: '#2B2D31',
          400: '#1E1F22',
        },
        camp: {
          heavy: '#42B983',
          middle2: '#73D13D',
          middle: '#79CF9F',
          light: '#CFF1B9',
        },
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
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@savvywombat/tailwindcss-grid-areas'),
  ],
};
