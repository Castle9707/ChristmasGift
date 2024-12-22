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
      rotate: {
        30: "30deg",
      },
      transitionDuration: {
        1500: "1500ms",
        2000: "2000ms",
        5000: "5000ms",
        10000: "10000ms",
      },
      transitionDelay: {
        1500: "1500ms",
        2000: "2000ms",
      },
      animation: {
        "wiggle-01": "wiggle01 0.5s ease-in-out 1",
        "wiggle-02": "wiggle02 0.5s ease-in-out 1",
        "wiggle-03": "wiggle03 0.8s linear 1",
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
        wiggle03: {
          "0%": { transform: "rotate(-30deg)" },
          "20%": { transform: "rotate(-18deg)" },
          "40%": { transform: "rotate(-48deg)" },
          "60%": { transform: "rotate(-24deg)" },
          "80%": { transform: "rotate(-36deg)" },
          "100%": { transform: "rotate(-30deg)" },
        },
      },
    },
  },
  plugins: [],
}
