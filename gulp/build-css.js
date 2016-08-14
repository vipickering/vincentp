var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var debug = require('gulp-debug');

gulp.task('build-css', function() {
    'use strict';
    return gulp.src('website/_scss/**/*.scss')
        .pipe(debug({title: 'Compiling Sass file : '}))
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([ autoprefixer({ browsers: ["> 0%"] }) ]))
        .pipe(gulp.dest('website/css'))
});
