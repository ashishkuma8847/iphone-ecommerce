/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/swiper/*/.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily:{
        customfont:['"Inter"', 'serif'],
        customfont12:['"Poppins"', 'serif']
      },
      colors:{
        CustomRed:['#DB4444'],
      }
    },
  },
  plugins: [],
}