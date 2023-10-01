/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat"],
      display: ["Teko", "sans-serif"],
      "badger-valley": ["Badger Valley", "sans-serif"],
      caghen: ["Caghen Demo", "sans-serif"],
      cangste: ["Cangste", "sans-serif"],
      "munich-sans": ["Munich Sans", "sans-serif"],
    },
  },
  fontSize: {
    sm: "0.8rem",
    base: "1rem",
    xl: "1.25rem",
    "2xl": "1.563rem",
    "3xl": "1.953rem",
    "4xl": "2.441rem",
    "5xl": "3.052rem",
    "8xl": "7rem",
  },
  extend: {
    aspectRatio: {
      "4/3": "4 / 3",
    },
  },
  plugins: [],
};
