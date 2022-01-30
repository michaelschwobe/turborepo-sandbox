const sharedConfig = require('@acme/config/eslint-config');

// -----------------------------------------------------------------------------

module.exports = {
  ...sharedConfig,
  extends: [
    ...sharedConfig.extends.filter((el) => el !== 'prettier'),
    'plugin:@next/next/recommended',
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
