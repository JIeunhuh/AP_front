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
        primary: {
          400: "#8a7cff",
          500: "#6a5cff",
          600: "#5148d6",
        },
        surface: {
          600: "#1b2250",
          700: "#141a3b",
          800: "#0f1430",
        },
      },
    },
  },
  plugins: [],
}
