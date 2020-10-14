/* eslint-disable no-console */

const displayToConsole = () => {
  console.log(
    "%c Webpack Code Splitting",
    "background: lightgreen; color: black; display: block;"
  );
  console.log(
    "%c Dynamic Imports",
    "background: lightblue; color: black; display: block;"
  );
  console.log(
    "%c This works if you see this on index.html and not on /terms.html.",
    "background: yellow; color: black; display: block;"
  );
  console.log("This script was dynamically loaded!");
};

export default displayToConsole();
