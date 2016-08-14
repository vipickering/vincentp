var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function() {
    'use strict';
    return del('website/css/*.css');
});
