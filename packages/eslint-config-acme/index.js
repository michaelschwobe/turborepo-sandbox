/**
 * Name: eslint-config-acme
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true, // Keep paired with parserOptions.ecmaVersion
    node: true,
  },

  parser: '@babel/eslint-parser',

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021, // Keep paired with env.esXXXX
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
    requireConfigFile: false,
    sourceType: 'module',
  },

  settings: {
    'import/ignore': ['node_modules', '\\.(css|json|md|svg)$'],
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
    'import/resolver': {
      [require.resolve('eslint-import-resolver-node')]: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      [require.resolve('eslint-import-resolver-typescript')]: {
        alwaysTryTypes: true,
      },
    },
    react: {
      version: 'detect',
    },
  },

  plugins: [
    'security',
    'sonarjs',
    'import',
    'react',
    'react-hooks',
    'jsx-a11y',
  ],

  extends: [
    'eslint:recommended',
    'plugin:security/recommended',
    'plugin:sonarjs/recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],

  rules: {
    'import/order': [
      'warn',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'type',
        ],
        pathGroups: [
          {
            pattern: '~/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['type'],
      },
    ],
    'import/prefer-default-export': 'error', // Prefer named exports
    'react/prop-types': 'off', // Prefer TS types
    'react/react-in-jsx-scope': 'off', // Prefer JSX to React JSX
  },

  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2021, // Keep paired with env.esXXXX
        project: './tsconfig.json', // Use config local to package not monorepo root
        sourceType: 'module',
        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
    },
    {
      files: ['**/*.stories.[jt]s?(x)'],
      plugins: ['storybook'],
      extends: ['plugin:storybook/recommended'],
    },
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      env: {
        jest: true,
        'jest/globals': true,
      },
      plugins: ['jest', 'testing-library'],
      extends: [
        'plugin:jest/recommended',
        'plugin:jest/style',
        'plugin:testing-library/react',
      ],
    },
  ],
};
