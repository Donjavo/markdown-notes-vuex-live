// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    minHeight: {
      // eslint-disable-next-line quote-props
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      // eslint-disable-next-line quote-props
      'full': '100%'
    }
  },
  variants: {},
  plugins: []
}
