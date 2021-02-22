/* global $ */
const pug = () => $.gulp.src($.config.path.watch.pug.pages)
  .pipe($.pug({
    pretty: true,
    locals: {
      $: JSON.parse($.fs.readFileSync($.config.path.pug.data, 'utf-8')),
      release: $.isProd,
      _: $.jsonpath
    }
  }).on('error', $.notify.onError('<%= error.message %>')))
  // .pipe($.gIf($.isProd, $.htmlValidator()))
  .pipe($.htmlBemValidator())
  .pipe($.gulp.dest($.config.path.app.html))
  .on('end', $.browserSync.reload);

export default pug
