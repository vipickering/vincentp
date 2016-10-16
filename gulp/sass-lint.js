var gulp = require('gulp');
var sassLint = require('gulp-sass-lint');
var debug = require('gulp-debug');

gulp.task('sass-lint', function () {
  'use strict';
  return gulp.src('website/_scss/**/*.scss')
    .pipe(sassLint({ configFile: './configs/.sass-lint.yml'}))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});
