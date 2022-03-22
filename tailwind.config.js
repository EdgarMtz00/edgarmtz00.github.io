module.exports = {
  purge: ['./src/**/*.{js,  jsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#f8f8f8',
        secondary: '#282a36',
        neutral: '#44475a'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
