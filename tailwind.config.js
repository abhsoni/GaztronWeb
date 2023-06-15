/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    container: {
      center: true,
    },
    screens: {
      mobile: { max: "768px" },
      // => @media (min-width: 640px) { ... }

      tablet: "768px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1024px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
