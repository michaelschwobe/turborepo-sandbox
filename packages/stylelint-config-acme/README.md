# stylelint-config-acme

A collection of configurations:

- `stylelint-config-acme`

## Installation:

Install the package into the consuming app/lib configuration.

If in a turborepo:

```json
// package.json
{
  "devDependencies": {
    "stylelint-config-acme": "*"
    // ...
  }
}
```

If NOT in a Turborepo:

```sh
yarn add -D stylelint-config-acme
```

## Usage

Use the package withing the consuming app/lib configuration.

```js
// .stylelintrc.js
module.exports = require('stylelint-config-acme');
```
