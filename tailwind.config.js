/** @type {import('tailwindcss').Config} */
// Design tokens are declared in app/globals.css via @theme (Tailwind v4).
// This file only supplies the content-scan paths.
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};
