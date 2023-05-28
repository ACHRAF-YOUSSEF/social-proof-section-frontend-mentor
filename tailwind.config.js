/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "600px",
      xl: "1440px",
    },
    extend: {
      colors: {},
    },
  },
  plugins: [],
};
