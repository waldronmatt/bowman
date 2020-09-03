const merge = require('webpack-merge');
const common = require('../webpack.common.prebuild.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CopyWebpackPlugin([
      { from:'src/static/images/', to:'static/images/[path][name].[contenthash:8].[ext]', },
    ]),
    // compress images (might take a while if there's a lot)
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
  ],
});