/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/[...not-found]/page.js/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/(home)/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/(dashboard)/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        xss: "320px",
        xs: "360px",
        sm: "375px",
        xxs: "390px",
        lsm: "414px",
        md: "768px",
        mdd: "991px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1366px",
        xll: "1440px",
        "2xl": "1536px",
        "3xl": "1680px",
        "3xll": "1739px",
        "4xl": "1920px",
        "6xl": "2500px",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
