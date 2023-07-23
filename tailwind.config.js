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
        default: "#EFF4FA",
        primary: "#2194DE",
        secondary: "#DE6B21",
        disabled: "#EBEBE4",
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        bold: 700,
      }
    },
  },
  plugins: [],
};
