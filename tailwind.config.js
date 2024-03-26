/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#c5f82a',
        white: '#ffffff',
        grey: '#333333',
        darkGrey: '#1f1f1f',
        offBlack: '#141414',
      },
      fontSize: {
        paragraph: '14px',
      },
    },
    fontWeight: {
      normal: '400',
      medium: '600',
      semibold: '700',
    },
  },
  plugins: [],
}
