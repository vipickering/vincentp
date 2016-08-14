var gulp  = require('gulp')
var shell = require('gulp-shell')


gulp.task('shell', shell.task('cd website && jekyll serve --watch --drafts'));
