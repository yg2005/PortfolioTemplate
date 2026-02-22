/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        textMain: "#020617",
        textSecondary: "#64748B",
        accentPrimary: "#3B82F6",
        accentSecondary: "#6366F1"
      },
      fontFamily: {
        heading: ["Outfit", "sans-serif"],
        body: ["Outfit", "sans-serif"],
        data: ["Inter", "monospace"],
      }
    },
  },
  plugins: [],
}
