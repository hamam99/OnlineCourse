/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit-Regular'],
      },
      colors: {
        violet: '#6857E8',
        violet_2: '#F3F1FF',
        violet_3: '#6857E81C',
        green: '#0BAE1B',
        green_2: '#5AE8571C',
        gray_1: '#9F9F9F',
        black_1: '#00000075',
      },
    },
  },
  plugins: [],
}
