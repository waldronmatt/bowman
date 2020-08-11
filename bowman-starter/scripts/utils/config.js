const ps = require('./paths');
const fse = require('fs-extra');
const getSharedData = require('./shared-data');
const siteData = require(`../../src/${ps.sharedDataPath}site.json`);
const assetsManifest = require('../../dist/assets-manifest.json');
const staticManifest = require('../../dist/static-manifest.json');
const criticalStyles = fse.readFileSync(`dist/${staticManifest['static/css/critical.css']}`, 'utf8');


const config = (basePath, global_css, global_js, alias_ejs, data, page_css, page_js) => {
  // eslint-disable-next-line no-undef
  return site = {
    basePath: basePath,
    title: siteData.title,
    description: siteData.description,
    keywords: siteData.keywords,
    criticalStyles: criticalStyles,
    global_css: global_css,
    global_js: global_js,
    ejsPath: alias_ejs,
    // page data from json file
    data: data,
    page_css: page_css,
    page_js: page_js,
    // data from components/layouts
    sharedData: getSharedData,
    // inject so we can get image/asset path w/ [contenthash] value
    assetsManifest: assetsManifest,
  };
}

module.exports = config;