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
        black: {
          DEFAULT: "#0a0a0a",
          light: "#111111",
          lighter: "#1a1a1a",
        },
        red: {
          DEFAULT: "#cc1a1a",
          dark: "#9e1313",
        },
        silver: {
          DEFAULT: "#c8c8c8",
          dark: "#8a8a8a",
        },
      },
      spacing: {
        "5%": "5%",
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "18px",
      },
      transitionDuration: {
        DEFAULT: "320ms",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      boxShadow: {
        "red-glow": "0 0 20px rgba(204, 26, 26, 0.18)",
        "red-md": "0 4px 20px rgba(204, 26, 26, 0.25)",
        "red-lg": "0 8px 28px rgba(204, 26, 26, 0.4)",
      },
      fontSize: {
        xs: ["0.72rem", { lineHeight: "1rem" }],
        sm: ["0.78rem", { lineHeight: "1.25rem" }],
        base: ["0.85rem", { lineHeight: "1.5rem" }],
        lg: ["0.9rem", { lineHeight: "1.6rem" }],
        xl: ["1rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.05rem", { lineHeight: "1.75rem" }],
        "3xl": ["1.25rem", { lineHeight: "1.5rem" }],
        "4xl": ["clamp(1.9rem, 3.5vw, 2.8rem)", { lineHeight: "1.15" }],
        "5xl": ["clamp(2.2rem, 4vw, 3.5rem)", { lineHeight: "1.15" }],
        "6xl": ["clamp(2.8rem, 6vw, 5.5rem)", { lineHeight: "1.15" }],
      },
    },
  },
  plugins: [],
};

export default config;
