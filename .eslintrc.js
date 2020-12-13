// @js-ignore
module.exports = {
  extends: ['plugin:react/recommended', 'react-app', 'plugin:prettier/recommended', 'plugin:tailwind/recommended'],
  rules: {
    'react/prop-types': 'off',
    // 'react/jsx-indent': [2, 'first', { checkAttributes: false }],
    'react/jsx-indent-props': [2, 'first'],
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',
    'no-multi-assign': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  settings: {},
  plugins: ['import'],
}
