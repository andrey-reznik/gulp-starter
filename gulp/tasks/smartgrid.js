/* global $ */
const smartgrid = () => new Promise((resolve) => {
  const config = $.requireReload($.config.gulpRoot + $.config.smartGrid.config);
  $.smartGrid(config.outputFolder, config.settings);
  resolve();
});

export default smartgrid
