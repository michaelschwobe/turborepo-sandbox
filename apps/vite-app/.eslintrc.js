const sharedConfig = require('@acme/config/eslint-config');

// -----------------------------------------------------------------------------

module.exports = {
  ...sharedConfig,
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
