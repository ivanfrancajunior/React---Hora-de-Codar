import plugin from "tailwindcss";
const animationDelayPlugin = require("./src/utils/plugins/animationDelay");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wavey: {
          "0%, 100%": {
            transform: "scaleY(0.5)",
          },
          "50%": {
            transform: "scaleY(1.5)",
          },
        },
      },
      animation: {
        wavey: "wavey 1s linear infinite",
      },
    },
  },
  plugins: [animationDelayPlugin, plugin],
};
