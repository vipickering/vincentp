var gulp = require('gulp');
var watch = require('gulp-watch');

// gulp.task('watch', function () {
//     'use strict';
//      return gulp.src('_scss/**/*.scss')
//      .pipe(watch('_scss/**/*.scss'))
//      .pipe(watch('build-css', 'compress-css'));
// });


gulp.task('watch',function() {
    gulp.watch('website/_scss/**/*.scss',['build-css', 'compress-css']);
});
