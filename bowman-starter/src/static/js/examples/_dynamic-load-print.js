/* eslint-disable no-console */

const displayToConsole = () => {
  console.log(
    "%c Webpack Code Splitting",
    "background: lightgreen; color: black; display: block;"
  );
  console.log(
    "%c Dynamic Loading",
    "background: lightblue; color: black; display: block;"
  );
  console.log(
    "%c This works if you see '_dynamic-load-print' in the head of the page.",
    "background: yellow; color: black; display: block;"
  );
  console.log("This script was dynamically loaded!");
};

export default displayToConsole;
