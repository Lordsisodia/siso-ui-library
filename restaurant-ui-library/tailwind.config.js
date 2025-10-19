const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
    "./lib/**/*.{js,jsx,ts,tsx,mdx}",
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
    "./pages/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      maxWidth: {
        container: "1280px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
      },
      fontFamily: {
        sans: ["var(--font-noto)", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "shiny-text": "shiny-text 8s infinite",
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
        "border-beam": "border-beam var(--duration,5s) infinite linear",
        "shine-pulse": "shine-pulse var(--shine-pulse-duration,14s) infinite linear",
        "spin-slow": "spin 6s linear infinite",
        "icon-bounce": "icon-bounce 1.2s ease-out",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "shiny-text": {
          "0%, 90%, 100%": {
            "background-position": "calc(-100% - var(--shiny-width)) 0",
          },
          "30%, 60%": {
            "background-position": "calc(100% + var(--shiny-width)) 0",
          },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        "shine-pulse": {
          "0%": {
            "background-position": "0% 0%",
          },
          "50%": {
            "background-position": "100% 100%",
          },
          "100%": {
            "background-position": "0% 0%",
          },
        },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        "icon-bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "20%": { transform: "translateY(-0.3em)" },
          "40%": { transform: "translateY(0)" },
          "60%": { transform: "translateY(-0.1em)" },
          "80%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": {
      ...newVars,
      "--component-inactive-color": "var(--muted-foreground)",
      "--component-bg": "var(--card)",
      "--component-shadow": "var(--border)",
      "--component-active-bg": "var(--secondary)",
      "--component-line-inactive-color": "var(--border)",
      "--component-active-color-default": "var(--accent-foreground)",
      "--component-active-color": "var(--component-active-color-default)",
      "--component-line-color": "var(--component-active-color)",
    },
    ".dark": {
      "--component-inactive-color": "var(--muted-foreground)",
      "--component-bg": "var(--card)",
      "--component-shadow": "var(--border)",
      "--component-active-bg": "var(--secondary)",
      "--component-line-inactive-color": "var(--muted-foreground)",
      "--component-active-color-default": "var(--accent-foreground)",
      "--component-active-color": "var(--component-active-color-default)",
      "--component-line-color": "var(--component-active-color)",
    },
  });
}
