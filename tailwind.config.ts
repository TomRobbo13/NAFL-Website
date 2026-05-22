import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Brand palette carried over from the original site's CSS variables.
      // These are also available as CSS custom properties in globals.css.
      colors: {
        navy: "#15325f",
        "navy-deep": "#0e2647",
        blue: "#2469b2",
        "blue-bright": "#2c7cce",
        steel: "#4a7fb5",
        "light-blue": "#dbe7f3",
        mist: "#f3f7fb",
        grey: "#6b7884",
        ink: "#16212e",
        line: "#e2e9f1",
      },
      fontFamily: {
        display: ["var(--font-archivo)", "sans-serif"],
        body: ["var(--font-hanken)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
