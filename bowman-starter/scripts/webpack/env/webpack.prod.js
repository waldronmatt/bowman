const merge = require('webpack-merge');
const common = require('../webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    // specify chunck path for code splitted files
    chunkFilename: 'static/js/[name].[contenthash].js',
  },
  plugins: [
    // where the compiled scss is saved to
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      // minimize js
      new TerserPlugin(),
      // minimize css
      new OptimizeCSSAssetsPlugin(),
    ],
  },
});