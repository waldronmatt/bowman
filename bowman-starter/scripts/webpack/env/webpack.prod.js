const merge = require('webpack-merge');
const common = require('../webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  output: {
    filename: '[name].[contenthash].js'
  },
  mode: 'production',
  plugins: [
    // Where the compiled SASS is saved to
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      allChunks: true,
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          safe: true
        },
      }),
      new TerserPlugin(),
    ],
  },
});