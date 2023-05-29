/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "800px",
      xl: "1440px",
    },
    extend: {
      zIndex: {
        1: "1",
      },
      colors: {
        "blue-b1": "hsl(228, 45%, 44%)",
        "Very-Dark-Magenta": "hsl(300, 43%, 22%)",
        "Soft-Pink": "hsl(333, 80%, 67%)",
        "Dark-Grayish-Magenta": "hsl(303, 10%, 53%)",
        "Light-Grayish-Magenta": "hsl(300, 24%, 96%)",
        White: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
