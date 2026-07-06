import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nexora-systems-inc/planner-ui/dist/**/*.{js,mjs}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Jost", "Helvetica Neue", "sans-serif"],
      },
      colors: {
        stone: {
          DEFAULT: "#2C2B29",
          mid: "#4A4845",
          light: "#7A7774",
        },
        cream: {
          DEFAULT: "#F5F2EE",
          dark: "#EDE9E3",
        },
        accent: {
          DEFAULT: "#B8975A",
          dark: "#9A7D48",
          light: "#D4B87A",
        },
      },
      transitionDuration: {
        "400": "400ms",
      },
    },
  },
  plugins: [],
};

export default config;
