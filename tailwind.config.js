/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cards': "Hubot Sans",
        'sans': "Inter",
      },
      colors: {
        'card-background': "#131217",
        'background': "#0D676D",
        'background-serious': "#ff0000",
      },
      backgroundImage: {
        'background-graphic': "url(/background-graphic.svg)",
        'gradient': "bg-gradient-to-t from-green-900 to-green-600",
      },
      screens: {
        'xs': "550px",
      },
    },
  },
  plugins: [],
}