/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      "times": ["Times New Roman", "serif"],
      "times-light":["Times New Roman Light", "serif"],
    },
    extend: {},
  },
  plugins: [],
}