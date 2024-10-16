/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./Screens/**/*.{js,jsx,ts,tsx}",
    "./Components/**/*.{js,jsx,ts,tsx}",
    "./**/*.{js,jsx,ts,tsx}", // This will scan all folders and subfolders
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
