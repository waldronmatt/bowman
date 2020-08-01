/*
Based on Douglas Matso's nanogen static site generator
https://github.com/doug2k1/nanogen/tree/legacy
*/

const fse = require('fs-extra');
const path = require('path');
const ejs = require('ejs');
const frontMatter = require('front-matter');
const config = require('./utils/config');
const requireUncached = require('./utils/require-uncached');
const ps = require('./utils/paths');
const staticManifest = require('../dist/static-manifest.json');
const assetsManifest = require('../dist/assets-manifest.json');

const buildMarkup = (file, basePath) => {
  // get full file path
  const getFile = path.parse(file);
  const getExtentionJSON = file.replace(/\.ejs$/g, '.json');

  // get page data
  let data;
  try { 
    data = requireUncached(`../../src/${ps.dataPath}${getExtentionJSON}`);
    console.log(`getting data at: ${`src/${ps.dataPath}${getExtentionJSON}`}`);
  }
  catch (e) { 
    console.log('ERROR: Unable to render data.'); 
  }

  // get page specific css, js paths
  const dynamic_css = staticManifest[`${ps.stylePath}${getFile.name}/${getFile.name}.css`];
  const dynamic_js = staticManifest[`${ps.scriptPath}${getFile.name}/${getFile.name}.js`];

  // read page file
  const content = fse.readFileSync(`./src/${ps.pagesPath}${file}`, 'utf-8');
  console.log(`reading ejs page at: src/${ps.pagesPath}${file}`);

  // render page
  const pageContent = frontMatter(content);
  const templateConfig = Object.assign({}, 
    config(basePath, staticManifest[ps.global_css], staticManifest[ps.global_js], ps.alias_ejs, data, dynamic_css, dynamic_js, assetsManifest), {
      page: pageContent.attributes
    },
  );

  // generate page content
  let generatePage
  try {
    generatePage = ejs.render(pageContent.body, templateConfig, {
      filename: `./src/${ps.pagesPath}${file}`
    });
  }
  catch (e) {
    console.log('ERROR: Unable to render ejs file.');
  }

  // render template
  const template = pageContent.attributes.template || 'default';
  const templateFileName = `./src/${ps.templatePath}${template}.ejs`;
  const templateData = fse.readFileSync(templateFileName, 'utf-8');
  console.log(`getting template: src/${ps.templatePath}${template}.ejs`);

  // generate page content with corresponding template
  let completePage;
  try {
    completePage = ejs.render(
      templateData,
      Object.assign({}, templateConfig, {
        body: generatePage,
        filename: templateFileName,
      }),
    );
  }
  catch (e) {
    console.log('ERROR: Unable to render ejs template.');
  }

  // create destination directory
  const destPath = path.join('./dist', getFile.dir);
  fse.mkdirsSync(destPath);

  // save the html file
  fse.writeFileSync(`${destPath}/${getFile.name}.html`, completePage);
  console.log(`creating html at: ${destPath}/${getFile.name}.html`);
}

module.exports = buildMarkup;