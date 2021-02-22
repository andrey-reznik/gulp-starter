/* global $ */
const styles = () => $.gulp.src($.config.path.watch.scss.src)
  .pipe($.gIf($.isProd === false, $.sourcemaps.init()))
  .pipe($.sass({
    includePaths: ['node_modules/']
  }).on('error', $.notify.onError()))
  .pipe($.autoprefixer($.config.autoPrefixer))
  .pipe($.groupCssMediaQueries())
  .pipe($.gIf($.isProd, $.cleanCss()))
  .pipe($.gIf($.isProd, $.rename({suffix: '.min'})))
  .pipe($.sourcemaps.write('/'))
  .pipe($.gulp.dest($.config.path.app.css))
  .pipe($.browserSync.reload({stream: true}));

export default styles
