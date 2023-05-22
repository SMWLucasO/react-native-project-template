/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  preset: 'react-native',
  rootDir: '..',
  testMatch: ['<rootDir>/test/component/**/*.component-spec.{ts,tsx,js,jsx}'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};
