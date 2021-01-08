// @js-ignore
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'react-app',
    'prettier/react',
    'plugin:tailwind/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    'react/prop-types': 'off',
    'react/jsx-indent-props': [2, 'first'],
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',
    'no-multi-assign': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  settings: {},
  plugins: ['import'],
}
