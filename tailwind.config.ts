import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        purple: "var(--primary-purple)",
        yellow: "var(--highlight-yellow)",
        grey: "var(--footer-grey)",
        "shaded-yellow": "var(--shaded-yellow)",
        "shaded-shaded-yellow": "var(--shaded-shaded-yellow)",
        "dark-red": "var(--deep-red)",
        "ct-black": "#000000",
        "ct-grey": "#161616",
        "ct-contrast-grey": "#212121",
        "ct-light-grey": "#262626",
        "ct-orange": "#eeba2c",
      },
    },
  },
  plugins: [],
} satisfies Config;
