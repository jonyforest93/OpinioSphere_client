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
        badge: '#6941C6',
        backgroundDark: '#181E27',
        textDark: '#E4E7EC',
        textDarkSec: '#B395F6',
        borderDark: '#3D4959',
        borderLight: '#D0D5DD',
      },
      darkTheme: {
        background: '#181E27',
        text: '#E4E7EC',
      },
    },
  },
  plugins: [],
}

