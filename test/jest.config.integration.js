/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/*integration.test.[jt]s?(x)'],
  transform: { '^.+\\.(t|j)sx?$': '@swc/jest', },
  globalSetup: "./@bytewriters/shared/test/setup.integration.ts",
  rootDir: "../../.."
};
