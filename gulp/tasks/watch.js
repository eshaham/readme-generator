'use strict';

var gulp = require('gulp');
 
gulp.task('watch', function () {
    gulp.watch(['./app/**/*.js'], ['prep-scripts']);
    gulp.watch(['./app/**/*.css', './app/**/*.scss'], ['prep-styles']);
    gulp.watch(['./app/**/*.html'], ['copy-html-files']);
});