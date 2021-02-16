/**
 * @file index.js
 * @author Alex Ivanov
 * @email ai@contributor.pw
 *
 * This is a special plugin directly for
 * Google Apps Script Starter Kit
 * https://github.com/labnol/apps-script-starter
 */

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const { resolve } = require('path');
const { readdir } = require('fs').promises;

async function getFiles(dir) {
  const dirents = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    dirents.map((dirent) => {
      const res = resolve(dir, dirent.name);
      return dirent.isDirectory() ? getFiles(res) : res;
    })
  );
  return Array.prototype.concat(...files);
}

const plugin = {
  lastCb: undefined,
  spawn: undefined,
  call: () => {
    if (plugin.lastCb) {
      const shadow = { ...plugin };
      shadow.lastCb();
      plugin.lastCb = undefined;
    }
    plugin.spawn = undefined;
  },
};

const affectedlifecycleEvents = ['afterEmit'];
const effectedlifecycleEvents = ['run', 'watchRun'];

const defaultOptions = {
  command: 'echo',
  args: [],
};

module.exports = class ClassPlugin {
  constructor(options = {}) {
    this.options = { ...defaultOptions, ...options };
  }

  apply(compiler) {
    effectedlifecycleEvents.forEach((lifecycleEvent) => {
      compiler.plugin(lifecycleEvent, (_, cb) => {
        plugin.lastCb = cb;
        if (plugin.spawn === undefined) plugin.call();
      });
    });

    affectedlifecycleEvents.forEach((lifecycleEvent) => {
      compiler.plugin(lifecycleEvent, (compilation) => {
        if (compilation.errors.length === 0 && plugin.spawn === undefined) {
          const { assets } = compilation;
          const unlinked = [];
          const compilationPath = path.resolve(compilation.options.output.path);

          getFiles(compilationPath).then((data) => {
            data.forEach((file) => {
              const relative = path.relative(compilation.options.output.path, file);
              if (!assets[relative])
                fs.unlink(path.resolve(compilationPath, file), () => {
                  unlinked.push(file);
                  console.log(`Unlink: ${file}`);
                });
            });
            plugin.spawn = spawn(this.options.command, this.options.args, {
              stdio: 'inherit',
            });
            plugin.spawn.on('close', () => {
              console.log('spawn end', plugin.lastCb);
              plugin.call();
            });
          });
        }
        if (compilation.errors) plugin.call();
      });
    });
  }
};
