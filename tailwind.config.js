/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        customfont:['"Inter"', 'serif'],
        customfont12:['"Poppins"', 'serif']
      }
    },
  },
  plugins: [],
}