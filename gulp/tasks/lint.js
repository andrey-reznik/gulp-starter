/* global $ */
const lint = () => $.gulp.src([$.config.path.watch.js])
  .pipe($.eslint())
  .pipe($.eslint.format())
  .pipe($.eslint.failAfterError())

export default lint
