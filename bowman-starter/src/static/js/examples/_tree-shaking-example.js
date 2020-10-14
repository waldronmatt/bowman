/* eslint-disable no-console */

/* TREE-SHAKING EXAMPLE */
/*
  NOTE: Webpack 4 Tree Shaking Caveat

  Ideally, we would like to include an import to another file that calls the imported module.
  Unfortunately, Webpack 4 does not support nested tree-shaking and will strip out the code
  below entirely because webpack can't find calledFunction().

  This is fixed in Webpack 5
  https://webpack.js.org/blog/2020-10-10-webpack-5-release/#nested-tree-shaking

*/

const treeShakenFunction = () => {
  console.log(
    "Webpack Tree-Shaking: treeShakenFunction() - Webpack removes this function (prod builds with minification enabled) because it is not used."
  );
};

const calledFunction = () => {
  console.log(
    "%c Webpack Tree-Shaking",
    "background: lightgreen; color: black; display: block;"
  );
  console.log(
    "%c includedFunction()",
    "background: lightblue; color: black; display: block;"
  );
  console.log(
    "%c This works if you don't see 'treeShakenFunction()' in minified app.js.",
    "background: yellow; color: black; display: block;"
  );
  console.log(
    "Webpack keeps this function because we are calling it and discards the unused treeShakenFunction() function."
  );
};

export { treeShakenFunction, calledFunction };
