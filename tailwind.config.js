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
        'xs': "550px",
      },
    },
  },
  plugins: [],
}