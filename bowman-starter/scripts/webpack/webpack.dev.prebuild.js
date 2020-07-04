const merge = require('webpack-merge');
const common = require('./webpack.common.prebuild.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  plugins: [
    new CopyWebpackPlugin([
      // copy images
      { from:'./src/static/images/', to:'static/images/', }
    ]),
  ]
});