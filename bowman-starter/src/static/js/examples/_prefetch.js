/* Layouts */
/* CODE SPLITTING EXAMPLE - Preload/Prefetch */
/*
  Webpack 4.6.0+ supports prefetch and preload
  https://webpack.js.org/guides/code-splitting/#prefetchingpreloading-modules

  - prefetch: resource is probably needed for some navigation in the future
  - preload: resource will also be needed during the current navigation

  NOTE: webpackPreload needs html plugin to work
  https://github.com/webpack/webpack/issues/7920#issuecomment-414594787
*/

import(
  /* webpackPrefetch: true */ /* webpackChunkName: '_prefetch-print' */ "./_prefetch-print"
);
