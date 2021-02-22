/* global $ */
const serve = () => {
  $.browserSync.init({
    server: {
      baseDir: $.config.path.app.html
    },
    notify: $.config.browserSync.notify,
    tunnel: $.config.browserSync.tunnel
  });
};

export default serve
