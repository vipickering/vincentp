var gulp  = require('gulp');
var shell = require('gulp-shell');

gulp.task('jekyll', shell.task('cd website && jekyll serve --watch --drafts --incremental'));
