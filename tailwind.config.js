/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#FFA202',
          dark: '#e08e00',
          light: '#FFB733',
        },
        black: {
          DEFAULT: '#1E1D1D',
        },
        grey: {
          light: '#F5F5F5',
          mid: '#E8E8E8',
          text: '#6B6B6B',
        },
      },
      fontFamily: {
        sans: ['"Space Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}

