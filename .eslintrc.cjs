module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/vue3-essential',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'no-tabs': 0,
    indent: 2,
    'vue/multi-word-component-names': 0,
    'vue/comment-directive': 0,
    'import/no-extraneous-dependencies': 0,
    'no-cond-assign': 0,
    'no-underscore-dangl0e': 0,
  },
};
