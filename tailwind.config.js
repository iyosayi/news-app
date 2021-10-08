const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "325px",
      "2xs": "425px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        header: "#1a014e",
        article: {
          authors: "#706392",
        },
      },
      animation: {
        like: "like 0.3s ease-in-out",
        unlike: "unlike 0.3s ease-in-out",
      },
      keyframes: {
        like: {
          "0%": { transform: "scale(1)", fill: "#706392", fillOpacity: "0" },
          "50%": {
            transform: "scale(1.5)",
            fill: "#706392",
            fillOpacity: "0.5",
          },
          "100%": { transform: "scale(1)", fill: "#706392", fillOpacity: "1" },
        },
        unlike: {
          "0%": { transform: "scale(1)", fill: "#706392", fillOpacity: "1" },
          "50%": {
            transform: "scale(0.5)",
            fill: "#706392",
            fillOpacity: "0.5",
          },
          "100%": { transform: "scale(1)", fill: "#706392", fillOpacity: "0" },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
