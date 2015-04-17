'use strict';

var gulp = require('gulp');

gulp.task('copy-images', function() {
    return gulp.src(['./app/assets/*.json'], { base: './app/' })
        .pipe(gulp.dest('./dist/'));
});