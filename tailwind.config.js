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
        'main-background': "rgb(30 41 59)",

        // card colors
        'card-dark-gray': "rgb(30 41 59)",
        'card-black': "rgb(2 6 23)",
        'card-red': "rgb(153 27 27)",
        'card-white': "#FFFD82",
      },
      backgroundImage: {
        'background-graphic': "url(/background-graphic.svg)",
        'gradient-green': "radial-gradient(ellipse at center, #38b2ac, #2f855a, #276749)",
        'gradient-red': "radial-gradient(ellipse at center, #fca5a5, #dc2626, #7f1d1d)",
        'pool-table': 'radial-gradient(ellipse at center, #4ade80, #388e3c, #1b5e20)',
        'poker-table': 'radial-gradient(ellipse at center, #f87171, #dc2626, #7f1d1d)',
        'casino-night': 'radial-gradient(ellipse at center, #64748b, #1e293b, #0f172a)',
        'green-gold': 'radial-gradient(ellipse at center, #ffd700, #3f6212, #1b5e20)',
        'luxury-poker': 'radial-gradient(ellipse at center, #a71d2a, #721c24, #4b1c1c)',
        'dark-felt': 'radial-gradient(ellipse at center, #4a5568, #2d3748, #1a202c)',

      },
      screens: {
        'xs': "500px",
      },
    },
  },
  plugins: [],
}