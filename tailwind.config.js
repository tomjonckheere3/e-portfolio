module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight: {
        '0': '0.1em'
      },
      colors: {
        'dark-line': "#121212"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}