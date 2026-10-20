/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        brand: "#FF6719",
        paper: "#FAF8F5",
        ink: "#202020",
      },
    },
  },
  plugins: [],
};
