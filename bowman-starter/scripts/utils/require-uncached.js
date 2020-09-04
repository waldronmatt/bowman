/*
  prevent json data caching when watching for changes
  https://stackoverflow.com/questions/9210542/node-js-require-cache-possible-to-invalidate
*/
const requireUncached = (module) => {
  delete require.cache[require.resolve(module)];
  return require(module);
}

module.exports = requireUncached;