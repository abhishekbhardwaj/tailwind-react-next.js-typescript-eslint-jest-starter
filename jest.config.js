/** @type {import('ts-jest').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  setupFiles: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/src/$1',
  },
  coveragePathIgnorePatterns: ['/node_modules/'],
  transform: {
    // https://github.com/kulshekhar/ts-jest/blob/cefa0da660c4f99cf6595e253981af6855bcc80c/presets/index.js#L17,
    // const { createJestPreset } = require('ts-jest')
    // ...createJestPreset(false, true),
    // const { jsWithTs } = require('ts-jest/presets')
    // ...jsWithTs.transform,
    '^.+\\.[tj]sx?$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.jest.json',
        diagnostics: false,
      },
    ],
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  testMatch: ['**/*.(test|spec).(js|jsx|ts|tsx)'],
  testEnvironment: 'jsdom',
}
