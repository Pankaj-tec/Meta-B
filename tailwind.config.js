/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "primary": "#141624",
        "secondry": "#E8E8EA",
        "dark-gray": "696A75",
        "light-gray": "#A1A1AA",
        "light-blue": "#4B6BFB",
        "tertiary-color": "#F4F4F5",
        "light-black": "#3B3C4A"
      },
      fontFamily: {
        "Source-Serif": ["Source Serif 4", "serif;"],
        "inter": ["Inter", "sans-serif;"],
        "Work-Sans": ["Work Sans", "sans-serif;"],
        "jakarta": ["Plus Jakarta Sans", "sans-serif;"],

      },
    },
  },
  plugins: [],
}

