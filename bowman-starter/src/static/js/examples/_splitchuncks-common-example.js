/* eslint-disable no-console */
const sharedModule = () =>
  console.log(
    "Webpack SplitChuncks: common.js: Webpack will generate a common.js file because this module is shared by multiple entrypoints (chuncks)."
  );

export default sharedModule;
