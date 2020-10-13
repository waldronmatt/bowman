const path = require('path');
const buildMarkup = require('./build-markup');

// executing page build when watching for page changes

// set env
const basePath = '/';

const cleanPathBuildMarkup = (file) => {
  const { dir, base } = path.parse(file);

  let getRelativeDir = dir.replace(/(src\/build\/content|src\/build\/data)/g, '');

  // if json changed, get the corresponding page file
  let baseName = base.replace(/\.json$/g, '.ejs');
  let newFile = `${getRelativeDir}/${baseName}`;

  if (getRelativeDir === '') {
    newFile = newFile.replace(/\//g, '');
  }
  if (getRelativeDir[0] === '/') {
    newFile = `${getRelativeDir.replace(/^\//g, '')}/${baseName}`;
  }

  const updatePage = (newFile, basePath) => {
    return new Promise((resolve, reject) => {
      console.time(`page ${newFile} generated in`);

      resolve(buildMarkup(newFile, basePath));
      reject(`unable to process ${newFile}`);
    });
  };

  const returnPageUpdates = async () => {
    try {
      await updatePage(newFile, basePath);
      console.timeEnd(`page ${newFile} generated in`);
    } catch (error) {
      throw Error(error);
    }
  }
  returnPageUpdates().catch(error => console.error(error));
}

module.exports = cleanPathBuildMarkup;
