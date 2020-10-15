const glob = require('glob');
const ps = require('../utils/paths');
const buildMarkup = require('../build-markup');

// read pages
const files = glob.sync('**/*.@(ejs)', { cwd: `./src/${ps.pagesPath}` });

console.time('generated all project pages in');

files.forEach((file) => {
  console.time('page generated in');
  buildMarkup(file);
  console.timeEnd('page generated in');
  console.log('\n');
});

console.timeEnd('generated all project pages in');
