/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {

      fontSize: {
        "24": "1.5rem",
        "28": "1.75rem",
        "32": "2rem",
        "48": "3rem",
        "72": "4.5rem",
      },
      lineHeight: {
        "28": "1.75rem",
        "32": "2rem",
        "48": "3rem",
        "72": "4.5rem",
      },


      fontWeight: {
        black: '900',
      },

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
        "Charcoal-Blue": '#2c343e',

        btn: {
          bg: '#0e8784',
          hover: '#66d2cf',
        }
      }
    },
  },
  plugins: [],
}