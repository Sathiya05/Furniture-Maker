/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        wood: '#A66E38',
        studio: '#1A1A1A',
        sand: '#FDF8F4',
        purewhite: '#FFFFFF',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}

