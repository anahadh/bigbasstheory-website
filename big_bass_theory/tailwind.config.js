/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#C8A77E",
        "secondary": "#bae59d",
        "accent": "#F6A52D",
        "text": "#000000",
        "background": "#FFFFFF"
      },
      fontFamily: {
        info: ['Lexend', 'sans-serif'],
        title: ['Josefin Sans', 'sans-serif']
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
}