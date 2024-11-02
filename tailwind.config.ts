/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx,json}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx,json}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,json}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx,json}",
  ],
  theme: {
    extend: {
      keyframes: {
        square: {
          "0%": { transform: "translateY(10vh)" },
          "100%": { transform: "translateY(-145vh) rotate(600deg)" },
        },
      },
      animation: {
        square: "square 3s infinite",
      },
      fontFamily: {
        nunito: ["var(--font-nunito)"],
        customFont: ["var(--font-custom-font)"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "animate-delay": (value) => ({
            animationDelay: value,
          }),
        },
        { values: theme("transitionDelay") },
      );
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "animate-duration": (value) => ({
            animationDuration: value,
          }),
        },
        { values: theme("transitionDuration") },
      );
    }),
  ],
};
