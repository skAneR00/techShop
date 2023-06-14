/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ubuntu': ['"Ubuntu"', 'sans - serif'],
      },
      colors: {
        'ui-dark': '#1A1F16',
        'ui-placeholder': '#1A1F1650',
        'ui-danger': '#E5252C',
        'ui-warning': '#E6D117',
        'ui-tertiary': '#60695C',
        'ui-light': '#BFD1E5',
        'ui-success': '#02D693',
        'ui-accent': '#12805D',
        'ui-primary': '#105E46',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}