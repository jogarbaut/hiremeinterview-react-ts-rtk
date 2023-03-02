/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "primary": "#FFFFFF",
        "secondary": "#B3B3B3",
        "c-dark-100": "#2a2a2a",
        "c-dark-300": "#181818",
        "c-dark-500": "#0d0d0d",
        "c-red-100": "#f37961",
        "c-red-300": "#ed4e2e",
        "c-red-500": "#d82f0e",
        "c-green-100": "#34df90",
        "c-green-300": "#1db970",
        "c-green-500": "#178e58",
        "c-yellow-100": "#fac661",
        "c-yellow-300": "#f2af2d",
        "c-yellow-500": "#e59907",
        "c-blue-100": "#33a9ff",
        "c-blue-300": "#0290f6",
        "c-blue-500": "#0171c3",
      }
    },
  },
  plugins: [],
}