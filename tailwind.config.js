/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cards': '"DM Sans", sans-serif',
        'sans': '"DM Sans", sans-serif',
      },
      colors: {
        'main-background': "#010514",
        'inactive': "#CA9F91",
        'active': "#F4EBE8"
      },
      backgroundImage: {
        'background-graphic': "url(/background-graphic.svg)",
        'pool-table': 'radial-gradient(ellipse at center, #1cc85b, #348338, #123F15)',
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