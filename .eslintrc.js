module.exports = {
  env: {
    node: true,
    commonjs: true,
    es6: true,
    browser: true,
    jest: true,
  },
  parser: 'typescript-eslint-parser',
  parserOptions: {
    jsx: true,
    useJSXTextNode: true,
  },
  plugins: ['typescript'],
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
  settings: {
    node: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
  },
}
