/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#16C172",
        secondary: "#1b262c",
        white : "#ffffff",
        black : "#000000",
        gray : "#f2f2f2",
        lightGray : "#e0e0e0",
      }
    },
  },
  plugins: [],
}