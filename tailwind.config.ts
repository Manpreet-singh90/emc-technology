import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {},
    extend: {
      boxShadow: {},
      fontSize: {
        extraSmall: "11px", // 11px
        xxl: "22px",
      },
      backgroundImage: {},
      colors: {
        "premium-dark-black": "#000000",
      },
    },
  },
  plugins: [],
};
export default config;
