const withTM = require('next-transpile-modules')(['@acme/core']);

// -----------------------------------------------------------------------------

/**
 * @type {import("next").NextConfig}
 */
const nextConfig = {
  eslint: {
    dirs: ['src'],
  },
  reactStrictMode: true,
};

module.exports = withTM(nextConfig);
