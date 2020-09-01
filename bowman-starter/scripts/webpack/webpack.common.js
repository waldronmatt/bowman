const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const ManifestPlugin = require('webpack-manifest-plugin');
const WebpackCleanPlugin = require('webpack-clean');
const entry = require('./utils/dynamic-entries');

module.exports = {
  entry,
  output: {
    // output assets to dist folder
    path: path.resolve(__dirname, '../../dist/'),
  },
  resolve: {
    // resolve manifests
    alias: {
      dist: path.resolve(__dirname, '../../dist/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          /* 
            Extracts the compiled css from js (overrides default Webpack behavior)
            We want enabled for dev and prod because pages are generated with css references

            The build breaks if this goes below sass-loader
          */
          {
            loader: MiniCssExtractPlugin.loader,
          },
          // interprets import and url like import/require and will resolve them
          {
            loader: "css-loader",
          },
          /* 
            loader for webpack to process css with PostCSS

            postcss-loader should be placed after css-loader and style-loader, 
            but before other preprocessor loaders like e.g sass|less|stylus-loader
            https://github.com/webpack-contrib/postcss-loader#config-cascade
          */
          {
            loader: 'postcss-loader',
          },
          // loads a sass/scss file and compiles it to css
          {
            loader: 'sass-loader',
          },
        ],
      },
      // transpile to browser js code
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            /* 
              A collection of babel plugins that allows you to use the latest 
              JavaScript without needing to micromanage which syntax transforms 
              (and optionally, browser polyfills) are needed by your target environment(s)
            */
            presets: ['@babel/preset-env'],
            /*
              Externalise references to helpers and builtins, automatically 
              polyfilling your code without polluting globals
            */
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
  plugins: [
    /* 
      Plugin that removes an extra js file generated from a style only entry
      https://justforuse.github.io/blog/en-us/2019/03/webpack-compile-scss/
    */
    new FixStyleOnlyEntriesPlugin({ 
      extensions:['scss'],
    }),
    // delete main.js auto-generated by webpack
    new WebpackCleanPlugin(
      ['../../dist/main.js'],
    ),
    // mapping of static assets (css, js)
    new ManifestPlugin({
      fileName: 'static-manifest.json',
    }),
  ],
  /* 
    SplitChunks finds modules which are shared between chunks and splits them 
    into separate chunks to reduce duplication or separate vendor modules from application modules.
  */
  optimization: {
    splitChunks: {
      /*
        Optimization over Async and Sync Module (a default'ish' setting for chuncks)
        https://medium.com/dailyjs/webpack-4-splitchunks-plugin-d9fbbe091fd0
      */
      chunks: 'all',
    },
  },
  performance : {
    hints : 'warning',
  },
};