module.exports = {
  extends: ['next', 'prettier', 'next/core-web-vitals'],
  plugins: ['unicorn'],
  rules: {
    'no-console': 'error',
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
        caughtErrors: 'none',
        ignoreRestSiblings: true,
        vars: 'all'
      }
    ],
    'prefer-const': 'error',
    'react-hooks/exhaustive-deps': 'error',
    "@next/next/no-img-element": "off",
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase'
      }
    ]
  }
};
