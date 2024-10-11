import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary:'var(--color-tertiary)',
        fourth:'var(--color-fourth)'
      },
      screens: {
        xs: '360px',
        xlbig: '1450px',
        xlmax: '1700px',
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
export default config;
