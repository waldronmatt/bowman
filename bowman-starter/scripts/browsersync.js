const bs = require("browser-sync");
const exec = require('child_process').exec;
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack/env/webpack.dev');
const bundler = webpack(webpackConfig);
const cleanBuildMarkup = require('./clean-build-markup');

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
    ],
  },
  files: [
    // watching for changes to component/layout markup/data
    {
      match: ["src/static/**/**.{ejs,json}"],
      fn:    function () {
        exec("npm run render-page-dev", function(err, stdout, stderr) {
          err ? console.log(stderr) : console.log(stdout);
          bs.reload();
        });
      },
    },
    // watching for individual page changes
    {
      match: ["src/build/**/**.{ejs,json}"],
      fn:    function (event, file) {
        const delayExecution = () => {
          // slightly delay watch execution to prevent race condition
          return new Promise((resolve) => { resolve(done => setTimeout(() => done(), 100)) });
        };

        const updatePage = () => {
          return new Promise((resolve) => { resolve(cleanBuildMarkup(file)) });
        };

        const pageReload = () => {
          return new Promise((resolve) => { resolve(bs.reload()) });
        };
      
        const triggerPageChanges = async () => {
          try {
            console.log(`page ${event} initiated`);
            await delayExecution();
            await updatePage();
            await pageReload();
          } catch (error) {
            throw Error(`Unable to trigger page ${event}.`);
          }
        }
        triggerPageChanges().catch(error => console.error(error));
      },
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
      },
    },
  ],
});