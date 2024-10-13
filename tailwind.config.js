/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', 'node_modules/preline/dist/*.js',],

  theme: {
    extend: {
      aria: {
        current: "current='page'",
      },

      container: {
        center: true,
        padding: "1rem",
      },
    },

    colors: {
      primary: "#151E3F",
      white: "#ffffff",
      black: "#000000",
      gray: {
        100: "#F6F6F6",
        DEFAULT: "#818799",
      },
      blue: {
        100: "#CCE5FF",
        DEFAULT: "#007BFF"
      },
      orange: {
        100: "#FFE0CC",
        DEFAULT: "#FF6600",
      },
      green: {
        100: "#D4EDDA",
        DEFAULT: "#28A745"
      },
    },
  },

  plugins: [require("preline/plugin")],
};
