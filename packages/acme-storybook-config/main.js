/**
 * Name: @acme/storybook-config/main
 */
module.exports = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],

  core: {
    builder: '@storybook/builder-webpack5',
  },

  features: {
    postcss: false,
  },

  framework: '@storybook/react',

  staticDirs: ['../public'],

  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
};
