/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      color: {
        "tuk-color": "#008080",
        "light-white": "rgba(255, 255, 255,0.18)",
      }
    },
  },
  plugins: [],
}