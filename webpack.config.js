/**
 * @file webpack.config.js
 * @author Amit Agarwal
 * @email amit@labnol.org
 *
 * Google Apps Script Starter Kit
 * https://github.com/labnol/apps-script-starter
 */

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const GasPlugin = require('gas-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const destination = path.resolve(__dirname, 'dist');
const isProduction = process.env.NODE_ENV === 'production';

const getSrcPath = (filePath) => {
  const src = path.resolve(__dirname, 'src');
  return path.posix.join(src.replace(/\\/g, '/'), filePath);
};

module.exports = {
  mode: isProduction ? 'production' : 'none',
  context: __dirname,
  entry: getSrcPath('/index.js'),
  output: {
    filename: `code.[contentHash].js`,
    path: destination,
    libraryTarget: 'this',
  },
  resolve: {
    extensions: ['.js'],
  },
  optimization: {
    minimize: isProduction,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ecma: 6,
          warnings: false,
          mangle: {},
          compress: {
            drop_console: false,
            drop_debugger: isProduction,
          },
          output: {
            beautify: !isProduction,
          },
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          cache: true,
          failOnError: false,
          fix: true,
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: getSrcPath('**/*.html'),
          flatten: true,
          to: destination,
        },
        {
          from: getSrcPath('../appsscript.json'),
          to: destination,
        },
        {
          from: getSrcPath('../functions/*.js'),
          to: destination,
          flatten: true,
        },
      ],
    }),
    new GasPlugin({
      comments: false,
      source: 'digitalinspiration.com',
    }),
  ],
};
