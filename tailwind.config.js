/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-bg, #FFFFFF)",
        textMain: "var(--color-text-main, #020617)",
        textSecondary: "var(--color-text-secondary, #64748B)",
        accentPrimary: "var(--color-accent-primary, #3B82F6)",
        accentSecondary: "var(--color-accent-secondary, #6366F1)"
      },
      fontFamily: {
        heading: ["Outfit", "sans-serif"],
        body: ["Outfit", "sans-serif"],
        data: ["Space Grotesk", "Inter", "monospace"],
      }
    },
  },
  plugins: [],
}
