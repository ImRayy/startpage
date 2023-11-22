import type { Config } from "tailwindcss";
import { EverForest } from "./config/colors";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: EverForest,
      boxShadow: {
        button: "0 4px rgba(39, 46, 51, 0.5 ), 0 5px 10px rgb(0 0 0 / 20%)",
      },
    },
  },
  plugins: [],
};
export default config;
