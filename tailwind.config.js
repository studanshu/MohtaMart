/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'teak': {
          DEFAULT: '#6B4423',
          light: '#8B5E3C',
          dark: '#523319'
        },
        'biscuit': {
          DEFAULT: '#FFE4C4',
          light: '#FFF0DC',
          dark: '#F5D4A7'
        }
      }
    },
  },
  plugins: [],
};