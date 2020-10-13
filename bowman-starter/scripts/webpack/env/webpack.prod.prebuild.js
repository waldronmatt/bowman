const merge = require('webpack-merge');
const common = require('../webpack.common.prebuild.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default
const ImageminWebpWebpackPlugin= require("imagemin-webp-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CopyWebpackPlugin([
      { from:'src/static/img/', to:'static/img/[path][name].[contenthash:8].[ext]', },
    ]),
    // compress images (might take a while if there's a lot)
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
    new ImageminWebpWebpackPlugin(),
    // generate optimized favicons for different devices
    new FaviconsWebpackPlugin()
  ],
});
