const ps = require('./paths');
const getSharedData = require('./shared-data');
const siteData = require(`../../src/${ps.sharedDataPath}site.json`);
const assetsManifest = require('../../dist/assets-manifest.json');
const staticManifest = require('../../dist/static-manifest.json');


const config = (basePath, data, page_css, page_js, criticalStyles) => {
  // eslint-disable-next-line no-undef
  return site = {
    basePath: basePath,
    title: siteData.title,
    description: siteData.description,
    keywords: siteData.keywords,
    criticalStyles: criticalStyles,
    vendor_js: staticManifest['vendor.js'],
    global_css: staticManifest[ps.global_css],
    global_js: staticManifest[ps.global_js],
    ejsPath: ps.alias_ejs,
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