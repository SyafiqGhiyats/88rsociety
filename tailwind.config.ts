import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6C1A1A",
          hover: "#852020",
          light: "#9E2828",
          dark: "#4F1313",
        },
        "hyper-orange": {
          DEFAULT: "#FF5722",
          hover: "#F4511E",
        },
        cyan: {
          DEFAULT: "#00E5FF",
          glow: "#00E5FF",
        },
        spotify: "#1DB954",
        "purple-accent": "#A78BFA",
        "matte-black": "#07080A",
        "dark-bg": "#090B0F",
        "dark-card": "#12141A",
        "dark-card-hover": "#161922",
        "dark-surface": "#141720",
        "dark-subtle": "#0F1116",
        charcoal: "#0F1115",
        card: "#14171F",
        "card-elevated": "#1A1E27",
        "card-darker": "#0A0C10",
        "card-footer": "#060709",
      },
      boxShadow: {
        primary: "0 0 25px rgba(108, 26, 26, 0.45)",
        "primary-sm": "0 0 15px rgba(108, 26, 26, 0.35)",
        "primary-lg": "0 0 30px rgba(108, 26, 26, 0.55)",
        orange: "0 0 25px rgba(255, 87, 34, 0.35)",
      },
      dropShadow: {
        primary: "0 0 20px rgba(108, 26, 26, 0.45)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
