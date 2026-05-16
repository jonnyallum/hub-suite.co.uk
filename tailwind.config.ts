import type { Config } from "tailwindcss";

const brandPreset = require("./brand/tailwind.preset.cjs");

const config: Config = {
  presets: [brandPreset],
  darkMode: ["class", "[data-theme='dark']"],
  content: [
    "./src/**/*.{ts,tsx}",
    "./brand/react/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: { content: "1280px" },
      animation: {
        "pulse-slow": "pulse-slow 6s ease-in-out infinite",
        "float":      "float 9s ease-in-out infinite",
        "spin-slow":  "spin 28s linear infinite",
        "shimmer":    "shimmer 2.6s linear infinite",
      },
      keyframes: {
        "pulse-slow": { "0%,100%": { opacity: "0.35" }, "50%": { opacity: "0.9" } },
        "float":      { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-14px)" } },
        "shimmer":    { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
      },
    },
  },
};

export default config;
