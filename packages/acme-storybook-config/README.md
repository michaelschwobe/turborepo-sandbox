# @acme/storybook-config

A collection of configurations:

- `@acme/storybook-config/main`
- `@acme/storybook-config/preview`

## Installation:

Install the package into the consuming app/lib configuration.

If in a turborepo:

```json
// package.json
{
  "devDependencies": {
    "@acme/storybook-config": "*"
    // ...
  }
}
```

If NOT in a Turborepo:

```sh
yarn add -D @acme/storybook-config
```

## Usage

Use the package withing the consuming app/lib configuration.

```js
// .storybook/main.js
module.exports = require('@acme/storybook-config/main');
```

```js
// .storybook/preview.js
import * as sharedConfig from '@acme/storybook-config/preview';

export const parameters = sharedConfig.parameters;
```
