'use strict';

const path = require('path');

/** @typedef {import('ts-jest')} */
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    url: 'http://localhost/'
  },
  setupFilesAfterEnv: [path.resolve(__dirname, '.jest', 'setupAfterEnv.cjs')],
  moduleNameMapper: {
    '\\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': path.resolve(__dirname, '.jest', 'mocks', 'file.cjs'),
    '\\.(css|scss|sass|less)$': path.resolve(__dirname, '.jest', 'mocks', 'style.cjs'),
    '^@react-foundry/component-test-helpers$': path.resolve(__dirname, '.jest', 'mocks', 'component-test-helpers.cjs'),
    '^@react-foundry/router$': path.resolve(__dirname, '.jest', 'mocks', 'react-foundry-router.cjs'),
    '^@react-foundry/anchor-list$': path.resolve(__dirname, '.jest', 'mocks', 'anchor-list.cjs')
  },
  moduleDirectories: [
    'node_modules'
  ],
  transform: {
    '^.+\\.(?:[cm]?[jt]sx?)$': ['ts-jest', {
      tsconfig: path.resolve(__dirname, 'tsconfig.jest.json'),
      useESM: true
    }]
  },
  transformIgnorePatterns: [
    'node_modules/(?!(?:\\.pnpm/)?(?:@react-foundry/.*|react-router(?:/.*)?|@remix-run/.*)/)'
  ],
  extensionsToTreatAsEsm: [
    '.mts',
    '.jsx',
    '.ts',
    '.tsx'
  ]
};

module.exports = config;
