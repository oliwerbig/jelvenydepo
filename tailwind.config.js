const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-comfortaa)', 'var(--font-inter)', ...defaultTheme.fontFamily.sans],
        inter: ['var(--font-inter)'],
        comfortaa: ['var(--font-comfortaa)'],
      },
    },
  },
  plugins: [],
};
