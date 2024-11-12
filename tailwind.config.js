/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "navbar-color": "white",
        "navbar-text-color": "#6b7280", // Slight correction for the color code (removed an extra #)
        "navbar-hover-color": "#333",
        "navbar-active-color": "#333",
        "navbar-active-text-color": "#333",
        "navbar-active-hover-color": "#333",
        "navbar-active-hover-text-color": "#333",
        "main-color": "#3390ec", // Blue color from logo
        "home-color": "#f3f4f6",
        "home-bookscards-container-color": "#333",
        "logo-color": "#ff8e2b", // Orange color from logo
        "accent-color": "#fa8603", // You can use this as a secondary accent if needed
        "highlight-color": "#3390ec", // Blue color can also serve as a highlight accent
        "footer-color": "#333", // Dark color for footer sections
      },
    },
  },
  plugins: [],
};
