// https://stackoverflow.com/questions/54144125/creating-dynamically-named-outputs-for-wildcarded-entry-files

const glob = require("glob");

const entry = glob.sync('./src/**/[^_]*.{scss,js}').reduce((entry, path) => {
  // remove `./src/, .scss, .js`
  const pathName = path.replace(/(\.\/src\/|\.scss$|\.js$)/g, '')
    // rename folder to css for consistency in dist output
    .replace(/(\/scss\/)/g, '/css/');
  entry[pathName] = path;

  // Browsersync hot module replacement with Webpack
  entry['webpack/hot/dev-server'];
  entry['webpack-hot-middleware/client'];
  return entry;
}, {});

module.exports = entry;
