const ps = require('./paths');
const getSharedData = require('./shared-data');
const siteData = require(`../../src/${ps.sharedDataPath}site.json`);
const assetsManifest = require('../../dist/assets-manifest.json');
const staticManifest = require('../../dist/static-manifest.json');

// exposed global variables

const config = (data, criticalStyles, faviconRefs) => {
  return site = {
    // specifies the base URL and/or target for all relative URLs in a document
    basePath: '/',
    // resolve src/static/ejs to shorten path
    ejsPath: '../../static/ejs/',

    // global metadata
    title: siteData.title,
    description: siteData.description,
    keywords: siteData.keywords,

    // page data and shared data from components/layouts
    data: data,
    sharedData: getSharedData,

    /*
      prod-specific vars
      paths are customizable via render/page.prod.js
    */
    criticalStyles: criticalStyles,
    faviconRefs: faviconRefs,

    // global entry points
    global_css: staticManifest['static/css/app.css'],
    global_js: staticManifest['static/js/app.js'],
    // inject paths for webpack splitchunck bundles
    vendors_js: staticManifest['vendors.js'],
    commons: staticManifest['commons.js'],

    // inject so we can get images/scripts/styles path w/ [contenthash] value
    assetsManifest: assetsManifest,
    staticManifest: staticManifest,
  };
}

module.exports = config;
