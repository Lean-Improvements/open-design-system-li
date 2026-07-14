/**
 * Lean Improvements SaaS — Tailwind preset.
 *
 * The single source of truth for the Tailwind theme across every product.
 * Consume it from each app's tailwind config:
 *
 *   import preset from "@lean-improvements/design-system/tailwind-preset";
 *   export default {
 *     presets: [preset],
 *     content: [
 *       "./src/**\/*.{ts,tsx}",
 *       // so Tailwind sees classes used inside the package's components:
 *       "./node_modules/@lean-improvements/design-system/**\/*.{js,jsx}",
 *     ],
 *   };
 *
 * All color values resolve to the CSS custom properties shipped in styles.css —
 * import that once in your app entry so the variables exist at runtime.
 */
import tailwindAnimate from "tailwindcss-animate";

const grayRamp = {
  50: "var(--tw-gray-50)",
  100: "var(--tw-gray-100)",
  200: "var(--tw-gray-200)",
  300: "var(--tw-gray-300)",
  400: "var(--tw-gray-400)",
  500: "var(--tw-gray-500)",
  600: "var(--tw-gray-600)",
  700: "var(--tw-gray-700)",
  800: "var(--tw-gray-800)",
  900: "var(--tw-gray-900)",
  950: "var(--tw-gray-950)",
};

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        secondary: "var(--lp-primary)", // legacy alias (primary orange)
        "primary-black": "#0f172a",
        "secondary-black": "#0f172a",
        "app-bg": "var(--lp-bg)",
        "app-bg-soft": "var(--lp-bg-soft)",
        "app-surface": "var(--lp-surface)",
        "app-ink": "var(--lp-ink)",
        "app-body": "var(--lp-body)",
        "app-muted": "var(--lp-muted)",
        "app-line": "var(--lp-line)",
        "app-line-strong": "var(--lp-line-strong)",
        "app-primary": "var(--lp-primary)",
        "app-primary-active": "var(--lp-primary-active)",
        "app-primary-soft": "var(--lp-primary-soft)",
        // Traditional Tailwind grays remapped onto the warm neutral ramp
        gray: grayRamp,
        slate: grayRamp,
        zinc: grayRamp,
        neutral: grayRamp,
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"],
        mono: ["var(--font-mono)"],
      },
      boxShadow: {
        // Hairline-only depth — no elevation tiers
        app: "none",
        sm: "none",
        DEFAULT: "none",
        md: "none",
        lg: "none",
        xl: "none",
        "2xl": "none",
        inner: "none",
      },
      borderRadius: {
        none: "0px",
        xs: "4px",
        sm: "6px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "24px",
        "3xl": "32px",
        pill: "9999px",
        full: "9999px",
      },
    },
  },
  plugins: [tailwindAnimate],
};
