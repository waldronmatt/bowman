module.exports = {
  extends: [
    /*
      Extends stylelint-config-recommended.
      Turns on additional rules to enforce the common stylistic conventions found within a handful of CSS styleguides,
      including: The Idiomatic CSS Principles, Google's CSS Style Guide, Airbnb's Styleguide, and @mdo's Code Guide.
    */
    "stylelint-config-standard",
    // This linter has been designed / tested with SCSS syntax based on the SCSS guidelines documented in https://sass-guidelin.es/
    "stylelint-config-sass-guidelines",
    // Turns off all rules that are unnecessary or might conflict with Prettier.
    "stylelint-config-prettier",
  ],
  plugins: [
    // enforce a wide variety of linting rules for SCSS-like syntax
    "stylelint-scss",
    // specify the ordering of things, e.g. properties within declaration blocks
    "stylelint-order",
  ],
  // files to exclude
  ignoreFiles: ["dist/**"],
  rules: {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
  },
};
