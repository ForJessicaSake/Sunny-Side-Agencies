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
        DarkGreen: "#2c7466",        
        Heading:"#232f3b",
        Text:"#818195",
        White:"#fefffd",
        babyPink:"#fedad2",
        babyYellow:"#fef1bc",
      },
      height:{
        fruit:"30rem",
      },
      width:{
        fruit:"27rem",
        hero:"28rem",
      },
      fontFamily:{
        Headingfront:["Libre Baskerville", "serif"],
        textFont:["Work Sans", "serif"],
      },
    },
  },
  plugins: [],
}
