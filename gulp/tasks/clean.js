'use strict';

var gulp = require('gulp'),
    clean = require('gulp-clean');

gulp.task('clean', function() {
    return gulp.src('./dist/*')
        .pipe(clean({ force: true }));
});