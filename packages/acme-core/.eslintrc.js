const acmeConfigEslint = require('@acme/config/eslint-config');

// -----------------------------------------------------------------------------

module.exports = {
  ...acmeConfigEslint,
  overrides: [
    ...acmeConfigEslint.overrides,
    {
      files: ['**/*.ts?(x)'],
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
  ],
};
