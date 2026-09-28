import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import json from '@eslint/json';
import markdown from '@eslint/markdown';
import unusedImports from 'eslint-plugin-unused-imports';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/coverage/**',
      '**/.jest-results.json',
      '**/pnpm-lock.yaml',
      '**/pnpm-lock-committed.yaml',
      '.cypress/**',
      '**/*.spec.js',
      '**/*.e2e.js',
    ],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
        ...globals.mocha,
      },
    },
    rules: {
      'no-empty-pattern': 'warn',
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    extends: tseslint.configs.recommended,
    plugins: { 'unused-imports': unusedImports },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/triple-slash-reference': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-expressions': 'off',
      'no-empty-pattern': 'warn',
    },
  },
  {
    files: ['**/*.stories.{ts,tsx}'],
    rules: {
      'unused-imports/no-unused-vars': 'off',
    },
  },
  {
    files: ['**/*.{cjs,mjs}'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      'no-useless-escape': 'off',
    },
  },
  {
    files: ['**/*.json'],
    plugins: { json },
    language: 'json/json',
    extends: ['json/recommended'],
  },
  {
    files: ['**/*.md'],
    plugins: { markdown },
    language: 'markdown/gfm',
    extends: ['markdown/recommended'],
    rules: {
      'markdown/no-unused-definitions': 'off',
    },
  },
]);
