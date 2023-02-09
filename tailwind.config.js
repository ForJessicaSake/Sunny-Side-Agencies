/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
   theme: {
    extend: {
      colors:{
        Blue:"#3ebeff",
        Yellow:"#ffd303",
        Peach:"#fd7564",
        Green:"#7dc8b8",        
        Heading:"#232f3b",
        Text:"#818195",
      },
      height:{
        fruit:"30rem",
      },
      width:{
        fruit:"27rem",
        hero:"28rem",
      },
    },
  },
  plugins: [],
}
