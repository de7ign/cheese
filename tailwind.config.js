/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#684eff',
        'accent': '#ff6dff'
      },
    },
  },
  plugins: [],
}
