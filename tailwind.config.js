/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideRight:{
          '0%': {translateX:'0px'},
          '100%':{translateX:'200px'}
        }
      },
      animation: {
        fadein: "fadeIn .5s",
        slideRight: "slideRight 1.5s"
      },
      
    },
  },

  plugins: [   
    require('@tailwindcss/forms'), 
  ],
}

