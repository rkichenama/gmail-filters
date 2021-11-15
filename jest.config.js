const { join } = require('path');

module.exports = {
  roots: [ '<rootDir>/src' ],
  testMatch: [ '**/?(*.)+(spec|test).+(ts|tsx|js)' ],
  transform: { '^.+\\.(ts|tsx)$': 'ts-jest' },
  globals: {
    'ts-jest': {
      compiler: 'ttypescript'
    }
  },
  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy'
  },
  moduleDirectories: [
    'node_modules',
    join(__dirname, 'src')
  ],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: [
    './src/**/*.{ts,tsx}',
    '!./src/**/*.d.ts',
    '!./src/**/states.{ts,tsx}',
    '!**/__mocks__/**',
    '!**/node_modules/**'
  ],
  coverageReporters: [ 'lcov', 'text' ],
  clearMocks: true,
  setupFiles: [ '<rootDir>config.ts' ],
  // Setup Enzyme
  snapshotSerializers: [ 'enzyme-to-json/serializer' ],
  setupFilesAfterEnv: [ '<rootDir>/setupEnzyme.ts' ]
}