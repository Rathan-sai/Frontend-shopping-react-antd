/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#AD8B73",
        secondary: "#ebdcc7",
        tertiary: "#E3CAA5",
        quaternary: "#FFFBE9",
      },
      height: {
        "screen-190px": "calc(100vh - 190px)",
        "screen-120px": "calc(100vh - 120px)",
      },
      minHeight: {
        "screen-60px": "calc(100vh - 59px)",
        "screen-120px": "calc(100vh - 102px)",
      },
      backgroundImage: {
        "main-gradient":
          "linear-gradient(to right, var(--user-secondary), var(--user-primary))",
        "user-button-gradient":
          "linear-gradient(to right, var(--user-button-primary), var(--user-button-secondary))",
        "custom-gradient":
          "linear-gradient(90deg, rgba(224,217,206,1) 0%, rgba(192,171,146,1) 68%, rgba(197,179,162,1) 100%)",
      },
      boxShadow: {
        custom: "0px 2px 2px 0px rgba(0, 0, 0, 0.25)", // Custom shadow
      },
      fontFamily: {
        butler: ["Butler", "sans-serif"],
      },
    },
  },
  plugins: [],
  important: true,
};
