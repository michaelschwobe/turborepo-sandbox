/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  root: true,
  // settings: {
  //   next: {
  //     rootDir: ['apps/*/'],
  //   },
  // },
  extends: ['acme', 'plugin:@next/next/core-web-vitals', 'prettier'],
};
