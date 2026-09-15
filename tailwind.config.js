/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#fdfbf7',
          100: '#faf6ef',
          200: '#f4ece0',
          300: '#ebe0cc',
          400: '#dcc9a8',
          500: '#c9ad82',
          600: '#b3946a',
        },
        charcoal: {
          50: '#f6f6f5',
          100: '#e8e8e6',
          200: '#c9c9c5',
          300: '#a0a09a',
          400: '#6e6e68',
          500: '#4a4a45',
          600: '#333330',
          700: '#222220',
          800: '#161615',
          900: '#0c0c0b',
          950: '#060605',
        },
        earth: {
          clay: '#a8714b',
          sand: '#d4b896',
          stone: '#8a8275',
          ochre: '#b8915a',
          terracotta: '#9c5d3a',
        },
        accent: {
          DEFAULT: '#c9ad82',
          light: '#dcc9a8',
          dark: '#a08555',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      fontSize: {
        'hero': ['clamp(3.5rem, 12vw, 12rem)', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        'mega': ['clamp(4rem, 18vw, 18rem)', { lineHeight: '0.85', letterSpacing: '-0.03em' }],
        'display': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.01em' }],
        'section': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      },
      animation: {
        'fade-up': 'fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fade-in 1.2s ease forwards',
        'scale-in': 'scale-in 1s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'slow-zoom': 'slow-zoom 20s ease-out forwards',
        'draw-line': 'draw-line 1.5s ease forwards',
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(1.08)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slow-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        'draw-line': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
