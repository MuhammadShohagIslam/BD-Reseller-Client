/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'max': '767px'},
      'md': {'min': '768px', 'max': '991px'},
      'lg': {'min': '992px', 'max': '1200px'},
  },
    extend: {

    },
  },
  daisyui: {
    themes: [
      {
        sellerTheme: {
          primary: "#000000",
          secondary: "#F2F2F2",
          accent: "#FFFFFF",
        },
      }
    ],
  },
  plugins: [require("daisyui")]
}