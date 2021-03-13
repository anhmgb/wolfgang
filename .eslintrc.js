module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    '@nuxtjs',
  ],
  rules: {
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'no-console': 'error',
    'no-debugger': 'error',
    'no-unused-expressions': 'off',
    'comma-dangle': ['error', 'only-multiline'],
    'max-len': ['error', { code: 120, ignoreComments: true }],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always'
    }],
    semi: ['error', 'always'],
    curly: [2, 'multi-or-nest'],
  },
};
