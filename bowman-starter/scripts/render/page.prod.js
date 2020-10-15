const fse = require('fs-extra');
const path = require('path');
const glob = require('glob');
const minify = require('@node-minify/core');
const htmlMinifier = require('@node-minify/html-minifier');
const buildMarkup = require('../build-markup');
const ps = require('../utils/paths');

// read pages
const files = glob.sync('**/*.@(ejs)', { cwd: `./src/${ps.pagesPath}` });

// inject critical css and favicons for prod builds
const staticManifest = require('../../dist/static-manifest.json');
const criticalStyles = fse.readFileSync(`dist/${staticManifest['static/css/critical.css']}`, 'utf8');
const faviconRefs = fse.readFileSync('src/static/ejs/favicons.ejs', 'utf8');

console.time('generated all project pages in');

files.forEach((file) => {
  console.time('page generated in');
  buildMarkup(file, criticalStyles, faviconRefs);
  const getFile = path.parse(file);
  const destPath = path.join('./dist', getFile.dir);

  // minify rendered html
  minify({
    compressor: htmlMinifier,
    input: `${destPath}/${getFile.name}.html`,
    output: `${destPath}/${getFile.name}.html`
  });

  console.log(`minifying ${getFile.name}.html`);
  console.timeEnd('page generated in');
  console.log('\n');
});

console.timeEnd('generated all project pages in');
