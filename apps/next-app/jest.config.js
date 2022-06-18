const sharedConfig = require('@acme/jest-config/jsdom');
const nextJest = require('next/jest');

// -----------------------------------------------------------------------------

const createJestConfig = nextJest({ dir: './' });

module.exports = createJestConfig({
  ...sharedConfig,
  setupFilesAfterEnv: ['<rootDir>/src/jest.setup.ts'],
});
