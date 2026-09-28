'use strict';

const baseConfig = require('./jest.config.base.cjs');

const config = {
  ...baseConfig,
  testMatch: [
    '<rootDir>/components/**/spec/**/*.ts'
  ],
  coverageDirectory: '<rootDir>/coverage/',
  collectCoverageFrom: [
    '<rootDir>/{apps,components,lib}/*/src/**.{ts,tsx}'
  ],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  }
};

module.exports = config;
