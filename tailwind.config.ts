import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors')

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: "#007BFF",
        secondary: "#F68B1F",
        tertiary: "#007f5f",
        success: "#D4AF37",
      },
    },
  },
  plugins: [require("tailgrids/plugin")],
};
export default config;
