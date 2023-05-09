/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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