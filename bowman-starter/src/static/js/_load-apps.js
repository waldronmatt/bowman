// Enable webpack code splitting via dynamic imports

const loadApps = () => {
  /*
    Index page
  */
  if (document.querySelectorAll("[data-load='index']").length) {
    import(/* webpackChunkName: "_index" */ "./pages/index/_index")
      .then((module) => module.default())
      .catch(() => "An error occurred while loading index");
  }
  /*
   */
};

export default loadApps();
