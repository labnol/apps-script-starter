import eslintPlugin from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import googleappsscript from 'eslint-plugin-googleappsscript';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';

export default [
  eslintPlugin.configs.recommended,
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
  { ignores: ['dist/**', 'build/**', 'node_modules/**'] },
  {
    files: ['**/*.js'],
    ignores: ['node_modules/**', 'dist/**', 'build/**'],
    plugins: {
      prettier: prettierPlugin,
      import: importPlugin,
      'simple-import-sort': pluginSimpleImportSort,
      googleappsscript: googleappsscript,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        OAuth1: true,
        OAuth2: true,
        google: true,
        ...globals.node,
        ...googleappsscript.environments.googleappsscript.globals,
      },
    },
    rules: {
      ...importPlugin.configs.recommended.rules,
      'no-continue': 'off',
      'no-console': 'warn',
      'no-underscore-dangle': 'off',
      'prefer-template': 'error',
      camelcase: 'off',
      'import/prefer-default-export': 'off',
      'import/no-extraneous-dependencies': 'warn',
      'import/extensions': ['error', 'ignorePackages'],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc' },
        },
      ],
      'no-unused-vars': [
        'warn',
        {
          ignoreRestSiblings: true,
          argsIgnorePattern: 'res|next|^err|^ignore|^_',
          caughtErrors: 'none',
        },
      ],
      'prettier/prettier': [
        'error',
        {
          trailingComma: 'es5',
          singleQuote: true,
          printWidth: 120,
          endOfLine: 'auto',
          semi: true,
          tabWidth: 2,
        },
      ],
    },
  },
];
