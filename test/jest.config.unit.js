/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/*unit.test.[jt]s?(x)'],
  transform: { '^.+\\.(t|j)sx?$': '@swc/jest', },
  globalSetup: "./@bytewriters/shared/test/setup.unit.ts",
  setupFiles: [ "./@bytewriters/shared/test/service.mock.ts" ],
  rootDir: "../../.."
};
