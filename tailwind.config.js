/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(221deg, #CE7F35 -21.16%, #D45F32 77.54%)'
      },
      colors: {
        'tone': '#212122',
        'light-gray-opacity': 'rgba(217, 217, 217, 0.03)',
        'custom-gray': 'rgba(217, 217, 217, 0.07)',
      }
    },
  },
  plugins: [],
}
