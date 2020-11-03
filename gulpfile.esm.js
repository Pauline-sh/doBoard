const { gulp, series, parallel, dest } = require('gulp'),
  watch = require('gulp-watch'),
  rollup = require('@rollup/stream'),
  optionsClient = require('./client/rollup.config.js'),
  source = require('vinyl-source-stream');

function compile() {
  return rollup(optionsClient.default)
    .pipe(source('index.js'))
    .pipe(dest('./dist'));
}

function watchClient() {
  return watch('./client/src/**/*.tsx', { ignoreInitial: false }, compile);
}

exports.default = parallel(compile, watchClient);
