/* global $ */
const img = () => $.gulp.src($.config.path.watch.img)
  .pipe($.imagemin({
    interlaced: true,
    svgoPlugins: [{removeViewBox: true}],
    plugins: [
      $.imageminJpegtran({
        progressive: true
      }),
      $.imageminPngquant()
    ]
  })).on('error', $.notify.onError())
  .pipe($.gulp.dest($.config.path.app.img));

export default img
