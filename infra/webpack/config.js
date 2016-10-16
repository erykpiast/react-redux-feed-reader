const autoprefixer = require('autoprefixer');
const Html = require('html-webpack-plugin');
const path = require('path');
const colors = require('../../src/styles/colors.json');
const simpleVars = require('postcss-simple-vars')({ silent: true, variables: colors });

const srcDir = path.resolve(__dirname, '../../src');

module.exports = {
  cache: false,
  context: path.resolve('./src'),
  entry: [
    'babel-polyfill',
    './bootstrap.jsx',
  ],
  module: {
    loaders: [{
      test: /\.(jpg|png|svg|woff|pdf)$/,
      loader: 'file',
      query: {
        name: 'assets/[hash].[ext]',
      },
    }, {
      test: /\.json$/,
      loader: 'json',
    }],
  },
  output: {
    filename: '[hash].js',
    path: path.resolve('./dist'),
  },
  plugins: [
    new Html({
      cache: false,
      minify: {
        collapseWhitespace: true,
      },
      template: './index.html',
      title: process.env.npm_package_config_title,
    }),
  ],
  postcss() {
    return [autoprefixer, simpleVars];
  },
  resolve: {
    alias: {
      request: require.resolve('browser-request'),

      components: path.join(srcDir, '/components'),
      modules: path.join(srcDir, '/modules'),
      styles: path.join(srcDir, '/styles'),
      utils: path.join(srcDir, '/utils'),
    },
    extensions: [
      '',
      '.js',
      '.jsx',
      '.json',
      '.scss',
    ],
  },
};
