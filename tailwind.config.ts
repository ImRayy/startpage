import type { Config } from "tailwindcss";

const config: Config = {
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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "slide-in-right": {
          "0%": {
            transform: "translateX(200px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
      },
      animation: {},
      colors: {
        primary: "#1E2326",
        secondary: "#272e33",
        hover: "#414b50",
        crust: "#A7c080",
        color1: "#d3c6aa",
        color2: "#e67e80",
        color3: "#e69875",
        color4: "#dbbc7f",
        color5: "#a7c080",
        color6: "#83c092",
        color7: "#7fbbb3",
        color8: "#d699b6",
      },
      boxShadow: {
        custom:
          "1px 1px 0px 0px rgba(0, 0, 0, 0.1), 2px 2px 0px 0px rgba(0, 0, 0, 0.1), 3px 3px 0px 0px rgba(0, 0, 0, 0.1), 4px 4px 0px 0px rgba(0, 0, 0, 0.1), 5px 5px 0px 0px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
