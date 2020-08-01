const path = require('path');
const glob = require('glob');
const minify = require('@node-minify/core');
const htmlMinifier = require('@node-minify/html-minifier');
const buildMarkup = require('../build-markup');
const ps = require('../utils/paths');

// set env
const basePath = '/';

// read pages
const files = glob.sync('**/*.@(ejs)', { cwd: `./src/${ps.pagesPath}` });

files.forEach((file) => {
  buildMarkup(file, basePath);

  const getFile = path.parse(file);
  const destPath = path.join('./dist', getFile.dir);

  // minify rendered html
  minify({
    compressor: htmlMinifier,
    input: `${destPath}/${getFile.name}.html`,
    output: `${destPath}/${getFile.name}.html`
  });
  console.log(`minifying ${getFile.name}.html`);
});