/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Enhanced palette based on Aerola Juice logo
        'aerola': {
          'cream': '#F5F1EB',
          'light-cream': '#FAF7F2',
          'beige': '#E8DDD4',
          'light-beige': '#EDE4DB',
          'light-brown': '#D4C4B0',
          'brown': '#B8A082',
          'medium-brown': '#A08B6F',
          'dark-brown': '#8B6F47',
          'darker-brown': '#6D5539',
          'yellow': '#F4D03F',
          'light-yellow': '#F7DC6F',
          'gold': '#E1B000',
          'light-gold': '#F1C40F',
          'dark-gold': '#B7950B',
          'white': '#FFFFFF',
          'soft-white': '#FEFEFE',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}