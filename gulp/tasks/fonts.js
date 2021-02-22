/* global $ */
const fonts = () => {
  const fontsSources = $.requireReload(`${$.config.gulpRoot}${$.config.path.libs.fonts}`)
  if (fontsSources.length) {
    return $.gulp.src(fontsSources)
      .pipe($.gulp.dest($.config.path.app.fonts))
      .on('end', $.browserSync.reload);
  }
  return new Promise((resolve) => resolve())
};

export default fonts
