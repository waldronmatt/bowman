/* eslint-disable no-console */

/*
  You can use this file to place all your polyfill imports
  If you don't need these for your project, uninstall core-js
*/

/*
  As of Babel 7.4.0, @babel/polyfill has been deprecated in favor of
  directly including core-js/stable (to polyfill ECMAScript features)
  and regenerator-runtime/runtime (needed to use transpiled generator functions)
*/

import "core-js/features/promise";

/* SPLITCHUNCKS VENDOR EXAMPLE */
/*
  Webpack will generate a vendor.js file because the import path in _polyfills.js
  is a dependency from node_modules

  Splitting modules from external dependencies reduces bundle sizes and safeguards
  pages from importing unncessary code when not used.
*/

const polyfillAndVendorTest = () => {
  console.log(
    "%c Polyfill testing",
    "background: lightgreen; color: black; display: block;"
  );
  console.log(
    "%c core-js/features/promise",
    "background: lightblue; color: black; display: block;"
  );
  console.log(
    "%c This works if you see 'Webpack Code Splitting' console.log in IE11.",
    "background: yellow; color: black; display: block;"
  );
  console.log(
    "The promise polyfill is needed to resolve webpack dynamic imports because import() calls use promises internally."
  );

  console.log(
    "%c Webpack Splitchuncks",
    "background: lightgreen; color: black; display: block;"
  );
  console.log(
    "%c vendors.js",
    "background: lightblue; color: black; display: block;"
  );
  console.log(
    "%c This works if you see a vendors.js file.",
    "background: yellow; color: black; display: block;"
  );
  console.log(
    "Webpack will generate a vendors.js file because the import path in _polyfills.js is a dependency from node_modules."
  );
};

export default polyfillAndVendorTest;
