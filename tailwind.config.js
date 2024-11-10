/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "navbar-color": "rgba(251, 250, 247, 1)",
        "main-color": "rgb(51, 144, 236)",
      },
    },
  },
  plugins: [],
};
