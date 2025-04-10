import { resolve } from 'path';

import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

const viteGoogleAppsScript = () => ({
  name: 'vite-appscript-exports',
  generateBundle(outputOptions, bundle) {
    Object.values(bundle).forEach((bundleChunk) => {
      const isJavaScriptFile = bundleChunk.fileName.endsWith('.js');
      const isValidChunk = bundleChunk.type === 'chunk' && bundleChunk.code;
      const hasExports = bundleChunk.exports?.length > 0;
      if (isJavaScriptFile && isValidChunk && hasExports) {
        const { name: libraryNamespace } = outputOptions;
        const globalFunctions = bundleChunk.exports.map(
          (fnName) => `const ${fnName} = (...args) => ${libraryNamespace}.${fnName}(...args);`
        );
        bundleChunk.code = [bundleChunk.code, ...globalFunctions].join('\n');
      }
    });
  },
});

const targets = [
  { src: 'node_modules/apps-script-oauth2/dist/OAuth2.gs', dest: 'oauth2.js' },
  { src: 'src/html/*.html', dest: '.' },
  { src: 'functions/**/*.js', dest: '.' },
  { src: 'appsscript.json', dest: '.' },
];

export default defineConfig(({ mode }) => ({
  plugins: [viteGoogleAppsScript(), viteStaticCopy({ targets })],
  build: {
    minify: mode !== 'development',
    outDir: resolve(process.cwd(), 'dist'),
    lib: {
      entry: resolve(process.cwd(), 'src/index.js'),
      name: 'app',
      formats: ['iife'],
    },
    rollupOptions: {
      output: {
        extend: false,
        entryFileNames: 'code.js',
      },
    },
  },
}));
