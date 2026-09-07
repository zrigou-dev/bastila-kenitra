import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FDFBF6",
          100: "#F9F3E8",
          200: "#F1E7D5",
          300: "#E4D5BC",
        },
        plum: {
          950: "#140A1D",
          900: "#1E1029",
          800: "#2A1739",
          700: "#3B2350",
          600: "#513169",
        },
        gold: {
          200: "#F6E6BE",
          300: "#EED9A2",
          400: "#E0C075",
          500: "#C9A24A",
          600: "#A87F26",
          700: "#8A6618",
        },
        ink: "#241A16",
        muted: "#6B584C",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        latin: ["var(--font-body-latin)", "system-ui", "sans-serif"],
        arabic: ["var(--font-body-ar)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(36,26,22,0.04), 0 12px 32px -12px rgba(36,26,22,0.18)",
        lift: "0 2px 4px rgba(36,26,22,0.05), 0 24px 48px -16px rgba(36,26,22,0.28)",
        gold: "0 10px 30px -10px rgba(168,127,38,0.55)",
        inset: "inset 0 1px 0 rgba(255,255,255,0.06)",
      },
      maxWidth: {
        content: "76rem",
      },
      keyframes: {
        rise: {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "none" },
        },
        shimmer: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(220%)" },
        },
      },
      animation: {
        rise: "rise .7s cubic-bezier(.2,.7,.3,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
