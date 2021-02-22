/* global $ */
const scripts = () => {
  const webpackConfig = {
    mode: $.isDev ? 'development' : 'production',
    devtool: $.isDev ? 'eval-source-map' : false,
    output: {
      filename: 'main.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/i,
          loader: 'babel-loader',
          exclude: /node_modules/,
        }
      ]
    }
  }

  return $.gulp.src($.config.path.js.entry)
    .pipe($.webpackStream(webpackConfig))
    .pipe($.gulp.dest($.config.path.app.js))
    .pipe($.browserSync.stream());
};

export default scripts
