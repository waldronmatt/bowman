const merge = require('webpack-merge');
const common = require('../webpack.common.prebuild.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  plugins: [
    new HardSourceWebpackPlugin(),
    new CopyWebpackPlugin([
      { from:'./src/static/images/', to:'static/images/', },
    ]),
  ],
});