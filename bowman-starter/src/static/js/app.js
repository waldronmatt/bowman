/* eslint-disable no-console */

import footer from "./layouts/_footer";

/* Examples */
import polyfillAndVendorTest from "./examples/_polyfills-splitchuncks-vendor";
import { calledFunction } from "./examples/_tree-shaking";
import sharedModule from "./examples/_splitchuncks-common";
import loadApps from "./examples/_dynamic-load";
import lazyLoadComponent from "./examples/_lazy-load";

// see examples/prefetch.js for more info
import(
  /* webpackPrefetch: true */ /* webpackChunkName: '_prefetch-print' */ "./examples/_prefetch-print"
);

footer();

polyfillAndVendorTest();
calledFunction();
sharedModule();
loadApps();
lazyLoadComponent();
