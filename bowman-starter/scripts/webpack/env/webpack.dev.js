const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('../webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StylelintPlugin = require('stylelint-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  /*
    Map your compiled code back to your original source code.

    For example, if you bundle three source files (a.js, b.js, and c.js)
    into one bundle (bundle.js) and one of the source files contains an error,
    the stack trace will simply point to bundle.js.
    If an error originates from b.js, the source map will tell you exactly that.
  */
  devtool: 'inline-source-map',
  output: {
    filename: '[name].js',
    // specify chunck path for code splitted files
    chunkFilename: 'static/js/[name].js',
  },
  plugins: [
    /*
      Provides an intermediate caching step for modules

      Not using on prod builds because Netlify stalls out a while
    */
    new HardSourceWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    /*
      Hot reload support for static assets (css, js)

      We're using webpack-livereload instead of webpack-dev-server because
      we want assets served by browsersync server, but we still want reloads
      triggered from webpack's build pipeline.
    */
    new LiveReloadPlugin({
      appendScriptTag: true,
    }),
    new StylelintPlugin(),
    new ESLintPlugin(),
    // where the compiled scss is saved to
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  optimization: {
    // don't minimize so we can debug
    minimize: false,
  },
});
