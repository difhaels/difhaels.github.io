/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#5A96E3",
        dark: "#16213E",
        dark2 : "#0F3460",
        dark3: "#533483",
        darkPrimary : "#E94560",
        darkHover : "#653a5c"
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
