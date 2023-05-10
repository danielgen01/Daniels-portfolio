/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // oder 'media', wenn Sie möchten, dass es auf den OS-Einstellungen basiert
  theme: {
    extend: {
      colors:{
        "dark-bg":"#1F1F1F",
        "dark-gray":"#505050",
        "bright-gray":"#F8F9FC",
        "medium-blue":"#182033"
      }
    },
  },
  plugins: [],
}
