// @js-ignore
module.exports = {
  extends: ['plugin:react/recommended', 'react-app', 'plugin:prettier/recommended'],
  rules: {
    'react/prop-types': 'off',
    'react/jsx-indent': [2, 4, { checkAttributes: false }],
    'react/jsx-indent-props': [2, 4],
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',
    'no-multi-assign': 'off',
  },
  settings: {},
  plugins: ['import'],
};
