'use strict';

var gulp = require('gulp');

gulp.task('copy-bower-components', ['clean'], function () {
    return gulp.src('./app/lib/**')
        .pipe(gulp.dest('./dist/lib'));
});