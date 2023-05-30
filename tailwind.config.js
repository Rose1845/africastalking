/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/**/*.{html,js}"],
  content:["./Src/**/*.{html,js,css}"],
  theme: {
    extend: {
      colors:{
        darkGrayishBlue:'hsl(227,12%,61%)',
        veryDarkBlue:'hsl(233,12%,13%)',
      
      }
    },
  },
  plugins: [],
}

