const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const GasPlugin = require('gas-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const destination = 'dist';

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'code.js',
    path: path.resolve(__dirname, destination),
    libraryTarget: 'this'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        uglifyOptions: {
          warnings: false,
          mangle: false,
          compress: {
            properties: false,
            warnings: false,
            drop_console: false
          },
          output: {
            beautify: true
          }
        }
      })
    ]
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
          failOnError: false
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: [
              'transform-es3-property-literals',
              'transform-es3-member-expression-literals',
              'transform-class-properties',
              'transform-object-rest-spread',
              'transform-object-assign'
            ]
          }
        }
      }
    ]
  },
  mode: 'none',
  plugins: [
    new CleanWebpackPlugin([destination]),
    new CopyWebpackPlugin([
      {
        from: './src/**/*.html',
        flatten: true,
        to: path.resolve(__dirname, destination)
      },
      {
        from: './appsscript.json',
        to: path.resolve(__dirname, destination)
      },
      {
        from: './src/vendor/*.gs',
        flatten: true,
        to: path.resolve(__dirname, destination)
      }
    ]),
    new GasPlugin()
  ]
};
