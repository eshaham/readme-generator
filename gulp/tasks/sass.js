'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('prepare-sass', ['clean'], function() {
  return gulp.src(['./app/**/*.scss', '!./app/lib/**'])
    .pipe(sass())
    .pipe(gulp.dest('./dist/'));
});