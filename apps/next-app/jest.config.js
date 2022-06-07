const sharedConfig = require('@acme/config/jest-jsdom');
const nextJest = require('next/jest');

// -----------------------------------------------------------------------------

const createJestConfig = nextJest({ dir: './' });

module.exports = createJestConfig(sharedConfig);
