const bs = require("browser-sync");
const exec = require('child_process').exec;
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack/webpack.dev');
const bundler = webpack(webpackConfig);
const cleanPathBuildMarkup = require('./utils/clean-path');

bs.init({
  server: {
    // Browsersync hot module replacement with Webpack
    // https://jsramblings.com/hot-reloading-gulp-webpack-browsersync/
    // https://github.com/BrowserSync/recipes/tree/master/recipes/webpack.react-hot-loader
    baseDir: ['dist/'],
    middleware: [
      webpackDevMiddleware(bundler, {
        publicPath: webpackConfig.output.publicPath,
        stats: { colors: true }
      }),
      webpackHotMiddleware(bundler)
    ]
  },
  injectChanges: false,
  files: [
    // watching for changes to component/layout markup/data
    {
      match: ["src/static/**/**.{ejs,json}"],
      fn:    function () {
        exec("npm run render-page-dev", function(err, stdout, stderr) {
          err ? console.log(stderr) : console.log(stdout);
          bs.reload();
        });
      }
    },
    // watching for individual page changes
    {
      match: ["src/build/**/**.{ejs,json}"],
      fn:    function (event, file) {
        const initializePromise = cleanPathBuildMarkup(file);
        initializePromise.then(function() {
          bs.reload();
        })
      }
    },
    // watching for images, other assets
    {
      match: ["src/static/**/**.{jpg,jpeg,png,gif,svg,pdf,ttf}"],
      fn:    function () {
        // this npm script will re-compile image manifest and rebuild pages
        exec("npm run rebuild", function(err, stdout, stderr) {
          err ? console.log(stderr) : console.log(stdout);
          bs.reload();
        });
      }
    },
  ]
});