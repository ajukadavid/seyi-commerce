// tailwind.config.js

import colors from "tailwindcss/colors";

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  colors: {
    ...colors,
    accentColor: {
      default: '#FF7B1E'
    }
  },
  plugins: [],
}
