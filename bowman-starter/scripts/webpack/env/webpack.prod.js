const merge = require('webpack-merge');
const common = require('../webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    // code splitting/dynamic imports
    chunkFilename: 'static/js/[name].[contenthash].js',
  },
  plugins: [
    // Where the compiled scss is saved to
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      allChunks: true,
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          safe: true,
        },
      }),
    ],
  },
});