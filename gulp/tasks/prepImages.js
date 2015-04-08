'use strict';

var gulp = require('gulp');

gulp.task('copy-images', function() {
    return gulp.src(['./app/modules/**/img/**'], { base: './app/' })
        .pipe(gulp.dest('./dist/'));
});