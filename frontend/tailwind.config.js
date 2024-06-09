/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        slab: ['Roboto Slab', 'serif'],
        cardi:['Cardo', 'serif']
      },
      colors: {
        'top-blue': '#00abe4',
        'white1': '#f5faff',
        'blue1': '#D5E4F5',
      }
    },
  },
  plugins: [],
}

