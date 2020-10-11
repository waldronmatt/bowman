/* eslint-disable no-console */
const treeShakenFunction = () =>
  console.log(
    "Webpack Tree-Shaking: treeShakenFunction() - Webpack removes this function (prod builds with minification enabled) because it is not used."
  );

const calledFunction = () =>
  console.log(
    "Webpack Tree-Shaking: includedFunction() - Webpack keeps this function because we are calling it. We should not see treeShakenFunction code in minified app.js."
  );

export { treeShakenFunction, calledFunction };
