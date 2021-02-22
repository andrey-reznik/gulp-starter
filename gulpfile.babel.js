import gulp from 'gulp'
import config from './gulp/config.json'
import plugins from './gulp/plugins'

import {clear, dist, fonts, img, pug, scripts, lint, serve, styles, smartgrid, svg} from './gulp/tasks'

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

global.$ = {config, gulp, ...plugins, isDev, isProd};

export const watch = () => {
  gulp.watch(config.path.watch.scss.watch, gulp.series(styles));
  gulp.watch([config.path.watch.pug.all, config.path.watch.data.data], gulp.series(pug));
  gulp.watch(config.path.watch.js, gulp.series(scripts));
  gulp.watch(config.path.watch.fonts, gulp.series(fonts));
  gulp.watch(config.path.watch.img, gulp.series(img));
  gulp.watch(config.path.watch.svg, gulp.series(svg));
  gulp.watch(config.path.libs.fonts, gulp.series(fonts));
  gulp.watch(config.smartGrid.config, gulp.series(smartgrid));
};

const dev = gulp.parallel(styles, pug, scripts, fonts, img, svg);
const build = gulp.series(clear, dev, dist);

export {dev, build, lint, smartgrid}
export default gulp.series(dev, gulp.parallel(watch, serve));
