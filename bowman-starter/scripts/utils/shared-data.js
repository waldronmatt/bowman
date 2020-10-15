const glob = require('glob');
const path = require( 'path' );
const ps = require('./paths');

const getSharedData = () => {
  let data = {};
  /*
    get shared component/layout data
    not tied to a particular page
  */
  glob.sync(`./src/${ps.sharedDataPath}**/**.json`).forEach((file) => {
    const pathName = require( path.resolve(file) );
    Object.assign(data, pathName);
  })
  return data;
};

module.exports = getSharedData();
