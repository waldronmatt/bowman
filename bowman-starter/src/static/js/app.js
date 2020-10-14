/* Polyfills */
import "./_polyfills";

/* Layouts */
import "./layouts/_footer";

/* Dynamic imports */
import "./_load-apps";

/* Examples */
import { calledFunction } from "./examples/_tree-shaking-example";

import sharedModule from "./examples/_splitchuncks-common-example";

calledFunction();

sharedModule();
