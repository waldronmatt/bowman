/* eslint-disable no-console */
const treeShakenFunction = () =>
  console.log(
    "Webpack Tree-Shaking: treeShakenFunction() - Webpack removes this function because it is not used."
  );

const calledFunction = () =>
  console.log(
    "Webpack Tree-Shaking: includedFunction() - Webpack keeps this function because we are calling it. We should not see the output of treeShakenFunction in the console."
  );

export { treeShakenFunction, calledFunction };
