module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'palette-aqua': '#87A7B3',
        'custom-orange': '#ff9f1c',
        'custom-teal': '#d0f4de',
        'custom-yellow': '#fff3b0',
        'custom-purple': '#8a2be2',
        'palette-brown': '#D8B384',
        'palette-purple': '#C490E4',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
