module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    debugScreens: {
      position: ['bottom', 'right'],
      style: {
        backgroundColor: 'white',
        color: 'black',
      },
      prefix: 'screen: ',
    },
    container: {
      center: true,
      padding: '2rem',
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
