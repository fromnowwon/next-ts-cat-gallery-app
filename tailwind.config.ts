import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  fontFamily: {
    sans: ["Montserrat", "sans-serif"],
  },
  container: {
    padding: "0 1rem",
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FFC524",
          dark: "#D6C500",
        },
        secondary: {
          DEFAULT: "#1A3E8C",
          dark: "#1D4ED8",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
