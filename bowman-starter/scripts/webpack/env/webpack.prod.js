const merge = require('webpack-merge');
const common = require('../webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  // disable for efficient prod builds and code reduction
  devtool: false,
  output: {
    filename: '[name].[contenthash:8].js',
    // specify chunck path for code splitted files
    chunkFilename: 'static/js/[name].[contenthash:8].js',
  },
  plugins: [
    // where the compiled scss is saved to
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
    }),
  ],
  optimization: {
    minimize: true,
    // Webpack will identify any code it thinks isn’t being used and mark it during the initial bundling step
    usedExports: true,
    minimizer: [
      // minimize js
      new TerserPlugin({
        // https://github.com/webpack-contrib/terser-webpack-plugin/#remove-comments
        terserOptions: {
          output: {
            comments: false,
          },
        },
        extractComments: false,
      }),
      // minimize css
      new OptimizeCSSAssetsPlugin({
        // remove comments
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
      }),
    ],
  },
});
