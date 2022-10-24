/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./public/index.html",
  "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#12191F',
        'secondary': '#EFF3FD',
        'highlight': '#37D0F1',
        'accent': '#DC7650',
      }
    },
  },
  plugins: [],
}
