const path = require('path');

// -----------------------------------------------------------------------------

/**
 * @type {import('ts-jest').InitialOptionsTsJest}
 */
module.exports = {
  clearMocks: true,

  coverageDirectory: '<rootDir>/coverage/',

  preset: 'ts-jest',

  setupFilesAfterEnv: [path.resolve(__dirname, 'jest-setup.ts')],

  testEnvironment: 'jsdom',
};
