const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = {
  /* We need to specify an entry 
  so this webpack script can run. */
  /* We will remove file in the
  next webpack build step. */
  entry: ['./src/static/js/app.js'],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../../dist/'),
  },
  /*
  */
  plugins: [
    new HardSourceWebpackPlugin(),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['static/**/*'],
    }),
    new ManifestPlugin({
      fileName: 'images-manifest.json',
      filter: (file) => {
        return file.name.indexOf('main.js')
      },
      map: (file) => {
        // Remove hash in manifest key (for images)
        // https://github.com/webpack-contrib/copy-webpack-plugin/issues/104
        file.name = file.name.replace(/(\.[a-f0-9]{32})(\..*)$/, '$2');
        return file;
      },
    }),
    new CopyWebpackPlugin([
      // copy over misc assets
      { from:'./src/static/fonts/', to: 'static/fonts', },
      { from:'./src/favicon.png', to: 'favicon.png', },
      // vendor files you don't want webpack to compile
      /*
      */
    ]),
  ],
  performance : {
    hints : 'warning'
  }
};
