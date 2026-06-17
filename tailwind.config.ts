import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1B3A6B",
          "blue-dark": "#152d55",
          "blue-mid": "#1e4080",
          green: "#2E8B57",
          "green-light": "#3aa067",
          "green-pale": "#e8f5ee",
          orange: "#E07820",
          purple: "#7B4F9E",
          teal: "#1B8A8F",
          red: "#D94F4F",
          yellow: "#F5A623",
        },
      },
      fontFamily: {
        display: ["Merriweather", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 2px 12px rgba(0,0,0,0.08)",
        "card-hover": "0 8px 24px rgba(0,0,0,0.12)",
      },
    },
  },
};

export default config;
