import eslintPlugin from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import googleappsscript from 'eslint-plugin-googleappsscript';
import { importX } from 'eslint-plugin-import-x';
import { configs as jsoncConfigs } from 'eslint-plugin-jsonc';
import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';

export default [
  eslintPlugin.configs.recommended,
  importX.flatConfigs.recommended,
  { ignores: ['dist/**', 'build/**', 'node_modules/**', 'package-lock.json'] },
  {
    files: ['**/*.js'],
    plugins: {
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
      'no-use-before-define': 'error',
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
      'import-x/no-extraneous-dependencies': 'warn',
      'import-x/extensions': ['error', 'ignorePackages'],
      'import-x/no-unresolved': 'off', // Disabled for Apps Script compatibility
      'import-x/no-cycle': 'off',
      'import-x/no-self-import': 'error',
      'import-x/no-useless-path-segments': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },

  ...jsoncConfigs['flat/recommended-with-jsonc'],
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
      'import-x/no-extraneous-dependencies': [
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
      'import-x/no-extraneous-dependencies': [
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

  // Must be last: turns off ESLint stylistic rules that conflict with Prettier (.prettierrc).
  eslintConfigPrettier,
];
