const path = require('path')

const cwd = process.cwd()

module.exports = {
  parser: 'vue-eslint-parser',
  env: {
    'vue/setup-compiler-macros': true,
    browser: true,
    es2021: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    project: './tsconfig.json',
    extraFileExtensions: ['.vue'],
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended', // Make sure "prettier" is the last element in this list.
  ],
  plugins: ['@typescript-eslint', 'vue', 'prettier'],
  settings: {
    'import/resolver': {
      alias: [['@', path.join(cwd, './src')]],
    },
  },
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error',
  },
}
