'use strict';

var gulp = require('gulp');

gulp.task('copy-html-files', ['clean'], function () {
  return gulp.src(['./app/**/*.html', '!./app/index.html'])
    .pipe(gulp.dest('./dist'));
});