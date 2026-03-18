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
    if (entryChunk?.exports?.length > 0) {
      const exposureCode = entryChunk.exports
        .map((fnName) => `function ${fnName}(...args) { return ${options.name}.${fnName}(...args); }`)
        .join('\n');
      entryChunk.code += `\n\n${exposureCode}`;
    }
  },
});

export default viteExposeGasFunctions;
