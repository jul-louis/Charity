/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-cyan": "#284646",
      },
      spacing: {
        128: "32rem",
        192: "32rem",
        256: "64rem",
      },
    },
  },
  plugins: [],
};
