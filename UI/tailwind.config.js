/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      title:["Rochester", "cursive"],
      text:["Montaga", "serif"]
    }
  },
  plugins: [],
}