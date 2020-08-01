const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const ManifestPlugin = require('webpack-manifest-plugin');
const WebpackCleanPlugin = require('webpack-clean');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const entry = require('./utils/dynamic-entries');

module.exports = {
  entry,
  output: {
    path: path.resolve(__dirname, '../../dist/'),
  },
  // js and manifest resolutions
  resolve: {
    alias: {
      dist: path.resolve(__dirname, '../../dist/')
    },
    extensions: ['.js', '.json']
  },
  module: {
    rules: [
      // Extracts the compiled CSS from the SASS files defined in the entry
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 2
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: './postcss.config.js'
              },
            },
          },
          {
            loader: 'sass-loader'
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          },
        },
      },
    ],
  },
  plugins: [
    new HardSourceWebpackPlugin(),
    new FixStyleOnlyEntriesPlugin({ 
      extensions:['scss'] 
    }),
    new ManifestPlugin({
      fileName: 'static-manifest.json'
    }),
    /* Clean up 'dummy' entries
    from webpack prebuild script */
    new WebpackCleanPlugin(
      ['../../dist/main.js'],
    ),
    /*
    */
  ],
  performance : {
    hints : 'warning'
  },
};