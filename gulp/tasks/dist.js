/* global $ */
const dist = () => new Promise((resolve) => {
  Object.keys($.config.path.src).forEach((path) => {
    console.log(path)
    $.gulp.src($.config.path.src[path])
      .pipe($.gulp.dest($.config.path.build[path]));
  })
  resolve();
});

export default dist
