/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        100: "19rem",
        128: "32rem",
        130: "33rem",
        200: "55rem",
        772: "48rem",
        343: "22rem",
        480: "30rem",
        1150: "71rem",
        68: "5rem",
        360: "22.5rem",
        1024: "64rem",
      },
      width: {
        100: "19rem",
        128: "32rem",
        130: "33rem",
        200: "55rem",
        772: "48rem",
        343: "22rem",
        480: "30rem",
        1150: "71rem",
        68: "5rem",
        360: "22.5rem",
        1024: "64rem",
        640: "40rem",
      },
    },
  },
  plugins: [],
};
