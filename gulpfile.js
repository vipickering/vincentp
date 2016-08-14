var gulp   = require('gulp');
var requireDir = require('require-dir');
var runSequence = require('run-sequence');

// Load the gulp task files
requireDir('./gulp');

gulp.task('default', function(){
    'use strict';
    runSequence(
        'clean',
        'build-css',
        'compress-css',
        ['watch', 'shell']
    );
});
