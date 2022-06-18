# @acme/jest-config

A collection of configurations:

- `@acme/jest-config/jsdom`
- `@acme/jest-config/node`

## Installation:

Install the package into the consuming app/lib configuration.

If in a turborepo:

```json
// package.json
{
  "devDependencies": {
    "@acme/jest-config": "*",
    "jest": "^28.1.1",
    "jest-environment-jsdom": "^28.1.1"
    // ...
  }
}
```

If NOT in a Turborepo:

```sh
yarn add -D jest jest-environment-jsdom @acme/jest-config
```

## Usage

Use the package withing the consuming app/lib configuration.

```js
// jest.config.js
module.exports = require('@acme/jest-config/jsdom');
```
