import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Author: Amit Agarwal (amit@labnol.org)
 * Description: This is a custom Vite plugin to expose the functions from the bundled IIFE module
 * to the global scope. This is necessary for Google Apps Script to call
 * functions like onOpen(e) or other custom functions directly.
 * @returns {import('vite').Plugin}
 */
const viteExposeGasFunctions = () => ({
  name: 'vite-expose-gas-functions',
  generateBundle(options, bundle) {
    const entryChunk = Object.values(bundle).find((chunk) => chunk.type === 'chunk' && chunk.isEntry);
    if (entryChunk) {
      const exposureCode = entryChunk.exports
        .map((fnName) => `function ${fnName}() { return ${options.name}.${fnName}.apply(this, arguments); }`)
        .join('\n');
      entryChunk.code += `\n\n${exposureCode}`;
    }
  },
});

const targets = [
  {
    src: 'node_modules/apps-script-oauth2/dist/OAuth2.gs',
    dest: '.',
    rename: (fileName) => `${fileName.toLowerCase()}.js`,
  },
  { src: 'src/html/*.html', dest: '.' },
  { src: 'functions/**/*.js', dest: '.' },
  { src: 'appsscript.json', dest: '.' },
];

export default defineConfig(({ mode }) => ({
  plugins: [viteExposeGasFunctions(), viteStaticCopy({ targets })],
  build: {
    target: 'es2020',
    minify: mode !== 'development',
    outDir: resolve(__dirname, 'dist'),
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'app',
      formats: ['iife'],
    },
    rollupOptions: {
      output: {
        entryFileNames: 'code.js',
      },
    },
  },
}));
