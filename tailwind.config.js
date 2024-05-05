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
        'back-color-navbar': "#EEEDED",
        'background-color':"#F5F5F5",
        'blue-color': "#124076",
        'section-backg':"#7F9F80"
      }
    },
  },
  plugins: [],
};
