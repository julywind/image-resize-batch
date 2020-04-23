module.exports = {
  "env": {
    "es6": true,
    "node": true
  },
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": 0,
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    semi: [2, 'never'],
    'no-extra-semi': 2,
    indent: [2, 2],
    'semi-spacing': [
      0,
      {
        before: true,
        after: true
      }
    ],
    'no-undef': 1,
    'arrow-parens': 0,
    'no-mixed-spaces-and-tabs': [2, 'smart-tabs'],
    'no-array-constructor': 2,
    'no-empty': 2,
    'no-eval': 1,
    'no-extra-boolean-cast': 2,
    'no-func-assign': 2,
    'eqeqeq': 2,
    'curly': [2, 'all'],
    "keyword-spacing": [2, {
      "overrides": {}
    }],
    'vars-on-top': 2,
    'wrap-iife': [2, 'inside'],
    'no-void': 2,
    'no-var': 0,
    'no-redeclare': 2,
    'no-alert': 2,
    'no-caller': 1,
    'no-catch-shadow': 2,
    'no-const-assign': 2,
    'no-dupe-keys': 2,
    'no-cond-assign': 1,
    'object-property-newline': 0,
    'object-curly-spacing': ["error", "always"],
    'comma-spacing': 2,
    beforeStatementContinuationChars: 'any',
    'no-unused-vars': 1
  }
};