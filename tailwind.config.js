/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans'],
      },
      colors: {
        customPurple: '#7F56D9',
        badge: '#6941C6'
      }
    },
  },
  plugins: [],
}

