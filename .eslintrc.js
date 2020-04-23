module.exports = {
  root: true,
  extends: 'airbnb',
  rules: {
    semi: ['error', 'never'],
    'implicit-arrow-linebreak': 0,
    'object-curly-newline': 0,
    'symbol-description': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'no-plusplus': 0,
    'operator-linebreak': [2, 'after'],
    'class-methods-use-this': 0,
    'consistent-return': 0,
    'no-console': 0, // temporary to make eslint usable
    'max-len': [2, { code: 300 }],
    'global-require': 0,
    'camelcase': 1,
    'no-param-reassign': 1,
    'no-await-in-loop': 0,
    'no-continue': 0,
    'no-restricted-syntax': 0,
  },
  globals: {
    expect: 'readonly',
    jest: 'readonly',
    describe: 'readonly',
    it: 'readonly',
  }
}
