# @acme/core

A collection of React components, hooks, constants and utilities.

## Installation:

Install the package into the consuming app/lib configuration.

If in a turborepo:

```json
// package.json
{
  "devDependencies": {
    "@acme/core": "*"
    // ...
  }
}
```

If NOT in a turborepo:

```sh
yarn add -D @acme/core
```

## Usage

Use the package withing the consuming app/lib configuration.

```jsx
import { Button } from '@acme/core';

export default function App() {
  return (
    <div>
      <Button>Button</Button>
    </div>
  );
}
```
