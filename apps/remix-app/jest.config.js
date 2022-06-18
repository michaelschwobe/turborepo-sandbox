const sharedConfig = require('@acme/jest-config/jsdom');

// -----------------------------------------------------------------------------

/**
 * @type {import("ts-jest").InitialOptionsTsJest}
 */
module.exports = {
  ...sharedConfig,
  setupFilesAfterEnv: ['<rootDir>/app/jest.setup.ts'],
};
