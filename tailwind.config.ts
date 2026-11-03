/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        prelegal: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e3e6e8',
          300: '#d0d5d8',
          400: '#aab1b5',
          500: '#787f87',
          600: '#50565a',
          700: '#3a3f44',
          800: '#272c31',
          900: '#14171a',
          950: '#000000',
        },
      },
    },
  },
  plugins: [],
}