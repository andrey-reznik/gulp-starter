/* global $ */
const svg = () => $.gulp.src($.config.path.watch.svg)
  .pipe($.svgmin({
    js2svg: {
      pretty: true
    }
  }))
  .pipe($.cheerio({
    run($) {
      $('[fill]').removeAttr('fill');
      $('[stroke]').removeAttr('stroke');
      $('[style]').removeAttr('style');
    },
    parserOptions: {xmlMode: true}
  }))
  .pipe($.replace('&gt;', '>'))
  .pipe($.svgSprite({
    mode: {
      symbol: {
        sprite: "sprite.svg"
      }
    }
  }))
  .pipe($.gulp.dest($.config.path.app.img));

export default svg
