/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'dark-blue': '#00152C',
      'orange': '#F27D42',
      'light-blue': '#96FFFF',
      'darker-blue': '#000E1E',
      'dark-green': '#09474a',
      slate: colors.slate,
    },
    fontFamily: {
      monaco: ['Monaco', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
    extend: {
      margin: {
        '30rem': '30rem',
      },
      flexBasis: {
        '1/8': '12.5%',
      }
    },
  },
  plugins: [],
}

