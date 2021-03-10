/**
 * @file index.js
 * @author Alex Ivanov
 * @email ai@contributor.pw
 *
 * This is a special plugin directly for
 * Google Apps Script Starter Kit
 * https://github.com/labnol/apps-script-starter
 */

const { spawn } = require('child_process');

const PLUGIN_NAME = 'pure-spawn-webpack-plugin';

const defaultOptions = {
  command: 'echo',
  args: [`${PLUGIN_NAME} says 'Pass parameters for the plugin.'`],
};

module.exports = class PureSpawnPlugin {
  constructor(options = {}) {
    this.options = { ...defaultOptions, ...options };
  }

  apply(compiler) {
    compiler.hooks.done.tapPromise(PLUGIN_NAME, (stats) => {
      return new Promise((resolve) => {
        if (stats.compilation.errors.length)
          return resolve('Skipped. Compilation errors are there');
        const proc = spawn(this.options.command, this.options.args, {
          stdio: 'inherit',
        });
        proc.on('close', resolve);
      });
    });
  }
};
