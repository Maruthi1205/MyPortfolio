/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#F5EEDD',
        secondary: '#7AE2CF',
        accent: {
          DEFAULT: '#077A7D',
          light: '#7AE2CF',
          dark: '#06202B',
        },
        text: {
          primary: 'rgb(var(--color-text-primary))',
          secondary: 'rgb(var(--color-text-secondary))',
          tertiary: 'rgb(var(--color-text-tertiary))',
          muted: 'rgb(var(--color-text-muted))',
          heading: 'rgb(var(--color-heading))',
          body: 'rgb(var(--color-text-primary))',
          light: '#FFFFFF',
        },
        link: {
          DEFAULT: 'rgb(var(--color-link))',
          hover: 'rgb(var(--color-link-hover))',
        },
        background: {
          light: '#F5EEDD',
          dark: '#06202B',
        },
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
};