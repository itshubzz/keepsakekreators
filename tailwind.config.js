/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#0a0a0a",
          white: "#ffffff",
          gray: "#1f1f1f",
          lightgray: "#e5e7eb"
        }
      }
    },
  },
  plugins: [],
};

