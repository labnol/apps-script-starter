import eslintPlugin from '@eslint/js';
import googleappsscript from 'eslint-plugin-googleappsscript';
import importPlugin from 'eslint-plugin-import';
import jsoncPlugin from 'eslint-plugin-jsonc';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';

export default [
  eslintPlugin.configs.recommended,
  eslintPluginPrettierRecommended,
  { ignores: ['dist/**', 'build/**', 'node_modules/**', 'package-lock.json'] },
  {
    files: ['**/*.js'],
    plugins: {
      prettier: prettierPlugin,
      import: importPlugin,
      'simple-import-sort': pluginSimpleImportSort,
      googleappsscript,
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
      'no-unused-vars': [
        'warn',
        {
          ignoreRestSiblings: true,
          argsIgnorePattern: 'res|next|^err|^ignore|^_',
          caughtErrors: 'none',
        },
      ],
      'no-unused-expressions': 'warn',
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-template': 'error',
      'prefer-arrow-callback': 'error',
      'arrow-spacing': 'error',
      'no-duplicate-imports': 'error',
      'no-useless-rename': 'error',
      'object-shorthand': 'error',
      'prefer-destructuring': [
        'error',
        {
          array: true,
          object: true,
        },
        {
          enforceForRenamedProperties: false,
        },
      ],

      // Naming conventions
      camelcase: 'off',

      // Import/export rules
      'import/prefer-default-export': 'off',
      'import/no-extraneous-dependencies': 'warn',
      'import/extensions': ['error', 'ignorePackages'],
      'import/no-unresolved': 'off', // Disabled for Apps Script compatibility
      'import/no-cycle': 'warn',
      'import/no-self-import': 'error',
      'import/no-useless-path-segments': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
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

  ...jsoncPlugin.configs['flat/recommended-with-jsonc'],
  {
    files: ['**/*.json', '**/*.jsonc'],
    rules: {
      'jsonc/sort-keys': 'error',
      'jsonc/no-dupe-keys': 'error',
      'jsonc/no-comments': 'off', // Allow comments in JSON files
    },
  },

  {
    files: ['**/*.test.js', '**/*.spec.js', '**/__tests__/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.jasmine,
      },
    },
    rules: {
      'no-console': 'off', // Allow console in tests
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: true,
          optionalDependencies: false,
          peerDependencies: false,
        },
      ],
    },
  },

  {
    files: ['*.config.js', 'vite.config.js', 'eslint.config.js', 'jest.config.js'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: true,
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
];
