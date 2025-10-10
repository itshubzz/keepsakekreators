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
          black: "#1f2937",
          white: "#ffffff",
          gray: "#6b7280",
          lightgray: "#9ca3af"
        }
      }
    },
  },
  plugins: [],
};

