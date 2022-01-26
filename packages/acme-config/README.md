# @acme/config

A collection of configurations:

- `@acme/config/eslint-config`
- `@acme/config/jest-jsdom`
- `@acme/config/jest-node`
- `@acme/config/prettier-config`
- `@acme/config/storybook-main`
- `@acme/config/storybook-preview`
- `@acme/config/stylelint-config`
- `@acme/config/tsconfig.base`
- `@acme/config/tsconfig.nextjs`
- `@acme/config/tsconfig.react-library`
- `@acme/config/tsconfig.remix`

## Installation:

Install the package into the consuming app/lib configuration.

If in a turborepo:

```json
// package.json
{
  "devDependencies": {
    "@acme/config": "*"
    // ...
  }
}
```

If NOT in a turborepo:

```sh
yarn add -D @acme/config
```

## Usage

Use the package withing the consuming app/lib configuration.

### ESLint

```js
// .eslintrc.js
const sharedConfig = require('@acme/config/eslint-config');

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
```

### Stylelint

```js
// .stylelintrc.js
module.exports = require('@acme/config/stylelint-config');
```

### Prettier

```js
// .prettierrc.js
module.exports = require('@acme/config/prettier-config');
```

### Jest

```js
// jest.config.js
module.exports = require('@acme/config/jest-jsdom'); // Or: jest-node
```

### Storybook

```js
// .storybook/main.js
module.exports = require('@acme/config/storybook-main');
```

```js
// .storybook/preview.js
import * as sharedConfig from '@acme/config/storybook-preview';

export const parameters = sharedConfig.parameters;
```

### Typescript

```json
// tsconfig.json
{
  "extends": "@acme/config/tsconfig.react-library.json",
  "include": ["."],
  "exclude": ["coverage", "dist", "node_modules"]
  // "compilerOptions": {...}
}
```
