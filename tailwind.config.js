/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-card-outline-black',
    'bg-card-outline-white',
    'bg-card-outline-light-grey',
    'bg-card-outline-dark-grey',
    'bg-card-outline-red',
    'bg-card-outline-yellow',
    'bg-card-outline-blue',
    'bg-card-outline-orchid',
    'bg-card-outline-orange',
    'bg-card-outline-purple',
    'bg-card-dark-grey',
    'bg-pool-table',
    'bg-poker-table',
    'bg-casino-night',
    'bg-luxury-black',
    'bg-luxury-poker',
    'bg-dark-felt',
    'bg-slate-800',
    'bg-blue-800',
    'bg-black',
    'bg-red-800',
    'bg-green-800',
  ],
  theme: {
    extend: {
      fontFamily: {
        'cards': '"DM Sans", sans-serif',
        'sans': '"Inter", sans-serif',
      },
      colors: {
        'main-background': "#141414", //"#0A0A0A",

        // card colors
        'card-dark-grey': "rgb(30 41 59)",
        'card-black': "rgb(2 6 23)",
        'card-red': "rgb(153 27 27)",
        'card-white': "#FFFD82",
        'card-blue': "#284FB8",
        'card-green': "rgb(22 101 52)",
        'card-orange': "rgb(234 88 12)",
        'card-purple': "rgb(91 33 182)",
        'card-teal': "rgb(13 148 136)",

        //card outlines
        'card-outline-black': "#000",
        'card-outline-white': "#F5F5F5",
        'card-outline-light-grey': "#C2C2C2",
        'card-outline-dark-grey': "#707070",
        'card-outline-red': "#E00000",
        'card-outline-yellow': "#FFFF1F",
        'card-outline-blue': "#3A33FF",
        'card-outline-orange': "#FF6F00",
        'card-outline-purple': "#AD21C0",
        'card-outline-orchid': "#D562E4",
      },
      backgroundImage: {
        'background-graphic': "url(/background-graphic.svg)",
        'pool-table': 'radial-gradient(ellipse at center, #30D96E, #348338, #123F15)',
        'poker-table': 'radial-gradient(ellipse at center, #F75050, #EA0B0B, #750606)',
        'casino-night': 'radial-gradient(ellipse at center, #64748b, #1e293b, #0f172a)',
        'luxury-black': 'radial-gradient(ellipse at center, #292929, #141414, #000000)',
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