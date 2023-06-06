const {transparent} = require("tailwindcss/colors");
const constants = {
  black: '#000000',
  green: '#00FF00',
  gray: '#ece6e6',
  orange: '#57a53c',
  white: '#fbfbfb',
  header: '#1c1a1a',
  icon: '#57a53c',
  border: '#22772f',
  main: '#1c1b1b',
  fill: '#789b79'
}
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  important: '#__next',
  theme: {
    colors: {
      transparent: transparent,
      ...constants
    },
    extend: {}
  },
  corePlugins: {
    preflight: false
  },
  plugins: []
}

