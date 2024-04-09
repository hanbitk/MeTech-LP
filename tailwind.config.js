/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      offWhite: "#FAFAFA",
      black: "#000000",
      darkGreen: "#00573F",
      lightGreen: "#90B54C",
      gray: "#9D9D9D",
      darkGray: "#424242",
      ligthGray: "#E8E8E8",
      whiteGray: "#F4F4F4",
      red: "#FF0000",
    },
    extend: {
      backgroundImage: {
        hero: "url('./assets/hero/hero-bg.jpg')",
        grass: "url('./assets/section/grass.jpg')",
      },
    },
  },
  plugins: [],
};
