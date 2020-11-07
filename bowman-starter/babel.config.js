// babel.config.js

module.exports = (api) => {
  return {
    presets: [
      [
        /*
          A collection of babel plugins that allows you to use the latest
          JavaScript without needing to micromanage which syntax transforms
          (and optionally, browser polyfills) are needed by your target environment(s)
        */
        "@babel/preset-env",
        {
          /*
            By setting modules to false, we are telling babel not to compile our module code.
            This will lead to babel preserving our existing es2015 import/export statements.
            Webpack only supports es2015 import/export statements for tree-shaking

            https://medium.com/@craigmiller160/how-to-fully-optimize-webpack-4-tree-shaking-405e1c76038
          */
          modules: false,
          // babel will throw a warining if a core-js version is not specified
          corejs: "3",
          /*
            include polyfills based on your target environment.
            "entry": when using this option, @babel/preset-env replaces direct imports of core-js
            to imports of only the specific modules required for a target environment.
          */
          useBuiltIns: "entry",
          /*
            Babel cherry picks polyfills for you according to what you have configured.
            https://webpack.js.org/loaders/babel-loader/#customize-config-based-on-webpack-target
          */
          targets: api.caller((caller) => caller && caller.target === "node")
            ? { node: "current" }
            : { chrome: "58", ie: "11" },
        },
        /*
          Externalise references to helpers and builtins, automatically
          polyfilling your code without polluting globals
        */
        "@babel/plugin-transform-runtime",
      ],
    ],
  };
};
