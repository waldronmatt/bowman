/* eslint-disable no-console */

const displayToConsole = () => {
  console.log(
    "%c Webpack Code Splitting",
    "background: lightgreen; color: black; display: block;"
  );
  console.log(
    "%c Lazy Loading",
    "background: lightblue; color: black; display: block;"
  );
  console.log(
    "%c This works if you see '_lazy-loading-print' appear in the Network Tab when the header is clicked.",
    "background: yellow; color: black; display: block;"
  );
  console.log("This script was lazy loaded!");
};

export default displayToConsole;
