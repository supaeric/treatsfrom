import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F5F0E6",
        panel: "#EDE5D6",
        kraft: "#C9A227",
        ink: "#17150F",
        muted: "#6B6355",
        post: "#C8102E",
        air: "#003DA5",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        stamp: ["var(--font-stamp)", "ui-monospace", "monospace"],
      },
      maxWidth: { shell: "76rem" },
    },
  },
  plugins: [],
} satisfies Config;
