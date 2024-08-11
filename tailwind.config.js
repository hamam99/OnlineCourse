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
      },
    },
  },
  plugins: [],
}
