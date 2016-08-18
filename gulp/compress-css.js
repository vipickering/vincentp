var gulp = require('gulp');
var csso = require('gulp-csso');
var debug = require('gulp-debug');

gulp.task('compress-css', function () {
    'use strict';
    return gulp.src('website/css/*.css')
        .pipe(debug({title: 'Compressing CSS file : '}))
        .pipe(csso())
        .pipe(gulp.dest('website/css/'));
});
