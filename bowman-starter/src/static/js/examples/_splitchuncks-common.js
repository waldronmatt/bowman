/* eslint-disable no-console */

/* SPLITCHUNCKS - COMMON.JS EXAMPLE */
/*
  Webpack will generate a common.js file because both app.js and another-entry.js
  (different chuncks, a.k.a - different entrypoints) share the same module.

  Splitting shared modules reduces bundle sizes and safeguards
  pages importing duplicate code across multiple entrypoints.
*/

const sharedModule = () => {
  console.log(
    "%c Webpack SplitChuncks",
    "background: lightgreen; color: black; display: block;"
  );
  console.log(
    "%c commons.js",
    "background: lightblue; color: black; display: block;"
  );
  console.log(
    "%c This works if you see a commons.js file generated.",
    "background: yellow; color: black; display: block;"
  );
  console.log(
    "Webpack will generate a commons.js file because this module is shared by multiple entrypoints (chuncks)."
  );
};

export default sharedModule;
