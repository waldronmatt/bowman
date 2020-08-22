const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('../webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StylelintPlugin = require('stylelint-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].js',
    // code splitting/dynamic imports
    chunkFilename: 'static/js/[name].js',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
    ],
  },
  plugins: [
    new HardSourceWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new LiveReloadPlugin({
      appendScriptTag: true,
    }),
    new StylelintPlugin({
      files: 'src/static/scss/**/*.scss',
    }),
    // Where the compiled scss is saved to
    new MiniCssExtractPlugin({
      filename: '[name].css',
      allChunks: true,
    }),
  ],
  optimization: {
    minimize: false,
  },
});