const glob = require('glob');
const ps = require('../utils/paths');
const buildMarkup = require('../build-markup');

// set env
const basePath = '/';

// read pages
const files = glob.sync('**/*.@(ejs)', { cwd: `./src/${ps.pagesPath}` });

files.forEach((file) => {
  buildMarkup(file, basePath);
});