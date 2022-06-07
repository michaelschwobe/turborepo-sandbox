const sharedConfig = require('@acme/config/eslint-config');

// -----------------------------------------------------------------------------

module.exports = {
  ...sharedConfig,
  extends: [
    ...sharedConfig.extends.filter((el) => el !== 'prettier'),
    '@remix-run/eslint-config',
    '@remix-run/eslint-config/node',
    '@remix-run/eslint-config/jest-testing-library',
    'prettier',
  ],
  overrides: [
    ...sharedConfig.overrides,
    {
      files: ['**/*.ts?(x)'],
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
  ],
};
