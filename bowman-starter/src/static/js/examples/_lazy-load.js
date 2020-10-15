/* eslint-disable no-console */
/* CODE SPLITTING EXAMPLE - Lazy Loading */
/*
  Lazy, or "on demand", loading is a great way to optimize your site or application.
  This practice involves splitting your code at logical breakpoints, and then loading it
  once the user has done something that requires, or will require, a new block of code.

  This speeds up the initial load of the application and lightens its overall weight
  as some blocks may never even be loaded.

  https://webpack.js.org/guides/lazy-loading/
*/

console.log(
  "%c Open the Network Tab and click the 'Bowman' header at the top to test lazy loading.",
  "background: orange; color: black; display: block;"
);

function lazyLoadComponent() {
  const header = document.getElementsByTagName("h1")[0];

  // Note that because a network request is involved, some indication
  // of loading would need to be shown in a production-level site/app.
  header.onclick = () =>
    import(/* webpackChunkName: "_lazy-load-print" */ "./_lazy-load-print")
      .then((module) => module.default())
      .catch(() => "An error occurred while loading lazy-load-print");
  return header;
}

export default lazyLoadComponent;
