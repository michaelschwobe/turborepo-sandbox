# @acme/typescript-config

A collection of configurations:

- `@acme/typescript-config/tsconfig.base.json`
- `@acme/typescript-config/tsconfig.cra.json`
- `@acme/typescript-config/tsconfig.next.json`
- `@acme/typescript-config/tsconfig.react-library.json`
- `@acme/typescript-config/tsconfig.remix.json`
- `@acme/typescript-config/tsconfig.vite.json`
- `@acme/typescript-config/tsconfig.vite.node.json`

## Installation:

Install the package into the consuming app/lib configuration.

If in a turborepo:

```json
// package.json
{
  "devDependencies": {
    "@acme/typescript-config": "*"
    // ...
  }
}
```

If NOT in a Turborepo:

```sh
yarn add -D @acme/typescript-config
```

## Usage

Use the package withing the consuming app/lib configuration.

```json
// tsconfig.json
{
  "extends": "@acme/typescript-config/tsconfig.base.json",
  "include": ["."],
  "exclude": ["coverage", "dist", "node_modules"]
  // "compilerOptions": {}
}
```
