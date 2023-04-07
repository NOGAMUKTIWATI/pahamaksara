/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#92641F",
        secondary: "#353131",
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        sunda: "'Sunda Prada'",
        bali: "'Noto Sans Balinese'",
      },
    },
  },
  plugins: [],
};
