/* SPLITCHUNCKS VENDOR EXAMPLE */
/*
  Webpack will generate a vendor.js file
  because it the import path in _polyfills.js
  is from node_modules directory.

  Splitting modules from external dependencies
  helps reduce our bundle size.
*/
import "./_polyfills";

/* Components */

/* Layouts */
import "./layouts/_footer";

/* Page specific scripts */

/* CODE SPLITTING EXAMPLE - DYNAMIC IMPORTS */
/*
  NOTE: When you dynamically import a module,
  it automatically makes that module ineligible for tree shaking.
  https://medium.com/@christiango/the-unexpected-impact-of-dynamic-imports-on-tree-shaking-ddadeb135dd7
*/
import "./_load-apps";

/* TREE-SHAKING EXAMPLE */
/*
  PLEASE READ: Webpack 4 Tree Shaking Caveat

  Ideally, we would like to include an import to another file
  that calls the imported module.

  Unfortunately, Webpack 4 does not support nested tree-shaking
  and will strip out the code below entirely because webpack
  can't find includedFunction().

  This looks to be solved in the future release of Webpack 5
  https://webpack.js.org/blog/2020-10-10-webpack-5-release/#nested-tree-shaking

*/
import { calledFunction } from "./examples/_tree-shaking-example";

/* SPLITCHUNCKS - COMMON.JS EXAMPLE */
/*
  Webpack will generate a common.js file because both
  app.js and additional-entrypoint.js (different chuncks, a.k.a - different entrypoints)
  share the same module.

  Splitting shared modules reduces duplicated code and bundle size across multiple entrypoints.
*/

calledFunction();
