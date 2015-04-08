'use strict';

var gulp = require('gulp'),
	connect = require('gulp-connect');

gulp.task('copy-html-files', function () {
    return gulp.src(['./app/**/*.html', '!./app/index.html'])
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload());
});