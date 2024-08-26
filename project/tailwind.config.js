/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'barlow': ['Barlow', 'sans-serif'],
        'fraunces': ['Fraunces', 'sans-serif'],
      },
      colors: {

        "Alabaster": '#fefcf7',
        "Translucent-Alabaster": 'rgba(254, 252, 247, 0.8)',
        "Cool-Gray": '#83888F',
        "Dark-Slate": '#333D4B',
        "Apricot-Cream": '#FDD6BA',

        btn: {
          bg: '#0e8784',
          hover: '#66d2cf',
        }
      }
    },
  },
  plugins: [],
}