/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        sand: '#f4eee1',
        bark: '#2d2d2d',
        wood: '#c4b499',
        paleWood: '#d6cfc3',

        olive: '#3b4d3b',
        ivory: '#f4f1eb',
        moss: '#a9b388',
        darkMoss: '#5a6d5a',
      },
    },
  },
  plugins: [],
};
