const ps = require('./paths');
const getSharedData = require('./shared-data');
const siteData = require(`../../src/${ps.sharedDataPath}site.json`)

const sharedData = getSharedData();

const config = (basePath, global_css, global_js, alias_ejs, data, dynamic_css, dynamic_js, imagesManifest) => {
  // eslint-disable-next-line no-undef
  return site = {
    basePath: basePath,
    title: siteData.title,
    description: siteData.description,
    keywords: siteData.keywords,
    global_css: global_css,
    dynamic_css: dynamic_css,
    global_js: global_js,
    dynamic_js: dynamic_js,
    ejsPath: alias_ejs,
    // inject page data from json file
    data: data,
    // data from components/layouts
    sharedData: sharedData,
    // inject so we can get image path w/ [contenthash] value
    imagesManifest: imagesManifest,
  }
}

module.exports = config;