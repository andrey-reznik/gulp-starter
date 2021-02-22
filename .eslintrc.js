module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'eslint:recommended'
  ],
  plugins: [
    'prettier'
  ],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  rules: {
    'no-console': 'off',
    'import/no-extraneous-dependencies': ['error', {devDependencies: true}]
  },
  settings: {
    react: {
      version: 'latest'
    }
  }
};
