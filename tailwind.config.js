/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
      transitionDuration: {
        2000: "2000ms",
      },
      animation: {
        "wiggle-01": "wiggle01 0.5s ease-in-out 1",
        "wiggle-02": "wiggle02 0.5s ease-in-out 1",
      },
      keyframes: {
        wiggle01: {
          "0%, 50%, 100%": { transform: "rotate(12deg)" },
          "25%, 75%": { transform: "rotate(-12deg)" },
        },
        wiggle02: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%, 75%": { transform: "rotate(6deg)" },
          "50%": { transform: "rotate(-6deg)" },
        },
      },
    },
  },
  plugins: [],
}
