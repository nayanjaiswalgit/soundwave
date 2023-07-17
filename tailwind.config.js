/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./app.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        '1000': '1000ms',
      }
    },
  },
  plugins: [],
}