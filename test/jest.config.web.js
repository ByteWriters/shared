/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/*.test.[jt]s?(x)'],
  transform: { '^.+\\.(t|j)sx?$': '@swc/jest', },
  rootDir: "../../.."
};
