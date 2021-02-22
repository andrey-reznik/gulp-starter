import browserSync from 'browser-sync'
import fs from 'fs'
import autoprefixer from 'gulp-autoprefixer'
import cheerio from 'gulp-cheerio'
import cleanCss from 'gulp-clean-css'
import concat from 'gulp-concat'
import del from 'del'
import eslint from 'gulp-eslint'
import groupCssMediaQueries from 'gulp-group-css-media-queries'
import htmlBemValidator from 'gulp-html-bem-validator'
import gIf from 'gulp-if'
import imagemin from 'gulp-imagemin'
import notify from 'gulp-notify'
import pug from 'gulp-pug'
import rename from 'gulp-rename'
import replace from 'gulp-replace'
import sass from 'gulp-sass'
import sourcemaps from 'gulp-sourcemaps'
import svgSprite from 'gulp-svg-sprite'
import svgmin from 'gulp-svgmin'
import uglify from 'gulp-uglify'
import requireReload from 'require-reload'
import imageminJpegtran from 'imagemin-jpegtran'
import imageminPngquant from 'imagemin-pngquant'
import smartGrid from 'smart-grid'
import webpackStream from 'webpack-stream'

export default {
  browserSync, del, eslint, fs, autoprefixer, cheerio,
  cleanCss, concat, groupCssMediaQueries, htmlBemValidator,
  gIf, imagemin, notify, pug, rename, replace, sass,
  sourcemaps, svgSprite, svgmin, uglify, requireReload,
  imageminJpegtran, imageminPngquant, smartGrid, webpackStream,
}
