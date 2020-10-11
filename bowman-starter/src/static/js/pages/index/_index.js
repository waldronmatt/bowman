import sharedModule from "../../examples/_splitchuncks-common-example";

/* eslint-disable no-console */
const displayToConsole = () => {
  sharedModule();
  console.log(
    "Webpack Code Splitting - Dynamic Imports: Dynamically loaded index script!"
  );
};

export default displayToConsole();
