const path = require('path');
const buildMarkup = require('../buildMarkup');

// set env
const basePath = '/';

const cleanPathBuildMarkup = (file) => {
  const { dir, base } = path.parse(file);

  let getRelativeDir = dir.replace(/(src\/build\/content|src\/build\/data)/g, '')

  // if json changed, get the corresponding page file
  let baseName = base.replace(/\.json$/g, '.ejs');
  let newFile = `${getRelativeDir}/${baseName}`

  if (getRelativeDir === '') {
    newFile = newFile.replace(/\//g, '')
  }
  if (getRelativeDir[0] === '/') {
    newFile = `${getRelativeDir.replace(/^\//g, '')}/${baseName}`
  }
  
  return new Promise(function(resolve, reject) {
    resolve(buildMarkup(newFile, basePath));
    reject(`Unable to process ${newFile}`);
  })
}

module.exports = cleanPathBuildMarkup;