/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { light: "#d6c1a1", DEFAULT: "#b89a67", dark: "#7a6135" },
      },
      borderRadius: { xl: "14px", "2xl": "20px" },
      boxShadow: { soft: "0 8px 24px rgba(0,0,0,0.08)" },
    },
  },
  plugins: [],
};
