/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
   /**    fontFamily: {
        sans: ["Poppins", "sans-serif"],
        cursive: ["Pacifico", "Sriracha", "cursive"],
        cursive2: ["Sriracha", "cursive"],
      }, */
      colors: {
        primary: "#8c6e54",
        secondary: "#3e3e3e",
        brandDark: "#efe6dd",
        dark: "#1e1e1e",
        light: "#f5f5f5",
        
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
      animation: {
        "spin-fast": "spin 5s linear infinite",
      },
    },
  },
  plugins: [],
};
