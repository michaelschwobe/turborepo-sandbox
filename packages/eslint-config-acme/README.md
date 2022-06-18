# @acme/config

A collection of configurations:

- `acme`

## Installation:

Install the package into the consuming app/lib configuration.

If in a turborepo:

```json
// package.json
{
  "devDependencies": {
    "eslint-config-acme": "*"
    // ...
  }
}
```

If NOT in a Turborepo:

```sh
yarn add -D eslint-config-acme
```

## Usage

Use the package withing the consuming app/lib configuration.

```js
// .eslintrc.js
/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  root: true,
  extends: ['acme', 'prettier'],
};
```

or

```js
// .eslintrc.js
const sharedConfig = require('eslint-config-acme');

/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  ...sharedConfig,
  root: true,
  overrides: [
    ...sharedConfig.overrides,
    //...
  ],
  //...
};
```
