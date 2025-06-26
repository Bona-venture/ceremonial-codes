/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Theme-aware colors that reference CSS variables
        theme: {
          primary: 'var(--color-primary)',
          secondary: 'var(--color-secondary)',
          accent: 'var(--color-accent)',
          text: 'var(--color-text)',
          'text-inverse': 'var(--color-text-inverse)',
          background: 'var(--color-background)',
          'card-bg': 'var(--color-card-bg)',
          'button-text': 'var(--color-button-text)',
        },
        // Keep existing color definitions for non-themeable elements
        rose: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
      },
      fontFamily: {
        'dancing': ['"Dancing Script"', 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'fade-in-down': 'fadeInDown 0.8s ease-in-out',
        'pulse': 'pulse 1.5s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulse: {
          '0%': { boxShadow: '0 0 0 0 rgba(253, 253, 150, 0.7)' },
          '70%': { boxShadow: '0 0 0 10px rgba(253, 253, 150, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(253, 253, 150, 0)' },
        },
      },
      backgroundImage: {
        'theme-gradient': 'var(--color-background)',
      },
    },
  },
  plugins: [],
};