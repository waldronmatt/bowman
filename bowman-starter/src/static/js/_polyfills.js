/* 
  You can use this file to place all your polyfill imports
  Feel free to comment/un-comment the select polyfills below

  If you don't need these for your project, simply uninstall
  core-js and regenerator-runtime using npm
*/

/*
  As of Babel 7.4.0, @babel/polyfill has been deprecated in favor of 
  directly including core-js/stable (to polyfill ECMAScript features) 
  and regenerator-runtime/runtime (needed to use transpiled generator functions)
*/

import 'core-js/es/object';
// import 'core-js/es/map';
// import 'core-js/es/string';
// import 'core-js/es/array';

// Standalone runtime for Regenerator-compiled generator and async functions.
// import 'regenerator-runtime/runtime';

let foo = { q: 1, w: 2 };
let bar = { e: 3, r: 4 };
let baz = { t: 5, y: 6 };

Object.assign(foo, bar, baz);
// https://github.com/zloirock/core-js#ecmascript-object

console.log('testing the object polyfill (for older browsers):');
console.log(foo);