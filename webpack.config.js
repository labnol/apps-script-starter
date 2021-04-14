/**
 * @file webpack.config.js
 * @author Amit Agarwal
 * @email amit@labnol.org
 *
 * Google Apps Script Starter Kit
 * https://github.com/labnol/apps-script-starter
 */

const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const GasPlugin = require('gas-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const getSrcPath = (filePath) => {
  const src = path.resolve(__dirname, 'src');
  return path.posix.join(src.replace(/\\/g, '/'), filePath);
};

module.exports = {
  mode: 'production',
  context: __dirname,
  entry: getSrcPath('/index.js'),
  output: {
    filename: `[contenthash].js`,
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  resolve: {
    extensions: ['.js'],
  },
  optimization: {
    minimize: false,
  },
  watchOptions: {
    ignored: ['**/dist', '**/node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'last 1 chrome version' }],
            ],
            plugins: [
              [
                '@babel/plugin-proposal-object-rest-spread',
                { loose: true, useBuiltIns: true },
              ],
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new ESLintPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: getSrcPath('**/*.html'),
          to: '[name][ext]',
          noErrorOnMissing: true,
        },
        {
          from: getSrcPath('../appsscript.json'),
          to: '[name][ext]',
        },
        {
          from: getSrcPath('../functions/*.js'),
          to: '[name][ext]',
          noErrorOnMissing: true,
        },
      ],
    }),
    new GasPlugin({
      comments: false,
      source: 'digitalinspiration.com',
    }),
  ],
};
