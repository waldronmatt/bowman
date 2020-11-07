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
    // Webpack will identify any code it thinks isn’t being used and mark it during the initial bundling step
    usedExports: true, // Set TRUE to enable tree-shaking
    /*
      SplitChunks finds modules which are shared between chunks and splits them
      into separate chunks to reduce duplication or separate vendor modules from application modules.

      https://medium.com/jspoint/react-router-and-webpack-v4-code-splitting-using-splitchunksplugin-f0a48f110312
    */
    splitChunks: {
    // https://webpack.js.org/plugins/split-chunks-plugin/#split-chunks-example-2
    /*
      cacheGroups tells SplitChunksPlugin to create chunks based on some conditions
      https://medium.com/jspoint/react-router-and-webpack-v4-code-splitting-using-splitchunksplugin-f0a48f110312
    */
      cacheGroups: {
        // vendor chunk
        vendor: {
          // name of the chunk
          name: 'vendors',
          /*
            Optimization over Async and Sync Module (a default'ish' setting for chuncks)
            https://medium.com/dailyjs/webpack-4-splitchunks-plugin-d9fbbe091fd0
          */
          chunks: 'all',
          // import file path containing node_modules
          test: /node_modules/,
          /*
            the higher priority will determine where a module is placed
            if it meets multiple conditions (both a shared and npm (vendor) module

            Prioritize vendor chuncks over commons
          */
          priority: 20,
        },
        // https://webpack.js.org/plugins/split-chunks-plugin/#split-chunks-example-1
        common: {
          // create a commons chunk, which includes all code shared between entry points
          name: 'commons',
          // minimum number of chunks that must share a module before splitting
          minChunks: 2,
          // async + async chunks
          chunks: 'all',
          // lower priority than vendors
          priority: 10,
          /*
            If the current chunk contains modules already split out from the main bundle,
            it will be reused instead of a new one being generated.
          */
          reuseExistingChunk: true,
          /*
            enforce value is set to true to force SplitChunksPlugin to
            form this chunk irrespective of the size of the chunk
          */
          enforce: true,
        },
      },
    },
    minimize: true,
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
          preset: ['default', {
            discardComments: {
              removeAll: true,
            }
          }],
        },
      }),
    ],
  },
});
