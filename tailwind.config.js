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
        customGray:['#b3b3b3']
      },
      boxShadow:{
        custom:['4px 4px 15px rgba(0, 0, 0, 0.2)']
      },
    },
  },
  plugins: [],
}