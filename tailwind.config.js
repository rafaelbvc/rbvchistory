/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        blackAlpha: "RGB(0,0,0, 0.02)"
      }
    },
  },
  plugins: [],
}
