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
        customGray:['#b3b3b3'],
        customgreen:["#00FF66"]
      },
      boxShadow:{
        custom:['4px 4px 15px rgba(0, 0, 0, 0.2)'],
        Customnew: ['0px 1px 13px 0px #0000000D'],
       
      },
       dropShadow:{
        custom12:'0px 0px 100px #ffffff57 ',
       },
       outline:{
        customoutline:['1px solid black'],
       }
    },
  },
  plugins: [],
}