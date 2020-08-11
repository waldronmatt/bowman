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

const buildMarkup = (file, basePath) => {
  // get page data
  const getFile = path.parse(file);
  const getExtentionJSON = file.replace(/\.ejs$/g, '.json');
  let data;

  try { 
    data = requireUncached(`../../src/${ps.dataPath}${getExtentionJSON}`);
    console.log(`getting json data at: src/${ps.dataPath}${getExtentionJSON}`);
  } catch (error) { 
    throw Error('unable to render json data');
  }

  // get page specific css, js paths
  const page_css = staticManifest[`${ps.stylePath}${getFile.name}/${getFile.name}.css`];
  const page_js = staticManifest[`${ps.scriptPath}${getFile.name}/${getFile.name}.js`];

  // read page file
  const content = fse.readFileSync(`./src/${ps.pagesPath}${file}`, 'utf-8');

  // render page
  const pageContent = frontMatter(content);
  const templateConfig = Object.assign({}, 
    config(basePath, staticManifest[ps.global_css], staticManifest[ps.global_js], ps.alias_ejs, data, page_css, page_js), {
      page: pageContent.attributes
    },
  );

  // generate page content
  let generatePage;
  try {
    generatePage = ejs.render(pageContent.body, templateConfig, {
      filename: `./src/${ps.pagesPath}${file}`
    });
    console.log(`rendering html markup from ejs page at: src/${ps.pagesPath}${file}`);
  } catch (error) {
    throw Error('unable to render html markup from ejs page');
  }

  // render template
  const template = pageContent.attributes.template || 'default';
  const templateFileName = `./src/${ps.templatePath}${template}.ejs`;
  const templateData = fse.readFileSync(templateFileName, 'utf-8');

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
    console.log(`rendering ejs template from: src/${ps.templatePath}${template}.ejs`);
  } catch (error) {
    throw Error('unable to render ejs template');
  }

  // create destination dir and save the html file
  const destPath = path.join('./dist', getFile.dir);
  try {
    fse.mkdirsSync(destPath);
    fse.writeFileSync(`${destPath}/${getFile.name}.html`, completePage);
    console.log(`writing rendered html markup to: ${destPath}/${getFile.name}.html`);
  } catch (error) {
    throw Error('uable to write rendered html markup');
  }
}

module.exports = buildMarkup;