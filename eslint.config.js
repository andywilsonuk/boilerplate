import { defineConfig } from "eslint/config"
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'

export default defineConfig({
  files: ['src/**/*.ts', 'src/**/*.tsx', 'tests/**/*.ts'],
  extends: [
    stylistic.configs.customize({
      braceStyle: '1tbs',
      arrowParens: 'always',
    }),
    tseslint.configs.strictTypeChecked,
    tseslint.configs.stylisticTypeChecked,
  ],
  plugins: {
    '@stylistic': stylistic,
  },
  languageOptions: {
    parserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    }
  },
  rules: {
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { args: 'all', argsIgnorePattern: '^_', caughtErrors: 'all', caughtErrorsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_', varsIgnorePattern: '^_', ignoreRestSiblings: true }],
    '@typescript-eslint/restrict-template-expressions': [ 'error', { allowNumber: true, allow: [{ name: 'ReadonlySignal', from: 'package', package: '@preact/signals' }] }],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-object-type': 'off',
    '@typescript-eslint/no-unnecessary-type-parameters': 'off',
    '@stylistic/max-statements-per-line': ['error', { max: 2 }],
    '@stylistic/jsx-one-expression-per-line': ['error', { "allow": "single-line" }],
  }
})
