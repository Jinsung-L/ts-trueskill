module.exports = {
  root: true,
  parserOptions: {
    project: 'tsconfig.eslint.json',
  },
  env: {
    node: true,
    jest: true,
  },
  extends: ['xo-space/esnext', 'xo-typescript', 'prettier/@typescript-eslint'],
  rules: {
    'object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/indent': ['error', 2, { SwitchCase: 1 }],
    '@typescript-eslint/explicit-function-return-type': 0,
    'capitalized-comments': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'comma-dangle': ['error', 'always-multiline'],
    'max-params': 0,
  },
};
