/* eslint-disable no-console */

const displayToConsole = () => {
  console.log(
    "%c Webpack Code Splitting",
    "background: lightgreen; color: black; display: block;"
  );
  console.log(
    "%c Preload/Prefetch",
    "background: lightblue; color: black; display: block;"
  );
  console.log(
    "%c This works if you see '_prefetch-print' in the head of the page.",
    "background: yellow; color: black; display: block;"
  );
  console.log("This script was prefetched!");
};

export default displayToConsole();
