var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('watch',function() {
    gulp.watch('website/_scss/**/*.scss',[
        'build-css',
        'sass-lint',
        'compress-css'
    ]);
});
