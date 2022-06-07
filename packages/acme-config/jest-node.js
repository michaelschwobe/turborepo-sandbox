/**
 * @type {import("ts-jest").InitialOptionsTsJest}
 */
module.exports = {
  clearMocks: true,

  coverageDirectory: '<rootDir>/coverage/',

  preset: 'ts-jest',

  testEnvironment: 'node',
};
