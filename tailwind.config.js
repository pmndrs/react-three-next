module.exports = {
  // crash with next see https://github.com/tailwindlabs/tailwindcss/issues/4081
  // mode: 'jit',
  purge: ['./src/pages/**/*.js', './src/components/**/*.js'], // remove unused styles in production
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
