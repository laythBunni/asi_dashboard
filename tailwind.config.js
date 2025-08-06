/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",     // pages & components
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-sans)",         // Inter (set in layout.tsx)
        mono: "var(--font-mono)",         // Roboto Mono
      },
    },
  },
  plugins: [],
};